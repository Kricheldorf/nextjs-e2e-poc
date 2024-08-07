# e2e tests: Next.js + MUI + (Playwright | Cypress) + Cucumber

This repo is a POC for configuring a Next.js app Playwright and Cypress (with and without BDD (Cucumber)). 

## Setup

```bash
npm install
npm run playwright:install
```

## Run Playwright tests (w/o Cucumber)

Test file: `e2e/app.spec.ts`  
Config file: `playwright.config.ts`  

```bash
npm run playwright
```

## Run Playwright tests (w/ Cucumber)

Feature file: `features/goToAboutPage.feature`  
Step file: `steps-tw/goToAboutPage.steps.ts`  
Config file: `playwright.bdd.config.ts`  

```bash
npm run playwright:cucumber
```

## Run Cypress tests (w/o Cucumber)

Test file: `cypress/e2e/goToAboutPage.cy.ts`  
Config file: `cypress.config.ts`  

```bash
npm run cypress
```

## Run Cypress tests (w Cucumber)

Test file: `cypress/e2e-bdd/goToAboutPage.cy.ts`  
Config file: `cypress.bdd.config.ts`  
Config file: `.cypress-cucumber-preprocessorrc.json`  

```bash
npm run cypress:cucumber
```

## Running average times check

Obs:
* This is just for curiosity. We can't assume which one is faster with these simple testing scenarios.
* Curious that the times when running with cucumber (which in fact adds a step to the test) are faster. It's probably due to the run and reporting configuration.

```bash
chmod +x time-e2e.sh
```

```bash
./time-e2e.sh
```

Running: npm run cypress  
Run 1: 16.825s  
Run 2: 14.377s  
Run 3: 12.462s
Average time for 'npm run cypress': 14.554s  

Running: npm run cypress:cucumber  
Run 1: 14.488s  
Run 2: 12.366s  
Run 3: 11.688s  
Average time for 'npm run cypress:cucumber': 12.847s  

Running: npm run playwright  
Run 1: 13.438s  
Run 2: 9.691s  
Run 3: 12.728s  
Average time for 'npm run playwright': 11.952s  

Running: npm run playwright:cucumber  
Run 1: 10.426s  
Run 2: 10.212s  
Run 3: 9.187s  
Average time for 'npm run playwright:cucumber': 9.941s  