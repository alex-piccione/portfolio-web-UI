import { Before, Then, When} from "cypress-cucumber-preprocessor/steps"

Before(() => {
  cy.intercept("GET", "/api/balance?base-currency=EUR").as("getBalance")
})

When("I visit the {string} page", (path) => {
  cy.visit(path)
})

Then("I should see {string} in the header", (header) => {
  cy.get('h1').should('contain', header)
})

When("A call to {string} is executed", (endpoint) => {
  cy.wrap(endpoint).as("endpoint")
  cy.wait(200)
  cy.get("@getBalance").should("exist")
})

When("I receive the response", () => {
  cy.wait("@getBalance")//.its("response.body").should("deep.equal", data)
})

Then("I see a table with the following headers:", (data) => {
  cy.get("table#balanceTable").as("table").should("exist")
  data.rows().forEach(row => 
    cy.get("@table").find(`thead > tr > th:Contains(${row[0]})`).should("exist"))
  
  //cy.get("@endpoint").then((endpoint) => {

})