<template>
  <header>
    <EnteteAdmin/>
  </header>

  <div class="sorting-section">
    <label for="sortingOptions">Trier par : </label>
    <select id="sortingOptions" v-model="sortOption" @change="sortCommandes">
      <option value="alpha-asc">Alphabétique - Ascendant</option>
      <option value="alpha-desc">Alphabétique - Descendant</option>
      <option value="date-asc">Date - Ancien au plus récent</option>
      <option value="date-desc">Date - Plus récent au plus ancien</option>
    </select>
  </div>

  <table class="tableau">
    <thead>
    <tr>
      <th>ID</th>
      <th>Date</th>
      <th>Nom</th>
      <th>Mail</th>
      <th>Produit</th>
      <th>Comentaire</th>
      <th>Prix</th>
      <th>Statut</th>
      <th> </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="commande in commandes" :key="commande.id">
      <td>{{ commande.id }}</td>
      <td>{{ formatDate(commande.date) }}</td>
      <td>{{ commande.client }}</td>
      <td>{{ commande.emailclient }}</td>
      <td>{{ commande.produit }}</td>

      <td>
        <textarea rows="3" type="text" v-model="commande.descriptionAdmin" placeholder="Entrez le texte" class="cmd-text"></textarea>
        <button @click="publierTexte(commande)" class="td-button">Modifier</button>
      </td>
      <td>{{ commande.prix }}</td>
      <td>
        <select v-model="commande.statut" @change="envoyerStatut(commande)" class="custom-select">
          <option v-for="statut in statuts" :key="statut.nom" :value="statut.nom">{{ statut.nom }}</option>
        </select>
      </td>
      <td class="td-button-sup"><button @click="confirmerSuppression(commande.id)" class="td-button-supp">X</button></td>
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
      sortOrder: 'alpha-asc'
    }
  },

  mounted() {
    this.recupCommandes();
    this.recupStatuts();
  },

  methods: {
    recupCommandes() {
      axios.get('http://localhost:3000/commandes')
          .then(response => {
            this.commandes = response.data;
            this.sortCommandes();
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
      axios.put('http://localhost:3000/commandes', data)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },


    recupStatuts() {
      axios.get('http://localhost:3000/statuts')
          .then(response => {
            this.statuts = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des statuts :', error);
          })
    },


    envoyerStatut(commande) {
      console.log(commande.id);
      console.log(this.selectedStatut);

      const data = {
        id: commande.id,
        statut: this.selectedStatut
      };
      axios.put('http://localhost:3000/commandes/statut/', data)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },

    sortCommandes() {
      this.commandes.sort((a, b) => {
        switch(this.sortOption) {
          case 'alpha-asc':
            return a.client.localeCompare(b.client);
          case 'alpha-desc':
            return b.client.localeCompare(a.client);
          case 'date-asc':
            return new Date(a.date) - new Date(b.date); // Supposant que vos commandes ont une propriété "date"
          case 'date-desc':
            return new Date(b.date) - new Date(a.date); // Supposant que vos commandes ont une propriété "date"
          default:
            return 0;
        }
      });
    },

    supprimerCommandes(id) {
      console.log(id);
      axios.delete(`http://localhost:3000/commandes/${id}`)
          .then(response => {
            this.commandes = this.commandes.filter(commandes => commandes.id !== id);
          })
          .catch(error => {
            console.error(error);
          });
    },

    confirmerSuppression(id) {
      if (window.confirm('Êtes-vous sûr de vouloir supprimer la commande ?')) {
        this.supprimerCommandes(id);
      }
    },

    formatDate(dateStr) {
      return dateStr.slice(0, 10);
    },

    envoyerStatut(commande) {
      console.log(commande.id);
      console.log(commande.statut);

      const data = {
        id: commande.id,
        statut: commande.statut
      };
      axios.put('http://localhost:3000/commandes/statut/', data)
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
  padding: 5%;
  width: 95%;
  border-collapse: collapse;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5%;
  border: 2px solid black;
}

.td-button{
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 5px;
}

.td-button-sup{
  color: white;
  border: none;
  text-align: center;
  vertical-align: middle;
}

.td-button-supp{
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 4px;
  background-color: darkred;
  cursor: pointer;
}

th {
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
  font-size: 150%;
}

.custom-select{
  border: 1px solid black;
}
.cmd-text{
  width: 75%;
  height: 100%;
}
table {
  border-collapse: collapse;
}

tr {
  border-top: 1px solid black;
}
td {
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  padding: 8px;
}

.sorting-section{
  height: 5%;
  border: 2px solid black;
  width: 20%;
  border-collapse: collapse;
  margin-right: 2.5%;
  margin-left: auto;
  margin-top: 1%;
  margin-bottom: 1%;
}


</style>