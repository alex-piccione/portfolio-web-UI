import { Then, When} from "cypress-cucumber-preprocessor/steps"


When("I visit the {string} page", (path) => {
    cy.visit(path)
})

Then("I should see {string} in the header", (header) => {
    cy.get('h1').should('contain', header)
})