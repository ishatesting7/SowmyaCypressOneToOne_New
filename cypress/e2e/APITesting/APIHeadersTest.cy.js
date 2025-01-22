describe('Header Demo',()=>{

    let authToken = null;

    it('Header Demo',()=>{
        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            
            headers:
            {
                'Content-Type':'application/json'
            },
            body:
                {
                
                    clientName: "Hakan",
                    clientEmail: Math.random().toString(5).substring(2)+ "@msn.com"
                 }

        })
        .then((response)=>{

           authToken = response.body.accessToken;

        })

    })

    it('Create Order',()=>{
        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/orders',
            
            headers:
            {
                'Content-Type':'application/json',
                'Authorization':'Bearer '+authToken
            },
            body:
                {
                
                    
                        bookId: 1,
                        customerName: "Alicia Kemmer"
                    
                 }

        }).then((response)=>{

            expect(response.status).to.eq(201)
            expect(response.body.created).to.eq(true)
        })

    })
})