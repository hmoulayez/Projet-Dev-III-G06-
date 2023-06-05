<template>
  <header>
    <Entete/>
  </header>
  <main class="corps" >
    <h1>Oops!</h1>
    <h3>La page que vous cherchez n'existe pas!</h3>
    <router-link :to="{name: 'EventList'}" >Retour à la page d'accueil</router-link>
  </main>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import BasDePage from "@/components/BasDePage.vue";
import Entete from "@/components/Entete.vue";
export default {
  name: "NotFound",
  components: {
    Entete,
    BasDePage,
  },
}
</script>

<style scoped>
.corps {
  background-image: url("https://storage.cloud.google.com/photokabori/croquis/IMG_7311-min.JPG");
  background-size: 100%;
  min-height: 100%;
}

</style>