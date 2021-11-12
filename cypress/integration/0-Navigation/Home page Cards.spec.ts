const cards = {
  "Currencies": "/currencies", 
  "Companies": "/companies"
}

const CardsNavigation = 
  describe("For each card in home page", () => {
    for (let card in cards) 
    {
      const url = cards[card]
      describe(`When click the '${card}' card`, () => {
        it(`Should open the '${card}' page`, () => {
          // Assert
          cy.visit("http://localhost:3000")

          // Act
          //cy.get("a > h2").contains("Currencies").click()
          cy.get("[class*='_card_']").contains(card).click()

          // Assert
          cy.url()
            .should("include", url)
        })
      })
    }
  })

export default CardsNavigation