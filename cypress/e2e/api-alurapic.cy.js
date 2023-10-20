describe('Página de Login', () => {

    // it('Dados da API', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://alurapic-api.onrender.com/user/login',
    //         body: Cypress.env()
    //     }).then((res) => {
    //         expect(res.status).to.be.equal(200)
    //         expect(res.body).is.not.empty
    //         expect(res.body).have.property('id')
    //         expect(res.body.id).to.be.equal(251)
    //     })
    // })

    it('Dados da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://alurapic-api.onrender.com/lucasteste/photos',
            
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).have.property('description')
            expect(res.body[0].description).to.be.equal('teste')
        })
    })


})