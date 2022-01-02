Feature: Google Main Page

I want to be able to search for a specific product

@focus
Scenario: Search for a product
  Given I visit the Google main page
  When I search for "pizza"
  Then I should see "pizza" in the search results