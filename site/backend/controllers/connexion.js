const mysql = require("mysql");
const fs = require("fs");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: ' ',
    database: 'sitekabori',
    connectionLimit: 100 // Nombre maximal de connexions dans la pool
});

exports.getClientMailMdp = (req, res) => {
    const email = req.body.email
    const motdepasse = req.body.motdepasse

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE email = ? AND motdepasse = ?", [email, motdepasse], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

