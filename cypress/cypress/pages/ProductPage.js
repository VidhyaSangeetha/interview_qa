
  class ProductPage {
    addProductToCart(productName) {
      cy.get('#search',{ timeout: 10000 }).type(productName + '{enter}')

    cy.get('a.product.photo.product-item-photo',{ timeout: 10000 }).first().click()
    
    cy.get('div[class="swatch-option text"]',{ timeout: 10000 }).first().click()
    cy.get('div[class="swatch-option color"]',{ timeout: 10000 }).first().click()
    
    cy.get('button#product-addtocart-button', { timeout: 10000 })
    .should('be.visible')
    .scrollIntoView()
    cy.get('button#product-addtocart-button',{ timeout: 10000 }).should('be.visible').click()


  cy.wait(10000)
    }


searchProduct(productName) {
        cy.get('#search').clear().type(productName + '{enter}')
      }
    
      validateSearchResults(productName) {
        cy.get('.product.name.product-item-name').each(($el) => {
          cy.wrap($el).should('contain.text', productName.split(' ')[0])
        })
      }
    

    addProductToWishlist(productName) {
        cy.visit('/')
        cy.get('#search').type(productName + '{enter}')
        cy.get('a[class="product photo product-item-photo"]').first().click()

    cy.get('div[class="swatch-option text"]',{ timeout: 10000 }).first().click()
    cy.get('div[class="swatch-option color"]',{ timeout: 10000 }).first().click()

        cy.get('a.action.towishlist',{ timeout: 10000 }).click()
      }
    
    
      moveToCartFromWishlist(productName) {
        cy.get('button[title="Add All to Cart"]',{ timeout: 10000 }).click()
        cy.wait(10000)
      }
    
      goToCart() {
        cy.get('.action.showcart').click()
        cy.get('a.viewcart').click()
      }
    } 
  export default ProductPage