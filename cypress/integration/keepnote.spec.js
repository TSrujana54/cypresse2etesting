

describe(' UI E2E testing For Keep Noot', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('UserName is Wrong', () => {
        cy.get('input[name=uName]').type('ad');
        cy.get('input[name=uPass]').type('password');
        cy.get('#login').click();
        cy.get('p').should('be.visible');
        cy.url().should('include', "3000/")
    })

    it('Redirect to login page',()=>{
        cy.get('input[name=uName]').type('admin');
        cy.get('input[name=uPass]').type('password');
        cy.get('#login').click();
        cy.url().should('include', "3000/dashboard");        
    })
    

})