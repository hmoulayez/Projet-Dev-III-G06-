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

exports.getAllCommandes = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM commandes", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.updateCommandes = (req, res) => {
    const idCmd = req.body.id;
    const descriptionAdminCmd = req.body.descriptionAdmin;

    // Suppression sur base du nom
    const sql = "UPDATE commandes SET descriptionAdmin = (?) WHERE id = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [descriptionAdminCmd, idCmd], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.updateStatut = (req, res) => {
    const idCmd = req.body.id;
    const statutCmd = req.body.statut;

    // Suppression sur base du nom
    const sql = "UPDATE commandes SET statut = (?) WHERE id = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [statutCmd, idCmd], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};