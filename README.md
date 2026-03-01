# ISI UI Battle 🏆

> **UTT – EG23 Interface Homme-Machine**

A public showcase website for the **ISI UI Battle** competition.  
Students generate user interfaces using AI prompts in under one minute, then iterate to improve them.  
The focus is **not** on manual coding – it's on:

- 🤖 **AI prompt engineering**
- 🎨 **Visual coherence**
- 🧭 **UX clarity & interface flow**
- 🔄 **Iteration capability**

🌐 **Live site:** `https://alexissantin.github.io/EG23-Interface-Homme-Machine/`

---

## 📂 Repository Structure

```
EG23-Interface-Homme-Machine/
├── index.html          ← Showcase website (do not modify)
├── styles.css          ← Styling (do not modify)
├── script.js           ← Logic (do not modify)
├── projects.json       ← Add your project entry here ✅
├── README.md
└── projects/
    └── team-template/  ← Copy & rename this folder for your team
        ├── meta.json
        ├── prompt.md
        ├── screenshot.png
        └── index.html  (optional, if self-hosted here)
```

---

## 🚀 How to Submit Your Project

### 1 – Fork & clone the repository

```bash
git clone https://github.com/AlexisSantin/EG23-Interface-Homme-Machine.git
cd EG23-Interface-Homme-Machine
```

### 2 – Create your team folder

```bash
cp -r projects/team-template projects/team-your-name
```

Edit the files inside your folder:

| File | What to do |
|------|-----------|
| `meta.json` | Fill in your team name, members, and project URL |
| `prompt.md` | Document **all** the prompts you used, in order |
| `screenshot.png` | Replace with a real screenshot of your app (16:9, ≥ 640 px wide) |
| `index.html` | Optional – only needed if your app is hosted inside this repo |

### 3 – Register your project in `projects.json`

Add an entry to the array in `projects.json`:

```json
{
  "name": "Your Team Name",
  "description": "One-sentence description of your app.",
  "url": "https://your-deployment-url.example.com/",
  "screenshot": "projects/team-your-name/screenshot.png",
  "promptFile": "projects/team-your-name/prompt.md"
}
```

> ⚠️ `url` must be a **publicly accessible** HTTPS URL (GitHub Pages, Netlify, Vercel, etc.).

### 4 – Open a Pull Request

Commit only the files inside **your team folder** and your entry in `projects.json`.  
Do **not** modify `index.html`, `styles.css`, or `script.js`.

---

## 📋 Rules

1. Each team has **≤ 60 seconds** to generate the initial UI with an AI tool.
2. Iteration is allowed and encouraged after the initial sprint.
3. Every prompt used must be documented in `prompt.md`.
4. The submitted URL must remain publicly accessible during the evaluation period.
5. Teams may use any AI tool (ChatGPT, Copilot, Gemini, Claude, v0, Bolt, etc.).
6. No manual HTML/CSS/JS coding is allowed in the first 60 seconds.

---

## 🏅 Evaluation Criteria

| Criterion | Description | Weight |
|-----------|-------------|--------|
| **UX Clarity** | Is the interface easy to understand and use? | 20 % |
| **Visual Coherence** | Are colors, typography, and layout consistent? | 20 % |
| **Flow Quality** | Does the user journey make sense end-to-end? | 20 % |
| **Original Feature** | Does the app include something creative or surprising? | 20 % |
| **Prompt Quality** | Are the prompts clear, iterative, and well-documented? | 20 % |

---

## 💡 Tips on Prompt Engineering

A good prompt is **specific**, **contextual**, and **iterative**:

```
❌ "Make a website."

✅ "Create a modern, dark-themed task manager app using only HTML, CSS,
   and JavaScript. Include an input to add tasks, a list with checkboxes
   and delete buttons, a task counter, and smooth CSS animations.
   Use #6c63ff as the accent color."
```

After the first result, iterate:

```
"Now add localStorage persistence and an empty-state illustration."
"Improve the mobile layout and add a progress bar showing completion %."
```

Each iteration should be **one focused improvement**, not a complete rewrite.

---

## 🛠️ Technical Stack

The showcase website itself uses:

- **Pure HTML / CSS / Vanilla JavaScript** – zero dependencies, no build step.
- **GitHub Pages** – free static hosting.
- The site reads `projects.json` at runtime and renders cards dynamically.

---

## 📜 License

MIT – see `LICENSE` for details.
