import ProductPage from '../../pages/ProductPage'
import CheckoutPage from '../../pages/CheckoutPage'

describe('Place order with multiple products', () => {
  const productPage = new ProductPage()
  const checkoutPage = new CheckoutPage()

  beforeEach(() => {
    cy.fixture('Products.json').as('products')
    cy.fixture('Checkout.json').as('checkout')
  })
  before(() => {
    cy.launchApp()
    cy.login()
    
  })


  it('Add multiple products and complete order', function () {
  

    this.products.forEach(product => {
      productPage.addProductToCart(product.name)
    })

    checkoutPage.goToCart()
    checkoutPage.verifyPriceCalculation(this.products)
    checkoutPage.completeCheckout(this.checkout)
    checkoutPage.placeOrder(this.checkout)

    cy.contains('Thank you for your purchase!').should('be.visible')
  })
})
