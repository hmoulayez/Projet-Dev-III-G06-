import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import NotFound from "@/views/NotFound.vue";

const routes= [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/creations',
    name: 'Creations',
    component: () =>
        import('../views/Creations.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () =>
        import('../views/Connexion.vue')
  },
  {
    path: '/devis',
    name: 'Devis',
    component: () =>
        import('../views/Devis.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () =>
        import('../views/Services.vue')
  },
  {
    path: '/marque',
    name: 'Marque',
    component: () =>
        import('../views/Marque.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
        import('../views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () =>
        import('../views/FAQ.vue')
  },
  {
    path: '/confidentialite',
    name: 'Confidentialite',
    component: () =>
        import('../views/Confidentialite.vue')
  },
  {
    path: '/politiquecommande',
    name: 'PolitiqueCommande',
    component: () =>
        import('../views/PolitiqueCommande.vue')
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: () =>
        import('../views/Cookies.vue')
  },
  {
    path: '/modifcatalogue',
    name: 'ModifCatalogue',
    component: () =>
        import('../views/ModifCatalogue.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: () =>
        import('../views/NotFound.vue')
  },
  {
    path:'/suppressionCatalogue',
    name: 'SuppressionCatalogue',
    component: () =>
        import('../views/SuppressionCatalogue.vue')
  },
  {
    path:'/ajouterCollectionCateg',
    name: 'AjouterCollectionCateg',
    component: () =>
        import('../views/AjouterCollectionCateg.vue')
  },
  {
    path:'/gestionCommandes',
    name: 'GestionCommandes',
    component: () =>
        import('../views/GestionCommandes.vue')
  },
  {
    path:'/infosprofil',
    name: 'InfosProfil',
    component: () =>
        import('../views/InfosProfil.vue')
  },

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
