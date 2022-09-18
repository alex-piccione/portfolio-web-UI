const cards = [
  ["Currencies", "/currencies"],
  ["Companies", "/companies"]
]

const baseUrl = "http://localhost:3000"

const CardsNavigation = 
  describe("For each Card in home page:", () => {

    cards.forEach(card => {
      const name = card[0]
      const url = card[1]

      describe(`When click the '${name}' card`, () => {
        it(`Should open the '${name}' page at '${url}'`, () => {
          cy.visit(baseUrl)

          // open Card page
          //cy.get("a > h2").contains("Currencies").click()
          cy.get("[class*='_card_']").contains(name).click()
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
    })
  })

export default CardsNavigation