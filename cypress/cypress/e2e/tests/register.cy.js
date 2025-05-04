import RegistrationPage from '../../pages/RegistrationPage'
import AccountPage from '../../pages/AccountPage'

describe('User Registration Test', () => {
  const registrationPage = new RegistrationPage()
  const accountPage = new AccountPage()
  before(() => {
    cy.launchApp()
  })

  it('Register a new user and login with that user', () => {
    cy.fixture('Registration.json').then((value) => {
      registrationPage.clickCreateAnAccount(value)
      registrationPage.fillRegistrationForm(value)
      registrationPage.submitForm(value)
      registrationPage.verifyRegistrationSuccessful(value)
      
    })
    cy.fixture('Account.json').then((data) => {
      accountPage.signout(data)
      accountPage.signInLink(data)
      accountPage.login(data)
    })
  })
})
