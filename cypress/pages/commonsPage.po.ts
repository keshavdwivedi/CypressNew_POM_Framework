import BasePage from "./basePage.po";

export class CommonPage extends BasePage{

    async verifyTitle(expectedTitle:any) {
        cy.title().then((actualTitle)=>{
           expect(actualTitle).to.contain(expectedTitle);
           cy.log("The verified title of page is ",actualTitle)
           console.log("The url "+expectedTitle+" has been verified");
        });
    }

    async verifyUrl(expectedUrl:any){
        cy.url().then((actualUrl)=>{
            expect(actualUrl).to.contain(expectedUrl);
            cy.log("The verified Url is ",actualUrl)
            console.log("The url "+expectedUrl+" has been verified");
        })
    }

}