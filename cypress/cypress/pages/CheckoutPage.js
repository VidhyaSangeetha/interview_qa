class CheckoutPage {
    fillShippingDetails(details) {
        cy.get("div[class=\"new-address-popup\"] [type=\"button\"]").click()
      cy.get("input[name='firstname']").type(details.firstname)
      cy.get("input[name='lastname']").type(details.lastname)
      cy.get("input[name='street[0]']").type(details.address)
      cy.get("input[name='city']").type(details.city)
      cy.get("select[name='region_id']").select(details.state)
      cy.get("input[name='postcode']").type(details.zip)
      cy.get("input[name='telephone']").type(details.phone)
      cy.contains('[type="button"] span', 'Ship here').click()

      cy.wait(10000)
    }
  
    proceedToPayment() {
        cy.get(":nth-child(1) > :nth-child(1) > .radio",{ timeout: 10000 }).click({force: true})
      cy.get("button.continue").click()
    }

    placeOrder(){
        cy.get("button[title=\"Place Order\"]",{ timeout: 10000 }).click()
    }
  
    goToCart() {
      cy.get('.action.showcart',{ timeout: 10000 }).click()
      cy.get('a.viewcart',{ timeout: 10000 }).click()
    }
  
    verifyPriceCalculation(products) {
      let expectedTotal = 0
      products.forEach((product) => {
        cy.get('.product-item-name').contains(product.name).parents('tr').find('.price').invoke('text').then(priceText => {
          const price = parseFloat(priceText.replace('$', ''))
          expectedTotal += price
        })
      })
      cy.get('.grand.totals .price').invoke('text').then((totalText) => {
        const actualTotal = parseFloat(totalText.replace('$', ''))
        expect(actualTotal).to.be.closeTo(expectedTotal, 1.0)
      })
      cy.get('li[class="item"] button[title="Proceed to Checkout"]').click()
    }
    proccedToCheckout(){
        cy.get('li[class="item"] button[title="Proceed to Checkout"]').click()
    }
  
    completeCheckout(details) {
      this.fillShippingDetails(details)
      this.proceedToPayment()
      // Add payment step if needed
    }
  }
  export default CheckoutPage