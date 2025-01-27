describe('Intercept', ()=>{
it('Intercept by Url', () => {
    cy.visit('https://reqres.in/');
    cy.intercept('https://reqres.in/api/users/').as('posts')
    cy.get("[data-id=users]").click()
    cy.wait('@posts').its('response.body.data').should('have.length', 6)
 })

 it('Create new record', ()=>{

    cy.visit('https://reqres.in/');
    cy.intercept('POST', 'api/users', (req) => {
      req.reply({
        status: 200,
        body: {
          "name": "John",
          "job": "QA Manager",
      }
      })
    }).as('updateuser')
    cy.get("[data-id=post]").click()
    cy.wait('@updateuser')
 })
})