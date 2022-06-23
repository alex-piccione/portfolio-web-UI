Feature: Balance Table
I want to be able to update fund in the dialog.

Background:
  Given I opened the dialog

Scenario: Dialog render properly when no fund is passed
  Then I should see the "Add Fund" label