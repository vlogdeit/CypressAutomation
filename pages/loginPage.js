class LoginPage{

    elements = {
        username: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        mainMenuButton: () => cy.get('#react-burger-menu-btn'),
        pageTitle: () => cy.get('[data-test="title"]')
    }

    login(){
        cy.visit('https://www.saucedemo.com');

        this.elements.username().type('standard_user');
        this.elements.password().type('secret_sauce');
        this.elements.loginButton().click();
    }
}

export default LoginPage;