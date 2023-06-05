const mysql = require("mysql");
const nodemailer = require('nodemailer');
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
    connectionLimit: 20
});

exports.getDevis = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erreur lors de la connexion à la base de données');
            return;
        }
        con.query("SELECT * FROM devis", (err, result) => {
            con.release();
            if (err) {
                console.log(err);
                res.status(500).send('Erreur lors de la récupération des devis');
                return;
            }
            res.json(result);
        });
    });
};

exports.postDevis = (req, res) => {
    const client = req.body.nom;
    const emailclient = req.body.email;
    const produit = req.body.modele;
    const descriptionClient = req.body.remarque;
    const statut = 'Devis demandé'


    const sql = "INSERT INTO commandes (client, emailclient, produit, descriptionClient,statut) VALUES (?, ?, ?, ?,?)";

    pool.getConnection((err, con) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erreur lors de la connexion à la base de données');
            return;
        }
        con.query(sql, [client, emailclient, produit, descriptionClient,statut], (err) => {
            con.release();
            if (err) {
                console.log(err);
                res.status(500).send('Erreur lors de l\'insertion des données dans la base de données');
                return;
            }
            sendEmail(client, emailclient, produit, descriptionClient, statut, res);
        });
    });
};


function sendEmail(client, emailclient, produit, descriptionClient, res) {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 25,
        secure: false,
        auth: {
            user: 'marwachennaoui@outlook.be',
            pass: 'Tostos123@',
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    const mailOptions = {
        from: 'marwachennaoui@outlook.be',
        to: 'safachennaoui12@gmail.com',
        subject: 'Nouvelle demande de devis',
        html: `
            <p>Nouvelle demande de devis :</p>
            <ul>
                <li><strong>Client :</strong> ${client}</li>
                <li><strong>Email du client :</strong> ${emailclient}</li>
                <li><strong>Produit :</strong> ${produit}</li>
                <li><strong>Description du client :</strong> ${descriptionClient}</li>
            </ul>
        `
    };

    transporter.sendMail(mailOptions)
        .then((info) => {
            console.log('Message envoyé: %s', info.messageId);
            res.json({ message: 'La commande a été envoyée avec succès.' });
        })
        .catch((error) => {
            console.log(error);
        });
}
