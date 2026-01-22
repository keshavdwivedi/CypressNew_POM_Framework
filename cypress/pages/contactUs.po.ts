import BasePage from "./basePage.po";

import { uniqueNamesGenerator, Config, names,adjectives } from "unique-names-generator";

const uniqueNames: Config = {
  dictionaries: [names]
}

const username:Config={
    dictionaries:[adjectives],
    style:'lowerCase'
}

export class contactUsPage extends BasePage{

    protected={
        personName:uniqueNamesGenerator(uniqueNames),
        email:uniqueNamesGenerator(username)+"@gmail.com",
        subject:uniqueNamesGenerator(uniqueNames),
        message:this.generateRandomString(30)
    }

      async validateGetinTouchHeading(headingLocator:string,timeout:number) {
        super.waitForVisible(headingLocator,timeout)
        super.getElement(headingLocator);
    }

    async enterNameEmailData(nameValue:string,emailValue:string,nameLocator:string,emailLocator:string){
        super.getElement(nameLocator).clear()
        super.getElement(nameLocator).type(nameValue);
        super.getElement(emailLocator).clear()
        super.getElement(emailLocator).type(emailValue);

    }

    async enterSubject_MsgData(subjectVal:string,msgVal:string,subjectLocator:string,msgLocator:string,submitBtn:string){
        super.getElement(subjectLocator).clear()
        super.getElement(subjectLocator).type(subjectVal);
        super.getElement(msgLocator).clear()
        super.getElement(msgLocator).type(msgVal);
        super.click(submitBtn);
    }

    async uploadcontactUsFile(filePath:string,fileLocator:string){
        
        cy.get(fileLocator).should('be.visible').selectFile(filePath);

    }

    async validateSuccessMsg(msgLocator:string){
      super.getElement(msgLocator).should('exist')
      
      console.log("The success message has been validated");
      
      
    }

   async getName(){
    console.log("The name is "+this.protected.personName);
    return this.protected.personName;
   }

   async getEmail(){
     console.log("The email is "+this.protected.email);
    return this.protected.email;
   }

    async getSubject(){
    console.log("The name is "+this.protected.subject);
    return this.protected.subject;
   }

   async getMessage(){
    console.log("The name is "+this.protected.message);
    return this.protected.message;
   }
}