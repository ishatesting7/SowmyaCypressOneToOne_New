describe('API Testing',()=>{


    it('GET Call',()=>{

        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)
    })

    it('POST Call',()=>{

        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:
                {
                   title: "Test Product",
                   body: "Test Post Call",
                   userId:5 
                }

        })
        .its('status')
        .should('equal',201)

        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)
    })


    it('PUT Call',()=>{

        cy.request({
            method: 'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/5',
            body:
                
                    {
                        title: "Test Product Updated",
                        body: "Test Post Call Updated",
                        userId: 5,
                        id: 101
                    }
                

        })
        .its('status')
        .should('equal',200)

    })

    it('Delete API',()=>{

        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/5'
        })
        .its('status')
        .should('equal',200);
    })

})