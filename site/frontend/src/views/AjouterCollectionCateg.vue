<template>
  <header>
    <EnteteAdmin/>
  </header>

  <main>
    <div class="form-div">
      <h1>Nouvel Collection</h1>
      <form @submit.prevent="addCollection" class="form-container">
        <label for="nomCollection">Nom de la collection:</label>
        <input type="text" id="nomCollection" v-model="nomCollection" class="form-input" required>
        <br>
        <label for="descriptionCollection">Description:</label>
        <textarea id="descriptionCollection" v-model="descriptionCollection" class="form-text" required></textarea>
        <br>
        <button type="submit" class="form-button">Ajouter</button>
      </form>
    </div>

    <div class="form-div">
      <h1>Nouvel Catégorie</h1>
      <form @submit.prevent="addCateg" class="form-container">
        <label for="nomCateg">Nom:</label>
        <input type="text" id="nomCateg" v-model="nomCateg" class="form-input" required>
        <br>
        <label for="descriptionCateg">Description:</label>
        <textarea id="descriptionCateg" v-model="descriptionCateg" class="form-text" required></textarea>
        <br>
        <button type="submit" class="form-button">Ajouter</button>
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
      nomCollection: '',
      descriptionCollection: '',
      nomCateg: '',
      descriptionCateg: ''

    }
  },

  methods: {

    addCollection() {
      const data = {
        nom: this.nomCollection,
        description: this.descriptionCollection
      };
      this.nomCollection = '';
      this.descriptionCollection = '';
      axios
          .post('http://localhost:3000/collections', data)
          .then(() => {
            console.log(response.data);
            this.recupCollections();
          })
          .catch(error => {
            console.error(error);
          });
    },

    addCateg(){
      const data = {
        nom: this.nomCateg,
        description: this.descriptionCateg
      };
      this.nomCateg = '';
      this.descriptionCateg = '';
      axios.post('http://localhost:3000/categ', data )
          .then(response => {
            console.log(response.data);
            this.recupCateg();
          })
          .catch(error => {
            console.error(error);
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

.form-container {
  max-width: 85%;
  margin: 0 auto;
  font-size: 25px;
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

</style>