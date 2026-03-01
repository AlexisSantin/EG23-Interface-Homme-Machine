# ISI UI Battle 🏆

> **UTT – EG23 Interface Homme-Machine**

Un site vitrine public pour la compétition **ISI UI Battle**.  
Les étudiants génèrent des interfaces utilisateur à l'aide de prompts IA en moins d'une minute, puis les itèrent pour les améliorer.  
L'objectif n'est **pas** de coder manuellement – il s'agit de :

- 🤖 **Ingénierie de prompts IA**
- 🎨 **Cohérence visuelle**
- 🧭 **Clarté UX et flux d'interface**
- 🔄 **Capacité d'itération**

🌐 **Site en ligne :** `https://alexissantin.github.io/EG23-Interface-Homme-Machine/`

---

## 📋 Exercices pour les étudiants

Ces exercices se font avec **VSCode** et l'extension **GitHub Copilot**.

### Exercice 1 – Cloner un design avec Copilot

1. Trouvez un site web dont vous aimez le design (ex. Stripe, Linear, Vercel, etc.).
2. Faites une **capture vidéo ou une série de screenshots** du site.
3. Ouvrez VSCode et décrivez le design à **GitHub Copilot Chat** :
   > *"Reproduis ce design en HTML/CSS/JS : en-tête avec navigation, section héro avec titre centré, grille de cartes, pied de page. Style épuré, fond sombre, accent violet."*
4. Affinez le résultat avec des prompts itératifs jusqu'à obtenir un rendu proche de l'original.

**Livrable :** un fichier `index.html` autonome + votre fichier `prompt.md` documentant chaque prompt.

---

### Exercice 2 – Construire une interface en composants

Créez une page web composée de **plusieurs composants réutilisables** générés séparément par Copilot :

| Composant | Description |
|-----------|-------------|
| `Navbar` | Barre de navigation responsive avec logo et liens |
| `HeroSection` | Section héro avec titre, sous-titre et bouton CTA |
| `CardGrid` | Grille de cartes avec image, titre et description |
| `Modal` | Fenêtre modale avec overlay et bouton de fermeture |
| `Footer` | Pied de page avec liens et mention de copyright |

**Consigne :** chaque composant doit être généré via un prompt distinct dans Copilot. Assemblez-les ensuite dans une page cohérente.

**Livrable :** dossier `composants/` avec un fichier HTML par composant + `index.html` qui les assemble.

---

### Exercice 3 – Site de maximisation des crédits ECTS

Créez un **site web complet** aidant les étudiants à maximiser leurs crédits ECTS. Le site doit inclure :

- 📊 **Tableau de bord** : vue d'ensemble des crédits validés / restants
- 📅 **Planificateur de semestre** : sélection des UE et calcul automatique des ECTS
- 🎯 **Optimiseur de parcours** : suggestion des combinaisons d'UE pour atteindre un objectif de crédits
- 📋 **Fiche de suivi** : liste des modules avec statut (validé / en cours / à valider)
- 💡 **Conseils** : recommandations personnalisées selon le profil de l'étudiant

**Contraintes techniques :**
- Utiliser uniquement HTML, CSS et JavaScript vanilla (pas de framework)
- Données stockées en `localStorage`
- Interface responsive (mobile + desktop)
- Entièrement généré avec Copilot (documenter tous les prompts)

**Livrable :** dossier de projet complet + `prompt.md` + screenshot + soumission via Pull Request sur ce dépôt.

---

## 📂 Structure du dépôt

```
EG23-Interface-Homme-Machine/
├── index.html          ← Site vitrine (ne pas modifier)
├── styles.css          ← Styles (ne pas modifier)
├── script.js           ← Logique (ne pas modifier)
├── projects.json       ← Ajoutez votre projet ici ✅
├── README.md
└── projects/
    └── team-template/  ← Copiez et renommez ce dossier pour votre équipe
        ├── meta.json
        ├── prompt.md
        ├── screenshot.png
        └── index.html  (optionnel, si hébergé ici)
```

---

## 🚀 Comment soumettre votre projet

### 1 – Forker et cloner le dépôt

```bash
git clone https://github.com/AlexisSantin/EG23-Interface-Homme-Machine.git
cd EG23-Interface-Homme-Machine
```

### 2 – Créer votre dossier d'équipe

```bash
cp -r projects/team-template projects/team-votre-nom
```

Éditez les fichiers dans votre dossier :

| Fichier | Que faire |
|---------|-----------|
| `meta.json` | Renseignez le nom de votre équipe, les membres et l'URL du projet |
| `prompt.md` | Documentez **tous** les prompts utilisés, dans l'ordre |
| `screenshot.png` | Remplacez par un vrai screenshot de votre application (16:9, ≥ 640 px de large) |
| `index.html` | Optionnel – uniquement si votre application est hébergée dans ce dépôt |

### 3 – Enregistrer votre projet dans `projects.json`

Ajoutez une entrée au tableau dans `projects.json` :

```json
{
  "name": "Nom de votre équipe",
  "description": "Description en une phrase de votre application.",
  "url": "https://votre-url-de-deploiement.exemple.com/",
  "screenshot": "projects/team-votre-nom/screenshot.png",
  "promptFile": "projects/team-votre-nom/prompt.md"
}
```

> ⚠️ `url` doit être une URL HTTPS **publiquement accessible** (GitHub Pages, Netlify, Vercel, etc.).

### 4 – Ouvrir une Pull Request

Ne commitez que les fichiers dans **votre dossier d'équipe** et votre entrée dans `projects.json`.  
Ne modifiez **pas** `index.html`, `styles.css` ni `script.js`.

---

## 📋 Règles

1. Chaque équipe dispose de **≤ 60 secondes** pour générer l'UI initiale avec un outil IA.
2. L'itération est autorisée et encouragée après le sprint initial.
3. Chaque prompt utilisé doit être documenté dans `prompt.md`.
4. L'URL soumise doit rester publiquement accessible pendant la période d'évaluation.
5. Les équipes peuvent utiliser n'importe quel outil IA (ChatGPT, Copilot, Gemini, Claude, v0, Bolt, etc.).
6. Aucun codage manuel HTML/CSS/JS n'est autorisé pendant les 60 premières secondes.

---

## 🏅 Critères d'évaluation

| Critère | Description | Pondération |
|---------|-------------|-------------|
| **Clarté UX** | L'interface est-elle facile à comprendre et à utiliser ? | 20 % |
| **Cohérence visuelle** | Les couleurs, la typographie et la mise en page sont-elles cohérentes ? | 20 % |
| **Qualité du flux** | Le parcours utilisateur est-il logique de bout en bout ? | 20 % |
| **Fonctionnalité originale** | L'application inclut-elle quelque chose de créatif ou de surprenant ? | 20 % |
| **Qualité des prompts** | Les prompts sont-ils clairs, itératifs et bien documentés ? | 20 % |

---

## 💡 Conseils sur l'ingénierie de prompts

Un bon prompt est **spécifique**, **contextualisé** et **itératif** :

```
❌ "Fais un site web."

✅ "Crée une application de gestion de tâches moderne avec un thème sombre, uniquement en HTML, CSS
   et JavaScript. Inclure un champ de saisie pour ajouter des tâches, une liste avec cases à cocher
   et boutons de suppression, un compteur de tâches, et des animations CSS fluides.
   Utilise #6c63ff comme couleur d'accent."
```

Après le premier résultat, itérez :

```
"Ajoute maintenant la persistance localStorage et une illustration pour l'état vide."
"Améliore la mise en page mobile et ajoute une barre de progression indiquant le % de complétion."
```

Chaque itération doit être **une amélioration ciblée**, pas une réécriture complète.

---

## 🛠️ Stack technique

Le site vitrine lui-même utilise :

- **HTML / CSS / JavaScript vanilla** – zéro dépendance, pas d'étape de build.
- **GitHub Pages** – hébergement statique gratuit.
- Le site lit `projects.json` à l'exécution et affiche les cartes dynamiquement.

---

## 📜 Licence

MIT – voir `LICENSE` pour les détails.
