// https://docs.cypress.io/api/introduction/api.html

import * as vitest from "vitest";
import cypress from "cypress";
import cy from "cypress";

vitest.describe('My First Test', () => {
  it('Test en to end de la page créations', () => {
    // Visite l'URL de la page creations
    cy.visit('http://localhost:5173/creations')

    //Cliquer sur le premier bouton
    cy.get('button').click()

    // L'overlay devrait apparaitre

    cy.get('overlay').should('be.visible')
  })
})
