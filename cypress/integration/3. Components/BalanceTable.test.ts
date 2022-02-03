import { Balance/*, FundAtDateSaveRequest*/ } from "../../../components/entities"

const balance:Balance = {
  date: new Date(),
  fundsByCurrency: [{
    currencyCode: "EUR", 
    quantity: 100, 
    companies: [{id: "c1", name: "Company 1"}]}]
}

export default describe("BalanceTable", () => {

  before("Open home page", () => {
    //https://docs.cypress.io/api/commands/intercept#Syntax
    cy.intercept("GET", "/api/balance?base-currency=EUR", 
      {
        statusCode: 200,
        body:balance
      }
    ).as("getBalance")

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
      const addButton = cy.get("table > tbody > tr").first().find("button:Contains(Update)")
      addButton.click().then(() => {
        cy.get("[class*='modal-dialog']").should("exist").and("be.visible")
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