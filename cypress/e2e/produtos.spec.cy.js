/// <reference types="cypress" />
;

describe('Pagina de Produtos', () =>{

    beforeEach(() => {
       cy.visit('http://lojaebac.ebaconline.art.br/produtos/') 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Selecionar Produto', () =>{
    cy.get('[class="product-block grid"]')
    //.first()
    //.eq(2)
    .contains('Ajax Full-Zip Sweatshirt')
    .click()

    })

    it.only('Adicionar produto no carrinho de compras', () =>{
       var quantidade = 2
       
        cy.get('[class="product-block grid"]')
        .contains('Ajax Full-Zip Sweatshirt').click()
        
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        cy.get('.woocommerce-billing-fields > h3').should('contain', 'Detalhes de faturamento')

    

    })

})