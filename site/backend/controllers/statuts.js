const mysql = require("mysql");
<<<<<<< HEAD
const fs = require("fs");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'serveur-Kabori',
    password: 'Pd\\)T23nGB-Tc3RU',
=======
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
>>>>>>> 6f53895 (modification et ajout pour la gestion catalogue cotée admin et ajout de gestion de commande coté admin aussi.)
    database: 'siteKabori',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getAllstatus = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM statuts", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};