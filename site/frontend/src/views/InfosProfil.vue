<template>
  <header>
    <Entete/>
  </header>
  <div>
    <h1>Infos Personnelles:</h1>
    <div>
      <label>Nom:</label>
      <span>{{ nom }}</span>
    </div>
    <div>
      <label>Prénom:</label>
      <span>{{ prenom }}</span>
    </div>
    <div>
      <label>Adresse:</label>
      <span>{{ adresse }}</span>
    </div>
    <div>
      <label>Mail:</label>
      <span>{{ mail }}</span>
    </div>
    <div>
      <label>Tel:</label>
      <span>{{ tel }}</span>
    </div>
  </div>


  <div>
    <h1>Commandes en cours:</h1>
    <table class="tableau">
      <thead>
      <tr>
        <th>ID</th>
        <th>Produit</th>
        <th>Comentaire</th>
        <th>Prix</th>
        <th>Statut</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ id }}</td>
        <td>{{ produit }}</td>
        <td>{{ descriptionAdmin }}</td>
        <td>{{ prix }}</td>
        <td>{{ statut }}</td>
      </tr>
      </tbody>
    </table>
  </div>

  <footer>
    <BasDePage/>
  </footer>
</template>



<script>
import axios from 'axios';
import 'aos/dist/aos.css';
import BasDePage from "@/components/BasDePage.vue";
import Entete from "@/components/Entete.vue";

export default {
  data() {
    return {
      nom: 'Elèda',
      prenom: 'Adèle',
      adresse: '26 rue des Wallons LLN ',
      mail: 'adele.eleda@gmail.com',
      tel: '0477777777',
      id: 5,
      produit: 'Kera',
      descriptionAdmin: 'Votre commande a été ajusté.',
      prix: '200',
      statut: 'En production',

    }
  },

  mounted() {
    this.recupCommandes();
    this.recupInfosClient();
  },

  methods: {
    recupCommandes() {
      axios.get('https://serveur.kaboricreations.com/commandes/')
          .then(response => {
            this.commandes = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des commandes :', error);
          })
    },

    recupInfosClient(){
      axios.get('https://serveur.kaboricreations.com/clients/')
          .then(response => {
            this.client = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des clients :', error);
          })
    },

  },




  name: 'SuppressionCatalogue',
  components: {
    Entete,
    BasDePage,
  },
}

</script>



<style scoped>
.tableau {
  padding: 5%;
  width: 80%;
  border-collapse: collapse;
  margin-right: auto;
}



th {
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
  font-size: 150%;
}

table {
  border-collapse: collapse;
}

tr {
}
td {
  padding: 8px;
}
</style>