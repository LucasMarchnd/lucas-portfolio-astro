# Lucas Marchand — Astro Portfolio

Portfolio statique pour `lucasmarchand.dev`, orienté projets Software / AI Engineer.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvre l'URL affichée dans le terminal.

## Modifier les projets

Chaque projet est un fichier Markdown dans:

```txt
src/content/projects/
```

Exemple:

```md
---
title: "Agentic NLP-to-SQL System"
summary: "Résumé court du projet."
stack: ["Python", "Vertex AI", "BigQuery"]
image: "/projects/agentic-nlp2sql.svg"
---

## Problème

Texte du projet...
```

Les images sont dans:

```txt
public/projects/
```

Remplace les SVG placeholders par des captures, schémas d'architecture ou mockups propres.

## Build production

```bash
npm run build
npm run preview
```

## Déploiement simple

- Vercel: importe le repo GitHub, framework Astro détecté automatiquement.
- Netlify: idem, commande `npm run build`, dossier `dist`.
- Cloudflare Pages: commande `npm run build`, dossier `dist`.

## Idée de structure recruteur

Chaque page projet doit répondre à quatre questions:

1. Quel problème réel ?
2. Quelle architecture ?
3. Quelles décisions techniques ?
4. Qu'est-ce que ça prouve sur mon niveau ?
