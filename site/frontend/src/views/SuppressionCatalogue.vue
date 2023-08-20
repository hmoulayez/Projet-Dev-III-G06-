<template>
  <header>
    <EnteteAdmin/>
  </header>
  <div>
    <table class="tableau">
      <thead>
      <tr>
        <th>Nom Modèles</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="model in models" :key="model.id">
        <td class="td-nom">{{ model.nom }}</td>
        <td class="td-button"><button @click="supprimerModel(model.nom)" class="button-table">Supprimer</button></td>
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
import EnteteAdmin from "@/components/EnteteAdmin.vue";



export default {
  data() {
    return {
      models: [],
    }
  },

  mounted() {
    this.recupModels();
  },

  methods: {

    recupModels() {
      axios.get('https://localhost:3000/prod')
          .then(response => {
            this.models = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des modèles :', error);
          })
    },

    supprimerModel(nom) {
      axios.delete(`https://localhost:3000/prod/${nom}`)
          .then(response => {
            this.models = this.models.filter(model => model.nom !== nom);
          })
          .catch(error => {
            console.error(error);
          });
    }


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
