/* ============================================================
   SURVIVE THE SEASON — session server
   Chronos-Protocol-style backend: Express + Socket.io, sessions
   held in memory only. No database, no accounts, no persistence.
   Session data vanishes on "End Session", after 24 hours, or
   whenever the server restarts — the teacher's PDF is the only
   permanent record, by design.

   Deploy exactly like Chronos: one Render web service runs this
   file, which also serves the static game pages from the same
   origin, so the whole app lives at one URL for the Wix iframe.
   ============================================================ */

import http from "node:http";
import path from "node:path";
import { randomInt } from "node:crypto";
import { fileURLToPath } from "node:url";
import express from "express";
import { Server } from "socket.io";

const PORT = process.env.PORT || 8123;
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24h backstop for abandoned sessions
const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I

/* ---------------- session registry (in-memory) ---------------- */

const sessions = new Map(); // code → session

function makeCode() {
  let code;
  do {
    code = "TX-" + Array.from({ length: 4 }, () => CODE_ALPHABET[randomInt(CODE_ALPHABET.length)]).join("");
  } while (sessions.has(code));
  return code;
}

const BAD_WORDS = ["fuck", "shit", "bitch", "cunt", "dick", "cock", "pussy", "nigg", "fag", "whore", "slut", "penis", "vagina"];
function nameLooksOk(name) {
  const low = " " + String(name).toLowerCase() + " ";
  return !BAD_WORDS.some((w) => low.includes(w));
}

function publicStudent(s) {
  return {
    studentId: s.studentId,
    displayName: s.displayName,
    approved: s.approved,
    tribe: s.tribe,
    status: s.status,
    decisions: s.decisions,
    pointsEarned: s.pointsEarned,
    totalDecisions: s.totalDecisions,
    accuracy: s.accuracy,
    connected: s.connected,
  };
}

function rosterPayload(session) {
  return {
    code: session.code,
    requireApproval: session.requireApproval,
    students: [...session.students.values()].map(publicStudent),
  };
}

// Every roster change fans out to the teacher room live.
function broadcastRoster(io, session) {
  io.to(`${session.code}:teacher`).emit("roster", rosterPayload(session));
}

// Abandoned-session sweep: nothing outlives 24 hours.
setInterval(() => {
  const now = Date.now();
  for (const [code, s] of sessions) {
    if (now - s.createdAt > SESSION_TTL_MS) sessions.delete(code);
  }
}, 10 * 60 * 1000);

/* ---------------- HTTP: static game + health ---------------- */

const app = express();
const here = path.dirname(fileURLToPath(import.meta.url));
app.get("/health", (_req, res) => res.json({ ok: true, service: "survive-the-season", liveSessions: sessions.size }));
app.use(express.static(here, { index: "index.html" }));

const server = http.createServer(app);
const io = new Server(server); // same-origin only; no CORS needed

/* ---------------- socket protocol ---------------- */

function teacherAuth(payload) {
  const session = sessions.get(String(payload?.code ?? "").toUpperCase());
  if (!session) return { error: "No session found with that code (it may have ended or expired)." };
  if (session.pin !== String(payload?.pin ?? "")) return { error: "That PIN doesn't match." };
  return { session };
}

io.on("connection", (socket) => {
  /* ----- teacher ----- */

  socket.on("teacher:create", ({ pin, requireApproval }, ack) => {
    if (!/^\d{4}$/.test(String(pin ?? ""))) return ack({ error: "PIN must be 4 digits." });
    const code = makeCode();
    sessions.set(code, {
      code,
      pin: String(pin),
      requireApproval: !!requireApproval,
      createdAt: Date.now(),
      students: new Map(), // studentId → record
    });
    socket.join(`${code}:teacher`);
    ack({ ok: true, ...rosterPayload(sessions.get(code)) });
  });

  socket.on("teacher:resume", (payload, ack) => {
    const { session, error } = teacherAuth(payload);
    if (error) return ack({ error });
    socket.join(`${session.code}:teacher`);
    ack({ ok: true, ...rosterPayload(session) });
  });

  socket.on("teacher:setApproval", (payload, ack) => {
    const { session, error } = teacherAuth(payload);
    if (error) return ack?.({ error });
    session.requireApproval = !!payload.requireApproval;
    broadcastRoster(io, session);
    ack?.({ ok: true });
  });

  socket.on("teacher:approve", (payload, ack) => {
    const { session, error } = teacherAuth(payload);
    if (error) return ack?.({ error });
    const s = session.students.get(payload.studentId);
    if (s && !s.approved) {
      s.approved = true;
      io.to(s.socketId).emit("student:approved");
      broadcastRoster(io, session);
    }
    ack?.({ ok: true });
  });

  socket.on("teacher:rename", (payload, ack) => {
    const { session, error } = teacherAuth(payload);
    if (error) return ack?.({ error });
    const s = session.students.get(payload.studentId);
    const name = String(payload.name ?? "").trim().slice(0, 24);
    if (s && name.length >= 2) {
      s.displayName = name;
      io.to(s.socketId).emit("student:renamed", { name });
      broadcastRoster(io, session);
    }
    ack?.({ ok: true });
  });

  socket.on("teacher:remove", (payload, ack) => {
    const { session, error } = teacherAuth(payload);
    if (error) return ack?.({ error });
    const s = session.students.get(payload.studentId);
    if (s) {
      session.students.delete(payload.studentId);
      io.to(s.socketId).emit("student:removed");
      broadcastRoster(io, session);
    }
    ack?.({ ok: true });
  });

  // "End Session": the client shows the confirm box; Proceed lands here and
  // the whole session — every student record — is deleted immediately.
  socket.on("teacher:end", (payload, ack) => {
    const { session, error } = teacherAuth(payload);
    if (error) return ack?.({ error });
    io.to(`${session.code}:students`).emit("session:ended");
    sessions.delete(session.code);
    ack?.({ ok: true });
  });

  /* ----- student ----- */

  socket.on("student:join", ({ code, name }, ack) => {
    const session = sessions.get(String(code ?? "").toUpperCase().trim());
    if (!session) return ack({ error: "That code didn't match an open class. Check it and try again." });
    const displayName = String(name ?? "").trim().slice(0, 24);
    if (displayName.length < 2) return ack({ error: "Please pick a name (at least 2 letters)." });
    if (!nameLooksOk(displayName)) return ack({ error: "Please pick a different name." });

    const studentId = "s_" + randomInt(1e9).toString(36) + Date.now().toString(36);
    session.students.set(studentId, {
      studentId,
      socketId: socket.id,
      displayName,
      approved: !session.requireApproval,
      tribe: null,
      status: "not_started",
      decisions: [],
      pointsEarned: 0,
      totalDecisions: 8,
      accuracy: null,
      connected: true,
    });
    socket.join(`${session.code}:students`);
    socket.data = { code: session.code, studentId };
    broadcastRoster(io, session);
    ack({ ok: true, studentId, approved: !session.requireApproval });
  });

  // School wifi drops: Socket.io reconnects with a new socket, and the client
  // re-attaches to its existing record so no progress is lost.
  socket.on("student:rejoin", ({ code, studentId }, ack) => {
    const session = sessions.get(String(code ?? "").toUpperCase());
    const s = session?.students.get(studentId);
    if (!session || !s) return ack({ error: "session-gone" });
    s.socketId = socket.id;
    s.connected = true;
    socket.join(`${session.code}:students`);
    socket.data = { code: session.code, studentId };
    broadcastRoster(io, session);
    ack({ ok: true, approved: s.approved });
  });

  socket.on("student:update", ({ code, studentId, ...fields }) => {
    const session = sessions.get(String(code ?? "").toUpperCase());
    const s = session?.students.get(studentId);
    if (!s || s.socketId !== socket.id) return;
    for (const k of ["tribe", "status", "decisions", "pointsEarned", "accuracy"]) {
      if (k in fields) s[k] = fields[k];
    }
    broadcastRoster(io, session);
  });

  socket.on("disconnect", () => {
    const { code, studentId } = socket.data ?? {};
    const session = sessions.get(code);
    const s = session?.students.get(studentId);
    if (s && s.socketId === socket.id) {
      s.connected = false;
      broadcastRoster(io, session);
    }
  });
});

server.listen(PORT, () => {
  console.log(`[survive-the-season] listening on :${PORT} — sessions live in memory only`);
});
