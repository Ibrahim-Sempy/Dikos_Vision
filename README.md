# Diko Restaurant - Système de Gestion Complet

Un système de gestion de restaurant moderne et complet développé avec une architecture monorepo utilisant Turborepo.

## 🏗️ Architecture

Ce projet utilise une architecture monorepo avec les applications suivantes :

- **`apps/client`** - Application front-end client (Vite + React)
- **`apps/admin`** - Dashboard d'administration (React Admin)
- **`apps/api`** - Backend API REST (Node.js + Express)
- **`packages/*`** - Code partagé (composants, hooks, types, styles, utils)

## 🚀 Technologies

### Frontend
- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **React Query** pour la gestion des données
- **React Router** pour la navigation
- **React i18next** pour l'internationalisation

### Backend
- **Node.js** avec Express
- **Supabase** (PostgreSQL + Auth)
- **Cloudinary** pour la gestion des médias
- **Socket.io** pour les mises à jour temps réel
- **Stripe** pour les paiements

### DevOps & Outils
- **Turborepo** pour la gestion du monorepo
- **pnpm** comme gestionnaire de packages
- **ESLint** et **Prettier** pour la qualité du code
- **TypeScript** pour la sécurité des types

## 📦 Installation

### Prérequis
- Node.js 18+
- pnpm 8+

### Installation des dépendances
\`\`\`bash
# Cloner le repository
git clone <repository-url>
cd diko-restaurant

# Installer les dépendances
pnpm install
\`\`\`

### Configuration des variables d'environnement

Créer les fichiers `.env` nécessaires :

#### `apps/api/.env`
\`\`\`env
# Base de données
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key

# JWT
JWT_SECRET=your_jwt_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# Email
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Autres
NODE_ENV=development
PORT=3001
CLIENT_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
\`\`\`

#### `apps/client/.env`
\`\`\`env
VITE_API_URL=http://localhost:3001/api
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
\`\`\`

#### `apps/admin/.env`
\`\`\`env
VITE_API_URL=http://localhost:3001/api
\`\`\`

## 🛠️ Développement

### Démarrer tous les services
\`\`\`bash
pnpm dev
\`\`\`

### Démarrer des services spécifiques
\`\`\`bash
# Client uniquement
pnpm client:dev

# Admin uniquement
pnpm admin:dev

# API uniquement
pnpm api:dev
\`\`\`

### Build
\`\`\`bash
# Build toutes les applications
pnpm build

# Build une application spécifique
pnpm build --filter=client
\`\`\`

### Tests
\`\`\`bash
# Lancer tous les tests
pnpm test

# Tests en mode watch
pnpm test:watch
\`\`\`

### Linting
\`\`\`bash
# Linter tout le code
pnpm lint

# Formater le code
pnpm format
\`\`\`

## 📁 Structure du Projet

\`\`\`
diko-restaurant/
├── apps/
│   ├── client/          # App client React
│   ├── admin/           # Dashboard admin
│   └── api/             # Backend Express
├── packages/
│   ├── components/      # Composants UI partagés
│   ├── hooks/           # Hooks React partagés
│   ├── types/           # Types TypeScript
│   ├── utils/           # Utilitaires partagés
│   ├── styles/          # Styles globaux
│   └── services/        # Services API partagés
├── scripts/             # Scripts d'automatisation
├── tests/               # Tests E2E globaux
└── docs/                # Documentation
\`\`\`

## 🌟 Fonctionnalités

### Client
- ✅ Consultation du menu avec filtres
- ✅ Gestion du panier
- ✅ Commandes en ligne
- ✅ Réservations de table
- ✅ Suivi des commandes en temps réel
- ✅ Profil utilisateur
- ✅ Historique des commandes
- ✅ Support multilingue

### Administration
- ✅ Dashboard avec métriques
- ✅ Gestion des commandes
- ✅ Gestion des réservations
- ✅ Gestion du menu
- ✅ Gestion des clients
- ✅ Suivi des livraisons
- ✅ Gestion des stocks
- ✅ Rapports et analytics
- ✅ Gestion des utilisateurs

### Backend
- ✅ API REST complète
- ✅ Authentification JWT
- ✅ Gestion des rôles
- ✅ WebSocket pour temps réel
- ✅ Upload de médias
- ✅ Intégration paiements
- ✅ Notifications email/SMS
- ✅ Logs et monitoring

## 🚀 Déploiement

### Frontend (Netlify)
\`\`\`bash
# Build et déploiement automatique via Git
pnpm build --filter=client
\`\`\`

### Backend (Render/Railway)
\`\`\`bash
# Build et déploiement
pnpm build --filter=api
\`\`\`

### Variables d'environnement de production
Configurer les mêmes variables que pour le développement avec les valeurs de production.

## 📚 Documentation

- [Guide de développement](./docs/development.md)
- [API Documentation](./docs/api.md)
- [Guide de déploiement](./docs/deployment.md)
- [Architecture](./docs/architecture.md)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

- **Développeur Principal** - [Votre nom]
- **UI/UX Designer** - [Nom du designer]
- **Product Owner** - [Nom du PO]

## 📞 Support

Pour toute question ou support :
- Email: support@diko-restaurant.com
- Documentation: [docs.diko-restaurant.com](https://docs.diko-restaurant.com)
- Issues: [GitHub Issues](https://github.com/your-repo/issues)
