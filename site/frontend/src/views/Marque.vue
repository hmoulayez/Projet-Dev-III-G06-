<template>
  <header>
    <Entete/>
  </header>
  <main>
    <v-parallax src="model2.jpeg" class="contain">
      <v-timeline align="center">
        <v-timeline-item hide-dot v-for="element in elements" :key="element.titre">
          <template v-slot:opposite>
            <v-img src="logo1.png" max-width="200" width="200"></v-img>
          </template>
          <v-card max-width="500">
            <v-card-title class="bg-purple-lighten-2">
              <h2 class="font-weight-light">
                {{element.titre}}
              </h2>
            </v-card-title>
            <v-card-text>
              {{element.description}}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-parallax>

  </main>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
export default {
  data () {
    return {
      elements :[
        {"titre":"Qui sommes nous ?", "description" : "description de Qui sommes Nous"},
        {"titre":"Pourquoi existons nous ?", "description" : "description de pourquoi existons nous"},
        {"titre":"Que faisons nous", "description" : "description de que faisons-nous"},
        {"titre":"Rejoignez la Bori Ladies Team", "description" : "description de Rejoignez la Bori Leadies Team"}
      ]
    }
  },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Marque",
  components:{
    Entete,
    BasDePage,
  }
}
</script>

<style scoped>

</style>