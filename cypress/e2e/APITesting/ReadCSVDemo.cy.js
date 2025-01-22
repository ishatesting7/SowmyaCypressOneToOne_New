const neatCSV = require('neat-csv');

describe('Read CSV', () => {
  let table;

  before(() => {
    cy
      .fixture('users.csv')
      .then(neatCSV) // convert csv file into an object
      .then(data => {
        table = data;
      })
      .then(console.table)
  });

  it('Fill input fields using CSV data', () => {
    cy.visit('https://practice.automationbro.com/contact/');

    const randomRow = Math.floor(Math.random() * table.length)

    cy.get('.contact-name input').type(table[randomRow]['name'])
    cy.get('.contact-email input').type(table[randomRow]['email'])
    cy.get('.contact-phone input').type(table[randomRow]['phone'])
    cy.get('.contact-message textarea').type(table[randomRow]['message'])
  });
});