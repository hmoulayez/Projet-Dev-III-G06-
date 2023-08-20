const express = require('express');
const { getAllClients, getClientsNom, getClientsPrenom, getClientsMail, getClientsNum, postClients, deleteClients, subscribe, connexion } = require("../controllers/clients");
const router = express.Router();

// Routes GET
router.get('/', getAllClients);
router.get('/:nom', getClientsNom);
router.get('/:prenom', getClientsPrenom);
router.get('/:email', getClientsMail);
router.get('/:num', getClientsNum);

// Route POST pour l'inscription
router.post('/subscribe', subscribe);

// Route POST pour la connexion
router.post('/connexion', connexion);

// Route POST pour l'ajout d'un client
router.post('/', postClients);

// Route DELETE
router.delete('/:id/:nom/:email', deleteClients);

module.exports = router;
