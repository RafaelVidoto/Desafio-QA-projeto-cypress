
//PAssos comuns a mais de uma feature
Given(/^que acesso o site$/, () => {
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
});