<template>
  <header>
    <Entete/>
  </header>
  <main >
    <v-container >
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <form @submit.prevent="submit"  >
              <v-text-field
                  v-model="email.value.value"
                  :error-messages="email.errorMessage.value"
                  label="E-mail"
              ></v-text-field>
              <v-text-field
                  v-model="password.value.value"
                  :error-messages="password.errorMessage.value"
                  label="Mot de passe"
              ></v-text-field>
              <v-row align="center" justify="space-between" ></v-row>
              <v-col cols="auto" ></v-col>
                  <v-btn
                  class="me-4"
                  type="submit"
              >
                Créer
              </v-btn>

              <v-btn @click="handleReset">
                Effacer les donnés
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <router-link to="/connexion" class="no-underline"><v-btn> Crée un compte </v-btn></router-link>
  </main>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Connexion",
  components: {BasDePage, Entete},
  setup () {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        email (value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Must be a valid e-mail.'
        },
      },
    })
    const email = useField('email')
    const password  = useField('password')

    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })

    return { email, password, submit, handleReset }
  },
}
</script>

<style scoped>

</style>