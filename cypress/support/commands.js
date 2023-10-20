Cypress.Commands.add('login', (login, senha) => {
    cy.get('[data-test="loginUserName"]').type(login)
    cy.get('[data-test="loginPassword"]').type(senha)
    cy.contains('button', 'login').click()
    
})