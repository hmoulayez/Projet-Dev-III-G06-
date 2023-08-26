const mysql = require("mysql");
const nodemailer = require('nodemailer');
const fs = require("fs");

const pool = mysql.createPool({
    host: '15.236.173.35',
    user: 'admin',
    password: 'ephecephec',
    database: 'Kabori',
    connectionLimit: 20
});

exports.getContact = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) {
            console.error("Erreur de connexion à la base de données :", err);
            res.status(500).json({ message: "Erreur de connexion à la base de données" });
            return;
        }

        con.query("SELECT * FROM contact", (err, result) => {
            con.release();
            if (err) {
                console.error("Erreur lors de la récupération des contacts :", err);
                res.status(500).json({ message: "Erreur lors de la récupération des contacts" });
                return;
            }
            res.json(result);
        });
    });
};

exports.postContact = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const sql = "INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)";

    pool.getConnection((err, con) => {
        if (err) {
            console.error("Erreur de connexion à la base de données :", err);
            res.status(500).json({ message: "Erreur de connexion à la base de données" });
            return;
        }

        con.query(sql, [name, email, phone, message], (err) => {
            con.release();
            if (err) {
                console.error("Erreur lors de l'insertion des données dans la base de données :", err);
                res.status(500).json({ message: "Erreur lors de l'insertion des données dans la base de données" });
                return;
            }
            sendEmail(name, email, message, res);
        });
    });
};

function sendEmail(name, email, message, res) {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: 'sitekabori@outlook.fr',
            pass: 'Kabori123@',
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    const mailOptions = {
        from: 'sitekabori@outlook.fr',
        to: 'chennaouimarwa0@gmail.com',
        subject: 'Nouveau message de formulaire de contact',
        html: `
            <p>Nouveau message de formulaire de contact:</p>
            <ul>
                <li><strong>Nom:</strong> ${name}</li>
                <li><strong>E-mail:</strong> ${email}</li>
                <li><strong>Message:</strong> ${message}</li>
            </ul>
        `
    };

    transporter.sendMail(mailOptions)
        .then((info) => {
            console.log('Message envoyé: %s', info.messageId);
            res.json({ message: 'Le message a été envoyé avec succès.' });
        })
        .catch((error) => {
            console.error("Erreur lors de l'envoi du message :", error);
            res.status(500).json({ message: "Une erreur est survenue lors de l'envoi du message." });
        });
}
