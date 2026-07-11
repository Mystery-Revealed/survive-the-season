# "Survive the Season" — Build Specification
### Unit 1 Game · 7th Grade Texas History · Natural Texas and Its People

**Purpose of this document:** A complete, build-ready spec you can paste into Claude (Fable, Opus, Sonnet) to create the game, then set it up on GitHub and embed in your Wix site. It includes the game design, the historical content bank, a data schema, technical requirements, ready-to-use Higgsfield image/video prompts, a model-by-model workflow, and step-by-step GitHub + Wix instructions.

> **Reading-level rule (applies to everything the student sees):** Present 7th grade content at a **5th grade reading level**. Short sentences. Common words. Define any hard term the first time it appears. This rule does **not** apply to this spec — the spec is for you and Claude.

---

## 1. Game at a Glance

| Field | Value |
|---|---|
| **Title** | Survive the Season |
| **Unit** | 1 — Natural Texas and Its People (before European contact) |
| **TEKS** | 7.2A (compare American Indian cultures — Gulf, Plains, Puebloan, Southeastern), 7.9A (adapt to and modify the environment) |
| **Type** | Choice-based survival game (single-player, browser) |
| **Playtime** | 5–8 minutes per run |
| **Scope decision** | **Pick one people per playthrough.** Replay to try the others. |
| **Platform** | Two static pages (student game + teacher command center) hosted on GitHub Pages, embedded in Wix by iframe |
| **Class tracking** | **Teacher Command Center** backed by Firebase — class code for students, live in-progress vs completed view, accuracy per tribe, PDF download. **Session-only data: deleted when you end the session** (see Section 11) |
| **Art style** | Semi-realistic / cinematic (see Section 8 for accuracy rules) |

**One-sentence pitch:** You are a member of one of four early Texas peoples. Live through four seasons by making choices about food, shelter, and safety — but you only survive if your choices match how your people really lived in their part of Texas.

**The core teaching idea:** The *right* choice for one people is often the *wrong* choice for another, because the land they lived on was different. A Comanche choice that works on the plains fails on the coast. By choosing, students feel how geography shaped each culture — which is exactly what TEKS 7.2A asks them to compare.

---

## 2. The Four Peoples (Content Bank)

All facts below come from the 7th Grade Texas History Outline. Build every people from this bank so the game stays accurate.

| People | Region | Way of Life | Home | Main Food |
|---|---|---|---|---|
| **Karankawa** | Gulf / Coastal Plains | Nomadic hunter-gatherers; move along the coast in small groups; use dugout canoes | **Wigwam** — portable dome of bent poles covered with hides or woven mats | Fish, shellfish, oysters, turtles; roots and berries |
| **Comanche** | Great Plains | Highly nomadic; life follows the buffalo; the Spanish horse made them fast and powerful | **Teepee** — cone of buffalo hides; packs up fast to move | Buffalo (also gave hides, tools) |
| **Jumano** | Mountains and Basins | Sedentary; live in permanent villages by rivers; skilled farmers and traders | **Pueblo** — multi-story home of adobe (clay + straw) | Farmed corn, beans, squash |
| **Caddo** | Piney Woods / Southeastern | Complex, settled farming society; skilled hunters and craftspeople | **Grass house** — large dome of wooden poles covered with woven grass | Farmed corn, beans, pumpkins, squash; also hunted |

**The contrast engine (memorize this — it drives every choice):**
- Nomadic groups **move**; settled groups **stay**.
- **Karankawa** carry their homes (wigwams) and fish from canoes. They do not farm or follow buffalo.
- **Comanche** follow the buffalo on horseback and carry teepees. They do not farm or fish the coast.
- **Jumano** stay in permanent adobe pueblos and farm by the river. They do not migrate.
- **Caddo** stay in permanent grass-house villages and farm the forest. They do not migrate.

So a wrong choice is usually *another people's correct choice*. That is on purpose — it teaches the comparison.

---

## 3. Core Mechanics

### 3.1 Resource meters
Three meters, each 0–100, all start at **60**:
- **Food** 🍖 — how well-fed the group is.
- **Shelter** ⛺ — protection from weather.
- **Health** ❤️ — safety, warmth, and freedom from sickness.

Rules:
- If **any** meter hits **0**, the run ends early (a teaching "did not survive" screen).
- Survive all four seasons with every meter above 0 to win.
- Meters are capped at 100.

### 3.2 Season structure
Four seasons per run, in this order: **Spring → Summer → Fall → Winter**. Each season has:
1. **Season Intro** — a cinematic image + 2–4 short narrative sentences (Fable-written) setting the scene for *this people* in *this season*.
2. **Two decision points.** Each has **three choices**: one clearly right for this people, one partly right, one wrong (usually another people's behavior or an anachronism).
3. **Feedback** after every choice: the meter change **plus one or two plain sentences explaining why** (this is the learning moment).
4. **Season Summary** — current meters + a one-line "how you're doing."

### 3.3 Choice grading
Each choice adjusts one or more meters. Suggested ranges: right choice **+10 to +15** to its main meter; partial **+5 / −5**; wrong **−10 to −15**. Always pair the number with a reason sentence.

### 3.4 Endings (based on final meters)
- **Thrived** — all meters ≥ 60. "Your people knew this land well."
- **Survived** — all meters 1–59. "You made it through a hard year."
- **Did not survive** — any meter hit 0. Show which need (food/shelter/health) failed and what the people really did to meet it.
- Every ending shows a **debrief card**: "How the [People] really survived the seasons," then a **replay nudge**: "Try another people — their land gave them very different choices."

---

## 4. Reference Content — COMANCHE (build this one first, fully)

Use this as the finished template. The other three peoples follow the same shape using the Content Bank (Section 2) and the matrix (Section 5). All player-facing text below is already at a 5th grade level — match this voice.

**People intro card:** *"You are Comanche, of the Great Plains. Your life moves with the buffalo. When the herd moves, you move. The horse — brought by the Spanish — makes your people fast and strong. Your home is the teepee, and you can pack it in minutes."*

### Spring — "The Herds Return"
*Intro:* The grass turns green. Far off, the buffalo herds begin to move. Your camp must decide how to greet the new season.

**Decision 1 — Scouts spot a herd two days' ride away.**
- **A) Pack the teepees and follow the herd on horseback.** ✅ Food +15, Health +5. *"Yes. The Comanche were always on the move. Teepees pack up fast, and horses let you follow the buffalo — your main source of food, tools, and shelter."*
- **B) Stay here and plant corn by the creek.** ❌ Food −10, Health −5. *"Planting was the way of the Jumano and Caddo in other regions. The Plains Comanche did not farm. The camp goes hungry waiting for crops that won't come."*
- **C) Send a few hunters on foot; keep camp here.** ⚠️ Food +5, Health −5. *"On foot you catch a little. But without the horses and the whole camp moving, you can't use the whole herd. The horse was your people's greatest gift."*

**Decision 2 — A cold spring storm rolls across the open plain.**
- **A) Turn the teepee's sloped side to the wind and bank the bottom with earth.** ✅ Shelter +15. *"The teepee was built for the plains. Its cone shape sheds wind and rain."*
- **B) Search the flat grassland for a cave.** ❌ Shelter −10, Health −5. *"The open plains have almost no caves. Your shelter is the home you carry with you."*
- **C) Start building a mud-brick house to wait out the storm.** ❌ Shelter −10. *"Adobe houses took weeks and belonged to the Jumano by the rivers. You need shelter now — and yours is already packed on the travois."*

### Summer — "Following the Buffalo"
*Intro:* The sun is high and the great herd drifts north across the grass. Your people must keep up.

**Decision 1 — The herd is now far to the north.**
- **A) Move the whole band north on horseback.** ✅ Food +15. *"Staying close to the herd kept your people fed. Mobility was everything."*
- **B) Stay by the cool river and wait.** ❌ Food −10. *"The buffalo don't come to you. Waiting means empty stomachs."*
- **C) Split the band — half follow, half stay.** ⚠️ Food +5, Health −5. *"A split band is harder to protect, and half your people still go hungry."*

**Decision 2 — A rival band claims the same hunting ground.**
- **A) Defend the ground with your horse-mounted warriors.** ✅ Health +10. *"The Comanche were powerful riders and among the strongest warriors of the plains."*
- **B) Give up the ground and move away.** ❌ Food −10. *"Losing the best hunting ground means losing food."*
- **C) Build a wooden fort and dig in.** ❌ Shelter −5. *"Forts were not the Comanche way. Your strength was speed, not walls."*

### Fall — "Getting Ready for Winter"
*Intro:* The days grow short. Whatever you gather now must last through the cold months.

**Decision 1 — Preserve food for winter.**
- **A) Dry buffalo meat into jerky and pemmican.** ✅ Food +15. *"Dried meat lasted for months and carried easily — perfect for a moving people."*
- **B) Eat well now and worry about winter later.** ❌ Food −15 (applied at winter). *"A full belly today means an empty one in January."*
- **C) Store corn in clay pots.** ❌ Food −5. *"Storing corn was the farming peoples' way. You have no corn to store."*

**Decision 2 — Gather materials before the cold.**
- **A) Prepare extra buffalo hides for warm robes and teepee covers.** ✅ Shelter +10, Health +5. *"The buffalo gave your people warmth as well as food."*
- **B) Weave grass mats for house walls.** ❌ Shelter −5. *"Woven grass walls belonged to the Caddo in the forests. They won't help you on the plains."*

### Winter — "The Long Cold"
*Intro:* Ice rides the wind. This is the season that tests everything you prepared.

**Decision 1 — Choose where to camp.**
- **A) Move to a sheltered valley or canyon, out of the wind.** ✅ Shelter +10, Health +5. *"Comanche often wintered in protected valleys where the wind couldn't reach."*
- **B) Stay out on the open plain.** ❌ Health −15. *"The open plain in winter is deadly. There is nothing to block the wind."*
- **C) Travel to the coast to fish.** ❌ Food −5, Health −5. *"Fishing the coast was the Karankawa's way. The long trip in winter is dangerous and far from home."*

**Decision 2 — Food is running low.**
- **A) Live on stored pemmican and hunt small game on horseback.** ✅ Food +10. *"Your fall preparation pays off. Stored food carries you through."*
- **B) Plant a winter garden.** ❌ Food −10. *"Nothing grows in the frozen plains, and your people were never farmers."*

*(If the player reaches here with healthy meters → **Thrived** ending. If they scraped by → **Survived**. If a meter hit 0 at any point → **Did not survive**, with the matching teaching card.)*

---

## 5. Content Matrix — the Other Three Peoples

Give this matrix to Fable/Claude to generate the same 4-seasons × 2-decisions structure for each people. Keep the "right = their real adaptation / wrong = another people's behavior" pattern.

### Karankawa (Coastal Plains)
| Season | Right choice (real adaptation) | Good "wrong" choices to contrast with |
|---|---|---|
| Spring | Move to the bays as fish return; fish and gather shellfish from dugout canoes | Plant crops (Jumano/Caddo); follow buffalo inland (Comanche) |
| Summer | Fish coastal waters, gather oysters and turtles; live in the portable wigwam | Build an adobe house (Jumano); build a teepee (Comanche) |
| Fall | Gather roots, berries, and nuts; move to better fishing spots; store some food | Start a permanent farm; stay in one exposed spot |
| Winter | Move to sheltered inland camps; live on stored and hunted food | Stay out on the open beach; build a permanent house |

**Signature lesson:** The Karankawa carried their homes and fished from canoes. They did not farm or follow the buffalo.

### Jumano (Mountains and Basins)
| Season | Right choice (real adaptation) | Good "wrong" choices to contrast with |
|---|---|---|
| Spring | Plant corn, beans, and squash by the river; repair the adobe pueblo | Pack up and follow herds (Comanche); move to the coast (Karankawa) |
| Summer | Water and tend the fields; trade goods with other groups | Abandon the village to wander |
| Fall | Harvest the crop and store it in the pueblo | Eat everything now; rely only on hunting |
| Winter | Stay warm in the multi-story adobe pueblo; live on stored crops plus some trade | Travel far in the cold; build a quick temporary shelter |

**Signature lesson:** The Jumano stayed in one place, farmed by the river, and traded. They did not migrate.

### Caddo (Piney Woods / Southeastern)
| Season | Right choice (real adaptation) | Good "wrong" choices to contrast with |
|---|---|---|
| Spring | Clear fields and plant corn, beans, squash, and pumpkins; build or repair grass houses | Follow the buffalo (Comanche); move to the coast (Karankawa) |
| Summer | Tend the crops; hunt deer in the woods; make pottery and tools for trade | Abandon the settlement |
| Fall | Bring in a large harvest; store the surplus; hold a community gathering | Eat everything; refuse to store |
| Winter | Stay in the permanent grass-house village; live on stored food plus woodland hunting | Migrate away; sleep in a portable shelter |

**Signature lesson:** The Caddo built permanent grass houses (not teepees, not adobe, not wigwams) and ran an organized farming society in the forest.

---

## 6. Screen Flow / State Machine

```
[Title Screen] ──▶ [How to Play] ──▶ [Choose Your People]
                                            │
                     ┌──────────────────────┘
                     ▼
             ┌─ Season Intro (Spring)
             │      ▼
             │  Decision 1 ─▶ Feedback ─▶ Decision 2 ─▶ Feedback
             │      ▼
             │  Season Summary
             │      ▼   (repeat for Summer, Fall, Winter)
             └──────┘
                     ▼
              [Ending + Debrief] ──▶ [Play Again → Choose Your People]
```

**States to implement:** `title`, `howToPlay`, `choosePeople`, `seasonIntro`, `decision`, `feedback`, `seasonSummary`, `ending`. Track: `people`, `seasonIndex (0–3)`, `decisionIndex`, and `meters {food, shelter, health}`.

**With the Teacher Command Center on (Section 11),** the student flow gains a front door:

```
[Join Screen: enter class code + choose a name]
        ▼
[Waiting for teacher approval]   (only if approval is on)
        ▼
[Title / Choose Your People → the season loop above]
        │  (results save to Firebase as the student plays)
        ▼
[Ending]  → status flips to "Completed" on the teacher's live roster
```

The teacher opens a separate page (`teacher.html`): **PIN gate → Command Center** (create session / show code, live roster, per-tribe class accuracy, Download PDF).

---

## 7. Data Schema (so the code and content stay separate and easy to edit)

Store all content in one JavaScript object (or a JSON file loaded at start). This lets Fable write content without touching game logic.

```js
const GAME_DATA = {
  peoples: [
    {
      id: "comanche",
      name: "Comanche",
      region: "Great Plains",
      home: "Teepee",
      food: "Buffalo",
      intro: "You are Comanche, of the Great Plains...",
      cardImage: "assets/images/card_comanche.jpg",
      seasons: [
        {
          key: "spring",
          title: "The Herds Return",
          image: "assets/images/comanche_spring.jpg",
          intro: "The grass turns green...",
          decisions: [
            {
              prompt: "Scouts spot a herd two days' ride away.",
              choices: [
                { text: "Pack the teepees and follow on horseback.",
                  effects: { food: +15, health: +5 },
                  verdict: "right",
                  feedback: "Yes. The Comanche were always on the move..." },
                { text: "Stay here and plant corn by the creek.",
                  effects: { food: -10, health: -5 },
                  verdict: "wrong",
                  feedback: "Planting was the Jumano and Caddo way..." },
                { text: "Send a few hunters on foot; keep camp here.",
                  effects: { food: +5, health: -5 },
                  verdict: "partial",
                  feedback: "On foot you catch a little..." }
              ]
            }
            /* decision 2 ... */
          ]
        }
        /* summer, fall, winter ... */
      ]
    }
    /* karankawa, jumano, caddo ... */
  ],
  meterStart: 60,
  endings: {
    thrived: "Your people knew this land well...",
    survived: "You made it through a hard year...",
    failed: { food: "Without enough food...", shelter: "Without good shelter...", health: "Without health and safety..." }
  }
};
```

**Why this shape:** logic reads `GAME_DATA`; writers only edit strings and numbers. Fable can fill all four peoples in this exact structure, and Sonnet can wire the images in later.

---

## 8. Visual & Audio Assets (Higgsfield MCP)

**Art direction (put this at the top of every image prompt):**
> Semi-realistic cinematic historical illustration. Warm natural light, painterly detail, dignified and respectful. Historically accurate clothing, tools, and homes for this specific people and region. Early Texas, before or around first European contact. No text, no logos. Wide 16:9 framing.

**Accuracy rules — read before generating (very important):**
- Show the **correct home for each people**: Karankawa = dome **wigwam** (poles + hides/mats); Comanche = **teepee** (buffalo hide cone); Jumano = **adobe pueblo** (multi-story clay); Caddo = **grass house** (wooden frame + woven grass). Do **not** mix these up — the wrong dwelling teaches the wrong history.
- Match the **landscape** to the region: Karankawa = coast, bays, marsh; Comanche = open grassland plains; Jumano = dry mountains, basins, river; Caddo = green Piney Woods forest.
- Depict people with **dignity and specificity**. Avoid generic "Native American" clichés, feathered war-bonnets, and Hollywood tropes. These are Texas peoples in daily life.
- Comanche + horses: the horse came from the Spanish, so horse scenes fit the "age of contact" edge of this unit. Keep it to daily life (riding, following the herd), not battle.

**Priority asset list (build the Comanche run first, then the rest for replay):**

| # | Asset | Type | Prompt (append art direction + accuracy rules) |
|---|---|---|---|
| 1 | Title / hero | Image (`generate_image`) | "A sweeping view of early Texas at dawn — tall prairie grass in front, distant hills, soft golden light, a sense of a vast wild land waiting." |
| 2 | Card — Comanche | Image | "A Comanche family on the Great Plains beside a hide teepee, a horse grazing nearby, open grassland to the horizon." |
| 3 | Card — Karankawa | Image | "A Karankawa group on the Texas Gulf coast beside a dome wigwam of poles and mats, a dugout canoe at the water's edge, bays and marsh grass behind." |
| 4 | Card — Jumano | Image | "A Jumano village of multi-story adobe pueblos beside a river in dry mountain-and-basin country, fields of corn nearby." |
| 5 | Card — Caddo | Image | "A Caddo settlement in the Piney Woods — large dome grass houses among tall pine trees, tidy fields of corn and squash." |
| 6 | Comanche — Spring | Image | "Green spring plains, a distant buffalo herd beginning to move, a Comanche camp packing hide teepees onto travois, horses ready." |
| 7 | Comanche — Summer | Image | "High summer on the plains, Comanche riders following a large buffalo herd north under a wide blue sky." |
| 8 | Comanche — Fall | Image | "Autumn plains, Comanche people drying strips of buffalo meat on wooden racks and preparing hides, golden grass." |
| 9 | Comanche — Winter | Image | "A Comanche winter camp tucked into a sheltered canyon valley, teepees among bare trees, snow on the ground, smoke rising." |
| 10 | Meter icons (food, shelter, health) | Simple flat icons | Best hand-made as clean flat vector (a haunch/meat, a teepee/home, a heart). Higgsfield can make them, but simple SVG icons keep file size small and crisp. |
| 11 | *(Optional)* Title loop | Video (`generate_video`) | "Slow gentle wind moving through tall prairie grass at golden hour, a few buffalo far in the distance, calm and cinematic, seamless loop." Use as a muted background on the title screen. |
| 12 | *(Optional)* Ambient sound | Audio (`generate_audio`) | "Soft prairie wind with distant birdsong, calm ambient loop." Default muted, with a sound toggle. |

For replay support, generate the four season scenes for Karankawa, Jumano, and Caddo too (12 more images) using the same pattern. That is optional for a first release — you can ship the Comanche run and add the others later.

**File handling:** Save generated images to `assets/images/` with the exact filenames used in `GAME_DATA` (e.g., `comanche_spring.jpg`). Ask Claude to compress large images (target < 400 KB each) so the page loads fast inside Wix.

---

## 9. Technical Requirements

- **Two static pages, no build tools:** `index.html` (student game) and `teacher.html` (command center), each with CSS/JS inline or in small side files. Still no server you run — the class data lives in **Firebase**, a hosted backend service the pages talk to directly (see Section 11). GitHub Pages only serves the static files.
- **No browser storage for game state.** Do **not** use `localStorage` or `sessionStorage` — they can break inside a Wix iframe. Keep the in-session game state in memory (plain JS variables/objects). Persistent results go to Firebase, not browser storage.
- **Iframe-friendly & responsive:** fixed max-width (about 900–1000 px), centered, scales down cleanly to phone width. Test at 360 px wide. Avoid fixed pixel heights that clip.
- **Images:** referenced by relative path from `assets/images/`. Every image needs descriptive `alt` text (also good for accessibility and the reading goal).
- **Accessibility:** high color contrast; large tap targets for choices; keyboard-navigable buttons; readable font (16px+ body). Meter changes announced in text, not color alone.
- **Performance:** total page + assets should load in a few seconds. Compress images; lazy-load later-season images if needed.
- **Reading level guardrail:** keep all on-screen sentences short and simple (aim Flesch-Kincaid grade ~5). Ask Claude to flag any sentence over ~20 words.
- **Attribution/footer (small):** "Made for 7th Grade Texas History · TEKS 7.2A, 7.9A."

---

## 10. When to Use Each Claude Model (and Higgsfield)

You'll move between models. Here's the division of labor that plays to each one's strength.

| Model | Best for in this project | Use it to… |
|---|---|---|
| **Claude Fable** *(long-form creative writing)* | Immersive, coherent narrative held to a strict reading level | Write all **season intros, choice text, feedback lines, and endings** for all four peoples — using the Content Bank (Sec. 2) and Matrix (Sec. 5). Ask it to keep a 5th grade reading level and a warm, adventurous voice. Output straight into the `GAME_DATA` string fields. |
| **Claude Opus** *(deepest reasoning)* | Architecture, hard logic, and the backend | **Design and build the first working `index.html`**: the state machine (Sec. 6), meter/scoring logic (Sec. 3), the `GAME_DATA` structure (Sec. 7), accessibility, and the responsive/iframe layout. **Build the Teacher Command Center (Sec. 11):** the Firebase data model, the join-code + name-approval flow, live progress listeners, the accuracy math, the class-by-tribe summary, the PDF export, and — most important — the **Firestore security rules**. Also use Opus for tricky debugging and the GitHub Pages + Wix reasoning. |
| **Claude Sonnet** *(fast, capable, cost-effective)* | High-volume iteration | **Polish and wire things up**: drop in the Higgsfield images, tune styling and animations, fix responsive issues, add the sound toggle, build out the command-center dashboard UI (roster table, status badges, buttons), make small content edits, and run test passes. Great for the many quick edits after the first build. |
| **Claude Haiku** *(quick, light)* | Small mechanical tasks (optional) | Rename files, reformat data, quick copy tweaks, simple checklists. Optional — skip if you prefer to stay in Sonnet. |
| **Higgsfield MCP** *(media generation)* | Images, video, audio | `generate_image` for every scene and card (Sec. 8); `generate_video` for the optional title loop; `generate_audio` for optional ambient sound. Run these once the layout has image slots ready. |

**Recommended build order:**
1. **Fable** — write the narrative content for the Comanche run (then the other three) into the `GAME_DATA` shape.
2. **Opus** — build `index.html`: state machine, meters, data loading, layout, accessibility; use placeholder gray boxes where images go.
3. **Higgsfield** — generate the Comanche images (assets 1–9), save to `assets/images/`.
4. **Sonnet** — wire the images in, polish styling/responsiveness, add sound toggle, test on phone width, fix bugs.
5. **Opus** — set up Firebase and build the Teacher Command Center (`teacher.html`) + the student join screen, including the Firestore security rules (Sec. 11).
6. **Sonnet** — polish the command-center dashboard (roster table, status badges, PDF button); test with two windows (teacher + student).
7. **Opus or Sonnet** — set up the GitHub repo + Pages (Sec. 12), then embed both pages in Wix (Sec. 13).
8. **Sonnet + Higgsfield** — add the other three peoples' art and content for replay.

---

## 11. Teacher Command Center

A separate page (`teacher.html`) in the same repo, backed by **Firebase**. The teacher creates a session and gets a **class code**; students join from the student page with that code and a name they choose; the teacher approves names, watches live progress, sees accuracy per tribe, and downloads a PDF report.

### 11.1 What the teacher can do
- **Create a new class session.** The app makes a short join code (for example, `TX-4Q7K`).
- **Set a teacher PIN** to protect the command center.
- **Approve or edit student names** as they join — so the student picks a name and *you agree to it* before it sticks.
- **See a live roster:** each student's name, chosen tribe, status (**Not started / In progress / Completed**), and accuracy %.
- **See a class summary:** for each tribe, how many students played and the **average accuracy**.
- **Download a PDF** of the session (student results + per-tribe class accuracy) — this is your one permanent record.
- **End the session** when the class is done — a confirmation box appears, and on OK **all of that session's data is deleted** (see Section 11.10).

### 11.2 What the student does
- Open the student page (embedded in Wix), **enter the class code**, and **type the name they want**.
- If approval is on, wait for the teacher's OK; otherwise start right away.
- Play the game (pick one tribe, four seasons). **Results save automatically** to the session as they play.

### 11.3 How accuracy is measured
Points per choice: **right = 1, partial = 0.5, wrong = 0.**
- **Student accuracy** = (points earned ÷ total decisions) × 100, rounded. With 8 decisions (4 seasons × 2), the max is 8 points.
- Store each decision's verdict so you can show a breakdown (which seasons they nailed, which they missed).
- **Class accuracy per tribe** = the average accuracy of all **completed** students who picked that tribe, shown with a count — e.g., *"Comanche — 9 students — 81% average."* This is exactly the class/session accuracy per tribe you asked for.

### 11.4 Firebase data model (Firestore)
```
sessions (collection)
  {sessionId} (doc)
    code: "TX-4Q7K"
    teacherPin: "<4-digit, hashed if possible>"
    requireApproval: true
    open: true
    createdAt: <timestamp>
    expiresAt: <timestamp>     // createdAt + 24h; watched by the Firestore TTL policy
    students (subcollection)
      {studentId} (doc)
        displayName: "Maria G."
        approved: true
        tribe: "comanche"
        status: "not_started" | "in_progress" | "completed"
        decisions: [ { season:"spring", n:1, verdict:"right", points:1 }, ... ]
        pointsEarned: 6.5
        totalDecisions: 8
        accuracy: 81            // percent, set on completion
        startedAt: <timestamp>
        completedAt: <timestamp>
```
Real-time listeners on the `students` subcollection give the teacher a **live** progress view — no refresh needed. Status flips to `in_progress` when the student picks a tribe and to `completed` when they reach an ending.

### 11.5 Name approval flow ("student picks it, teacher agrees to it")
- A student submits a display name → it appears in your roster **instantly** with a *pending* badge and **Approve / Edit / Remove** controls.
- If `requireApproval` is **on**, the student sees *"Waiting for your teacher…"* until you approve; then the game unlocks.
- If **off**, the student can start right away and you can still **rename or remove** any name live (handy for catching silly or inappropriate names).
- Add a light word-filter to auto-block obvious bad words, but your approval is the real gate.

### 11.6 PDF download
Generate the PDF **in the browser** (no server) with a small library like **jsPDF + jspdf-autotable**. Include:
- **Header:** class code, date, optional teacher name, number of students.
- **Table 1 — Students:** Name · Tribe · Status · Accuracy %.
- **Table 2 — Class accuracy by tribe:** Tribe · # completed · Average accuracy.
- **Footer:** *"7th Grade Texas History · Survive the Season · TEKS 7.2A, 7.9A."*
- Button label: **"Download Results (PDF)."** Suggested filename: `survive-the-season_TX-4Q7K_2026-05-12.pdf`.

### 11.7 Security & privacy (important for a classroom)
- **Collect only a display name** — no emails, no last names required. The student picks it; you approve it. Minimal data by design.
- **Protect the command center** with the teacher PIN, and/or put `teacher.html` on a **password-protected Wix member page**. Students only ever get the *student* page URL and the class code.
- **Firestore security rules (have Opus write these):** a student may create/update **only their own** record in an **open** session; students **cannot read** each other's records or the full roster; only the teacher view reads the aggregate. The public `firebaseConfig` is fine to expose — your safety comes from these rules, not from hiding config.
- **Data retention:** session data is **not kept long-term** — it exists only so you can watch the class play and build the report, then it's deleted. See Section 11.10 for the exact lifecycle. Treat every session as disposable; the PDF is the only thing that lasts.
- Check your campus/district rules before going live; a display-name-only design is intentionally low-risk.

### 11.8 Firebase setup (one time)
1. Open the Firebase console and create a **free project**.
2. Add a **Web app** and copy the `firebaseConfig` snippet.
3. Enable **Firestore Database**, then paste in the security rules Opus writes.
4. *(Optional)* Enable **Anonymous Authentication** so each visitor gets an anonymous ID the rules can key on.
5. Paste `firebaseConfig` into both `index.html` and `teacher.html`.
6. Deploy (GitHub Pages) and test with **two browser windows** — one as teacher, one as student.

### 11.9 Screens to add
- **Student:** Join screen (enter code + choose name) → optional "waiting for approval" → the existing game.
- **Teacher (`teacher.html`):** PIN gate → Command Center (Create Session / show code · live roster with status + accuracy · class-by-tribe summary · Download PDF · End session).

### 11.10 Data lifecycle — session only, nothing kept long-term
The data exists **only for the live session**, so you can watch the class play and build the report. When the class is over, it's deleted. Here's the exact behavior to build:

1. **You click "End Session"** on the command center.
2. **A confirmation box appears** with this text:
   > **"This will delete session data. Do you want to proceed?"**    [ Cancel ] [ Proceed ]
3. **Cancel** → nothing happens; the results stay on screen so you can still download the PDF.
4. **Proceed** → the app **deletes every student record and the session** from Firebase immediately. The screen returns to a clean "Session ended" state with no data.
5. **Reminder built into the flow:** the results screen shows a small persistent note — *"Download the PDF before you end the session. Ending it erases the results."* — so the download always comes first.

**Important guardrail (please read):** With this "delete on end" model, the data is gone the moment you confirm — there is **no undo** and no way to get a class's results back if you didn't download the PDF. Always download first.

**Safety backstop (confirmed — build this):** if you simply close the browser tab *without* clicking "End Session," those records would otherwise sit in Firebase forever, which works against the goal of nothing stored long-term. To close that gap, set a **Firestore TTL (time-to-live) rule that auto-deletes any leftover session after 24 hours.** This never affects a normal class — you'll have ended the session and downloaded the PDF long before then — it only sweeps up sessions that were walked away from. It's the guarantee that data is never kept long-term even when a session is abandoned. Every session doc carries an `expiresAt` timestamp (createdAt + 24h) that the TTL policy watches.

**What this means for the model workflow:** have **Opus** implement the confirmation box, the immediate Firebase delete on "Proceed," and the Firestore TTL rule (+ the matching security rules).

---

## 12. GitHub Setup

1. **Create a repo** (e.g., `survive-the-season`). Public is simplest for free GitHub Pages.
2. **Add files** in this structure:
   ```
   survive-the-season/
   ├── index.html      (student game + join screen)
   ├── teacher.html    (Teacher Command Center)
   ├── assets/
   │   ├── images/     (all Higgsfield scene + card images)
   │   └── audio/      (optional ambient loop)
   └── README.md
   ```
   Claude can create these files and push them for you (or give you the exact commands / a zip to upload).
3. **Turn on GitHub Pages:** repo **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root → Save.**
4. After a minute, GitHub gives you live URLs like:
   `https://<your-username>.github.io/survive-the-season/` (student game)
   `https://<your-username>.github.io/survive-the-season/teacher.html` (command center)
   Open both to confirm they run.

**Tip:** keep image filenames lowercase with no spaces (`comanche_spring.jpg`), because web servers are case-sensitive.

---

## 13. Embed in Wix

You'll embed **two** pages: the **student game** on a student-facing page, and the **teacher command center** on a **password-protected** page just for you.

**Student page (Wix Editor):**
1. Open the page → **Add (+) → Embed Code → Embed a Site** (this drops an **iframe / HTML iframe** element).
2. Click **Enter Website Address** and paste your student GitHub Pages URL.
3. Resize the element to fit the game (e.g., ~1000 × 720; adjust after testing). Turn off scrollbars if it fits.
4. **Publish** and test on desktop and phone.

**Teacher page (keep it private):**
1. Make a new Wix page (e.g., "Teacher Command Center").
2. Add an **Embed a Site** element pointing to your `teacher.html` URL.
3. **Protect the page:** Wix **Page Settings → Permissions → Password/Members-only**, so only you can open it. (The in-app teacher PIN is a second layer.)
4. Publish and confirm students can't reach it.

**Wix Studio:** use **Add → Embed → Embed an iframe (Embed a Site)**, paste each URL, set a responsive width and a fixed/min height, and preview at mobile breakpoints. Studio has its own page-permissions panel for the private teacher page.

**Notes:**
- Use the `https://` Pages URLs (Wix requires HTTPS — GitHub Pages provides it automatically).
- If a page looks cut off, increase the iframe height or shorten the layout; don't rely on inner scrollbars for a game.
- You do **not** need Velo or any Wix code — plain site embeds are enough.
- When you update the game, just push to GitHub; the embedded Wix versions update automatically (a hard refresh clears cache).

---

## 14. Build Checklist

**Game**
- [ ] Fable content written for Comanche (4 seasons × 2 decisions × 3 choices + feedback + endings)
- [ ] `GAME_DATA` filled and separated from logic
- [ ] Opus-built `index.html`: title, how-to, choose-people, season loop, endings
- [ ] Meters start at 60, cap at 100, end run at 0, with reasons on every choice
- [ ] Reading level checked (short sentences; hard words defined)
- [ ] Higgsfield images generated with correct homes/landscapes per people
- [ ] Images compressed (< ~400 KB) and wired in with alt text
- [ ] Responsive down to 360 px; buttons keyboard-accessible; good contrast
- [ ] No `localStorage`/`sessionStorage` for game state
- [ ] Optional: title video loop + ambient audio with a mute toggle (muted by default)

**Teacher Command Center**
- [ ] Firebase project created; Firestore enabled; `firebaseConfig` in both pages
- [ ] Firestore **security rules** written and tested (students can't read each other's data)
- [ ] Teacher can create a session and get a class code; teacher PIN gate works
- [ ] Student join screen: enter code + choose name; approval flow works both on and off
- [ ] Each choice records a verdict; accuracy math is correct (right=1, partial=0.5, wrong=0)
- [ ] Live roster shows Not started / In progress / Completed and updates in real time
- [ ] Class-by-tribe average accuracy displays with student counts
- [ ] PDF download works (student table + per-tribe table)
- [ ] "End Session" shows the confirmation box ("This will delete session data. Do you want to proceed?") and, on Proceed, deletes all session data from Firebase
- [ ] Results screen shows the "download the PDF first" reminder
- [ ] Firestore TTL rule auto-deletes any abandoned session after 24 hours (`expiresAt` = createdAt + 24h)

**Ship**
- [ ] Pushed to GitHub; both Pages URLs work
- [ ] Student page embedded in Wix; teacher page embedded on a **password-protected** Wix page
- [ ] Tested on desktop and phone; tested with two windows (teacher + student)
- [ ] Replay adds the other three peoples (content + art)

## 15. Test Plan (quick)

1. **Win path:** always pick the right choice → should reach "Thrived."
2. **Lose path:** always pick the wrong choice → a meter should hit 0 and show the correct "did not survive" teaching card.
3. **Mixed path:** should land on "Survived."
4. **Replay:** finishing and choosing a different people loads that people's content and images correctly.
5. **Device check:** plays cleanly on phone width inside the Wix iframe; no clipping; images load.
6. **Accuracy spot-check:** each people shows its correct home and landscape; feedback never credits the wrong people.
7. **Command center — join:** create a session, join as a student with the code, approve the name, confirm the student appears "In progress."
8. **Command center — accuracy:** finish a run with a known choice pattern; confirm the roster % matches the expected math and the per-tribe average updates.
9. **Command center — PDF:** download the report; confirm both tables and the filename are correct.
10. **Security:** confirm a student URL can't open the teacher page, and one student can't see another's data.
11. **End & delete:** click "End Session," confirm the warning box appears, hit Cancel (data stays), then hit Proceed and confirm every student record and the session are gone from Firebase.

---

## 16. Teacher / Accuracy Notes

- **The horse and timing:** The Comanche became a horse-mounted people *after* the Spanish brought horses, so this game sits right at the edge of "before contact." That matches your outline, which credits the Spanish horse with transforming Comanche life. If a student asks, that's a great discussion: some change came *because* of contact.
- **"Wrong" choices aren't dumb — they're another people's smart choice.** Make sure the feedback always frames it that way (e.g., "Planting was the Caddo's way in the forest"). That's the comparison skill (7.2A) doing its work.
- **Representation:** keep every depiction dignified and specific to the people and region. This is daily life and skill, not costume.

---

*Companion to your Chronos Protocol, Texas Geography, and Native American Interactive Map apps. Built to drop into the same GitHub → Wix workflow.*
