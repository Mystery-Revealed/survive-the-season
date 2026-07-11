# Survive the Season

A choice-based survival game for **7th Grade Texas History · Unit 1: Natural Texas and Its People** (TEKS 7.2A, 7.9A).

Students play as one of four early Texas peoples — **Comanche, Karankawa, Jumano, or Caddo** — and make food, shelter, and safety choices across four seasons. They only survive if their choices match how their people really lived. Wrong choices are usually *another people's correct choice*, which teaches the 7.2A comparison.

## Architecture

Same pattern as Chronos Protocol: **one Node server (Express + Socket.io) serves the static game pages and runs class sessions in memory.** No database, no accounts, no Firebase.

- Sessions exist only in server RAM. "End Session" deletes them instantly, a 24-hour sweep removes abandoned ones, and a server restart clears everything. The teacher's PDF is the only permanent record — by design.
- When the pages are served *without* the server (GitHub Pages, local file), the student game automatically runs in **solo mode**: no class code, no tracking, still fully playable.

## Files

| File | What it is |
|---|---|
| `index.html` | The student game (join screen + season loop; solo mode fallback). |
| `teacher.html` | Teacher Command Center (class code, live roster, accuracy, PDF, end-session delete). Only works served by the server. |
| `game-data.js` | ALL narrative content. Edit text/numbers here; never touch game logic. |
| `server.js` | Session server: join codes, PIN auth, name approval, live roster, 24 h sweep. |
| `assets/images/` | Scene and card images (Higgsfield-generated). |

## Run locally

```bash
npm install
npm start        # → http://localhost:8123
```

Open `http://localhost:8123/teacher.html` in one window (create a session, get a code) and `http://localhost:8123` in another (join with the code). 

## Deploy on Render (same as Chronos Protocol)

1. Push this repo to GitHub (already done if you're reading this there).
2. In the [Render dashboard](https://dashboard.render.com): **New → Blueprint**, pick this repo — it reads `render.yaml` and creates the free web service automatically. (Or **New → Web Service** manually: build `npm install`, start `node server.js`.)
3. Your single URL serves everything:
   - Student game: `https://survive-the-season.onrender.com/`
   - Teacher center: `https://survive-the-season.onrender.com/teacher.html`

**Free-tier note:** Render free services sleep after ~15 minutes idle and take ~30–60 s to wake on the first visit. Open the game a minute before class starts. A sleep also erases any live session (that's consistent with the no-data-kept design — just don't end class early, and download the PDF before long idle gaps).

GitHub Pages can stay on as a free solo-mode mirror (no class tracking there).

## How a class session works

1. Open `teacher.html` → set a 4-digit PIN → **Create Session** → a class code like `TX-4Q7K` appears.
2. Students open the game page, enter the code, and pick a display name (no emails, no last names — minimal data by design).
3. If "Require name approval" is on, each student waits until you click **Approve**. You can rename or remove any student live.
4. Watch the live roster: Not started / In progress / Completed + accuracy % (right = 1, partial = 0.5, wrong = 0, out of 8 decisions), plus per-tribe class averages.
5. **Download Results (PDF)** — this is your one permanent record.
6. **End Session** → confirm → all session data is deleted from the server immediately. No undo.

You can resume a session from any device with the class code + your PIN (e.g., if you close the tab mid-class).

## Embed in Wix

- **Student page:** Add (+) → Embed Code → **Embed a Site** → paste the Render student URL. Size ≈ 1000 × 720, test at phone width.
- **Teacher page:** same embed on a separate Wix page pointing at `/teacher.html`, then **Page Settings → Permissions → Password/Members-only** so students can't reach it. The teacher PIN is a second layer.
- Use the `https://` URLs. Push to GitHub → Render auto-redeploys → Wix picks it up (hard refresh clears cache).

## Editing content

All student-facing words live in `game-data.js` — season intros, choices, feedback, endings, debriefs. Keep the reading level at ~5th grade: short sentences, common words, define hard terms ("adobe — clay mixed with straw"). Meter effects: right ≈ +10..+15, partial ≈ +5/−5, wrong ≈ −10..−15, always paired with a *why* sentence.

---
Made for 7th Grade Texas History · TEKS 7.2A, 7.9A
