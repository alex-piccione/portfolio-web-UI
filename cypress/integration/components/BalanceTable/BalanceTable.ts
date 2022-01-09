import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { RouteHandler } from "cypress/types/net-stubbing"
import { Balance } from "../../../../components/entities"

const balance:Balance = {
    date: new Date(),
    fundsByCurrency: [{
      currencyCode: "EUR", 
      quantity: 100, 
      companies: [{id: "c1", name: "Company 1"}]}]
  }

const url = "/"
Given("I visit the portfolio page", () => {
    cy.intercept("GET", "/api/balance?base-currency=EUR", {
        statusCode: 200,
        body: balance,
    } as RouteHandler)
    cy.visit(url)
})

Then('I should see {string} in the header', (header) => {
    cy.get('h1').should('contain', header)
})


Then('I should see a table with the following headers', (dataTable) => {    

    cy.get('#balanceTable-spinner').as("spinner") 

    // it calls backend to retrieve data
    // TODO: mock provider to remove dependency on wait: 
    // https://github.com/alex-piccione/portfolio-web-UI/issues/31
    cy.wait(2000) // wait 2 seconds

    cy.get('table').as("table") // alias
    cy.get('@table').should('be.visible')

    for (let row of dataTable.rows()) {
        cy.get('@table').find('th').should("contain", row[0])
    }
})