/// <reference types="cypress"/>

const getValue=require('../fixtures/data.json')
describe('Login Test',function(){
    it('Visiting Site',function(){
        cy.visit(getValue.basicUrl)
    })

    it('Invalid Username',function(){
        cy.get(getValue.username).type(getValue.testusername)
        cy.get(getValue.password).type('test')
        cy.get(':nth-child(3) > td > input').click()
        cy.url().should('equal',getValue.basicUrl)
    })

    it('Invalid Password',function(){
        cy.get(getValue.username).type('test')
        cy.get(getValue.password).type('123')
        cy.get(getValue.button).click({force:true})
        cy.url().should('equal',getValue.basicUrl)
    })

    it('Valid Password',function(){
        cy.get(getValue.username).type('test')
        cy.get(getValue.password).type('test')
        cy.get(':nth-child(3) > td > input').click({force:true})
        cy.url().should('equal',getValue.success)
    })

})