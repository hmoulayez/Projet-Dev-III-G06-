const mysql = require("mysql");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'serveur-Kabori',
    password: 'Pd\)T23nGB-Tc3RU',
    database: 'siteKabori',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
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

