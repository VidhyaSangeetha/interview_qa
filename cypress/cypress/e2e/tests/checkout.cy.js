import CheckoutPage from '../../pages/CheckoutPage'
import ProductPage from '../../pages/ProductPage'


describe('Checkout From wishlist', () => {
  const checkoutPage = new CheckoutPage()
  const productPage = new ProductPage()
  before(() => {
    cy.launchApp()
    cy.login()
    
  })

  it('should add product to wishlist and checkout from wishlist', () => {
    const productName = 'Diva Gym Tee'

    productPage.addProductToWishlist(productName)
    productPage.moveToCartFromWishlist(productName)
    productPage.goToCart()
    checkoutPage.proccedToCheckout()
    cy.fixture('Checkout.json').then((data) => {
    checkoutPage.completeCheckout(data)
    checkoutPage.placeOrder(data)

   
    })
    cy.contains('Thank you for your purchase!').should('be.visible')
  })
})
