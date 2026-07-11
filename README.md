# Survive the Season

A choice-based survival game for **7th Grade Texas History · Unit 1: Natural Texas and Its People** (TEKS 7.2A, 7.9A).

Students play as one of four early Texas peoples — **Comanche, Karankawa, Jumano, or Caddo** — and make food, shelter, and safety choices across four seasons. They only survive if their choices match how their people really lived. Wrong choices are usually *another people's correct choice*, which teaches the 7.2A comparison.

## Files

| File | What it is |
|---|---|
| `index.html` | The student game (join screen + season loop). |
| `teacher.html` | Teacher Command Center (class code, live roster, accuracy, PDF, end-session delete). |
| `game-data.js` | ALL narrative content. Edit text/numbers here; never touch game logic. |
| `firebase-config.js` | Your Firebase web-app config (shared by both pages). Empty = solo mode. |
| `firestore.rules` | Security rules — paste into the Firebase console. |
| `assets/images/` | Scene and card images. |

## Quick start (no Firebase — solo mode)

Leave `firebase-config.js` as-is (empty `apiKey`). The student game skips the join screen and just plays. Great for testing or homework without tracking.

## Firebase setup (one time, ~10 minutes)

1. Go to <https://console.firebase.google.com> → **Add project** (free Spark plan is fine; you can decline Analytics).
2. In the project: **Build → Authentication → Get started → Anonymous → Enable.**
3. **Build → Firestore Database → Create database** (production mode, any US location).
4. **Rules tab** → replace everything with the contents of `firestore.rules` → **Publish**.
5. **TTL policy (auto-cleanup):** Google Cloud console → Firestore → **Time-to-live (TTL)** → Create policy → Collection group: `sessions`, Timestamp field: `expiresAt`. This auto-deletes any abandoned session after 24 hours. (Student subcollection docs are removed by the normal "End Session" flow; TTL on `sessions` sweeps the abandoned ones — orphaned student docs are unreadable without their session and are cleaned when you next end a session, but adding a second TTL policy on collection group `students` with field `expiresAt` is a nice extra if you copy `expiresAt` onto student docs.)
6. **Project settings (gear) → Your apps → Web app (</>) → Register.** Copy the `firebaseConfig` values into `firebase-config.js`.
7. Push to GitHub, then test with **two browser windows**: one on `teacher.html` (create a session), one on `index.html` (join with the code).

> The `firebaseConfig` values are safe to publish. Security comes from the Firestore rules, not from hiding the config.

### How a class session works

1. Open `teacher.html` → set a 4-digit PIN → **Create Session** → a class code like `TX-4Q7K` appears.
2. Students open the game page, enter the code, and pick a display name (no emails, no last names — minimal data by design).
3. If "Require name approval" is on, each student waits until you click **Approve**.
4. Watch the live roster: Not started / In progress / Completed + accuracy % (right = 1, partial = 0.5, wrong = 0, out of 8 decisions).
5. **Download Results (PDF)** — this is your one permanent record.
6. **End Session** → confirm → all session data is deleted from Firebase immediately. No undo. Abandoned sessions self-delete in 24 h via TTL.

> A session can only be **resumed** from the same browser that created it (that browser's anonymous ID is the teacher key). If class runs long, don't clear the browser or use a different machine mid-session.

## GitHub Pages

1. Create a public repo (e.g. `survive-the-season`) and push these files to `main`.
2. Repo **Settings → Pages → Deploy from a branch → `main` / root → Save**.
3. Your URLs:
   - Student: `https://<username>.github.io/survive-the-season/`
   - Teacher: `https://<username>.github.io/survive-the-season/teacher.html`

## Embed in Wix

- **Student page:** Add (+) → Embed Code → **Embed a Site** → paste the student URL. Size ≈ 1000 × 720, test at phone width.
- **Teacher page:** same embed on a separate Wix page, then **Page Settings → Permissions → Password/Members-only** so students can't reach it. The teacher PIN is a second layer.
- Use the `https://` URLs. When you push updates to GitHub, Wix picks them up automatically (hard refresh clears cache).

## Editing content

All student-facing words live in `game-data.js` — season intros, choices, feedback, endings, debriefs. Keep the reading level at ~5th grade: short sentences, common words, define hard terms ("adobe — clay mixed with straw"). Meter effects: right ≈ +10..+15, partial ≈ +5/−5, wrong ≈ −10..−15, always paired with a *why* sentence.

---
Made for 7th Grade Texas History · TEKS 7.2A, 7.9A
