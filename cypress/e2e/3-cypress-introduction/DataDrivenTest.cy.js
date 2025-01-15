describe('Data Driven', ()=>{

    it('Data Driven', ()=>{

        cy.fixture('userDataMulti').then((data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            data.forEach((dataValue)=>{
                cy.log(dataValue.username)
                cy.log(dataValue.password)
                
                cy.get('[name="username"]').type(dataValue.username);
                cy.get('[name="password"]').type(dataValue.password);
                cy.get('[type="submit"]').click();

           
                if(dataValue.username=='Admin' && dataValue.password=='admin123')
                {
                cy.get('.oxd-userdropdown-tab').click();
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }
                else
                {
                cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text','Invalid credentials');
                }
                
                
            })

        })

        cy.get('[href="https://www.youtube.com/c/OrangeHRMInc"]')
        .wait(1000)
        .invoke('removeAttr','target')
        .click();
        
    })
})