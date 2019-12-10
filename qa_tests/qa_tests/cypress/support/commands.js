Cypress.Commands.add("inputNumberAndSubmit", (number) => { 
    cy.get('input[type="number"]').type(number)
    cy.get('button[type="submit"]').contains('Submit').should('be.visible').click()
})
