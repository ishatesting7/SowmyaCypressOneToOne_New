describe('Handle Radio Button', ()=>{


    it('Handle Radio Button', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#male').should('be.visible')

        cy.get('#female').should('be.visible')

        cy.get('#male').check().should('be.checked')

        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')

        cy.get("[class='form-group'] [class='form-check form-check-inline'] [class='form-check-label']").eq(1).click()
    })
})