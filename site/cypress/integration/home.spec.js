describe('Home page', () => {
    it('displays all 3 products on the home page', () => {
        cy.visit('http://localhost:3000') 
        cy.get('[data-test="product-tag"]').eq(0).within(() => {
            cy.get('[data-test="product-name"]').should("contain", "The Flame");
            cy.get('[data-test="product-price"]').should("contain", "32.99 USD")
        })
        cy.get('[data-test="product-tag"]')
          .eq(1)
          .within(() => {
            cy.get('[data-test="product-name"]').should('contain', 'Claire')
            cy.get('[data-test="product-price"]').should('contain', '40.00 USD')
          })
          cy.get('[data-test="product-tag"]')
            .eq(2)
            .within(() => {
              cy.get('[data-test="product-name"]').should(
                'contain',
                'Be Mine Teddy'
              )
              cy.get('[data-test="product-price"]').should(
                'contain',
                '38.00 USD'
              )
            })
    })
})