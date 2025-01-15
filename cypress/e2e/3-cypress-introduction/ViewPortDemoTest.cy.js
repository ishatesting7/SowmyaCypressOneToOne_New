describe('View Port Demo', ()=>{

    it('Mobile Cross Browser Testing - Iphone SE2', ()=>{

        cy.viewport('iphone-se2')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.orangehrm-login-branding > img').should('be.visible');
        cy.get('.oxd-sheet > :nth-child(2)').should('be.visible');

    })

    it('Mobile Cross Browser Testing', ()=>{

        cy.viewport(1000,200)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.orangehrm-login-branding > img').should('be.visible');
        cy.get('.oxd-sheet > :nth-child(2)').should('be.visible');
        
    })
    it('Mobile Cross Browser Testing - Default Screen Size', ()=>{

     
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.orangehrm-login-branding > img').should('be.visible');
        cy.get('.oxd-sheet > :nth-child(2)').should('be.visible');

        
    })
})