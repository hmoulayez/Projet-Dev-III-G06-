const mysql = require("mysql");
const fs = require("fs");
const pool = mysql.createPool({
    host: '15.236.173.35',
    user: 'admin',
    password: 'ephecephec',
    database: 'Kabori',
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

exports.deleteCommandes = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const id = req.params.id;

    // Suppression sur base du nom de la collection ou de la catégorie
    const sql = "DELETE FROM commandes WHERE (id = ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [id], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};