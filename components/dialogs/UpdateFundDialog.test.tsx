//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import {mount} from "@cypress/react"
import  React from "react"
import UpdateFundDialog, { UpdateFundDialogProps } from "./UpdateFundDialog"

// I should see the "Add Fund" label

const defaultProps:UpdateFundDialogProps = {
  fund: undefined,
  save: () => {},
  close: () => {}
}

it("I opened the dialog", () => {
  mount(<UpdateFundDialog {...defaultProps} />)
  cy.get("div.modal-dialog").as("dialog").should("be.visible")
  //cy.get("@dialog").find("div.modal-title").should("contain", title)
  cy.get("@dialog").find("div.modal-body form").as("form")
})

