export default describe("When click the 'Currencies' card", () => {
  it("Should open the 'Currencies' page", () => {
    // Assert
    cy.visit("http://localhost:3000")

    // Act
    //cy.get("a > h2").contains("Currencies").click()
    cy.get("[class*='_card_']").contains("Currencies").click()

    // Assert
    cy.url()
      .should("include", "/currencies")
  })
})