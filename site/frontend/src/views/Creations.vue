<template>
  <v-app>
    <header><Entete/></header>

    <main class="corps">
      <v-container v-for="collection in collections" >
        <v-row dense>
          <v-col cols="12">
            <v-card
                color=""
                theme="dark"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    {{collection.nom}}
                  </v-card-title>

                  <p>{{ collection.description }}</p>

                  <v-card-actions>
                    <v-btn
                        class="ms-2"
                        variant="outlined"
                        size="small"
                        @click="thisCollection = collection.nom, recupModels(collection.nom);"
                        @dblclick="thisCollection = ''">
                      Voir les modèles de cette collection
                    </v-btn>
                  </v-card-actions>

                </div>

              </div>
              <div v-if="thisCollection === collection.nom">
                <v-card class="model" v-for="model in models" v-bind:key="model.id" >
                  <h2 >{{model.nom}} {{this.recuPhoto(model)}}</h2>
                  <p class="descModel">
                    {{model.description}}
                  </p><br>
                  <div class="imgModel" @click="toggleOverlay(getCloudinaryUrl(model.url))">
                    <div class="photo">
                      <img :src="getCloudinaryUrl(model.url)" alt="Cloudinary Image">
                    </div>
                  </div>
                  <div v-if="showOverlay" class="overlay" @click="toggleOverlay(null)">
                    <img :src="currentImage" alt="Cloudinary Image">
                  </div>

                  <router-link to="/devis" class="no-underline">
                    <v-btn color="yellow darken-2" >Demander un devis</v-btn>
                  </router-link>
                </v-card>
              </div>
            </v-card>

          </v-col>

        </v-row>

      </v-container>
    </main>

    <footer><BasDePage/></footer>
  </v-app>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
import axios from 'axios';
import cloudinary from 'cloudinary-core';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data() {
    return {
      collections : [],
      thisCollection : '',
      models : [],
      thisModel:"",
      photos : [],
      model1: 1,
      overlay: false,
      overlayImg:"",
      showOverlay: false,
      currentImage: null,
    }
  },

  mounted() {
    this.recupCollections();
  },
  methods: {
    recupCollections() {
      axios.get('http://localhost:3000/collections')
          .then(response => {
            this.collections = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des collections :', error);
          })
    },
    recupModels(collection) {

      axios.get(`http://localhost:3000/photocreations?collection=${collection}`)
          .then(response => {
            this.models = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des modèles:', error);
          })
    },
    recuPhoto(photo){
      this.photos = Object.values(photo);
    },

    getCloudinaryUrl(publicId) {
      const cl = new cloudinary.Cloudinary({ cloud_name: 'dzjkkji1x' });
      return cl.url(publicId);
    },

    toggleOverlay(imageUrl) {
      this.currentImage = imageUrl;
      this.showOverlay = !this.showOverlay;
    },
  },

  // e

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Creations",
  components:{
    Entete,
    BasDePage,
  },
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 200000)
    },
  },
}
</script>

<style scoped>
main {
  min-height: 800px;
}
.model{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.descModel{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1,h2, p {
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
}

.imgModel{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;


}

.imgModel img{
  text-align: center;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
}

.imgModel img:hover{
  transform: scale(0.9);
}
.photo{
  height: auto;
  justify-content: center;
  align-content: center;
}
.overlay{
  text-align: center;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.corps {
  background-image: url("https://storage.googleapis.com/photokabori/croquis/IMG_7311-min.JPG");
  background-size: 100%;
  color: black;
  margin: 5%
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