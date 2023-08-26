<template>
  <div>
    <header>
      <Entete/>
    </header>
    <main class="corps">
      <div class="login-page">
        <div class="login-container">
          <h1 class="login-title">{{ mode === 'connexion' ? 'Connexion' : 'Inscription' }}</h1>
          <form class="login-form" @submit.prevent="submitForm">
            <div class="form-group">
              <div> <label class="switch">
                <input type="checkbox" v-model="is_admin">
                <span class="slider round"></span>
              </label> </div>
              <div class="form-group" v-if="mode !== 'connexion'">
              <label for="email">Nom :</label>
              <input type="text" id="text" v-model="firstName" required>
              </div> </div>
            <div class="form-group" v-if="mode !== 'connexion'">
              <label for="email">Prenom :</label>
              <input type="text" id="text" v-model="lastName" required>
            </div>
            <div class="form-group">
              <label for="email">Adresse email :</label>
              <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group" v-if="mode === 'connexion' || mode === 'creation'">
              <label for="password">Mot de passe :</label>
              <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-group" v-if="mode === 'creation'">
              <label for="confirmPassword">Confirmer le mot de passe :</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword" required>
            </div>
            <button type="submit" class="btn-primary btn-login">
              {{ mode === 'connexion' ? 'Se connecter' : 'Créer un compte' }}
            </button>
          </form>
          <div class="signup-link">
            <p>
              {{ mode === 'connexion' ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?" }}
              <a href="#" @click="switchMode">{{ mode === 'connexion' ? 'Créer un compte' : 'Se connecter' }}</a>
            </p>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <BasDePage/>
    </footer>
  </div>

</template>

<script>
import axios from "axios";
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";

export default {

  name: "LoginPage",
  components: { Entete, BasDePage },
  data() {
    return {
      mode: "connexion",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      is_admin:false,
    };
  },

  methods: {
    switchMode() {
      this.mode = this.mode === "connexion" ? "creation" : "connexion";
    },
    submitForm() {
      if (this.mode === "connexion") {
        //this.performConnexion();
        const result = async () => {
          console.log('hello');
          const res = await axios.post('http://localhost:3000/clients/connexion', {
            email: this.email,
            motdepasse: this.password,
            is_admin:this.is_admin,
          });

          console.log('result axios', res);
            if (this.is_admin) {
              localStorage.setItem('user', JSON.stringify(({is_admin: true, is_connected: true})));
              this.$router.push('/modifcatalogue')
            }
            else {
              this.$router.push('/modifcatalogue')
            }
          return res;
        }
        result();
      } else {
        const result = async () => {
          console.log('hello');
          const res = await axios.post('http://localhost:3000/clients/subscribe', {
            nom: this.firstName,
            prenom: this.lastName,
            email: this.email,
            motdepasse: this.password,
            is_admin:this.is_admin,
          });
          console.log('result axios', res);
          return res;
        }
        result();
        // this.performInscription();
      }
    },
    performConnexion() {
      // Add your logic for login/authentication here
    },
    performInscription() {
      if (this.password !== this.confirmPassword) {
        // Passwords don't match, handle error
      }
      // Add your logic for user registration here
    },

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
  width: 600px;
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

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input[type="text"],
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

.corps {
  background-image: url("https://storage.googleapis.com/photokabori/croquis/IMG_7311-min.JPG");
  background-size: 100%;
  min-height: 100%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #66bb6a; /* Color when switched on */
}

input:focus + .slider {
  box-shadow: 0 0 1px #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.slider::after {
  position:relative;
  right:-55px;

  content: "Admin"
}
</style>