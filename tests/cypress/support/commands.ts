// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable {
      createFund: typeof createFund
    }
  }
}

export interface FundAtDate {

}

export function createFund(record:FundAtDate) {
  // TODO: create a record on DB or cache
}

export function waitUntil(checkFunction:Function) {

  //const result = checkFunction()
  //cy.waitFor()
  while(!checkFunction()) {
    cy.wait(250)
  }
/*
  const checkResult = (result:Boolean) => {
    if (result) {
      return result
    }

    cy.wait(250)

    return resolveValue()
  }

  const resolveValue = () => {
    const result = checkFunction()

    const isAPromise = Boolean(result && result.then)
    if (isAPromise) {
      return result.then(check)
    } else {
      return check(result)
    }
  }
  */

  //cy.waitUntil(checkFunction)
}

Cypress.Commands.add("createFund", createFund)


export default {}
