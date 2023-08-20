const express = require('express');
const {getAllstatus} = require("../controllers/statuts");
const router = express.Router();

router.get('/', getAllstatus);


module.exports = router;