import { faker } from '@faker-js/faker'
class RegistrationPage {
  clickCreateAnAccount(user){
    cy.contains('a', 'Create an Account').click()  
  }
    fillRegistrationForm(user) {
      const randomEmail = faker.internet.email()
      cy.get(user.selectors.firstName).type(user.data.firstname)
      cy.get(user.selectors.lastName).type(user.data.lastname)
      cy.get(user.selectors.email).type(randomEmail)
      cy.get(user.selectors.password).type(user.data.password)
      cy.get(user.selectors.confirmPassword).type(user.data.password)
    }
  
    submitForm(register) {
      cy.get(register.selectors.createAnAccount).click()
    }

    verifyRegistrationSuccessful(register){
      cy.get(register.selectors.successMessage).should('be.visible')
    }
   
  }
  export default RegistrationPage