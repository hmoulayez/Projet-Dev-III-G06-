<template>
<<<<<<< HEAD
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
=======
    <div>
        <header>
            <Entete/>
        </header>
        <main>
            <div class="login-page">
                <div class="login-container">
                    <h1 class="login-title">Connexion</h1>
                    <form class="login-form">
                        <div class="form-group">
                            <label for="email">Email :</label>
                            <input type="email" id="email" v-model="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Mot de passe :</label>
                            <input type="password" id="password" v-model="password" required>
                        </div>
                        <button type="submit" class="btn-primary btn-login">Se connecter</button>
                    </form>
                    <div class="signup-link">
                        <p>Vous n'avez pas de compte ? <a href="#" @click="showSignupForm">Créer un compte</a></p>
                    </div>
                </div>
                <div v-if="showSignup" class="signup-container">
                    <h1 class="signup-title">Créer un compte</h1>
                    <form class="signup-form">
                        <div class="form-group">
                            <label for="newEmail">Email :</label>
                            <input type="email" id="newEmail" v-model="newEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="newPassword">Mot de passe :</label>
                            <input type="password" id="newPassword" v-model="newPassword" required>
                        </div>
                        <button type="submit" class="btn-primary">Créer le compte</button>
                    </form>
                </div>
            </div>
        </main>
        <footer>
            <BasDePage/>
        </footer>
    </div>
>>>>>>> contact
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
<<<<<<< HEAD
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
=======

export default {
    name: "LoginPage",
    components: { Entete, BasDePage },
    data() {
        return {
            email: "",
            password: "",
            newEmail: "",
            newPassword: "",
            showSignup: false,
        };
    },
    methods: {
        showSignupForm() {
            this.showSignup = true;
        },
        // Ajoutez ici les méthodes pour la soumission des formulaires de connexion et de création de compte
    },
};
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #333333;
}

.login-container {
    width: 400px;
    padding: 20px;
    margin-top: -100px;
    background-color: #000000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #ffffff;
}

.login-title {
    text-align: center;
    color: yellow;
    font-size: 24px;
    margin-bottom: 20px;
}

.login-form,
.signup-form {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 10px;
}

label {
    font-weight: bold;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #f0f0f0;
    color: #000000;
}

.btn-primary {
    padding: 6px 8px;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.btn-login {
    font-size: 14px;
}

.signup-link {
    text-align: center;
}

.signup-link a {
    color: darkgreen;
    text-decoration: underline;
    cursor: pointer;
}



.signup-link {
    text-align: center;
}

.signup-link a {
    color: darkgreen;
    text-decoration: underline;
    cursor: pointer;
}


</style>
>>>>>>> contact
