import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the homepage", () => {
  cy.visit("/");
});

When("I click on the {string} link", (linkText: string) => {
  cy.get(`a[href*="${linkText.toLowerCase()}"]`).click()
});

Then("I should see the {string} page", (pageName: string) => {
  cy.url().should('include', `/${pageName.toLowerCase()}`);
  cy.get('h1').contains(pageName);
});

