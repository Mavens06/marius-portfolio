# Marius Hounkpetohou — Portfolio

Portfolio personnel : ingénierie, robotique, data et expérimentation.

## Modifier le contenu

- `content.json` : projets, descriptions, technologies et liens.
- `index.html` : présentation, parcours et contact.
- `style.css` : couleurs, typographie et mise en page.
- `assets/` : images et CV.

## Hébergement GitHub Pages

Dans Settings → Pages, sélectionner Deploy from a branch, puis `main` et `/ (root)`.
Chaque modification publiée sur cette branche met à jour le site.

## Prévisualisation locale

Servir ce dossier avec un serveur HTTP (par exemple `python3 -m http.server 8000`), puis ouvrir http://localhost:8000.

Le site utilise un fichier JSON chargé par le navigateur ; l’ouverture directe du fichier HTML ne suffit pas.

Le visuel d’accueil est une illustration conceptuelle générée avec imagegen. Les autres visuels proviennent des projets présentés.

## Médias et démonstrations

`content.json` contient aussi les galeries et la liste `demos`. Les vidéos se chargent à la demande. Les fichiers VTT fournissent les légendes des montages.

- Agri-Botics : extrait réel du robot et montage de captures de la simulation locale.
- PediAppend : montage de captures de l’application locale avec un cas fictif, sans validation clinique.
- RentImmo : extrait de la vidéo existante réalisée avec le jeu de démonstration.
- Photographies provenant du dossier Image et des dossiers projets.

La version enrichie est préparée pour GitHub Pages. Le site Sites précédent reste une première version séparée.
