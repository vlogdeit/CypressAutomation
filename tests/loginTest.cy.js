import LoginPage from "../pages/loginPage";

describe('MyApp', () => {

    const loginPage = new LoginPage();

    it('should login users', () =>{
      loginPage.login();

      loginPage.elements.mainMenuButton().should('be.visible');
      loginPage.elements.pageTitle().should('contain', 'Products');
    })
})