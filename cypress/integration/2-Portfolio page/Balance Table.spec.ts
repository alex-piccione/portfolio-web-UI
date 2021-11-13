import { FundAtDateSaveRequest } from "../../../components/entities"
import helper from "../helper"

export default describe("BalanceTable", () => {

  before("Open home page", () => {
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