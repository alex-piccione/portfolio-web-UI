Feature: Portfolio page
  I want to open the Portfolio page
  and see the current balance

  Background: 
    Given baseCurrency is "EUR"
    And I visit the "/" page
 
  Scenario: I see the page header
    Then I should see "Your Portfolio!" in the header
  
  Scenario: I see the balance table populated
    Then I see a table with the following headers:
      | Header    |
      | Currency  |
      | Quantity  |
      | Value (in {baseCurrency})  |
      | Companies |