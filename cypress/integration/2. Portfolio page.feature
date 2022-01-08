Feature: Portfolio page
  I want to open the Portfolio page
  and see the current balance

  Background: 
    When I visit the "/" page

  Scenario: I see the page header
    Then I should see "Your Portfolio!" in the header