<template>
  <header>
    <Entete/>
  </header>
  <main>
    <v-parallax id="model3" src="model3.jpeg"  alt="photo page d'accueil"  class="pr-img contain"></v-parallax>
    <div class="pr-text">
      <div data-aos="flip-left" class="pr-text1">KABORI CREATIONS <br>
        Robes d'événements sur-mesure <br>
        BRUXELLES <br>
      </div>
      <div data-aos="flip-left" class="pr-text2" >
        KABORI CREATIONS a pour ambition de vous accompagner lors d'événements importants:<br>
        mariages, soirées, gala, cocktails, baptêmes, anniversaires, tapis rouge etc.
        Je souhaite vous faire<br>
        vivre un moment inoubliable en vous proposant des créations authentiques ou en créant avec vous<br>
        et pour vous des pièces uniques et sur-mesure. Du croquis à la réalisation finale en passant par le<br>
        patron, je collabore étroitement avec des artisans belges pour vous proposer des pièces raffinées et<br> travaillées.
      </div>
    </div>
    <div class="kaborimage">
      <div id="kabodium">
        <h1 class="titre-event">Kabori sur un podium</h1>
        <v-carousel v-model="model1" show-arrows="hover" cycle hide-delimiter-background>
          <v-carousel-item v-for="photo in photoevent" :value="photo.id"  :key="photo.id" >
            <v-img :src="photo.url"  />
          </v-carousel-item>
        </v-carousel>
      </div>
      <div id="kaborcreation">
        <h1 class="titre-event">Nos créations</h1>
        <v-carousel v-model="model2" show-arrows="hover" cycle hide-delimiter-background>
          <v-carousel-item v-for="photo in photocreations" :value="photo.id"  :key="photo.id">
            <v-img :src="photo.url" />
          </v-carousel-item>
        </v-carousel>

      </div>
    </div>
  </main>
  <footer >
    <BasDePage/>
  </footer>
</template>

<script>
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import BasDePage from "@/components/BasDePage.vue";
import Entete from "@/components/Entete.vue";
export default {
  data() {
    return {
      photoevent:[],
      model1: 1,
      overlay: false,
      overlayImg:"",
      photocreations:[],
      model2: 2,
    }
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Accueil',
  components: {
    Entete,
    BasDePage,
  },
  mounted() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
    });
    this.recuphotoevents();
    this.recuphotocreations();
  },
  methods: {
    recuphotoevents() {
      axios.get('https://serveur.kaboricreations.com/photoevents')
          .then(response => {
            this.photoevent = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des photos des événéments :', error);
          })
    },
    recuphotocreations() {
      axios.get('https://serveur.kaboricreations.com/photocreations')
          .then(response => {
            this.photocreations = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des photos de créations :', error);
          })
    }

  }
}

</script>


<style>

#model3 {
  width: 100%;
  text-align: center;
  justify-self: center;
}

.pr-text1 {
  position: absolute; /* positionnement absolu par rapport au conteneur parent */
  top: 25%; /* positionne le haut du conteneur à la moitié de l'image */
  left: 25%; /* positionne la gauche du conteneur à la moitié de l'image */
  background-color: rgba(255, 255, 255, 0.1); /* ajoute un fond semi-transparent pour le texte */
  padding: 1%; /* ajoute un peu d'espace autour du texte */
  color : white;
  text-align: center;
  height:6%;
  font-size: 300% ;
  margin-top: 5%;
  width: 80%;
  max-width: 50%;
}
.pr-text2{
  position: absolute; /* positionnement absolu par rapport au conteneur parent */
  top: 50%; /* positionne le haut du conteneur à la moitié de l'image */
  right: 10%; /* positionne la gauche du conteneur à la moitié de l'image */
  background-color: rgba(255, 255, 255, 0.1); /* ajoute un fond semi-transparent pour le texte */
  padding: 1%; /* ajoute un peu d'espace autour du texte */
  color : white;
  text-align: center;
  height:7%;
  font-size: 160% ;
  margin-top: 5%;
  width: 100%;
  max-width: 75%;
}
.pr-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Cambria Math",serif;
  background-image: url("model3.jpeg");
}

.titre-event{
  text-align: center;
  font-family: "Cambria Math";
  color: black;
}

.kaborimage {
  background-image: url("https://storage.cloud.google.com/photokabori/divers/IMG_6324.jpg");
  background-size: 100%;
  color: black;
  margin: 5%
}

</style>