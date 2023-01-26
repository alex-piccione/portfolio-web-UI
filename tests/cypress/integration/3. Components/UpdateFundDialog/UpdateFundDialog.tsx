import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { mount } from "@cypress/react"
import UpdateFundDialog, { UpdateFundDialogProps } from "../../../../../components/dialogs/UpdateFundDialog"

// I should see the "Add Fund" label
const defaultProps:UpdateFundDialogProps = {
  fund: undefined,
  save: () => {},
  close: () => {}
}

Given("I opened the dialog", () => {
  mount(<UpdateFundDialog {...defaultProps} />)
  cy.get("div.modal-dialog").as("dialog").should("be.visible")
  //cy.get("@dialog").find("div.modal-title").should("contain", title)
  cy.get("@dialog").find("div.modal-body form").as("form")
})

