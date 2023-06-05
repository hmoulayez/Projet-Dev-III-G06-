const mysql = require("mysql");
const fs = require("fs");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'serveur-Kabori',
    password: 'Pd\)T23nGB-Tc3RU',
    database: 'siteKabori',
    ssl: {
        ca: fs.readFileSync('/home/bitnami/certifs/server-ca.pem'), // Chemin vers le certificat de l'autorité de certification
        key: fs.readFileSync('/home/bitnami/certifs/client-key.pem '), // Chemin vers la clé privée du client
        cert: fs.readFileSync('/home/bitnami/certifs/client-cert.pem '), // Chemin vers le certificat du client
    },
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getPhotoevents = (req, res) => {
    // Obtenir une connexion à partir de la pool
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM photoevents", (err, result, fields) => {
            // Libérer la connexion une fois la requête terminée
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postPhotoevents = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const url = req.body.url;
    const description = req.body.description;
    const nom = req.body.nom;

    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO photoevents (url, description, nom) VALUES (?, ?, ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [url, description, nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deletePhotoevents = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nom = req.body.nom;

    // Suppression sur base du nom
    const sql = "DELETE FROM photoevents WHERE nom = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};