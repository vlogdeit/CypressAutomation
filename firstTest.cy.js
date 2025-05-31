describe('MyApp', () => {

    beforeEach('before each test', () => {
      cy.visit('https://www.saucedemo.com');

      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    })

    it('should login users', () =>{
      cy.get('#react-burger-menu-btn').should('be.visible');
      cy.get('[data-test="title"]').should('contain', 'Products');
    })

    it('should add products to cart', () => {
      cy.get('.btn_inventory').eq(0).click();
      cy.get('[data-test="shopping-cart-link"]').click();

      cy.get('[data-test="item-quantity"]').should('contain', 1);
      cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');
    })

    it('should create an order', () => {
      // Adding a product to the cart
      cy.get('.btn_inventory').eq(0).click();

      // Navigating to the cart
      cy.get('[data-test="shopping-cart-link"]').click();

      // Click the Checkout button
      cy.get('[data-test="checkout"]').click();

      // Fill in the checkout form
      cy.get('#first-name').type('John');
      cy.get('#last-name').type('Smith');
      cy.get('#postal-code').type('12345');

      // Click the Continue button
      cy.get('#continue').click();

      // Click the Finish button
      cy.get('#finish').click();

      // Verify the order completion message
      cy.get('[data-test="complete-header"]')
        .should('contain', 'Thank you for your order!');
    })
})