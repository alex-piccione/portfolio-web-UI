import { Balance/*, FundAtDateSaveRequest*/ } from "../../../../components/entities"

const balance:Balance = {
  date: new Date(),
  fundsByCurrency: [{
    currencyCode: "EUR", 
    quantity: 100, 
    companies: [{id: "c1", name: "Company 1"}]}],
    lastUpdate: new Date()
}

const currencies = [{Code: "EUR", Name: "Euro"}, {Code: "USD", Name: "US Dollar"}]
const companies = [
  {"id":"1","name":"HSBC","types":["Bank","Stacking"]}, 
  {"id":"2","name":"Kraken","types":["Exchange"]},
  {"id":"3","name":"Binance","types":["Exchange","Stacking"]}
]

export default describe("BalanceTable", () => {

  beforeEach("Open home page", () => {
    //https://docs.cypress.io/api/commands/intercept#Syntax
    cy.intercept("GET", "/api/balance?base-currency=EUR", 
      {
        statusCode: 200,
        body:balance
      }
    ).as("getBalance")

    cy.intercept("GET", "/api/currencies", 
    {
      statusCode: 200,
      body:currencies
    }
    )//.as("getCurrencies")

    cy.intercept("GET", "/api/companies", 
    {
      statusCode: 200,
      body:companies
    }
    )//.as("getCurrencies")

    cy.visit("/")
  })

  it("has the defined headers", () => {
    cy.get("table > thead > tr > th")      
      .first().should("have.text", "Currency")
      .next().should("have.text", "Quantity")
      .next().should("have.text", "Companies") 
  })   

  it("has data rows", () => {
    cy.get("table > tbody > tr").should("have.length.gt", 0)
  })
  
  describe("rows have an 'Update' button", () => {    
    it("that opens a modal", () => { 
      cy.wait("@getBalance").then( () => {     
        const addButton = cy.get("table > tbody > tr").first().find("button:Contains(Update)")
        addButton.click().then(() => {
          cy.get("[class*='modal-dialog']").should("exist").and("be.visible")
        })      
      })  
    })
  })

  /*
  describe("when an item is saved", () => {    

    const companyId = "aaa"
    const record:FundAtDateSaveRequest = { date: new Date(), currencyCode: "AAA", quantity: 1000.23, companyIds: [companyId] }

    //helper.saveRecord()record
    it("contains the saved item", () => {
      
    }) 
  })
  */

})