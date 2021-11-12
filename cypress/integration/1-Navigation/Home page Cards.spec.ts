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
        it(`Should open the '${card}' page and return to home`, () => {

          cy.visit("http://localhost:3000")

          // open Card page
          //cy.get("a > h2").contains("Currencies").click()
          cy.get("[class*='_card_']").contains(card).click()
          cy.url().should("include", url)

          // go back to home
          cy.get("a").contains("home").click()
          cy.url().should("eq", "http://localhost:3000/")

        })
      })
    }
  })

export default CardsNavigation