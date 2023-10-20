const { beforeEach } = require("mocha")

describe('Página de Login', () => {
    
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Preencher os campos do login incorretamente', () => {
      cy.login('lucasteste', '12345678')
    })
  })