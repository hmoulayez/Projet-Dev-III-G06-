<template>
  <header>
    <Entete/>
  </header>
  <main>
    Formulaire devis
  </main>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Devis",
  components: {BasDePage, Entete}
}
</script>

<style scoped>

</style>