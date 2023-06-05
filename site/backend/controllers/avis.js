const mysql = require("mysql");
const fs = require("fs");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'serveur-Kabori',
    password: 'Pd\)T23nGB-Tc3RU',
    database: 'siteKabori',
    ssl: {
        ca: fs.readFileSync('__certifs' + '/server-ca.pem'), // Chemin vers le certificat de l'autorité de certification
        key: fs.readFileSync('__certifs' + '/client-key.pem'), // Chemin vers la clé privée du client
        cert: fs.readFileSync('__certifs' + '/client-cert.pem'), // Chemin vers le certificat du client
    },
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getAvis = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM avis", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postAvis = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const description = req.body.description;
    const prod = req.body.prod;

    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO avis (prod, description) VALUES (?, ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [prod, description], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deleteAvis = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const description = req.body.description;

    // Suppression sur base du nom
    const sql = "DELETE FROM avis WHERE description = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [description], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

