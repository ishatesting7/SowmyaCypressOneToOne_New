describe('Query Parameter Demo',()=>{

    const queryParam = {page:2};

    it('Passing Query Parameter',()=>{
        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users',
            qs:  queryParam
        })
        .then((response)=>{

            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.per_page).to.eq(6)
            expect(response.body.data).has.length(6)
            expect(response.body.data[0]).have.property('id',7)
            expect(response.body.data[1]).have.property('id',8)
            expect(response.body.data[2]).have.property('id',9)
            expect(response.body.data[0]).has.property('first_name',"Michael")

        })

    })
})