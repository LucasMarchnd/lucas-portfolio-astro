---
title: "Git-Backed URL Shortener"
summary: "URL shortener expérimental où l'historique Git devient une base de données append-only. Projet fun, mais très bon pour parler design et compromis."
role: "Personal project — system design, API, hashing, collisions et stockage append-only"
year: 2026
status: "Planned"
featured: false
order: 5
image: "/projects/url-shortener-git-db.svg"
stack: ["Python", "FastAPI", "Git", "Hashing", "System Design", "Tests"]
tags: ["backend", "fun-project", "system-design"]
repo: "https://github.com/LucasMarchnd"
---

## Concept

Faire un raccourcisseur d'URL simple, mais stocker les mappings dans l'historique Git plutôt que dans une base classique.

## Pourquoi c'est intéressant

Le projet est volontairement absurde, mais il permet de discuter de sujets sérieux:

- collisions de hash ;
- modèle append-only ;
- reconstruction d'état depuis un log ;
- limites de performance ;
- tests d'intégrité ;
- API propre.

## Version recruteur

Présente-le comme un projet de system design expérimental, pas comme une solution de production.
