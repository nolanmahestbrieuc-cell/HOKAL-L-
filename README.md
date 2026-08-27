# HokaLélé — Landing page

Landing page premium et responsive pour **HokaLélé**, une marque (fictive) de
chaussures de sport inspirée de l'univers du running, du trail et du lifestyle
sportif. Cette version reproduit fidèlement la maquette de référence :
en-tête fin, hero éditorial en deux colonnes avec grande photographie sportive,
bande technologie, grille produits, bloc éditorial pleine largeur, catégories,
newsletter et footer complet.

## Aperçu

Ouvrez `index.html` dans un navigateur — aucune dépendance à installer.

```bash
# ouvrir directement
xdg-open index.html      # Linux
open index.html          # macOS

# ou via un petit serveur local (recommandé pour charger les images)
python3 -m http.server 8000   # puis http://localhost:8000
```

## Sections

1. **En-tête** — logo « HokaLélé » (Hoka marine / Lélé orange), navigation
   (Chaussures, Collection, Technologie, Notre histoire), bouton orange
   « Découvrir la collection » et icône panier.
2. **Hero** — « Repoussez vos limites. / Changez votre foulée. », sous-titre,
   double CTA, grande photographie sportive plein cadre, ligne de trajectoire
   orange et encart « Plus de légèreté / d'amorti / d'énergie ».
3. **Bande technologie** — Amorti maximal, Légèreté dynamique, Stabilité
   naturelle, avec pictogrammes fins et séparateurs.
4. **Les modèles phares** — Mach 6, Bondi 9, Speedgoat 6 (photos produit).
5. **Éditorial** — « Minimal dans la forme. Maximum dans le mouvement. »
6. **Pensées pour bouger** — Running, Trail, Training, Lifestyle.
7. **Newsletter** — « Entrez dans le mouvement. » + champ e-mail et bouton
   orange « Rejoindre HokaLélé ».
8. **Footer** — logo, colonnes (Produits, À propos, Aide), réseaux sociaux et
   mentions légales.

## Détails techniques

- **HTML / CSS / JavaScript natif**, sans framework ni build.
- **Typographie** : [Archivo](https://fonts.google.com/specimen/Archivo)
  (titres et logo) + [Inter](https://fonts.google.com/specimen/Inter) (texte),
  via Google Fonts.
- **Palette** : bleu ciel très clair, blanc, bleu marine profond, orange vif.
- **Responsive** (mobile, tablette, desktop) et respect de
  `prefers-reduced-motion`.
- Interactions légères : menu mobile, apparition au scroll, validation du
  formulaire newsletter.

## Structure des fichiers

```
.
├── index.html    # structure de la page + sprite d'icônes SVG
├── styles.css    # design system, mise en page, animations
├── script.js     # menu mobile, reveal au scroll, formulaire
├── images/       # photographies (voir crédits ci-dessous)
└── README.md
```

## Images & crédits

Les photographies proviennent d'[Unsplash](https://unsplash.com) et sont
utilisées sous [licence Unsplash](https://unsplash.com/license) (usage gratuit,
commercial et non commercial). Elles servent ici de **placeholders** : ce sont
des chaussures et des athlètes génériques, et non des produits HokaLélé.

> ⚠️ **À remplacer en production.** HokaLélé étant une marque fictive, aucune
> photo ne porte son identité. Pour une mise en ligne réelle, substituez ces
> visuels par vos propres photographies produit et campagne (mêmes noms de
> fichiers dans `images/`, ou adaptez les `src` dans `index.html`).

Fichiers : `hero-runner.jpg`, `lifestyle-run.jpg`, `product-mach.jpg`,
`product-bondi.jpg`, `product-speedgoat.jpg`, `cat-running.jpg`,
`cat-trail.jpg`, `cat-training.jpg`, `cat-lifestyle.jpg`.

> Projet de démonstration. « HokaLélé » est une marque fictive : identité,
> couleurs et slogans sont originaux et ne reproduisent pas ceux de marques
> existantes.
