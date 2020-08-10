/// <reference types="cypress" />   
//cyref atalho para preenchimento automatico


Given(/^que o site não possui registros$/, () => {
    cy.server();
    // 'GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewtable'
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: []
    }).as('getNewTable');

});

When(/^acessar a listagem$/, () => {
    cy.visit('WebTable.html');

});

Then(/^devo visualizar a listagem vazia$/, () => {
    cy.get('div[role=row]').should('have.length', 1);
});


Given(/^que o site  possui registros$/, () => {
    cy.server();
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fixture:rota'


    }).as('getNewTable');

});


Then(/^devo visualizar a listagem$/, () => {
    cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCell');
    cy.get('@gridCell').should('contain.text', '3363976681')
    // 1 > .first()
    // 2
    //3
    //4 > .eq(3)
    //5 > .last()

});




