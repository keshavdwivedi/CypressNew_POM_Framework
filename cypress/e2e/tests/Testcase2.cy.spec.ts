import { CommonPage } from "../../pages/commonsPage.po";
import { HomePage } from "../../pages/homePage.po";
import { contactUsPage } from "../../pages/contactUs.po";


 const homePageObj = new HomePage();
 const contactObj=new contactUsPage();
 const commonObj = new CommonPage();

let homedata:any;
let commondata:any;
let contactUsdata:any;



describe('Test 2 for contact us', () => {

  before(()=>{
  
   cy.fixture("homeData.json").then((data)=>{
         homedata=data;
   })

   cy.fixture("commonData.json").then((data)=>{
        commondata=data;
   })

    cy.fixture("contactUsData.json").then((data)=>{
        contactUsdata=data;
    })
})

  it('visits homepage and execute actions for contact us test ', () => {
   
    homePageObj.visitUrl("");
    homePageObj.validateLogo(homedata.homepagelocators.homeLogo);
    homePageObj.validatePageLinks(8,homedata.expectedLinks,homedata.homepagelocators.homepageLinks);
    homePageObj.clickContactUsBtn(homedata.homepagelocators.contactusBtn);  
    
    commonObj.verifyUrl(commondata.contactusPage.pageURL)
    commonObj.verifyTitle(commondata.contactusPage.pageTitle)

    contactObj.validateGetinTouchHeading(contactUsdata.contactusLocators.getinTouchHeading,9000);
    contactObj.enterNameEmailData(contactObj.protected.personName,contactObj.protected.email,contactUsdata.contactusLocators.nameField,contactUsdata.contactusLocators.emailField)
    contactObj.uploadcontactUsFile(contactUsdata.filepath,contactUsdata.contactusLocators.uploadFileBtn);
    contactObj.enterSubject_MsgData(contactObj.protected.subject,contactObj.protected.message,contactUsdata.contactusLocators.subjectField,contactUsdata.contactusLocators.messageField,contactUsdata.contactusLocators.submitBtn)
    
    contactObj.validateSuccessMsg(contactUsdata.contactusLocators.succeessMsg)

  });
});


  //  it('uses selector string', () => {
  //   cy.clickByLocator('[data-cy=submit]')
  // })

  // it('passes element reference', () => {
  //   cy.get('button').first().then(($btn) => {
  //     cy.clickElement($btn) // pass JQuery<HTMLElement>
  //   })
  // })

  // it('uses smartClick with selector', () => {
  //   cy.smartClick('[data-cy=submit]')
  // })



  
