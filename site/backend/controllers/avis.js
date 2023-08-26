const mysql = require("mysql");
const fs = require("fs");
const pool = mysql.createPool({
    host: '15.236.173.35',
    user: 'admin',
    password: 'ephecephec',
    database: 'Kabori',
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

