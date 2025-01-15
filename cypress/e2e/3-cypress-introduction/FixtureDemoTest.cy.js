describe('Read Data From Fixture', ()=>{

    let user;
    let pass;
    it('Read Data', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('userData').then((data)=>{
        
            user = data.username;
            pass = data.password;
            cy.get('[name="username"]').type(user);
            
            cy.get('[name="password"]').type(pass);

            cy.get('[type="submit"]').click();

            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.expected)

            cy.log(data.address[0].street1);
            cy.log(data.address[1].street1);
            cy.log(data.address[2].street1);
            cy.log(data.address[3].street1);
            
            
            cy.log(data.address[0].zip);
            cy.log(data.address[1].zip);
            cy.log(data.address[2].zip);
            cy.log(data.address[3].zip);
            
        })


    })

    it('Read the data', ()=>{

        cy.log(user);
        cy.log(pass);
    })
})