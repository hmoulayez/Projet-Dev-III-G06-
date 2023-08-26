<template>
  <header>
    <EnteteAdmin/>
  </header>
  <div>
    <table class="tableau">
      <thead>
      <tr>
        <th>Modèles</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="model in models" :key="model.id">
        <td class="td-nom">{{ model.nom }}</td>
        <td>
          <div class="imgModel" @click="toggleOverlay(getCloudinaryUrl(model.url))">
            <div class="photo">
                <img :src="getCloudinaryUrl(model.url)" alt="Cloudinary Image">
            </div>
          </div>
          <div v-if="showOverlay" class="overlay" @click="toggleOverlay(null)">
            <img :src="currentImage" alt="Cloudinary Image">
          </div>
        </td>
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
import cloudinary from 'cloudinary-core';



export default {
  data() {
    return {
      models: [],
      showOverlay: false,
      currentImage: null,
    }
  },

  mounted() {
    this.recupModels();
  },

  methods: {

    toggleOverlay(imageUrl) {
      this.currentImage = imageUrl;
      this.showOverlay = !this.showOverlay;
    },

    getCloudinaryUrl(publicId) {
      const cl = new cloudinary.Cloudinary({ cloud_name: 'dzjkkji1x' });
      return cl.url(publicId);
    },

    recupModels() {
      axios.get('http://localhost:3000/photocreations')
          .then(response => {
            this.models = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des modèles :', error);
          })
    },

    supprimerModel(nom) {
      axios.delete(`http://localhost:3000/photocreations/${nom}`)
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
  width: 50%;
  border-collapse: collapse;
  margin-right: auto;
  margin-left: auto;
  border: solid black 2px;
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
  border-bottom:solid black 2px;
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
.photo img{
  max-width: 10%;
  height: auto;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay img {
  max-width: 100%;
  max-height: 100%;
}

</style>
