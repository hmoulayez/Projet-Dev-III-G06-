const mysql = require("mysql");
const fs = require("fs");
const cloudinary = require('cloudinary').v2;
const pool = mysql.createPool({
    host: '15.236.173.35',
    user: 'admin',
    password: 'ephecephec',
    database: 'Kabori',
    connectionLimit: 100 // Nombre maximal de connexions dans la pool
});
cloudinary.config({
    cloud_name: 'dhsfpkkqj',
    api_key: '436354294995913',
    api_secret: 'M2uDXuvaSQkMsJaBReM3yqaZ--E'
});

exports.getPhotocreations = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM photocreations", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postPhotocreations =  (req, res) => {
    // Récupération des valeurs depuis le corps de la requête

    const PublicId = req.body.url;
    const description = req.body.description;
    const nom = req.body.nom;

    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO photocreations (url, description, nom) VALUES (?, ?, ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("INSERT INTO photocreations (url,nom,description) VALUES (?,?,?)", [PublicId, nom, description], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
 };

exports.deletePhotocreations = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nom = req.params.nom;

    // Suppression sur base du nom
    const sql = "DELETE FROM photocreations WHERE nom = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};