class CartPage{

    elements = {
        productTitle: () => cy.get('[data-test="inventory-item-name"]'),
        productQuantity: () => cy.get('[data-test="item-quantity"]')
    }
}

export default CartPage;