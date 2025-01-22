describe('Parsing the JSON Response',()=>{

    it('Parsing JSON Response', function(){

        cy.request({

            method:'GET',
            url:'https://fakestoreapi.com/products',
            
        })
        .then((Response)=>{

            expect(Response.status).to.be.equal(200)
            expect(Response.body[0].id).to.equal(1)
            expect(Response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(Response.body[0].price).to.equal(109.95)
            expect(Response.body[0].description).to.equal("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
            expect(Response.body[0].category).to.equal("men's clothing")
            expect(Response.body[0].rating.rate).to.equal(3.9)


        })


    })


    it.only('Reading Multiple Value from JSON', ()=>{

        let totalprice = 0
        let totalpricerate = 0
        cy.request({

            method:'GET',
            url:'https://fakestoreapi.com/products',
            qs:{limit:1}
            
        })
        .then((response)=>{
            response.body.forEach(element =>{
                totalprice = totalprice + element.price;
                totalpricerate = totalpricerate + element.rating.rate   
            });

            cy.log('Total Price = '+ totalprice);

            cy.log('Total Rating = '+ totalpricerate);

        })

    })
})