# Portfolio de Marius Hounkpetohou — édition éditoriale

Site public : https://marius-portfolio-pearl.vercel.app/

## Modifier le contenu

- `content.json` : descriptions des projets, résultats, cadre collectif, limites, galeries et vidéos.
- `build.py` : textes des pages d’accueil, démarche et ressources, et gabarits des neuf pages.
- `style.css` : palette, typographie, grilles et responsive.
- `app.js` : filtres, galerie et lecteur vidéo.
- `wing.js` : visualisation géométrique interactive (pas une simulation physique).
- `assets/` : documents, portrait, captures, vidéos et sous-titres.

Après modification de `content.json` ou des gabarits, lancer `python3 build.py`. Les pages HTML sont alors régénérées. Aucun paquet à installer. Le site publié sert directement ces pages : la navigation et les documents fonctionnent sans JavaScript.

## Aperçu local

Depuis ce dossier : `python3 -m http.server 8767 --bind 127.0.0.1`, puis ouvrir l’adresse indiquée dans le navigateur. Pour arrêter : Ctrl-C.

## Publication

Le dépôt GitHub `Mavens06/marius-portfolio` sert les médias et la version GitHub Pages. Le dossier voisin `portfolio-vercel` contient une copie où les chemins des médias pointent vers GitHub Pages. Il n’existe pas encore de synchronisation automatique GitHub → Vercel. Lors d’une mise à jour, synchroniser les fichiers puis déployer le paquet Vercel.

## Choix de conception

Voir `DESIGN.md`. Le contenu collectif est attribué à l’équipe. Les chiffres ont leur contexte et les limites restent dans les études de cas. Les anciens liens #projets, #demonstrations, #ressources, #parcours, #approche et #cap redirigent vers les nouvelles pages.

## Médias

Aucun nouveau média généré dans cette révision. Les démonstrations sont des séquences réelles filmées. Les éléments simulés ou fictifs sont légendés.

Le portrait `assets/marius-portrait-pro.webp` provient d’une retouche de la photo du CV avec l’outil imagegen intégré lors de la révision précédente. L’identité, le visage, la peau, la coiffure et la tenue ont été conservés ; le fond et l’éclairage ont été harmonisés pour un cadrage professionnel vertical. Il ne s’agit pas d’une nouvelle séance photo.
