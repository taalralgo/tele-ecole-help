# Design reference — Télé École landing

Fichiers de travail pour l’implémentation. **Non servis par Next.js** (hors de `public/`).

## Sources officielles

| Fichier | Rôle |
|---|---|
| `source/hero.jpeg` | Composition campagne complète (1580×995) — image de partage social |
| `source/hero-title.jpg` | Illustration titre « A BRÛLÉ » (770×285) |
| `source/qrcode_wave.jpeg` | QR Wave scannable (source complète) |
| `source/qrcode_orange_money.jpeg` | QR Orange Money scannable |

## Orthographe campagne

Le titre graphique et les textes utilisent **« A / a brûlé »** (sans accent grave sur le A initial). Ne pas utiliser « À brûlé ».

## Génération des assets publics

```bash
npm run assets:hero
```

Le script lit `public/campaign/hero.jpeg` pour les extraits photo/logo/favicons, et `source/hero-title.jpg` pour le titre hero.

| Source | Asset généré | Utilisation |
|---|---|---|
| `source/hero-title.jpg` | `public/campaign/hero-title.webp` | Titre hero (page d’accueil) |
| `public/campaign/hero.jpeg` | `public/campaign/hero-scene.webp` | Photo hero (colonne droite) |
| `public/campaign/hero.jpeg` | `public/campaign/campaign-logo.webp` | Logo header |
| `public/campaign/hero.jpeg` | favicons (`app/icon.png`, etc.) | Icônes navigateur |
| `source/qrcode_wave.jpeg` | `public/qr/wave-card.jpeg` | QR Wave mobile |
| `source/qrcode_orange_money.jpeg` | `public/brand/orange-money.webp` | Logo Orange Money |

Assets servis directement (non régénérés par le script) :

| Fichier | Utilisation |
|---|---|
| `public/campaign/hero.jpeg` | Open Graph, Twitter, JSON-LD |
| `public/qr/wave.jpeg` | Fiche Wave desktop + sprite CSS mobile |

## Mise à jour d’une visuelle

1. Modifier le fichier source dans `design-reference/source/`.
2. Copier `source/hero.jpeg` vers `public/campaign/hero.jpeg` si la composition complète change.
3. Lancer `npm run assets:hero`.
4. Vérifier le hero et l’aperçu de partage (`app/layout.tsx` pointe vers `/campaign/hero.jpeg`).

Les réseaux sociaux mettent en cache l’image OG : un changement peut mettre plusieurs jours à apparaître.

## Arbitrages validés

- **Coordonnées** : +221 77 512 27 02 · info@tele-ecole.tv · tele-ecole.tv
- **QR** : utiliser les fichiers source réels, jamais les QR redessinés.
