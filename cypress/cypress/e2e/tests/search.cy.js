import ProductPage from '../../pages/ProductPage'

describe('Search and Validate Results', () => {
  const productPage = new ProductPage()
  before(() => {
    cy.launchApp()
    cy.login()
    
  })
  it('Search for a product and validate the search results', () => {
    const productName = 'Tee'
    productPage.searchProduct(productName)
    productPage.validateSearchResults(productName)
  })
})
