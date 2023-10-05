/// <reference types="cypress" />

describe('Testing guru website', () => {

    beforeEach(() => {
        // cy.visit('https://www.guru99.com')
        // cy.setCookie('authCoka', 'someCookie')
        cy.loginAndSetCookie('/', 'authCoka', 'someCookie')
    })

    it('open the website guru', () => {
        cy.get('h1.thick-heading', {timeout: 6000}).should('be.visible') //correct syntax of timeout
    })

    it.skip('check search and validate results', () => {
        cy.get('button.search-toggle-open').should('be.visible')
        .and('have.attr', 'data-toggle-target', '#search-drawer')
        .click();
        cy.get('input.search-field').should('be.visible')
        .and('have.attr', 'type', 'search')
        .type('functional testing{enter}')
        cy.url().should('contain', '/search_gcse?q=functional+testing')
        cy.get('div#resInfo-0').should('not.be.empty')
        .and('contain', 'About')
    })

    it('click on software testing variant form dropdown list', () => {
        cy.get('#primary-menu span.nav-drop-title-wrap').eq(0).click()
        // cy.get('a[aria-current="page"] + ul.sub-menu.clicked').should('be.visible')

        cy.get('ul.sub-menu.clicked li').eq(7).find('a')
        .should('have.attr', 'href', '/software-testing.html')
        .and('have.text', 'Software Testing', {timeout: 5000}).click()

        cy.get('div.code-block-1 + h2').should('contain', 'Software Testing Training Summary')
        .and('have.css', 'margin-top', '0px')
        cy.getCookie('authCoka').should('exist')
        
        cy.get('p strong').eq(1).then(($textFundamentalsELement) => {
            cy.wrap($textFundamentalsELement).should('contain.text', 'Testing Fundamentals')
        })
    })

    it('open the software from main page', () => {
        // cy.get('a[title="Software Testing"]').then(($linkMainPage) => {
        //     debugger
        // })
        cy.visit('/software-testing.html')
        cy.log('Opened the soffdsdkflsdfklsdkfl testing page by link')
        // added command for log mesage with cy.task functionality
        cy.task('log', 'another message from js code')
        cy.get('table.table').eq(0).pause()
    })

})

