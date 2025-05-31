import LoginPage from "../pages/loginPage";
import ProductsPage from "../pages/productsPage";
import CartPage from "../pages/cartPage";

describe('My Cart', () => {

    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();

    it('should contain the products I added to it by pressing "Add to cart"', () =>{
      loginPage.login();
      productsPage.addProductToCart(0);

      cartPage.elements.productTitle().should('contain', 'Sauce Labs Backpack');
      cartPage.elements.productQuantity().should('contain', 1);
    })
})