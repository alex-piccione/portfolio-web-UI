import { Before, Then, When} from "cypress-cucumber-preprocessor/steps"

Before(() => {
  cy.log("intercept get balance request")
  cy.intercept("GET", "/api/balance?base-currency=EUR").as("getBalance")

  cy.log("intercept any request")
  //cy.log(`base URL: ${cy.baseUrl}`)
  cy.intercept('*/api/*', { hostname: 'localhost' }, (req) => {
    /* do something with request and/or response */
    cy.log(`req: ${req.url}`)
  })
})

When("I visit the {string} page", (path) => {
  cy.visit(path)
})

Then("I should see {string} in the header", (header) => {
  cy.get('h1').should('contain', header)
})

When("A call to {string} is executed", (endpoint) => {
  cy.intercept("GET", endpoint).as("getBalance")
})

Then("I see a table with the following headers:", (data) => {
  //cy.wait("@getBalance").then(() => {
    cy.get("table#balanceTable").as("table").should("exist")
    data.rows().forEach(row => 
      cy.get("@table").find(`thead > tr > th:Contains(${row[0]})`).should("exist"))
  //})
})