const mysql = require("mysql");
const fs = require("fs");
const pool = mysql.createPool({
    host: '15.236.173.35',
    user: 'admin',
    password: 'ephecephec',
    database: 'Kabori',
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