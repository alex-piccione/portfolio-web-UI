const cards = {
  "Currencies": "/currencies", 
  "Companies": "/companies"
}

const baseUrl = "http://localhost:3000"

const CardsNavigation = 
  describe("For each Card in home page:", () => {
    for (let card in cards) 
    {
      const url = cards[card]

      describe(`When click the '${card}' card`, () => {
        it(`Should open the '${card}' page at '${url}'`, () => {

          cy.visit(baseUrl)

          // open Card page
          //cy.get("a > h2").contains("Currencies").click()
          cy.get("[class*='_card_']").contains(card).click()
          cy.url().should("include", url)
        })
      })

      describe(`When I'm in the '${url}' page and click "home"`, () => {
        it(`Should return to the home page`, () => {
          cy.visit(baseUrl + url)

          // go back to home
          cy.get("a").contains("home").click()
          cy.url().should("eq", baseUrl + "/")
        })
      })
    }
  })

export default CardsNavigation