describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        
        cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })

    it('Preencher os campos do login incorretamente', () => {
      cy.contains('User name is required!').should('be.visible')
      cy.contains('Password is required!').should('be.visible')
    })
    
    it('Deve falhar mesmo preenchendo todos os campos corretamente', () => {
        cy.login('lucas', '12345671')
        cy.wait('@stubPost')
      })
  })