const express = require('express');
const {getAllCommandes, updateCommandes, updateStatut} = require("../controllers/commandes");
const router = express.Router();

router.get('/', getAllCommandes);

router.put('/', updateCommandes);

router.put('/statut/', updateStatut);



module.exports = router;