describe('Página de Cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a', 'Register now').click()
    cy.get('[data-test="email"]').type('lucasteste@email.com')
    cy.get('[data-test="fullName"]').type('Lucas Teste')
    cy.get('[data-test="registerUserName"]').type('lucasteste')
    cy.get('[data-test="registerPassword"]').type('12345678')
    cy.contains('button', 'Register').click()
    
  })
})