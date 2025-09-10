// The custom cypress commands are inserted in this file.

// The line immediately below is extremely necessary for typescript, so don't delete!
/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})