<template>
  <header>
    <Entete/>
  </header>
  <main>
    <br>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8.5">
          <v-card class="mx-auto">
            <v-tabs v-model="tab" align-tabs="center">
              <v-tab :value="service.titre" v-for="service in services" :key="service.titre">{{ service.titre }}</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item :value="service.titre" v-for="service in services" :key="service.titre">
                  {{ service.description }}
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
      tab: null,
      services :[
        {"titre":"Robes de collection", "description" : "description de du service robes de collections"},
        {"titre":"Créations exclusives", "description" : "description de du service Créations exclusives"},
        {"titre":"Croquis personnalisés", "description" : "description de du service Croquis personnalisés"},
        {"titre":"Transformations de robes", "description" : "description de du service Transformations de robes"}
      ]
       }
  },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Services",
  components:{
    Entete,
    BasDePage,
  }
}
</script>

<style scoped>

</style>