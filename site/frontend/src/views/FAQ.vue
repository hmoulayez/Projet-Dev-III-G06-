<template>
  <header>
    <Entete/>
  </header>
  <main class="corps">
    <v-container  >
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <h1 >La Foire Aux Questions</h1>
            <p class="intro">
              Hello! Si vous avez atterri sur cette page, c'est qu'il y a des questions qui vous trottent dans la tête. J'espère que vous y trouverai des réponses. Si ce n'est pas le cas, n'hésitez pas du tout à me contacter.
            </p>
            <v-expansion-panels>
              <v-expansion-panel
                  v-for="i in tabQuestions"
                  :key="i.titre"
                  :title="i.titre"
                  :text="i.texte"
              ></v-expansion-panel>
            </v-expansion-panels>
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
  name: "FAQ",
  components:{
    Entete,
    BasDePage,
  },
  data(){
    return {
      tabQuestions : [
        {titre: '1. Que signifie « KABORI » ? ',
        texte: 'Littéralement, KABORI signifie ‘’viens être beau/belle’’ en Dendi, qui est une langue parlée au Nord du Bénin. Le mot est composé de « KÂ » qui veut dire « viens » et « ABÒRI » qui veut dire, « c’est beau ». J’aime bien à dire que KABORI veut dire « Viens te faire belle ».'},
        {titre:'2. Quelle est la gamme de prix des robes ? ',
        texte: 'La fourchette de prix des robes de collection est entre 300 et 500 euros. La moyenne de prix  est donc autour de 400 euros.  \n' +
            'En ce qui concerne les créations exclusives, elles font toujours l’objet d’un devis. Le prix varie en fonction des besoins et des spécifications. Vous pouvez fixer un budget à partir de 350 euros et nous discuterons de ce qui faisable autour de celui-ci. \n'},
        {titre: '3. Où se situe votre atelier sur Bruxelles ? ',
        texte: 'KABORI CREATIONS ne dispose pas encore d’atelier ou de showroom physique à Bruxelles. Je me déplace à domicile pour réaliser un service au besoin. Si cela n’est pas envisageable pour vous, nous pouvons organiser un rendez-vous dans un endroit neutre que je vous proposerai en temps voulu. '},
        {titre: '4. Comment cela se passe-t-il lorsqu’on habite hors de Bruxelles et qu’on souhaite avoir une robe KABORI CREATIONS ? ',
        texte: 'Si vous habitez hors de Bruxelles, pas de stress. J’ai pensé à la clientèle présente hors de Bruxelles et un processus en ligne est mis en place pour faciliter la confection de votre robe. Je vous guide de A à Z au long du processus : choix du modèle, prise des mesures etc. Après confection, votre robe vous sera envoyée par courrier recommandé par la poste ou DHL en fonction de votre lieu de résidence. '},
        {titre: '5. Je souhaite avoir une robe de collection. Quel modèle serait idéal pour moi ?',
        texte:'Je vous conseillerais de choisir votre modèle principalement sur base de ces critères : la morphologie, l’occasion/l’événement à célébrer, le style vestimentaire/la personnalité. Si vous avez quand même un doute, n’hésitez pas à me contacter afin que nous puissions en discuter. Je vous rappelle d’ailleurs que les robes de collection sont personnalisables, afin de vous convenir au mieux. '},
        {titre: '6. Il me faut une robe de collection. Dois-je prendre rendez-vous ?',
        texte: 'Non, pas nécessairement. Vous pouvez directement me contacter. Je vous ferai parvenir un formulaire de mensurations de même que les modalités de paiement afin que la commande soit effective. \n' +
            'Par ailleurs, si vous avez des questions ou autres préoccupations, nous pouvons convenir d’un entretien téléphonique via Zoom, Whatsapp business ou Google meet. \n'},
        {titre: '7. Les robes de collection sont belles. Mais je souhaite avoir une robe créée juste pour moi. Est-ce possible ? ',
        texte: 'Oui, il est tout à fait possible de créer une pièce unique pour vous en partant d’un croquis. Ce croquis, je le réalise en prenant en compte vos besoins, vos envies et j’y rajoute ma touche de créativité. '},
        {titre: '8. Il me faut une création unique. Dois-je prendre rendez-vous ?',
        texte: 'Oui, absolument. Et cela pour plusieurs raisons. Pour une création unique et exclusive, j’ai besoin de prendre le temps de discuter avec vous, pour bien cerner votre besoin. Nous parlerons de votre personnalité, de votre style, de l’événement à venir, des matériaux à utiliser, du budget ; bref, de tout un tas de détails qui me permettront de vous proposer la création la plus adaptée. '},
        {titre: '9. Comment me contacter ? ',
          texte: 'Vous pouvez me contactez par mail à kaboricreations@gmail.com, par appel téléphonique, en Directs Messages sur Instagram, whatsapp business .'},
        {titre: '10. Quelles langues peut-on parler lors de l’entretien?',
          texte: 'Les entretiens peuvent se dérouler en français ou en anglais. '},
        {titre: '11. Comment se déroule notre entretien?',
          texte: 'L’entretien se déroule via le canal que vous aurez choisi, au moment que nous aurons convenus. Il dure en moyenne 45 minutes. Autour d’un thé ou d’un café virtuel, nous discuterons de toutes vos préoccupations ou questions à propos de votre robe. En toute simplicité et en toute bienveillance, je vous apporterai des réponses à vos questions. Vous avez un projet de robe ? Vous pouvez booker un appel découverte pour en discuter et cela, sans engagement. '},
        {titre: '12. Que se passe-t-il une fois le modèle choisi? ',
          texte: 'Si vous habitez à Bruxelles, je peux me déplacer à domicile pour la prise de vos mesures. Nous planifions ensuite un nouveau rendez-vous afin de vous faire essayer le prototype de la tenue, réalisé dans du caliquot (tissu en coton à faible coût utilisé pour les prototypes), afin d’avoir un aperçu du résultat final. A cette étape, il est toujours possible d’apporter des corrections ou des modifications au modèle. Cette étape est surtout réalisée pour les créations uniques. \n' +
              'Ensuite, le modèle final est réalisé. Vous pourrez l’essayer et des retouches seront faites au besoin. \n' +
              'Si vous vivez hors de Bruxelles, vous recevrez directement la tenue finie, parfaitement fidèle aux croquis et à vos mensurations. \n'},
        {titre: '13. Je reçois ma robe. Et si elle ne me va pas ? ',
          texte: 'Votre robe sera à la bonne taille pour autant que le guide des tailles soit bien respecté. Si elle ne vous va quand même pas, je vous suggère de prendre rendez-vous avec une couturière spécialisée pour effectuer des retouches. Nous trouverons dans tous les cas, une façon de solutionner les déconvenues, pacifiquement. '},
        {titre: '14. Quelles sont les modalités de paiements ?',
          texte: 'A la commande, un acompte de 60% vous sera demandé afin de débuter le travail. Lorsque la robe est entièrement réalisée, vous paierez le solde des 40% restants. Une fois la totalité du paiement reçu, la livraison est effectuée dans les meilleurs délais par courrier recommandé. Les paiements peuvent s’effectuer par virement bancaire, par PayPal, ou en argent liquide.'},
        {titre: '13. Ma question ne figure pas ici. Que faire ? ',
          texte: 'Contactez-moi tout simplement. N’hésitez vraiment pas.'},

      ]
    }
  }
}
</script>

<style scoped>
h1 {
  justify-content: center;
  text-align: center;
}
.intro {
  justify-content: center;
  text-align: center;
  display: block;
}
.corps{
  background-image: url("https://storage.googleapis.com/photokabori/croquis/IMG_7311-min.JPG");
}
</style>