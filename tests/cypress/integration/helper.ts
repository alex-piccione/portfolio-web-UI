import { RouteHandler } from "cypress/types/net-stubbing"
import { Company, Currency } from "../../../components/entities"

type injectedData = {
  currencies: Currency[],
  companies: Company[]
}

const data:injectedData = {
  currencies: [],
  companies: []
}

const helper = {
  
  setCurrencies:(currencies: Currency[]) => data.currencies = currencies,
  interceptGetCurrencies: (items?:Currency[]) => {
      cy.intercept("GET", "/api/currencies", {
          statusCode: 200,
          body: items || data.currencies,
      } as RouteHandler).as("getCurrencies")
  },
  waitGetCurrencies: () => cy.wait("@getCurrencies"),
  setCompanies:(items: Company[]) => data.companies = items,
  interceptGetCompanies: (items?:Company[]) => {
      cy.intercept("GET", "/api/companies", {
          statusCode: 200,
          body: items || data.companies,
      } as RouteHandler).as("getCompanies")
  },
  waitGetCompanies: () => cy.wait("@getCompanies"),

}

export default helper