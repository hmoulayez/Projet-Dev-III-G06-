<template>
  <header>
    <EnteteAdmin/>
  </header>

  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Nom</th>
      <th>Mail</th>
      <th>Produit</th>
      <th>Comentaire</th>
      <th>Prix</th>
      <th>Statut</th>
      <th>Changer Statut</th>
      <!-- Ajoutez d'autres en-têtes de colonnes selon vos besoins -->
    </tr>
    </thead>
    <tbody>
    <tr v-for="commande in commandes" :key="commande.id">
      <td>{{ commande.id }}</td>
      <td>{{ commande.client }}</td>
      <td>{{ commande.emailclient }}</td>
      <td>{{ commande.produit }}</td>

      <td>
        <input type="text" v-model="commande.descriptionAdmin" placeholder="Entrez le texte">
        <button @click="publierTexte(commande)">Publier</button>
      </td>
      <td>{{ commande.prix }}</td>
      <td>{{ commande.statut }}</td>
      <td>
        <select v-model="selectedStatut" @change="envoyerStatut(commande)" class="custom-select">
          <option v-for="statut in statuts" :key="statut.nom" :value="statut.nom">{{ statut.nom }}</option>
        </select>
      </td>
      <!-- Ajoutez d'autres colonnes selon vos besoins -->
    </tr>
    </tbody>
  </table>

  <footer>
    <BasDePage/>
  </footer>
</template>



<script>
import axios from 'axios';
import 'aos/dist/aos.css';
import BasDePage from "@/components/BasDePage.vue";
import EnteteAdmin from "@/components/EnteteAdmin.vue";

export default {
  data() {
    return {
      commandes: [],
      statuts: [],
    }
  },

  mounted() {
    this.recupCommandes();
    this.recupStatuts();
  },

  methods: {
    recupCommandes() {
      axios.get('https://serveur.kaboricreations.com/commandes')
          .then(response => {
            this.commandes = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des commandes :', error);
          })
    },


    publierTexte(commande) {
      console.log(commande.id)
      const data = {
        id: commande.id,
        descriptionAdmin: commande.descriptionAdmin

      };
      axios.put('https://serveur.kaboricreations.com/commandes', data)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },


    recupStatuts() {
      axios.get('https://serveur.kaboricreations.com/statuts')
          .then(response => {
            this.statuts = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des collections :', error);
          })
    },


    envoyerStatut(commande) {
      console.log(commande.id);
      console.log(this.selectedStatut);

      const data = {
        id: commande.id,
        statut: this.selectedStatut
      };
      axios.put('https://serveur.kaboricreations.com/commandes/statut/', data)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },







  },




  name: 'SuppressionCatalogue',
  components: {
    EnteteAdmin,
    BasDePage,
  },
}

</script>



<style scoped>
.tableau {
  padding: 10%;
  width: 100%;
  border-collapse: collapse;
  margin-right: auto;
  margin-left: auto;
}

.td-button{
  padding: 8px;
  text-align: right;
  border-bottom: 1px solid #ddd;
}

.td-nom {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
  font-size: 150%;
}

.button-table {
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
}


</style>