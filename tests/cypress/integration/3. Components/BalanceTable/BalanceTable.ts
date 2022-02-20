import { Assertion } from "chai"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { RouteHandler } from "cypress/types/net-stubbing"
import { Balance, Company, Currency } from "../../../../../components/entities"
import helper from "../../helper"

const url = "/" // portfolio is the home page
const balance:Balance = {
    date: new Date(),
    fundsByCurrency: [{
      currencyCode: "EUR", 
      quantity: 100, 
      companies: [{id: "c1", name: "Company 1"}]}],
    lastUpdate: new Date()
  }

Given("I visit the portfolio page", () => {
    cy.intercept("GET", "/api/balance?base-currency=EUR", {
        statusCode: 200,
        body: balance,
    } as RouteHandler).as("getBalance")
    cy.visit(url)
    cy.get('table').as("table") // alias for the table element
})


Given("these Currencies:", (dataTable) => {
    const currencies:Currency[] = dataTable.hashes().map( (row:any) => { return {code:row.Code, name:row.Name} as Currency }) 
    helper.interceptGetCurrencies(currencies)
})

Given("these Companies:", (dataTable) => {
    const companies:Company[] = dataTable.hashes().map( (row:any) => { return {id:row.Id, name:row.Name, types:[row.Types]} as Company }) 
    helper.interceptGetCompanies(companies)
})

When("I click the {string} button", async (addFundButton) => {
    cy.wait("@getBalance")
    cy.get(`button:Contains(${addFundButton})`).click()
    helper.waitGetCompanies()
    helper.waitGetCurrencies()    
})

Then('I should see the {string} label', (label) => {
    cy.contains(label)
})

Then('I should see a table with the following headers', (dataTable) => {    
    cy.wait("@getBalance").then( () => {
        cy.get('@table').should('be.visible')

        for (let row of dataTable.rows()) {
            cy.get('@table').find('th').should("contain", row[0])
        }
    })
})

Then('I should see a row with an "Update" button', () => {
    cy.wait("@getBalance").then( () => {
        cy.get('@table').find("tbody").find("tr").first().as("row")
        cy.get('@row').find('td').find("button").should("contain", "Update")
    })
})

Then("I should see a dialog with title {string}", (title:string) => {
    cy.get("div.modal-dialog").as("dialog").should("be.visible")
    cy.get("@dialog").find("div.modal-title").should("contain", title)
})

Then("it has a form with these values:", (dataTable) => {
    const values = dataTable.hashes()[0]
    cy.get("@dialog").find("div.modal-body form").as("form")
    cy.get("@form").should("exist")
    cy.get("@form").find("label:Contains(Date)").as("label-Date").should("exist")
    cy.get("@form").find("label:Contains(Currency)").as("label-Currency").should("exist")
    cy.get("@form").find("label:Contains(Company)").as("label-Company").should("exist")
    cy.get("@form").find("label:Contains(Quantity)").as("label-Quantity").should("exist")

    cy.get("@label-Date").parent().find("input").as("input-Date").should("exist").and("not.have.value", "") 
    cy.get("@label-Currency").parent().find("select").as("select-Currency").should("exist")
    cy.get("@label-Company").parent().find("select").as("select-Company").should("exist")
    cy.get("@label-Quantity").parent().find("input").as("input-Quantity").should("exist").and("have.value", "0")    

    //cy.get("@input-Date").invoke("val", values.Date)
    cy.get("@select-Currency").select(values.Currency)
    cy.get("@select-Company").select(values.Company)  
    cy.get("@input-Quantity").type(values.Quantity)  // TODO: remove the existing "0", clear the input
})

When("I click the {string} button, in the dialog", async (button) => {    
    cy.intercept("/api/balance/update-fund").as("postUpdateFund")    
    cy.get("@dialog").find(`button:Contains(${button})`).click()
})

Then("a POST request with this payload is sent:", (dataTable) => {
    const { Currency, Company, Quantity } = dataTable.hashes()[0]    

    cy.wait("@postUpdateFund").then(x => {        
        expect(x.request.method).to.equal("POST")
        expect(x.request.body.date).to.beToday()
        expect(x.request.body.currencyCode).to.equal(Currency)
        expect(x.request.body.companyId).to.equal(Company)
        expect(x.request.body.quantity).to.equal(parseFloat(Quantity))
    })
})

Then("a {string} request with this payload is sent:", (method, dataTable) => {
    alert(3)
})

