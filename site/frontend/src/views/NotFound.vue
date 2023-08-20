<template>
  <h1>Oops!</h1>
  <h3>La page que vous cherchez n'existe pas!</h3>
  <router-link :to="{name: 'EventList'}">Retour à la page d'accueil</router-link>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>