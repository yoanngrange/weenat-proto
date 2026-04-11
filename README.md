# Proto

Prototype avec Vite et Vanilla JavaScript.

## Commandes

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Générer la version de production dans `dist`
- `npm run deploy` - Build pour déploiement (utilisé par GitHub Pages)

## Déploiement GitHub Pages

Le projet est configuré pour être publié sur GitHub Pages via CI/CD.

- `vite.config.js` a `base: './'`
- `package.json` contient `homepage: '.'`
- Le workflow GitHub Actions est défini dans `.github/workflows/deploy.yml`
