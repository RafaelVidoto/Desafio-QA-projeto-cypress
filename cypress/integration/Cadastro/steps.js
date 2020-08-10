// implementação dos passos descritos na feature

/// <reference types="cypress" />


let Chance = require('chance');   //Bilioteca fake
var chance = new Chance();



When(/^informar meus dados$/, () => {

    //Type para digitar textos em campos
    cy.get('input[placeholder="First Name"]').type(chance.first());
    cy.get('input[ng-model^=Last]').type(chance.last());
    cy.get('input[ng-model^="Email"]').type(chance.email());
    cy.get('input[ng-model^="Phone"]').type(chance.phone({ formatted: false }));

    //Check para adios e checkbox
    cy.get('input[value="Male"]').check();
    cy.get('input[type="checkbox"]').check('Movies');


    // select elementos tipo select e select2 ou seja combos

    cy.get('select#Skills').select('Adobe InDesign');
    cy.get('select#countries').select('Albania');
    cy.get('select#country').select('Australia', { force: true });  // forçando acessar um elemento oculto
    cy.get('select#yearbox').select('1990');
    cy.get('select[ng-model^="month"]').select('September');
    cy.get('select#daybox').select('4');
    cy.get('input#firstpassword').type('Vec3170032*');
    cy.get('input#secondpassword').type('Vec3170032*');

    //attachFile para input de arquivos
    cy.get('input#imagesrc').att
});

When(/^salvar$/, () => {
    cy.get('button#submitbtn').click()

});

Then(/^devo ser cadastrado com sucesso$/, () => {
    cy.wait('@posttUsertable').then((resNewtable) => {
        cy.log(resNewtable.status)
        //console.log(resNewtable.status)

        //chai para asserções
        expect(resNewtable.status).to.eq(200);
    })

    cy.wait('@getNewtable').then((resNewtable) => {
        expect(resNewtable.status).to.eq(200);
    })

    cy.url().should('contain', 'WebTable');
});

