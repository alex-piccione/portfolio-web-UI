export default describe("When click the 'Currencies' card", () => {
  it("Should open the docs page", () => {
    // Assert
    cy.visit("http://localhost:3000")

    // Act
    cy.contains("Currencies").click()

    // Assert
    cy.url()
      .should("include", "/currencies")
  })
})