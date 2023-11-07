import { ObjectId } from 'mongodb'
import {faker} from '@faker-js/faker'

//list of commands
// docker run --name mongo -p 27017:27017 -d mongodb/mongodb-community-server:6.0-ubuntu2204
//docker exec -it mongo mongosh

describe('Find data', () => {

    context('usage of mongodb', () =>{
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })
    })

    context('UI & API request', () => {

        it('login by UI', () => {
            cy.request({
                method: 'POST',
                url: '/api/users/authenticate',
                body: {username:"dpdp1",password:"abc123"},
            }).then((response) => {
            const authToken = response.body.token
            Cypress.env('authTNext13', authToken)
            })
        })

        it('create user', () => {
            cy.request({
                method: 'POST',
                url: '/api/users/register',
                headers: {
                    Authorization: `Bearer ${Cypress.env('authTNext13')}`
                },
                body: {
                    firstName: 'fff2',
                    lastName: 'sss2',
                    username: 'fffsss2',
                    password: 'abc1232',
                }
            })
        })
        
        let Uname = faker.company.buzzNoun();
        it('create user dynamic data', () => {
            cy.request({
                method: 'POST',
                url: '/api/users/register',
                headers: {
                    Authorization: `Bearer ${Cypress.env('authTNext13')}`
                },
                body: {
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName(),
                    username: Uname,
                    password: faker.internet.password({length: 6}),
                }
            })
        })

        
        it('checking user presence', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/api/users',
                headers: {
                    Authorization: `Bearer ${Cypress.env('authTNext13')}`
                }
            }).then(({ body }) => {
                expect(JSON.stringify(body)).to.include(Uname)
            })
        })

        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })

    })
})
