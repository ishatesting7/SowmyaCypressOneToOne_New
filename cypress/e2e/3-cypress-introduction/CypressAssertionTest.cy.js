describe('Assertion Demo', ()=>{

    it('Implicit Assertion', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url()
        .should('contain','opensource')
        .should('equal','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','demo')
        .should('not.contain','green')
        .should('include','open')

        cy.get('a').should('have.length',5)

        cy.get('a').eq(3).click();
    })

    it.only('Explict Assertion', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click();

        let expValue = 'dsvdsb jvjsnvjsjvsv'


        cy.get('.oxd-userdropdown-name').then((x)=>{

            let actValue = x.text();
            cy.log(actValue);

            expect(actValue).to.be.equal(expValue);
        })
        //JavaScript - let, var, const

    })
})