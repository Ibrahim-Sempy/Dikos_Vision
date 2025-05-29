const translations = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      save: 'Save',
      cancel: 'Cancel',
      submit: 'Submit',
      required: 'Required',
      success: 'Success!',
    },
    nav: {
      home: 'Home',
      menu: 'Menu',
      reservation: 'Reservation',
      cart: 'Cart',
      login: 'Login',
      register: 'Register',
      profile: 'Profile',
      logout: 'Logout',
    },
    home: {
      title: 'Welcome',
      hero: {
        title: 'Culinary Excellence at Its Finest',
        subtitle: 'Experience the perfect blend of flavors, ambiance, and service.',
        menuButton: 'Explore Menu',
        reserveButton: 'Reserve a Table',
      },
      featuredMenu: {
        title: 'Featured Dishes',
        subtitle: 'Our chef\'s selection of mouth-watering creations just for you',
        viewButton: 'View',
        exploreButton: 'Explore Full Menu',
        item1: {
          name: 'Crispy Calamari',
          description: 'Lightly battered and fried calamari rings served with a zesty marinara sauce.',
          price: '12.99'
        },
        item2: {
          name: 'Filet Mignon',
          description: 'Tender 8oz filet, cooked to perfection, served with roasted vegetables and mashed potatoes.',
          price: '34.99'
        },
        item3: {
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
          price: '8.99'
        }
      },
      reservation: {
        title: 'Reserve Your Table',
        subtitle: 'Make a reservation in advance to ensure the best dining experience.',
        button: 'Make a Reservation'
      },
      testimonials: {
        title: 'What Our Guests Say',
        subtitle: 'Discover why our guests keep coming back',
        person1: {
          name: 'Emily Johnson',
          quote: 'The food was absolutely incredible! Every bite was a delight to the senses. Will definitely be coming back soon!'
        },
        person2: {
          name: 'Michael Rodriguez',
          quote: 'Outstanding service and atmosphere. The staff made our anniversary dinner truly special. Highly recommended!'
        },
        person3: {
          name: 'Sarah Thompson',
          quote: 'The chef\'s special was amazing. Gourmet Haven has become our favorite weekend spot for family dinners.'
        }
      }
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'Explore our carefully crafted dishes made with the finest ingredients',
      searchPlaceholder: 'Search menu items...',
      noSearchResults: 'No items found matching "{searchTerm}"',
      noItemsInCategory: 'No items available in this category',
      addToCart: 'Add to Cart',
      addedToCart: 'Item added to cart!',
      customizeItem: 'Customize {item}',
      selectOptions: 'Select Options',
      quantity: 'Quantity',
      totalPrice: 'Total Price',
      customizableOptions: '{count} customizable options'
    },
    cart: {
      title: 'Your Cart',
      emptyCart: 'Your cart is empty',
      continueShopping: 'Continue Shopping',
      subtotal: 'Subtotal',
      tax: 'Tax',
      total: 'Total',
      checkout: 'Checkout',
      removeItem: 'Remove',
      updateQuantity: 'Update',
      clearCart: 'Clear Cart',
      itemCount: '{count} items',
      emptyCartMessage: 'Looks like your cart is empty. Explore our menu to add some delicious items!'
    },
    reservation: {
      title: 'Make a Reservation',
      subtitle: 'Reserve your table in advance for a seamless dining experience',
      date: 'Date',
      time: 'Time',
      guests: 'Number of Guests',
      specialRequests: 'Special Requests',
      specialRequestsPlaceholder: 'Allergies, special occasions, seating preferences...',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      submitButton: 'Confirm Reservation',
      loginPrompt: 'Please login to make a reservation',
      success: 'Reservation submitted successfully! We\'ll confirm shortly.',
      availableTimes: 'Available Times',
      noTimesAvailable: 'No times available for the selected date. Please try another date.',
      datePickerLabel: 'Select a date for your reservation'
    },
    login: {
      title: 'Login to Your Account',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      submitButton: 'Login',
      forgotPassword: 'Forgot Password?',
      noAccount: 'Don\'t have an account?',
      register: 'Register Now',
      error: 'Invalid email or password'
    },
    register: {
      title: 'Create an Account',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm Password',
      submitButton: 'Register',
      hasAccount: 'Already have an account?',
      login: 'Login',
      success: 'Account created successfully!',
      passwordMismatch: 'Passwords do not match',
      emailExists: 'This email is already in use'
    },
    profile: {
      title: 'Your Profile',
      personalInfo: 'Personal Information',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      addressLabel: 'Address',
      saveButton: 'Save Changes',
      orderHistory: 'Order History',
      noOrders: 'No orders yet',
      reservations: 'Your Reservations',
      noReservations: 'No reservations yet',
      logoutButton: 'Logout',
      updateSuccess: 'Profile updated successfully!'
    },
    footer: {
      tagline: 'Delivering exceptional dining experiences since 2010.',
      quickLinks: 'Quick Links',
      openingHours: 'Opening Hours',
      contact: 'Contact Us',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      rightsReserved: 'All rights reserved.'
    },
    accessibility: {
      changeLanguage: 'Change language',
      cart: 'Shopping cart',
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    }
  },
  fr: {
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      save: 'Enregistrer',
      cancel: 'Annuler',
      submit: 'Soumettre',
      required: 'Obligatoire',
      success: 'Succès !',
    },
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      reservation: 'Réservation',
      cart: 'Panier',
      login: 'Connexion',
      register: 'S\'inscrire',
      profile: 'Profil',
      logout: 'Déconnexion',
    },
    home: {
      title: 'Bienvenue',
      hero: {
        title: 'Excellence Culinaire à son Meilleur',
        subtitle: 'Découvrez l\'harmonie parfaite entre saveurs, ambiance et service.',
        menuButton: 'Explorer le Menu',
        reserveButton: 'Réserver une Table',
      },
      featuredMenu: {
        title: 'Plats Vedettes',
        subtitle: 'La sélection du chef de créations savoureuses juste pour vous',
        viewButton: 'Voir',
        exploreButton: 'Explorer le Menu Complet',
        item1: {
          name: 'Calamars Croustillants',
          description: 'Anneaux de calamars légèrement panés et frits, servis avec une sauce marinara.',
          price: '12,99'
        },
        item2: {
          name: 'Filet Mignon',
          description: 'Filet tendre de 8oz, cuit à la perfection, servi avec légumes rôtis et purée de pommes de terre.',
          price: '34,99'
        },
        item3: {
          name: 'Gâteau au Chocolat Fondant',
          description: 'Gâteau au chocolat chaud avec un centre fondant, servi avec de la glace à la vanille.',
          price: '8,99'
        }
      },
      reservation: {
        title: 'Réservez Votre Table',
        subtitle: 'Faites une réservation à l\'avance pour garantir la meilleure expérience culinaire.',
        button: 'Faire une Réservation'
      },
      testimonials: {
        title: 'Ce que Disent Nos Clients',
        subtitle: 'Découvrez pourquoi nos clients reviennent',
        person1: {
          name: 'Émilie Dupont',
          quote: 'La nourriture était absolument incroyable ! Chaque bouchée était un délice pour les sens. Je reviendrai certainement bientôt !'
        },
        person2: {
          name: 'Michel Rodriguez',
          quote: 'Service et ambiance exceptionnels. Le personnel a rendu notre dîner d\'anniversaire vraiment spécial. Fortement recommandé !'
        },
        person3: {
          name: 'Sarah Martin',
          quote: 'La spécialité du chef était incroyable. Gourmet Haven est devenu notre lieu préféré pour les dîners en famille le week-end.'
        }
      }
    },
    menu: {
      title: 'Notre Menu',
      subtitle: 'Explorez nos plats soigneusement préparés avec les meilleurs ingrédients',
      searchPlaceholder: 'Rechercher des plats...',
      noSearchResults: 'Aucun plat trouvé correspondant à "{searchTerm}"',
      noItemsInCategory: 'Aucun plat disponible dans cette catégorie',
      addToCart: 'Ajouter au Panier',
      addedToCart: 'Plat ajouté au panier !',
      customizeItem: 'Personnaliser {item}',
      selectOptions: 'Sélectionner les Options',
      quantity: 'Quantité',
      totalPrice: 'Prix Total',
      customizableOptions: '{count} options personnalisables'
    },
    cart: {
      title: 'Votre Panier',
      emptyCart: 'Votre panier est vide',
      continueShopping: 'Continuer les Achats',
      subtotal: 'Sous-total',
      tax: 'Taxes',
      total: 'Total',
      checkout: 'Commander',
      removeItem: 'Supprimer',
      updateQuantity: 'Mettre à jour',
      clearCart: 'Vider le Panier',
      itemCount: '{count} articles',
      emptyCartMessage: 'Votre panier semble être vide. Explorez notre menu pour ajouter des plats délicieux !'
    },
    reservation: {
      title: 'Faire une Réservation',
      subtitle: 'Réservez votre table à l\'avance pour une expérience culinaire sans faille',
      date: 'Date',
      time: 'Heure',
      guests: 'Nombre de Convives',
      specialRequests: 'Demandes Spéciales',
      specialRequestsPlaceholder: 'Allergies, occasions spéciales, préférences de places...',
      name: 'Nom Complet',
      email: 'Adresse Email',
      phone: 'Numéro de Téléphone',
      submitButton: 'Confirmer la Réservation',
      loginPrompt: 'Veuillez vous connecter pour faire une réservation',
      success: 'Réservation soumise avec succès ! Nous confirmerons sous peu.',
      availableTimes: 'Horaires Disponibles',
      noTimesAvailable: 'Aucun horaire disponible pour la date sélectionnée. Veuillez essayer une autre date.',
      datePickerLabel: 'Sélectionnez une date pour votre réservation'
    },
    login: {
      title: 'Connexion à Votre Compte',
      emailLabel: 'Adresse Email',
      passwordLabel: 'Mot de Passe',
      submitButton: 'Se Connecter',
      forgotPassword: 'Mot de Passe Oublié?',
      noAccount: 'Vous n\'avez pas de compte?',
      register: 'S\'inscrire Maintenant',
      error: 'Email ou mot de passe invalide'
    },
    register: {
      title: 'Créer un Compte',
      nameLabel: 'Nom Complet',
      emailLabel: 'Adresse Email',
      passwordLabel: 'Mot de Passe',
      confirmPasswordLabel: 'Confirmer le Mot de Passe',
      submitButton: 'S\'inscrire',
      hasAccount: 'Vous avez déjà un compte?',
      login: 'Se Connecter',
      success: 'Compte créé avec succès!',
      passwordMismatch: 'Les mots de passe ne correspondent pas',
      emailExists: 'Cet email est déjà utilisé'
    },
    profile: {
      title: 'Votre Profil',
      personalInfo: 'Informations Personnelles',
      nameLabel: 'Nom Complet',
      emailLabel: 'Adresse Email',
      phoneLabel: 'Numéro de Téléphone',
      addressLabel: 'Adresse',
      saveButton: 'Enregistrer les Modifications',
      orderHistory: 'Historique des Commandes',
      noOrders: 'Aucune commande pour le moment',
      reservations: 'Vos Réservations',
      noReservations: 'Aucune réservation pour le moment',
      logoutButton: 'Déconnexion',
      updateSuccess: 'Profil mis à jour avec succès!'
    },
    footer: {
      tagline: 'Offrant des expériences culinaires exceptionnelles depuis 2010.',
      quickLinks: 'Liens Rapides',
      openingHours: 'Heures d\'Ouverture',
      contact: 'Contactez-nous',
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thursday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
      rightsReserved: 'Tous droits réservés.'
    },
    accessibility: {
      changeLanguage: 'Changer de langue',
      cart: 'Panier d\'achat',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu'
    }
  }
};

export default translations;