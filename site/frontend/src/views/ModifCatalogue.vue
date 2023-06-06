<template>
  <header>
    <EnteteAdmin/>
  </header>

  <main>
    <div class="form-div">
      <h1>Nouveau Modèle</h1>
      <form @submit.prevent="submitForm" class="form-container">
        <p>
          Choisissez une collection
          <select v-model="selectedCollection" class="custom-select">
            <option v-for="collection in collections" :key="collection.id" :value="collection.nom">{{ collection.nom }}</option>
          </select>
          <br>
        </p>
        <br>
        <p>
          Choisissez une catégorie
          <select v-model="selectedCateg" class="custom-select">
            <option v-for="categorie in categ" :key="categorie.id" :value="categorie.nom">{{ categorie.nom }}</option>
          </select>
          <br>
        </p>
        <br>
        <label for="model">Nom model :</label>
        <input type="text" id="model" v-model="model" class="form-input" required>
        <br>
        <label>Description :</label>
        <textarea id="nouveldescription" v-model="nouveldescription" class="form-text" required></textarea>
        <br>
        <label for="photoUrl1">Photo 1 :</label>
        <input type="text" id="photoUrl1" v-model="photoUrl1" placeholder="URL de la photo" class="form-input" required>
        <br>
        <label for="photoUrl2">Photo 2 :</label>
        <input type="text" id="photoUrl2" v-model="photoUrl2" placeholder="URL de la photo" class="form-input" required>
        <br>
        <label for="photoUrl3">Photo 3 :</label>
        <input type="text" id="photoUrl3" v-model="photoUrl3" placeholder="URL de la photo" class="form-input" required>
        <br>
        <label for="photoUrl4">Photo 4 :</label>
        <input type="text" id="photoUrl4" v-model="photoUrl4" placeholder="URL de la photo" class="form-input" required>
        <br>
        <label for="nouveauPrix">Prix :</label>
        <input type="number" id="nouveauPrix" v-model="nouveauPrix" step="0.01" min="0" class="form-input" required>
        <br>
        <button type="submit" class="form-button">Envoyer</button>
      </form>
    </div>
  </main>

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
      selectedCollection: '',
      collections: [],
      selectedCateg: '',
      categ: [],
      model: '',
      nouveldescription: '',
      photoUrl1: '',
      photoUrl2: '',
      photoUrl3: '',
      photoUrl4: '',
      submitted: false,
      nouveauPrix: null
    }
  },


  mounted() {
    this.recupCollections();
    this.recupCateg();
  },

  methods: {
    recupCollections() {
      axios.get('https://serveur.kaboricreations.com/collections')
          .then(response => {
            this.collections = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des collections :', error);
          })
    },

    recupCateg() {
      axios.get('https://serveur.kaboricreations.com/categ')
          .then(response => {
            this.categ = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des catégories :', error);
          })
    },

    submitForm() {
      const data = {
        nom: this.model,
        photo1: this.photoUrl1,
        photo2: this.photoUrl2,
        photo3: this.photoUrl3,
        photo4: this.photoUrl4,
        categ: this.selectedCateg,
        col: this.selectedCollection,
        description: this.nouveldescription,
        prix: this.nouveauPrix
      };
      axios.post('https://serveur.kaboricreations.com/prod', data)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },

  },


  name: 'ModifCatalogue',
  components: {
    EnteteAdmin,
    BasDePage,
  },
}
</script>

<style scoped>
.form-div {
  text-align: center;
  margin-bottom: 2%;
  margin-top: 2%;
  margin-left: 20%;
  margin-right: 20%;
  border: 1px solid black;
}

.form-container {
  max-width: 85%;
  margin: 0 auto;
  font-size: 25px;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  font-size: 15px;
}

.form-text{
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  font-size: 15px;
  height: 200px;
}

.form-button {
  display: block;
  width: 20%;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 2%;
  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

.custom-select{
  border: 1px solid black;
}
</style>