describe('Test Scenarios for Login',function(){   // Test Scenarios

    it('Enterning Valid Credentials', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(5000);
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        
    })

    it('Enterning InValid Credentials', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it.only('Learning CSS Selector', ()=>{

        cy.visit('https://www.demoblaze.com/')

        cy.url().should('equal','https://www.demoblaze.com/')

        cy.get('#login2').click();

        cy.get('#loginusername').type('vnas')
        
        cy.wait(500)

        cy.get('#loginpassword').type('vnas')

        cy.get('[onclick="logIn()"]').click();

       cy.get('#nameofuser').should('have.text','Welcome vnas');

       cy.get(':nth-child(1) > .card > .card-block > .card-title').click();

       cy.get('[onclick="addToCart(1)"]').click();

       cy.get('#cartur').click();

       cy.get('.col-lg-1 > .btn').click()

       cy.get('#name').type('abc')

       cy.get('#country').type('mno')

       cy.get('#city').type('asddsa')

       cy.get('#card').type('129392');
       cy.get('#month').type('12')

       cy.get('#year').type('2024');

       cy.get('[onclick="purchaseOrder()"]').click();

       cy.get('body > div.sweet-alert.showSweetAlert.visible > h2').should('have.text','Thank you for your purchase!')

        })

    //CYPRESS SUPPORT ONLY CSS
})