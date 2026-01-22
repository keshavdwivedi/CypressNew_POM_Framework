import BasePage from "./basePage.po";

import { uniqueNamesGenerator, Config, names,adjectives } from "unique-names-generator";

const username:Config={
    dictionaries:[adjectives],
    style:'lowerCase'
}

export class HomePage extends BasePage {
    
    // private homepageLocators={
    //     signupBtn:'a[href="/login"]',
    //     homeLogo:'a>img',
    //     homepageLinks:'ul.nav.navbar-nav>li'
    // }

    protected ={
        email:uniqueNamesGenerator(username)+"@gmail.com"
    }


    async validatePageLinks(length:number,expectedLinks:any,locator:any) {

        super.getElement(locator).should('have.length',length).each(($li,index)=>{
            cy.wrap($li).invoke('text').then((textVal)=>{
            expect(textVal.trim()).contains(expectedLinks[index]);
           })
        })
    }

          

    async validateLogo(logoLocator:string) {
        super.getElement(logoLocator).should('exist').and('be.visible')
        //super.get(this.homepageLocators.homeLogo)
    }

    async clickContactUsBtn(contactBtnlocator:string){
        super.getElement(contactBtnlocator).should('be.visible')
        super.click(contactBtnlocator);
    }

    async checkSubscription(fieldLocator:string,fieldValue:string,subscribeBtn:string){
     cy.scrollTo('bottom')
     super.getElement(fieldLocator).clear().type(fieldValue);
     super.click(subscribeBtn);
    }

    async validateSubscriptionSuccess(successmsgLocator:string){
        super.getElement(successmsgLocator).should('exist').and('be.visible')
    }

      async clickTestcaseLink(testcaselinkLocator:string) {
        
        super.getElement(testcaselinkLocator).should('exist').and('be.visible');
        super.click(testcaselinkLocator)
    }

}


            /*

            //function to capture and assert links on homepage of website
            
            const expectedLinks = ['Home', 'Products', 'Cart','Signup / Login','Test Cases','API Testing','Video Tutorials','Contact us']
            super.getElement(this.homepageLocators.homepageLinks).should('have.length',length).each(($li,index)=>{
            cy.wrap($li).invoke('text').then((textVal)=>{
            expect(textVal.trim()).contains(expectedLinks[index]);
           })
        })*/  