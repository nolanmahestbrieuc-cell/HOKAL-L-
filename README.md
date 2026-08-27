# HokaLélé — Landing page

Landing page premium et contemporaine pour **HokaLélé**, une marque fictive de
chaussures de sport inspirée de l'esprit performance du running, du trail et du
lifestyle sportif.

Design épuré, lumineux et énergique : beaucoup d'espace blanc, une palette
blanc cassé / bleu ciel doux relevée d'orange vif, une typographie sans
empattement à forte hiérarchie et une sensation de mouvement omniprésente.

## Aperçu

Ouvrez simplement `index.html` dans un navigateur — aucune dépendance à
installer, aucun serveur requis.

```bash
# option 1 : ouvrir directement
open index.html            # macOS
xdg-open index.html        # Linux

# option 2 : petit serveur local
python3 -m http.server 8000
# puis http://localhost:8000
```

## Sections

1. **Navigation** — logo texte « HokaLélé », liens (Chaussures, Collection,
   Technologie, Notre histoire) et CTA orange « Découvrir la collection ».
2. **Hero** — slogan « Repoussez vos limites. Changez votre foulée. »,
   sous-titre, double CTA, statistiques et composition aérée avec chaussure
   en mouvement, silhouette de coureur et lignes de trajectoire.
3. **Technologie** — trois cartes : Amorti maximal, Légèreté dynamique,
   Stabilité naturelle.
4. **Les modèles phares** — grille de trois produits (Élan Cloud, Foulée
   Trail, Vélocité Race).
5. **Éditorial** — « Minimal dans la forme. Maximum dans le mouvement. »
6. **Pensées pour bouger** — usages Running, Trail, Training, Lifestyle.
7. **Newsletter** — « Entrez dans le mouvement. » + champ e-mail et bouton
   orange « Rejoindre HokaLélé ».
8. **Footer** — logo, navigation, réseaux sociaux et mentions légales.

## Détails techniques

- **HTML / CSS / JavaScript natif**, sans framework ni build.
- **Illustrations vectorielles (SVG)** dessinées à la main pour les chaussures,
  le coureur et les icônes : la page est 100 % autonome et se charge
  instantanément, sans image externe.
- **Typographie** : [Archivo](https://fonts.google.com/specimen/Archivo)
  (titres et logo) et [Inter](https://fonts.google.com/specimen/Inter) (texte),
  chargées via Google Fonts.
- **Responsive** (mobile, tablette, desktop) et respect de
  `prefers-reduced-motion`.
- Interactions légères : menu mobile, apparition au scroll, validation du
  formulaire.

## Structure des fichiers

```
.
├── index.html    # structure de la page + sprite SVG
├── styles.css    # design system, mise en page, animations
├── script.js     # menu mobile, reveal au scroll, formulaire
└── README.md
```

> Projet de démonstration. « HokaLélé » est une marque fictive : identité,
> couleurs et slogans sont originaux et ne reproduisent pas ceux de marques
> existantes.
