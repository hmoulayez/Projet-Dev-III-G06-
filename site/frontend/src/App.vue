<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  <!--AjouterCollectionCateg/-->
</template>

<script>
import AjouterCollectionCateg from "@/views/AjouterCollectionCateg.vue";
export default {
  name: 'App',
  components : {
    AjouterCollectionCateg
  }
}
</script>
