/// <reference types="cypress" />


describe('login with api request', () => {

    beforeEach(() => {
        cy.loginAndSetLocalStorage()
    })

    it('send login data', () => {
        cy.visit('/overview')
        cy.get('div.card-content').eq(0).should('be.visible')
    })

    it('Create category', () => {
        cy.createNewCategory('soap')
        cy.visit('/categories')
        cy.wait(5000)
        cy.get('.content a.collection-item', {timeout: 5000}).should('be.visible')
    })

})
