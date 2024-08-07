Feature: Navigate to about page from home

  Scenario: Open homepage
    Given I am on the homepage
    When I click on the "About" link
    Then I should see the "About" page
