# Cahier des Charges Complet – Système de Gestion de Restaurant

---

## 1. Présentation générale du projet

### 1.1 Contexte  
Développer une solution complète et intégrée pour la gestion opérationnelle d’un restaurant, incluant la prise de commande, la gestion du menu, des réservations, des livraisons, la comptabilité, et l’administration.

### 1.2 Objectifs  
- Offrir une expérience utilisateur fluide et moderne sur les interfaces client et admin.  
- Centraliser la gestion via une API backend robuste connectée à une base de données performante.  
- Assurer la sécurité, la conformité réglementaire et la scalabilité du système.

---

## 2. Architecture technique

- **Monorepo géré par Turborepo**  
  - `/apps/client` : Application front-end client (Vite + React)  
  - `/apps/admin` : Dashboard admin (React Admin avec dataProvider custom)  
  - `/apps/api` : Backend RESTful (Node.js + Express)  
  - `/packages/shared` : Code partagé (types, composants, hooks, utils)  
- **Base de données** : Supabase (PostgreSQL + Auth)  
- **Stockage médias** : Cloudinary  
- **Hébergement** : Netlify (front-end), backend sur Render/Vercel ou Netlify Functions  
- **Authentification** : Supabase Auth (JWT, gestion des rôles)  

---

## 3. Fonctionnalités détaillées

### 3.1 Client (Front-end)

- Navigation intuitive et responsive  
- Consultation du menu avec catégories, items, variantes  
- Personnalisation des commandes (options, quantités)  
- Gestion du panier et validation de commande  
- Suivi en temps réel de l’état de la commande  
- Réservation de table avec calendrier interactif  
- Paiement en ligne sécurisé (multi-modes)  
- Consultation du suivi de livraison avec géolocalisation  
- Gestion du profil client, historique commandes et réservations  
- Multilingue (français, anglais, autres)  

### 3.2 Admin (Dashboard React Admin)

- Gestion complète du menu : items, catégories, variantes, promotions  
- Gestion des commandes : visualisation, modification des statuts, historique  
- Gestion des réservations : planning, notifications, annulations  
- Gestion des utilisateurs et rôles (admin, serveur, cuisinier, livreur)  
- Gestion des livraisons : suivi GPS, estimation temps, zones de livraison  
- Gestion de la bibliothèque média intégrée (Cloudinary)  
- Générateur et gestion des QR Codes personnalisés  
- Gestion des clients : CRM, segmentation, communication ciblée  
- Gestion des stocks : suivi, inventaire, commandes fournisseurs  
- Gestion comptable : ventes, dépenses, taxes, paie  
- Gestion des méthodes de paiement : intégration multi-prestataires  
- Paramètres généraux : entreprise, apparence, SEO, documents légaux  
- Tableaux de bord analytiques et reporting avancé  
- Gestion des notifications et alertes  

### 3.3 Backend (API Express)

- API RESTful sécurisée avec authentification JWT  
- Gestion des ressources : clients, commandes, menus, réservations, livraisons, stocks, paiements  
- Intégration avec Supabase pour la base de données et l’authentification  
- Intégration Cloudinary pour la gestion des médias  
- WebSocket ou polling pour mise à jour temps réel (commandes, livraisons)  
- Gestion des rôles et permissions  
- Logging, audit et gestion des erreurs  
- Export des données (CSV, PDF)  
- Intégration des services tiers (paiement, géolocalisation, SMS/email)  

---

## 4. Schéma de base de données (simplifié)

| Table              | Principaux champs clés                                   | Relations principales                          |
|--------------------|---------------------------------------------------------|-----------------------------------------------|
| users              | id, nom, email, mot_de_passe, rôle, téléphone           | 1-N commandes, réservations, livraisons       |
| clients            | id, user_id (FK), adresse, préférences, historique      | 1-N commandes, réservations                    |
| categories         | id, nom, description, ordre_affichage                    | 1-N items                                     |
| items              | id, catégorie_id (FK), nom, description, prix, image    | N-N variantes                                 |
| variants           | id, item_id (FK), nom, supplément_prix, options         |                                               |
| commandes          | id, client_id (FK), statut, date_commande, total         | 1-N commande_items, 1-N livraisons             |
| commande_items     | id, commande_id (FK), item_id (FK), variant_id (FK), qty |                                               |
| reservations       | id, client_id (FK), date_heure, table_id, statut         |                                               |
| tables             | id, numéro, capacité, statut                              |                                               |
| livraisons         | id, commande_id (FK), livreur_id (FK), statut, position_gps, temps_estime |                                               |
| stocks             | id, item_id (FK), quantité_disponible, seuil_alerte     |                                               |
| fournisseurs       | id, nom, contact, adresse                                | 1-N commandes_fournisseurs                     |
| commandes_fournisseurs | id, fournisseur_id (FK), date_commande, statut         |                                               |
| paiements          | id, commande_id (FK), mode_paiement, montant, statut    |                                               |
| media              | id, url, type, catégorie, tags                           |                                               |
| qrcodes            | id, table_id (FK), url_qrcode, date_expiration          |                                               |
| paramètres         | id, clé, valeur                                         |                                               |

---

## 5. Contraintes techniques et qualité

- Sécurité : chiffrement, gestion des accès, conformité RGPD  
- Performance : cache, optimisation requêtes, scalabilité  
- Tests : unitaires, fonctionnels, intégration, automatisés  
- Documentation complète (API, utilisateur, technique)  
- Accessibilité (WCAG 2.1 niveau AA)  
- Support multi-langues et multi-devises  
- Interface responsive et mobile-friendly  

---

## 6. Planning prévisionnel (exemple)

| Étape                     | Durée estimée  |
|---------------------------|----------------|
| Analyse & conception      | 2 semaines     |
| Maquettage UI/UX          | 2 semaines     |
| Développement client      | 3 semaines     |
| Développement admin/API   | 4 semaines     |
| Intégration & tests       | 2 semaines     |
| Déploiement & formation   | 1 semaine      |

---

## 7. Livrables attendus

- Applications client et admin fonctionnelles  
- Backend API complet et sécurisé  
- Documentation technique et utilisateur  
- Jeux de tests automatisés  
- Maquettes UI/UX validées  
- Rapport de conformité et sécurité  

