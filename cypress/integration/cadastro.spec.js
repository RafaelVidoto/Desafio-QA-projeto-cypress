/// <reference types="cypress" />


let Chance = require('chance');   //Bilioteca fake
var chance = new Chance();




context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        //rotas
        //GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        //POST 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        //POST 200 /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        cy.server();
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewtable');
        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('posttNewtable');
        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('posttUsertable');

        //baserUrl+Register.html
        cy.visit('Register.html');


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
        cy.get('input#imagesrc').attachFile('cypress.PNG');

        //cy.pause();

        //Click    
        cy.get('button#submitbtn').click()


        //interação com as rotas
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
});



//elementos
//input[placeholder="First Name"]
//input[ng-model^=Last]
//input[ng-model^="Email"]
//input[ng-model^="Phone"]
//input[value="Male"]
//input[id="checkbox2"]
//select#skills
//select#countries
//select#country
//select#yearbox
//select[ng-model^="month"]
//select#daybox
//input#firstpassword
//input#secondpassword


//Rotas
//GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X