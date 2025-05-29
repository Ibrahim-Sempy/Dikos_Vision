# Analyse fonctionnelle et technique – Schéma, Relations, Flux, Scénarios

## 1. Schéma de base de données (Conceptuel et relationnel)

### 1.1 Entités principales et attributs clés

| Entité            | Attributs principaux                                                                 | Description / Relations clés                                   |
|-------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------|
| **User**          | id, nom, email, mot_de_passe, rôle (admin, serveur, cuisinier, livreur), téléphone  | Utilisateurs du système, avec rôles et permissions            |
| **Client**        | id, user_id (FK), adresse, préférences, historique commandes                        | Profil client lié à un user, historique et préférences        |
| **Restaurant**    | id, nom, adresse, téléphone, description, logo, horaires, devise, langue            | Informations générales sur le restaurant                       |
| **Category**      | id, nom, description, parent_id (pour sous-catégories)                             | Catégories de menu, hiérarchisées                             |
| **Item**          | id, category_id (FK), nom, description, prix, image, disponibilité                  | Plats ou produits proposés                                    |
| **Variant**       | id, item_id (FK), nom, supplément_prix, options                                    | Variantes/options des plats                                   |
| **Menu**          | id, nom, date_debut, date_fin                                                     | Menus temporaires ou permanents                               |
| **Menu_Item**     | id, menu_id (FK), item_id (FK), ordre                                            | Association menu-items avec ordre d’affichage                 |
| **Reservation**   | id, client_id (FK), date_heure, nombre_personnes, statut, table_id (FK)             | Réservations de tables                                        |
| **Table**         | id, numéro, capacité, statut                                                     | Tables physiques du restaurant                                |
| **Order**         | id, client_id (FK), statut, date_commande, total                                  | Commandes passées par clients                                 |
| **Order_Item**    | id, order_id (FK), item_id (FK), variant_id (FK), quantité, prix_unitaire          | Détails des items commandés                                  |
| **Delivery**      | id, order_id (FK), livreur_id (FK), statut, position_gps, temps_estime             | Suivi des livraisons                                         |
| **Stock**         | id, item_id (FK), quantité_disponible, seuil_alerte                              | Gestion des stocks                                          |
| **Supplier**      | id, nom, contact, adresse                                                        | Fournisseurs                                               |
| **Purchase_Order**| id, supplier_id (FK), date_commande, statut                                      | Commandes fournisseurs                                     |
| **Payment**       | id, order_id (FK), mode, montant, statut                                        | Paiements effectués                                        |
| **Media**         | id, url, type, catégorie, tags                                                  | Bibliothèque média (Cloudinary)                            |
| **QRCode**        | id, table_id (FK), url, date_expiration                                        | QR Codes liés aux tables                                  |
| **Setting**       | clé, valeur                                                                     | Paramètres globaux (entreprise, SEO, apparence, etc.)     |

### 1.2 Relations clés

- Un **User** peut être un **Client** ou un membre du personnel (via rôle).  
- Un **Client** peut avoir plusieurs **Reservations** et **Orders**.  
- Un **Order** contient plusieurs **Order_Items**, chacun lié à un **Item** et éventuellement une **Variant**.  
- Un **Item** appartient à une **Category** et peut apparaître dans plusieurs **Menus**.  
- Une **Delivery** est liée à une **Order** et un **Livreur** (User avec rôle livreur).  
- Les **Stocks** sont liés aux **Items** pour gestion des quantités.  
- Les **Media** sont associés aux **Items**, **Categories**, ou sections du site via tags.  
- Les **QRCodes** sont associés aux **Tables** pour la prise de commande.

## 2. Flux d’utilisation et scénarios typiques

### 2.1 Prise de commande client (via app client)

1. Le client consulte le menu (catégories, items, variantes).  
2. Le client sélectionne des items, personnalise via variantes, ajoute au panier.  
3. Le client valide la commande, choisit mode de paiement et adresse (sur place, livraison).  
4. La commande est envoyée au backend, enregistrée avec statut “en attente”.  
5. Le client peut suivre le statut (préparation, en livraison, livrée).  
6. En cas de livraison, le suivi GPS est accessible en temps réel.

### 2.2 Gestion des commandes côté admin

1. Le personnel visualise les commandes entrantes, avec détails.  
2. Le statut de la commande est mis à jour (préparation, prête, servie, annulée).  
3. Les commandes sont envoyées en cuisine via interface dédiée.  
4. Les livreurs reçoivent les commandes à livrer avec itinéraires optimisés.  
5. Les paiements sont validés et synchronisés avec la caisse.

### 2.3 Gestion des réservations

1. Le client réserve une table via l’application ou le site.  
2. La réservation est enregistrée avec statut “en attente”.  
3. Le personnel valide ou modifie la réservation, gère le planning des tables.  
4. Notifications sont envoyées au client pour confirmation ou modification.

### 2.4 Gestion des stocks et approvisionnements

1. Chaque vente diminue automatiquement le stock des items concernés.  
2. Le personnel peut consulter les niveaux de stock, recevoir alertes seuils bas.  
3. Les commandes fournisseurs sont créées pour réapprovisionnement.  
4. Les réceptions sont enregistrées et stocks mis à jour.

### 2.5 Gestion des utilisateurs et rôles

- Création et gestion des comptes avec rôles spécifiques (admin, serveur, cuisinier, livreur).  
- Contrôle d’accès aux fonctionnalités selon rôle.

## 3. Diagrammes UML et séquences (exemples)

- **Diagramme de classes** pour visualiser entités et relations (cf. section 1).  
- **Diagramme de séquence** illustrant la prise de commande : client → API → admin → cuisine → livraison → client.  
- **Diagramme de flux** montrant interaction entre modules client, admin, backend, base de données et services tiers (paiement, géolocalisation, Cloudinary).

## 4. Points clés d’implémentation

- Utiliser des clés étrangères et contraintes d’intégrité pour garantir la cohérence des données.  
- Prévoir des index sur les colonnes fréquemment filtrées (statuts, dates, IDs).  
- Assurer la gestion des transactions pour les opérations critiques (commandes, paiements).  
- Implémenter un système d’audit pour tracer les modifications importantes (commandes, stocks, utilisateurs).  
- Prévoir une API REST sécurisée avec authentification JWT et gestion des permissions.

## 5. Ressources et références

- Tutoriel Back4app sur schéma de base de données restaurant avec exemples d’entités et relations[1].  
- Diagrammes UML de gestion restaurant (prise de commande, séquences)[2][4].  
- Modèles conceptuels de données pour menus, produits, réservations[5].  
- Bonnes pratiques pour la gestion des médias, QR Codes, paiements, stocks, et analyses.

