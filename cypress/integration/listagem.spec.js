/// <reference types="cypress" />   
//cyref atalho para preenchimento automatico


//contextandit atalho para preenchimento automatico
context('Listagem', () => {
    it('Listagem sem registro', () => {
        cy.server();
        // 'GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewtable'
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: []
        }).as('getNewTable');


        cy.visit('WebTable.html');

        //espera o tamanho = 1
        cy.get('div[role=row]').should('have.length', 1);



    });

    it('Listagem com registro', () => {

        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fixture:rota'


        }).as('getNewTable');

        cy.visit('WebTable.html');

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCell');
        cy.get('@gridCell').should('contain.text', '3363976681')
        // 1 > .first()
        // 2
        //3
        //4 > .eq(3)
        //5 > .last()

    });
});
