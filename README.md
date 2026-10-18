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

## Édition claire et animations

La palette ivoire, beige, gris et olive se règle dans les variables et les règles finales de `style.css`. `wing.js` dessine une étude illustrative d’aile à partir d’une géométrie 3D projetée ; elle réagit au pointeur, s’arrête hors écran et respecte la préférence de mouvement réduit. Le bouton permet de mettre la rotation en pause. Cette animation n’est pas une simulation aérodynamique.

Les films `*-film-v2.mp4` sont des extraits réencodés des vidéos originales. Agri-Botics et PediAppend comportent des coupes entre étapes, sans accélération ; RentImmo est un extrait continu du fichier original en 1600 × 900. Les fichiers VTT et les champs `chapters` ajoutent des repères de lecture.

FOREX : `forex-rapport-final.pdf` est le rapport complet de 42 pages fourni par l’auteur ; `forex-soutenance.html` provient du ZIP de soutenance. Cette présentation charge Chart.js et MathJax depuis leur CDN.

Le portrait `assets/marius-portrait-pro.webp` est dérivé de la photo du CV avec l’outil intégré imagegen, en préservant l’identité et en remplaçant le cadrage circulaire et le fond. Prompt final : « Preserve exact facial identity, age, dark skin tone, hair, facial proportions, expression and navy suit, white shirt and tie. Professional editorial studio portrait, vertical 4:5 composition, seamless dark charcoal-olive backdrop, soft lighting and natural skin texture. No beauty filtering, face reshaping, text or props. »

## Vercel

Le fichier `vercel.json` configure ce site statique sans compilation. La publication peut se faire depuis ce dossier ou depuis le dépôt GitHub avec le préréglage Other et la racine comme dossier de sortie. Les médias portent de nouveaux noms pour éviter les anciennes versions mises en cache.
