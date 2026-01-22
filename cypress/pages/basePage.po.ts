export default abstract class BasePage {
   protected get(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector)
  }

  // Visit a path relative to baseUrl
  visitUrl(path:string): Cypress.Chainable<any> {
    return cy.visit(path)
  }

  // Wait for element to be visible
  waitForVisible(selector: string, timeout = Cypress.config('defaultCommandTimeout') as number) {
    return this.get(selector).should('be.visible', { timeout })
  }

  // Flexible click helper accepts selector | JQuery | Chainable
  protected click(target: string | JQuery<HTMLElement> | Cypress.Chainable<JQuery<HTMLElement>>) {
    if (typeof target === 'string') {
      return cy.get(target).click()
    }
    return cy.wrap(target).click()
  }

  protected getElementText(selector: string): Cypress.Chainable<string> {
    return this.get(selector).invoke('text')
  }

  protected getElement(selector:string):Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(selector);   
  }

  protected generateRandomString(length:number):string{
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result
  }
  
}