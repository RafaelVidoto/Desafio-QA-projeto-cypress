#language: pt
Funcionalidade: Listagem



Como usuário, desjeo acessar a listagem
Para que possa visualizar meus dados cadastrados

Cenario: Listagem sem registro

Dado que o site não possui registros
Quando acessar a listagem
Então devo visualizar a listagem vazia


Cenario:Listagem com registro

Dado que o site  possui registros
Quando acessar a listagem
Então devo visualizar a listagem

