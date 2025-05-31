class ProductsPage{

    elements = {
        addToCardButton: () => cy.get('.btn_inventory'),
        cartButton: () => cy.get('[data-test="shopping-cart-link"]')
    }

    // Method to add a product to the cart by its index
    addProductToCart(productIndex) {
        this.elements.addToCardButton().eq(productIndex).click();
        this.elements.cartButton().click();
    }
}

export default ProductsPage;