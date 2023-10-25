


const linkToCucumberOnMainPage = 'a[href="/cucumber-tutorials.html"]'

export const cucumberPage = {

    clickLinkOnMainPage() {
        cy.get(linkToCucumberOnMainPage).should('be.visible')
        .click()
    }

}