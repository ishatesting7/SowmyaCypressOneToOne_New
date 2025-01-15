describe('DROPDOWN Demo', ()=>{

    it('DROPDOWN Demo', ()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html');

        cy.get('#zcf_address_country').select('Australia')
        .should('have.value','Australia');

    })

    it('Dropdown without select tag', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click();

        cy.get('.select2-search__field').type('Italy').type('{enter}')

        //cy.get('#select2-billing_country-container').should('have.text','Italy');

    })

    it('Auto Suggestion', ()=>{

        cy.visit('https://www.wikipedia.org/');

        cy.get('[name="search"]').type('Delhi');

        cy.get('[class="suggestions-dropdown"]').contains('Delhi University').click();
        
    })
})
