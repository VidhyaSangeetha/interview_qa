class AccountPage {
    login(account) {
      cy.get(account.selectors.email).type(account.data.email)
      cy.get(account.selectors.password).type(account.data.password)
      cy.get(account.selectors.signin).click()
    }

    signout(account){
        cy.get(account.selectors.myAccount).click()
        cy.contains('a', 'Sign Out').click()
      }

    signInLink(){
        cy.contains('a', 'Sign In').click()  
    }

    verifyAccountPage(account){
        cy.get(account.selectors.header).to.contains('My Account')
      }
  }
  export default AccountPage