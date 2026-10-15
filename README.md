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

## Projets, documents et médias

Dans `content.json`, chaque projet contient `overview` (aperçu), `challenge`, `role`, `steps` (démarche), `outcome`, `takeaway` et `limits`. `gallery` liste les images et leurs légendes. `report` référence le PDF, sa couverture et sa portée ; déposer les fichiers correspondants dans `assets/`.

La liste `demos` décrit les vidéos, leurs affiches, durées et légendes. Les vidéos se chargent à la demande.

- Agri-Botics : extrait réel du robot et enregistrement continu de la simulation locale.
- PediAppend : enregistrement continu avec un cas fictif, sans validation clinique.
- RentImmo : vidéo existante de comparaison financière et nouvelle navigation enregistrée sur une base fictive.
- Rapports collectifs Agri-Botics et FOREX ; extrait public RentImmo excluant les données d’activité du cabinet.
- Aucun rapport final PediAppend ou Composites n’est joint faute de document correspondant identifié.

Les extraits de navigation sont recadrés et coupés à leurs extrémités, sans accélération. Les photos proviennent des dossiers projets et Image.

La version enrichie est hébergée sur GitHub Pages. Le site Sites précédent reste une première version séparée.
