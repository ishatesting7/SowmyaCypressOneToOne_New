describe('Different Way To Handle Post Req',()=>{

it('Method 1 - Hard code JSON object',()=>{

    //http://restapi.adequateshop.com/api/Tourist

    const jsonBody = {
        "id": 123,
        "username": "Ramesh",
        "firstName": "QA",
        "lastName": "Test",
        "email": "test@yopmail,com",
        "password": "123",
        "phone": "123123123",
        "userStatus": 1
    }
        cy.request({
            method: 'POST',
            url:'https://petstore.swagger.io/v2/user',
            body: jsonBody
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.code).to.eq(200)
            expect(response.body.message).to.eq('123')
           // expect(response.body.)


        })

})


it('Method 2 - JAVASCRIPT Function object',()=>{

    
    //http://restapi.adequateshop.com/api/Tourist

    const x =  Math.trunc(Math.random()*100);
    const jsonBody = {
        id: x,
        username: Math.random().toString(5).substring(2),
        firstName: "QA",
        lastName: "Test",
        email: "test@yopmail,com",
        password: "123",
        phone: "123123123",
        userStatus: 1
    }
        cy.request({
            method: 'POST',
            url:'https://petstore.swagger.io/v2/user',
            body: jsonBody
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.code).to.eq(200)
            expect(response.body.message).to.eq(jsonBody.id.toString())
           // expect(response.body.)


        })

})

it.only('Method 3 - Using Fixture',()=>{

        cy.fixture('dataAPI').then((data)=>{
            const jsonBody=data;

            cy.request({
                method: 'POST',
                url:'https://petstore.swagger.io/v2/user',
                body: jsonBody
            })
            .then((response) =>{
                expect(response.status).to.eq(200)
                expect(response.body.code).to.eq(200)
                expect(response.body.message).to.eq(jsonBody.id.toString())
               // expect(response.body.)
    
    
            })
    
        })
    
        
})

})