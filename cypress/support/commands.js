const pure = require('pure-gen');

Cypress.Commands.add('numeroGerado', () => {
    const number = pure.random.number({ min: -10000, max: 10000 })
    return number
})

Cypress.Commands.add('numeroPositivo_VrLimite', () => {
    const number = pure.random.number({ min: 10001 })
    return number
})

Cypress.Commands.add('numeroGeradoNegativo_VRLimite', () => {
    const number = pure.random.number({ max: -9999 })
    return number
})
