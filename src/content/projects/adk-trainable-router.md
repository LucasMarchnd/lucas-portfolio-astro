---
title: "Trainable Router for Agent Workflows"
summary: "Petit routeur local entraînable pour orienter une requête vers le bon agent ou le bon outil, afin de réduire les appels LLM inutiles."
role: "Personal project — design, training loop, packaging Python et intégration agent"
year: 2026
status: "Prototype"
featured: true
order: 3
image: "/projects/adk-trainable-router.svg"
stack: ["Python", "PyTorch", "Sentence Transformers", "uv", "Packaging", "Testing"]
tags: ["agents", "routing", "ml-engineering"]
---

## Idée

Dans beaucoup de systèmes agentiques, un LLM est utilisé pour router une demande alors qu'un petit modèle local peut parfois suffire.

## Approche

Le projet propose un routeur entraînable sur des exemples de requêtes. Il peut prédire une intention ou un agent cible, puis laisser le workflow principal décider quoi faire.

## Ce que le projet montre

- Tu ne fais pas seulement du prompt engineering: tu sais remplacer une brique LLM par une brique ML plus légère.
- Tu comprends les compromis coût, latence, qualité et fallback.
- C'est très cohérent avec ton positionnement Agentic AI + Backend.

## À rendre fort

Ajoute un benchmark simple: latence, accuracy sur un petit jeu d'évaluation, comparaison avec un routage LLM.
