import BasePage from "./basePage.po";

export class TestCasePage extends BasePage {
    
    async checkTestcasePageHeading(testcasepageHeadingLocator:string){
        super.getElement(testcasepageHeadingLocator).should('exist').and('be.visible')
    }

    async validateTestCases(testcasefirstLocator:string,testcaselastLocator:string){
        super.getElement(testcasefirstLocator).should('exist').and('be.visible')
        super.getElement(testcaselastLocator).should('exist').and('be.visible')
    }

}