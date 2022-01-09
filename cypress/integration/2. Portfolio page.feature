Feature: Portfolio page
  I want to open the Portfolio page
  and see the current balance

  Background: 
    When I visit the "/" page

  Scenario: I see the page header
    Then I should see "Your Portfolio!" in the header
  
  @ignore
  Scenario: I see the balance table populated
    And A call to "/api/balance/base-currency=EUR" is executed
    Then I see a table with the following headers:
      | Header    |
      | Currency  |
      | Quantity  |
      | Companies |