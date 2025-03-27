describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.intercept('POST', "http://localhost:3001/user/testauth", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          msg: "success authenticated",
          user: {
            id: 60,
            name: "it-ak",
            email: "aws@aws.com",
            role: "user",
            phone_number: null,
          },
        },
      });
    }).as('testauth');
    cy.setCookie(Cypress.env('TOKEN_NAME'), Cypress.env('TOKEN_VALUE'));
    cy.wait('@testauth').its('response.body').should('include', { msg: 'success authenticated' })
  })
})