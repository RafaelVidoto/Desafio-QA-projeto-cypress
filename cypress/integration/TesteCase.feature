#language: pt

Funcionalidade: Conversão Numeral por Extenso

Como usuário, desejo realizar uma requisção 
Para que seja retornado o número informado por extenso respeitando as regras de validação


Cenario: Requisição com valor valido PT
    Dado que seja realizado uma requisição 
    Quando o status retornado for 200
    Então a numeração informada na requisição deve retornar por extenso

Cenario: Requisição com valor invalido PT
    Dado que seja realizado uma requisição com valor invalido
    Quando o status retornado for 400
    Então deve ser retornado valor invalido
     
 
Cenario: Requisição com valor valido EN
    Dado que seja realizado uma requisição EN
    Quando o status retornado for 200 EN
    Então a numeração informada na requisição deve retornar por extenso EN

Cenario: Requisição com valor invalido EN
    Dado que seja realizado uma requisição com valor invalido EN
    Quando o status retornado for 400 EN
    Então deve ser retornado valor invalido EN
    