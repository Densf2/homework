/// <reference types="cypress" />

import MainPage from '../../pages/main.js'
import PostmanPage from '../../pages/postman_page.js'
import { global_data } from '../../data/global_text.js'

//import the POM page object
import { cucumberPage } from '../../pages/cucumber_testing_page.js'

// example of command for the test
// ENV_URL=https://www.guru99.com npm run cy:run_chrome_headed -- --spec cypress/e2e/custom_scenarios/guru_testing.cy.js

describe('Testing guru website', () => {
    const mainpage = new MainPage()
    const postmanpage = new PostmanPage()

    beforeEach(() => {
        // cy.visit('https://www.guru99.com')
        // cy.setCookie('authCoka', 'someCookie')
        const BaseUrl1 = Cypress.env('guruTestingUrl')
        Cypress.config('baseUrl', BaseUrl1)
        cy.loginAndSetCookie('/', 'authCoka', 'someCookie')
    })

    it('open the website guru', () => {
        cy.get('h1.thick-heading', {timeout: 6000}).should('be.visible') //correct syntax of timeout
        cy.url().then((currentUrl) => {
            cy.task('saveUrl', currentUrl)
        })
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

    it('click on postman link from dropdownlist POM', () => {
        mainpage.dropdownlist().eq(0).click()
        mainpage.elementindropdownlist().eq(16).should('have.text', global_data.postman_text).click()
        postmanpage.imagewithPostmanDetails( {timeout: 10000} ).should('be.visible')
    })

    it('open the software from main page', () => {
        // cy.get('a[title="Software Testing"]').then(($linkMainPage) => {
        //     debugger
        // })
        cy.visit('/software-testing.html')
        cy.log('Opened the soffdsdkflsdfklsdkfl testing page by link')
        // added command for log mesage with cy.task functionality
        cy.task('log', 'another message from js code')
        // cy.get('table.table').eq(0).pause()
    })

    //impementation of page object based on object instances. The same strcuture but
    // different implementation
    it('open cucumber page from main', () => {
        cucumberPage.clickLinkOnMainPage()
        cy.url().should('contain', '/cucumber-tutorials.html')
    })

})

