const mysql = require("mysql");
const fs = require("fs");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sitekabori',
    connectionLimit: 100 // Nombre maximal de connexions dans la pool
});


// Fonction de contrôleur pour la souscription (inscription)
exports.subscribe = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const motdepasse = req.body.motdepasse;
    const is_admin = req.body.is_admin;

    // Effectuez la logique de souscription ici, par exemple, insérer les données dans la base de données

    // Utilisez le pool pour exécuter des requêtes SQL

    // Exemple de requête d'insertion
    const sql = "INSERT INTO clients (nom, prenom, email, motdepasse, is_admin) VALUES (?, ?, ?, ?, ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom, prenom, email, motdepasse, is_admin], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

// Fonction de contrôleur pour la connexion
exports.connexion = (req, res) => {
    const email = req.body.email;
    const motdepasse = req.body.motdepasse;
    const is_admin = req.body.is_admin;

    // Effectuez la logique de connexion ici, par exemple, vérifiez les informations dans la base de données

    // Utilisez le pool pour exécuter des requêtes SQL

    // Exemple de requête de vérification (à des fins de démonstration)
    const sql = "SELECT * FROM clients WHERE email = ? AND motdepasse = ? AND is_admin = ?" ;
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [email, motdepasse, is_admin], (err, result, fields) => {
            con.release();
            if (err) throw err;

            if (result.length > 0) {
                // Connexion réussie
                res.json({ message: "Connexion réussie" });
            } else {
                // Connexion échouée
                res.json({ message: "Identifiants incorrects" });
            }
        });
    });
};
exports.getAllClients = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getClientsNom = (req, res) => {
    const nom = req.param.nom

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE nom = ?", [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getClientsPrenom = (req, res) => {
    const prenom = req.params.prenom

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE prenom = ?", [prenom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getClientsMail = (req, res) => {
    const email = req.params.email

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE email = ?", [email], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getClientsNum = (req, res) => {
    const num = req.params.num

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE num = ?", [num], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postClients = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const adresse = req.body.adresse;
    const email = req.body.email;
    const num = req.body.num;
    const motdepasse = req.body.motdepasse;


    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO clients (nom,prenom,adresse,email,num,motdepasse) VALUES (?,?,?,?,?,?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom,prenom,adresse,email,num,motdepasse], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deleteClients = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const id = req.params.id;
    const nom = req.params.nom;
    const email = req.params.email;


    // Suppression sur base du nom de la collection ou de la catégorie
    const sql = "DELETE FROM clients WHERE (id = ? OR nom = ? OR email = ? )";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [id, nom, email], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};