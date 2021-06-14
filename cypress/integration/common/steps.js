

Given(/^que seja realizado uma requisição$/, () => {
  

     cy.numeroGerado().then((nro) => {
        cy.request({
          method: ('GET'),
          url: `/${nro}`
        }).then((response) => {
                      
  
       })
    }) 

    

});

When(/^o status retornado for 200$/, () => {
    cy.numeroGerado().then((nro) => {
        cy.request({
          method: ('GET'),
          url: `/${nro}`
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    }) 
});


Then(/^a numeração informada na requisição deve retornar por extenso$/, () => {
    
    cy.numeroGerado().then((nro) => {
        cy.request({
          method: ('GET'),
          url: `/${nro}`
        }).then((response) => {
            const respBody = response.body.extenso;
            expect (respBody).to.be.equal(respBody);
  
       })
    }) 

});

Given(/^que seja realizado uma requisição com valor invalido$/, () => {
  
       cy.request({
         method: ('GET'),
         url: `/-10001`,
         failOnStatusCode: false
       })

});

When(/^o status retornado for 400$/, () => {
    
        cy.request({
          method: ('GET'),
          url: `/-10001`,
          failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
        })
  
});


Then(/^deve ser retornado valor invalido$/, () => {
    
        cy.request({
          method: ('GET'),
          url:  `/-10001`,
          failOnStatusCode: false
        }).then((response) => {
           cy.log(response.body),
            expect (response.body).to.deep.equal({ "extenso": "Invalid data" });
  
       })
 

});



Given(/^que seja realizado uma requisição EN$/, () => {
  

    cy.numeroGerado().then((nro) => {
       cy.request({
         method: ('GET'),
         url: `/en/${nro}`
       }).then((response) => {
          
 
      })
   })  

});

When(/^o status retornado for 200 EN$/, () => {
    cy.numeroGerado().then((nro) => {
        cy.request({
          method: ('GET'),
          url: `/en/${nro}`
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    }) 
});

Then(/^a numeração informada na requisição deve retornar por extenso EN$/, () => {
    
    cy.numeroGerado().then((nro) => {
        cy.request({
          method: ('GET'),
          url: `/en/${nro}`
        }).then((response) => {
            const respBody = response.body.full;
            expect (respBody).to.be.equal(respBody);
  
       })
    }) 

});

Given(/^que seja realizado uma requisição com valor invalido EN$/, () => {
  
    cy.request({
      method: ('GET'),
      url: `en/-10001`,
      failOnStatusCode: false
    })

});

When(/^o status retornado for 400 EN$/, () => {
    
    cy.request({
      method: ('GET'),
      url: `en/-10001`,
      failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.equal(400)
    })

});

Then(/^deve ser retornado valor invalido EN$/, () => {
    
    //cy.numeroGerado().then((nro) => {
        //cy.log(nro)
        cy.request({
          method: ('GET'),
          url:  `en/-10001`,
          failOnStatusCode: false
        }).then((response) => {
           // const respBody = response.body.extenso;
           cy.log(response.body),
            expect (response.body).to.deep.equal({ "full": "Invalid data" });
  
       })

});