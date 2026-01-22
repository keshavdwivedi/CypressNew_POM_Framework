/// <reference types="cypress" />

import { verify } from "node:crypto";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('checkTitle',(pagetitle)=>{
//    cy.title().then((actualTitle)=>{
//      expect(actualTitle).to.contain(pagetitle)
//       console.log("The title "+pagetitle+" has been verified");
//    })
// })


// Cypress.Commands.add('checkUrl',(pageurl)=>{
//    cy.url().then((actualUrl)=>{
//      expect(actualUrl).to.contain(pageurl)
//       console.log("The url "+pageurl+" has been verified");
//    })
// })




declare global{
namespace Cypress {
    interface Chainable<Subject=any> {
        checkTitle(title:string): Chainable<any>;
        checkUrl(url:string): Chainable<any>;
      
        openUrl(path:string):Chainable<any>;
        getElement(selector:string): Cypress.Chainable<JQuery<HTMLElement>>;
        waitforElement(selector: string,time:number):Chainable<any>
        smartClick(target: string | JQuery<HTMLElement>): Chainable<JQuery<HTMLElement>>;
        getElementText(selector:string):Cypress.Chainable<string>;

        clickByLocator(locator: string): Chainable<JQuery<HTMLElement>>;
        clickElement(el: JQuery<HTMLElement>): Chainable<JQuery<HTMLElement>>;
        

        //verifyLogin(email:string,password:string): Chainable<any>;
    }
  }
}

Cypress.Commands.add('openUrl',(path)=>{
  return cy.visit(path);
})

Cypress.Commands.add('getElement',(selector)=>{
  return cy.get(selector);
})

Cypress.Commands.add('waitforElement',(selector,time)=>{
  return cy.get(selector).should('be.visible',{time})
})




Cypress.Commands.add('getElementText',(selector)=>{
 return cy.get(selector).invoke('text')
})

// 1) Accepts a selector string
Cypress.Commands.add('clickByLocator', (locator: string) => {
  return cy.get(locator).click()
})

// 2) Accepts a JQuery<HTMLElement> (element reference)
Cypress.Commands.add('clickElement', (el: JQuery<HTMLElement>) => {
  // wrap the element so Cypress manages retries/waits
  return cy.wrap(el).click()
})

// 4) Flexible: accepts string selector OR JQuery element
Cypress.Commands.add('smartClick', (target: string | JQuery<HTMLElement>) => {
  if (typeof target === 'string') {
    return cy.get(target).click()
  }
  return cy.wrap(target).click()
})




//export{}


