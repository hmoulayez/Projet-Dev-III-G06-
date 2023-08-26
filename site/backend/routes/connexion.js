const express = require('express');
const {getClientMailMdp} = require("../controllers/connexion");
const router = express.Router();

router.post('/', getClientMailMdp);

module.exports = router;