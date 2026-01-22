import { CommonPage } from "../../pages/commonsPage.po";
import { HomePage } from "../../pages/homePage.po";
import { TestCasePage } from "../../pages/testcases.po";


let homedata:any;
let commondata:any;
let testcasedata:any;

 const homePageObj = new HomePage();
 const commonObj=new CommonPage();
 const testcaseObj=new TestCasePage();

describe('Test 4 for testcases page verification',()=>{

    before(()=>{
  
   cy.fixture("homeData.json").then((data)=>{
         homedata=data;
   })

   cy.fixture("commonData.json").then((data)=>{
        commondata=data;
   })

   cy.fixture("testcasesData.json").then((data)=>{
        testcasedata=data;
   })

})

  it('visit homepage and verify testcases page functionality',()=>{
    homePageObj.visitUrl("");
    commonObj.verifyUrl(commondata.homePage.pageURL);
    commonObj.verifyTitle(commondata.homePage.pageTitle);

    homePageObj.clickTestcaseLink(homedata.homepagelocators.testcaseBtn);

    commonObj.verifyUrl(commondata.testcasesPage.pageURL);
    commonObj.verifyTitle(commondata.testcasesPage.pageTitle);

    testcaseObj.checkTestcasePageHeading(testcasedata.testcasePage_heading);
    testcaseObj.validateTestCases(testcasedata.firstTestcase_heading,testcasedata.lastTestcase_heading);
    
  })
  
})