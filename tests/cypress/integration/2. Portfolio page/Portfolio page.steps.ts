import { Before, Then, When} from "cypress-cucumber-preprocessor/steps"
import { Balance } from "../../../../Entities"

const context = {
  baseCurrency: "not set",
}

const balance:Balance = {
  date: new Date(),
  fundsByCurrency: [{
    currencyCode: "EUR", 
    quantity: 100, 
    companies: [{id: "c1", name: "Company 1"}]}],
    lastUpdate: new Date()
}

When("baseCurrency is {string}", (baseCurrency) => {  
  context.baseCurrency = baseCurrency
  cy.intercept("GET", `/api/balance?base-currency=${baseCurrency}`, {statusCode: 200, body:balance}).as("getBalance")
})

When("I visit the {string} page", (path) => {
  cy.visit(path)
})

Then("I should see {string} in the header", (header) => {
  cy.get('h1').should('contain', header)
})

Then("I see a table with the following headers:", (data) => {
  console.log("check")
    cy.wait("@getBalance").then(() => {   
      cy.get("table#balanceTable").as("table").should("exist")
      const replaceCurrency = (str:string) => str.replace("{baseCurrency}", context.baseCurrency)      
      data.rows().forEach((row:string[]) => {
        const header = replaceCurrency(row[0])
        cy.get("@table").find(`thead > tr > th:Contains(${header})`).should("exist")
      })
    })
})