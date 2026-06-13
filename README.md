# Lucas Marchand — Portfolio Astro

Portfolio statique pour `lucasmarchand.dev`, orienté recruteurs Software / AI Engineer.

Liens publics:

- Site: https://lucasmarchand.dev
- GitHub: https://github.com/LucasMarchnd
- LinkedIn: https://www.linkedin.com/in/lucassmarchand
- Email: contact@lucasmarchand.dev

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvre l'URL affichée dans le terminal.

## Modifier les cartes projets

Chaque carte projet est un fichier Markdown dans:

```txt
src/content/projects/
```

Exemple:

```md
---
title: "ADK v2 Workflow Samples"
summary: "Résumé court du projet."
role: "Personal project — agent orchestration"
year: 2026
status: "Prototype"
featured: true
order: 1
stack: ["Python", "Google ADK", "Agents"]
tags: ["agentic-ai", "backend"]
image: "/projects/adk-v2-workflow-samples.svg"
repo: "https://github.com/LucasMarchnd/example"
---
```

Les images sont dans:

```txt
public/projects/
```

Chaque carte doit avoir un `repo` GitHub public. Le clic sur la carte ouvre directement ce dépôt.

## Build production

```bash
npm run build
npm run preview
```

## Déploiement Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

## Autres déploiements

- Vercel: importe le repo GitHub, framework Astro détecté automatiquement.
- Netlify: idem, commande `npm run build`, dossier `dist`.

## Idée de structure recruteur

Chaque carte projet doit répondre vite à quatre questions:

1. Quel problème réel ?
2. Quelle architecture ?
3. Quelles décisions techniques ?
4. Qu'est-ce que ça prouve sur mon niveau ?
