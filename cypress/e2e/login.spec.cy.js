/// <reference types ="cypress" />

context('Funcionalidade de Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

       it('Deve efetuar login com sucesso' ,() =>{
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de')



    })

    it('Exibir mensagem de erro ao inserir Usúario Inválido', () =>{

        cy.get('#username').type('alunobac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

    })

    it('Exibir mensagem de erro ao inserir Senha Inválida', () =>{
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testealuno.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida')
    })

    
})