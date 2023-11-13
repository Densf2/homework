import { ObjectId } from 'mongodb'

//list of commands
// docker run --name mongo -p 27017:27017 -d mongodb/mongodb-community-server:6.0-ubuntu2204
//docker exec -it mongo mongosh

describe.skip('Find data', () => {

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

        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })

    })
})
