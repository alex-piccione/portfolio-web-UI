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
Scenario: Add new Fund
  Given these Currencies:
    | Code | Name      |
    | USD  | US Dollar |
    | EUR  | Euro      |
    | GBP  | UK Pound  |
  And these Companies:
    | Code | Name       | Types    |
    | c1   | Bank 1     | Bank     | 
    | c2   | Exchange 1 | Exchange |
  When I click the "Add Fund" button
  Then I should see a dialog with title "Update fund"
  And it has a form with these values
    | Date       | Currency | Company | Quantity |
    | 01/01/2000 | USD      | c1      | 123      |
  #Then I should see a form with the following fields
  #  | Name | Symbol |
  #  | USD  | $      |
  #  | EUR  | €      |
  #  | GBP  | £      |
  #When I fill in the form with the following values
  #  | Name | Symbol |
  #  | USD  | $      |
  #  | EUR  | €      |
  #  | GBP  | £      |
  #Given I click on the "Add Fund" button
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