const mysql = require("mysql");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
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