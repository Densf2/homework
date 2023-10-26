import { ObjectId } from 'mongodb'


describe('Find data', () => {

    context('usage of mongodb', () =>{
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })
    })

    

})