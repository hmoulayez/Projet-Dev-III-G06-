const express = require('express');
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');
const cors = require('cors');

const devisRoutes = require('./routes/devis');
//const connexionRoutes = require('./routes/connexion')

const app = express();


const avisRoutes = require('./routes/avis');

const clientsRoutes = require('./routes/clients');

const eventRoutes = require('./routes/photoevents');

const creationsRoutes = require('./routes/photocreations');

const collectionsRoutes = require('./routes/collections');

const categRoutes = require('./routes/categ');

const prodRoutes = require('./routes/produits');

const contactRoutes = require('./routes/contact');

//const commandesRoutes = require('./routes/commandes');

//const statutsRoutes = require('./routes/statuts');

const subscribeRoutes = require('./routes/clients');
cloudinary.config({
  cloud_name: 'dzjkkji1x',
  api_key: '727472496856648',
  api_secret: 'Tz7ubFf436pqqYFgI3XYbCIoVj0'
});

//app.use(contactRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mysql.createConnection({
  host: '15.236.173.35',
  user: 'admin',
  password: 'ephecephec',
  database: 'Kabori',
});
// Créer une connexion
mysql.createPool({
  host: '15.236.173.35',
  user: 'admin',
  password: 'ephecephec',
  database: 'Kabori',
  connectionLimit: 100 // Nombre maximal de connexions dans la pool
});
// Configurer les options CORS
const corsOptions = {
  origin: '*', // Mettre l'origine autorisée de votre choix, ou '*' pour autoriser toutes les origines
  methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // Spécifier les méthodes autorisées
  allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization', // Spécifier les en-têtes autorisés
};


// Activer CORS avec les options configurées pour toutes les requêtes
app.use(cors(corsOptions));

// Différents appels API

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image')
  },
  filename: function (req, file, cb) {
    cb(null, "fleur.jpg")
  }
})
const upload = multer({ storage: storage })
app.post("/upload", upload.single("file"), async(req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.send({message: 'Image uploaded successfully', result: result });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).send('Error uploading image');
  }
})

app.use('/avis', avisRoutes);
app.use('/categ', categRoutes);
app.use('/clients', clientsRoutes);
app.use('/collections', collectionsRoutes);
app.use('/contact', contactRoutes);
app.use('/photoevents', eventRoutes);
app.use('/photocreations', creationsRoutes);
app.use('/prod', prodRoutes);
app.use('/devis', devisRoutes);
//app.use('/connexion',connexionRoutes)
//app.use('/commandes', commandesRoutes);
//app.use('/statuts', statutsRoutes);
app.use('/subscribe', subscribeRoutes);

module.exports = app;