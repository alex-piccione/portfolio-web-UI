import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const url = "/"
Given("I visit the portfolio page", () => {
    cy.visit(url)
})

Then('I should see {string} in the header', (header) => {
    cy.get('h1').should('contain', header)
})

Then('I should see a table', () => {
    cy.get('table').should('exist')
})
