/diko-restaurant
│
├── apps
│   ├── client                          # Application front-end destinée aux clients finaux
│   │   ├── public                     # Fichiers statiques accessibles publiquement (favicon, manifest, etc.)
│   │   ├── src
│   │   │   ├── assets                 # Images, icônes, polices spécifiques à l’app client
│   │   │   ├── components             # Composants React réutilisables spécifiques au client
│   │   │   ├── hooks                  # Hooks React personnalisés pour la logique métier client
│   │   │   ├── i18n                   # Traductions spécifiques à l’app client (JSON)
│   │   │   ├── pages                  # Pages principales (Menu, Commande, Réservation, Profil, etc.)
│   │   │   ├── services               # Services pour appels API vers le backend
│   │   │   ├── styles                 # Styles CSS/SCSS spécifiques client (import de Tailwind global)
│   │   │   ├── utils                  # Fonctions utilitaires (formatage, validation, etc.)
│   │   │   └── App.jsx                # Composant racine React du client
│   │   ├── index.html                 # Template HTML principal client
│   │   ├── vite.config.js             # Configuration Vite spécifique client
│   │   └── package.json               # Dépendances et scripts client
│   │
│   ├── admin                           # Dashboard d’administration (React Admin)
│   │   ├── public                     # Fichiers statiques accessibles publiquement pour l’admin
│   │   ├── src
│   │   │   ├── components             # Composants React spécifiques à l’admin (tableaux, formulaires)
│   │   │   ├── dataProvider           # DataProvider personnalisé pour React Admin (connexion API)
│   │   │   ├── hooks                  # Hooks React spécifiques à l’admin
│   │   │   ├── i18n                   # Traductions spécifiques à l’admin (JSON)
│   │   │   ├── resources              # Définition des ressources (Users, Orders, Menu, etc.)
│   │   │   ├── services               # Services pour appels API backend
│   │   │   ├── styles                 # Styles CSS/SCSS spécifiques admin (import Tailwind global)
│   │   │   ├── utils                  # Fonctions utilitaires admin
│   │   │   └── App.jsx                # Composant racine React de l’admin
│   │   ├── index.html                 # Template HTML principal admin
│   │   ├── vite.config.js             # Configuration Vite spécifique admin
│   │   └── package.json               # Dépendances et scripts admin
│   │
│   └── api                             # Backend Express.js (API REST)
│       ├── src
│       │   ├── config                 # Configuration globale (DB, clés API, variables d’environnement)
│       │   ├── controllers            # Logique métier (gestion commandes, utilisateurs, etc.)
│       │   ├── middlewares            # Middlewares (authentification, gestion erreurs, logs)
│       │   ├── models                 # Modèles de données / ORM (schéma base de données)
│       │   ├── routes                 # Définition des routes API REST
│       │   ├── services               # Services externes (Cloudinary, paiements, géolocalisation)
│       │   ├── utils                  # Fonctions utilitaires backend
│       │   └── server.js              # Point d’entrée de l’application Express
│       ├── tests                     # Tests unitaires et d’intégration backend
│       ├── .env                      # Variables d’environnement backend (secrets, clés)
│       ├── package.json
│       └── README.md                 # Documentation backend
│
├── packages                           # Code partagé entre apps (UI, hooks, i18n, styles, utils)
│   ├── components                    # Composants React génériques réutilisables (boutons, modals, etc.)
│   ├── constants                     # Constantes globales (rôles, statuts, etc.)
│   ├── hooks                         # Hooks React partagés entre client et admin
│   ├── i18n                         # Traductions partagées et organisées
│   │   ├── common                   # Traductions communes à toutes les apps (labels, erreurs, boutons)
│   │   ├── client                   # Traductions spécifiques partagées au front client
│   │   └── admin                    # Traductions spécifiques partagées au dashboard admin
│   ├── services                     # Services partagés (ex: API client commun)
│   ├── styles                       # Styles globaux et configuration Tailwind CSS partagée
│   │   ├── globals.css             # Import des directives Tailwind (@tailwind base; etc.)
│   │   ├── postcss.config.js       # Configuration PostCSS
│   │   └── tailwind.config.js      # Configuration Tailwind CSS centralisée
│   ├── types                       # Typescript types/interfaces (si TS utilisé)
│   └── utils                       # Fonctions utilitaires partagées
│
├── scripts                          # Scripts d’automatisation (build, lint, tests, déploiement)
├── tests                            # Tests end-to-end globaux (Cypress, Playwright, etc.)
├── .editorconfig                   # Configuration éditeur commune
├── .env                            # Variables d’environnement globales (optionnel)
├── .eslintignore                   # Fichiers ignorés par ESLint
├── .eslintrc.js                   # Configuration ESLint
├── .gitignore                     # Fichiers/dossiers ignorés par Git
├── pnpm-workspace.yaml            # Configuration workspace pnpm
├── package.json                   # Dépendances et scripts racine
├── turbo.json                    # Configuration Turborepo
├── README.md                     # Documentation globale du projet
└── LICENSE                      # Licence du projet
