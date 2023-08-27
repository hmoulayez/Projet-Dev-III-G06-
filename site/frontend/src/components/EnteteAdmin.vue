<template>
  <div>
    <div class="entete">
      <img id="logo1" class="image" src="logo1.png" alt="logo">
      <nav class="navbar">
        <ul class="nav-list">
          <li ><router-link to="/" class="no-underline">Accueil</router-link></li>
          <li ><router-link to="/creations" class="no-underline">Nos créations</router-link></li>
          <li><router-link to="/suppressionCatalogue" class="no-underline">Supprimer Modèle</router-link></li>
          <li><router-link to="/modifcatalogue" class="no-underline">Ajouter Modèle</router-link></li>
          <li><router-link to="/ajouterCollectionCateg" class="no-underline">Ajouter Collection/Catégorie</router-link></li>
          <li><router-link to="/gestionCommandes" class="no-underline">Voir Commandes</router-link></li>
          <li><router-link to="/connexion" class="no-underline">
            <v-btn v-if = "this.localStorageValue" color="yellow darken-2" @click="handleDeconnect">Déconnecter</v-btn>
          </router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EnteteAdmin",
  data() {
    return {
      localStorageValue: null,
    };
  },
  mounted() {
    // Retrieve data from localStorage when the component is mounted
    this.localStorageValue = localStorage.getItem('user');
    console.log('this.localStorageValue', this.localStorageValue);
  },
  methods: {
    handleDeconnect() {
      localStorage.removeItem('user');
      this.$router.push('/');
    },
  },
}
</script>

<style scoped>
.entete{
  background-color: black;
  color: white;
}

#logo1{
  display: block;
  margin: auto;
  width : 100px;
  height: 100px;
}
.nav-list li {
  margin: 0 50px;
}
.navbar {
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  font-size: larger;
}
.no-underline {
  text-decoration: none;
  color: white;
  margin-bottom: auto ;
}
</style>