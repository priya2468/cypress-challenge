///<reference types="cypress"/>

describe('Prime Numbers Test Suite',function(){

    beforeEach(function(){
        cy.visit('http://localhost:3000')
    })

    it('Test positive number having two median value',function(){
        cy.inputNumberAndSubmit('10')
        cy.get('h2').should('be.visible').should(($x) =>{
            expect($x).to.have.text("The median is: [3,5]")
        })  
    })

    it('Test positive number having one median value',function(){
        cy.inputNumberAndSubmit('3')
        cy.get('h2').should('be.visible').should(($x) =>{
            expect($x).to.have.text("The median is: [2]")
        })
    })

    it('Test poitive number having no median value',function(){
        cy.inputNumberAndSubmit('1')
        cy.get('h2').should('be.visible').should(($x) =>{
            expect($x).to.have.text("The median is: [,]")
        })
    })

    it('Test negative number as input',function(){
        cy.inputNumberAndSubmit('-3')
        cy.get('h2').should('be.visible').should(($x) =>{
            expect($x).to.have.text("The median is: [,]")
        })
    })

    it('Test zero as input',function(){
        cy.inputNumberAndSubmit('0')
        cy.get('h2').should('be.visible').should(($x) =>{
            expect($x).to.have.text("The median is: [,]")
        })
    })

    it('Test maximum possible number allowed',function(){
        cy.inputNumberAndSubmit('9999999')
        cy.get('h2').should('be.visible').should(($x) =>{
            expect($x).to.have.text("The median is: [4751053]")
        })
    })

    it('Test exceeded limit error',function(){
        cy.inputNumberAndSubmit('100000000')
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Number exceeds limit')})
        cy.get('input[type="number"]').should('be.empty')
    })

    it('Test with blank input',function(){
        cy.inputNumberAndSubmit(' ')
        cy.get('span[class="fa fa-spinner fa-2x fa-spin loader"]').should('be.visible')
        cy.get('button[type="submit"]').contains('Submit').should('be.not.enabled')
    })
})

// Some improvements can be like:
// 1. Error message is shown when any negative numbers are entered
// 2. Error message is shown when input is blank and submitted
// 3. If a number is not a prime number then proper validation message should be shown