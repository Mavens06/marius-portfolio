# Revue critique et décisions — Portfolio Marius

18 octobre 2026. Références : les deux analyses fournies, le site Vercel effectivement ouvert, le contenu existant et les rapports déjà publiés.

## Ce que l’examen confirme

1. **Accueil** — Capture `01-avant-accueil.png`. Le portrait et la palette donnent une identité cohérente. Le grand titre décrit une méthode sans préciser suffisamment le statut. Maintenir l’élève ingénieur généraliste et l’aéronautique comme horizon explicite.
2. **Projets** — Capture `02-avant-projets.png`. Deux paragraphes par carte, puis reprise dans les médias et rapports. Hauteur totale mesurée dans le navigateur : 8 991 px à 1 280 px de largeur. Réduire la répétition et créer de vraies pages détaillées.
3. **Preuves** — Les rapports, images et vidéos existent déjà. Leur meilleure organisation est plus utile que de nouveaux visuels générés. Garder les sources authentiques et les réserves sur les résultats.

## Retenu

- Accueil bref, trois projets phares, accès à toute la collection.
- Neuf pages statiques : accueil, collection, démarche, ressources et cinq projets.
- Fiches partageables par URL, sans imposer une longue lecture dans une modale. Retour natif du navigateur et liens explicites vers la collection.
- Rôle/cadre collectif clairement indiqué ; implication individuelle seulement lorsqu’elle est documentée. Le visiteur n’a pas besoin d’un inventaire artificiel de tâches personnelles.
- Résultats documentés avec contexte : environ 2 % dans Kundt, 96 tests annoncés à la remise de RentImmo, quatre modèles comparés dans PediAppend.
- Mémoire composites mis en évidence sans inventer de rapport ou de résultats manquants.
- Compétences rattachées aux projets et aux apprentissages en cours, sans jauge d’expertise fictive.
- Géométrie 3D à paramètres : épaisseur relative, flèche, repères de corde et bord d’attaque. Explicitement illustrative, sans simulation aérodynamique.
- Bibliothèque de rapports en lignes, taille des fichiers, chapitres vidéo et légendes conservés.

## Écarté ou différé

- Retour au sombre : contraire au choix clair demandé par Marius.
- Faux loader 0–100 : délai gratuit, sans information réelle.
- Curseur personnalisé et forte parallaxe : coût d’usage, surtout mobile/clavier.
- Vidéos en autoplay : contrôle laissé au visiteur et chargement à la demande.
- Passage à React/WebGL : pas de besoin fonctionnel justifiant le poids ou la maintenance supplémentaires ici.
- Formulaire de contact : les liens directs fonctionnent sans stocker de données ni ajouter un backend.
- Version anglaise : mérite une adaptation complète ultérieure, pas quelques titres traduits.

## Accessibilité et vérifications

Repères sémantiques, un H1 par page, liens de navigation natifs, raccourci d’accès au contenu, focus visible, filtres avec état et compteur annoncé, galerie en dialogue natif et retour du focus, respect du mouvement réduit. Vérification syntaxique JS et contrôle des 281 références de la version initiale : aucune cible locale manquante. Cela ne constitue pas un audit exhaustif WCAG ou lecteur d’écran.

## Médias et publication

Les médias existants restent hébergés sur GitHub Pages ; le site et son contenu sont déployés sur Vercel. Aucun nouveau média généré pour cette révision : les preuves de projets et le portrait existant suffisent. Le portfolio ne dépend d’aucune bibliothèque JavaScript tierce.
