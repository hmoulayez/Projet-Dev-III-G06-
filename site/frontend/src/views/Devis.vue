<template>
  <div class="devis-formulaire">
    <header>
      <Entete />
    </header>
    <main class="corps">
      <div class="container">
        <h1 class="form-title">Formulaire de devis</h1>
        <form @submit.prevent="envoyerDemandeDevis" class="my-4">
          <div class="form-group">
            <label for="nom">Nom et Prénom :</label>
            <input type="text" class="form-control" id="nom" name="nom" v-model="nom" autocomplete="on" required />
          </div>

          <div class="form-group">
            <label for="email">Email :</label>
            <input type="email" class="form-control" id="email" name="email" v-model="email" autocomplete="on" required />
          </div>

          <div class="form-group">
            <label for="modele">Modèle :</label>
            <select class="form-control" id="modele" name="modele" v-model="modele" autocomplete="on" required>
              <option v-for="model in models" :key="model">{{ model }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="remarque">Remarque :</label>
            <textarea class="form-control" id="remarque" name="remarque" rows="4" v-model="remarque" autocomplete="on"></textarea>
          </div>

          <button type="submit" class="btn btn-envoyer" :disabled="isSubmitting">Envoyer</button>

        </form>
        <div class="col-md-6">
          <div>
            <p class="text-success" v-if="demandeEnvoyee">Demande envoyée avec succès !</p>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <BasDePage />
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";

export default {
  name: "Devis",
  components: { BasDePage, Entete },
  data() {
    return {
      nom: "",
      email: "",
      modele: "",
      remarque: "",
      models: [],
      demandeEnvoyee: false,
      isSubmitting: false // Variable pour désactiver le bouton de soumission pendant la soumission
    };
  },
  mounted() {
    this.recupModels(); // Appel pour récupérer les modèles au montage du composant
  },
  methods: {
    recupModels() {
      axios
          .get("http://localhost:3000/prod/")
          .then((response) => {
            // Traitement des données reçues pour récupérer les noms des modèles
            this.models = response.data.map((prod) => prod.nom);
            console.log("Models récupérés :", this.models); // debugging
          })
          .catch((error) => {
            console.error(
                "Erreur lors de la récupération de la liste des modèles:",
                error
            );
          });
    },
    async envoyerDemandeDevis() {
      if (this.isSubmitting) {
        return; // Si le formulaire est déjà en cours de soumission, ne rien faire
      }

      this.isSubmitting = true; // Activer le bouton de soumission

      const demande = {
        nom: this.nom,
        email: this.email,
        modele: this.modele,
        remarque: this.remarque
      };

      try {
        await axios.post("http://localhost:3000/devis", demande); // Envoyer la demande de devis
        this.demandeEnvoyee = true; // Marquer la demande comme envoyée avec succès
        console.log("Demande de devis envoyée avec succès !"); // debugging
      } catch (error) {
        console.error(
            "Erreur lors de l'envoi de la demande de devis :", error
        );
      } finally {
        this.isSubmitting = false; // Désactiver le bouton de soumission après la soumission (réussie ou échouée)
      }
    }
  }
};
</script>


<style scoped>
.devis-formulaire {
  background-color: #333333;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
  background-color: #000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #ffffff;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #ffffff;
  color: #000000;
}

.btn-envoyer {
  padding: 10px 20px;
  background-color: #ffffff;
  color: #000000;
  border: none;
  cursor: pointer;
}

.btn-envoyer:hover {
  background-color: #cccccc;
}

.message-succes {
  background-color: #4caf50;
  color: #ffffff;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  border-radius: 5px;
}

.message-succes i {
  margin-right: 5px;
}

.form-title {
  color: yellow;
}
.corps {
  background-image: url("https://storage.googleapis.com/photokabori/croquis/IMG_7311-min.JPG");
  background-size: 100%;
  min-height: 100%;
}
</style>