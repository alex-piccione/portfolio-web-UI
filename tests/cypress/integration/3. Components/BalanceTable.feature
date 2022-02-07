Feature: Balance Table
I want to be able to see assets and add new assets.

Background:
  Given I visit the portfolio page

Scenario: Open portfolio page
  Then I should see "Portfolio" in the header
  Then I should see the "Last update:" label
  Then I should see a table with the following headers
      | Header    |
      | Currency  |
      | Quantity  |
      | Companies |

Scenario: Rows have an "Update" button
  Then I should see a row with an "Update" button

# TODO: https://github.com/alex-piccione/portfolio-web-UI/issues/32
#Scenario: Open dialog to add new asset
#  And a record with:
#    | Currency | Quantity |
#    | Quantity | 1        |
#  When I click on "Add" button
#  Then I should see a dialog
#    And I should see a form with:
#      | Currency | Quantity |
#      | Quantity | 1        |
#    And I should see a "Save" button
#    And I should see a "Cancel" button