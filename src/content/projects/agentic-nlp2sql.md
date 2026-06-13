---
title: "Agentic NLP-to-SQL System"
summary: "Workflow multi-agent pour transformer une question métier en SQL validé, traçable et exécutable sur des données industrielles."
role: "Backend / GenAI Engineer — orchestration, validation, streaming, tests et contraintes production"
year: 2026
status: "In progress"
featured: true
order: 1
image: "/projects/agentic-nlp2sql.svg"
stack: ["Python", "Google ADK", "Vertex AI", "BigQuery", "RAG", "AgentsOps", "Testing"]
tags: ["agentic-ai", "backend", "nlp2sql"]
repo: "https://github.com/LucasMarchnd"
---

## Problème

Permettre à des utilisateurs non-SQL d'interroger des données qualité industrielles en langage naturel, sans exposer directement la complexité des tables, des jointures et des règles métier.

## Architecture

Le système peut être présenté comme une chaîne de décision contrôlée:

1. compréhension de la demande utilisateur ;
2. récupération de contexte métier via base de connaissances ;
3. génération SQL ;
4. dry-run et correction automatique ;
5. validation finale ;
6. restitution de la réponse avec traces utiles.

## Ce que le projet montre

- Capacité à concevoir un workflow IA non trivial, pas juste un appel LLM.
- Compréhension des contraintes de production: fallback, coût d'inférence, validation, logs et qualité.
- Compétences backend Python: orchestration, streaming, erreurs, tests et intégration cloud.

## À ajouter sur la page

Ajoute une image d'architecture propre, même simplifiée. Le recruteur doit comprendre le pipeline en 10 secondes.
