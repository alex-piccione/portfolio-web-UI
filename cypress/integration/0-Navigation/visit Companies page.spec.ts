export default describe("When click the 'Companies' card", () => {
  it("Should open the 'Companies' page", () => {
    // Assert
    cy.visit("http://localhost:3000")

    // Act
    cy.get("[class*='_card_']").contains("Companies").click()

    // Assert
    cy.url()
      .should("include", "/companies")
  })
})