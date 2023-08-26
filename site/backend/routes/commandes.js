const express = require('express');
const {getAllCommandes, updateCommandes, updateStatut, deleteCommandes} = require("../controllers/commandes");
const {deleteProd} = require("../controllers/produits");
const router = express.Router();

router.get('/', getAllCommandes);

router.put('/', updateCommandes);

router.put('/statut/', updateStatut);

router.delete('/:id', deleteCommandes);


module.exports = router;