import { CommonPage } from "../../pages/commonsPage.po";
import { HomePage } from "../../pages/homePage.po";


let homedata:any;
let commondata:any;

 const homePageObj = new HomePage();
 const commonObj=new CommonPage();

describe('Test 3 for homepage subscription',()=>{

    before(()=>{
  
   cy.fixture("homeData.json").then((data)=>{
         homedata=data;
   })

   cy.fixture("commonData.json").then((data)=>{
        commondata=data;
   })
   
})

 it('visit homepage and verify page url and title',()=>{
    homePageObj.visitUrl("");
    commonObj.verifyUrl(commondata.homePage.pageURL);
    commonObj.verifyTitle(commondata.homePage.pageTitle);
  })

  it('visit homepage and verify subscription on homepage footer',()=>{
    homePageObj.visitUrl("");
    commonObj.verifyUrl(commondata.homePage.pageURL);
    commonObj.verifyTitle(commondata.homePage.pageTitle);
    homePageObj.checkSubscription(homedata.homepagelocators.subscribeField,homePageObj.protected.email,homedata.homepagelocators.subscribe_button)
    homePageObj.validateSubscriptionSuccess(homedata.homepagelocators.subscribeSuccessMsg)
  })
  
})