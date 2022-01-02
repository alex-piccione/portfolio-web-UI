import { Given } from "cypress-cucumber-preprocessor/steps"

const url = "https://www.google.com"
Given("I visit the Google main page", () => {
    cy.visit(url)
})

export {}