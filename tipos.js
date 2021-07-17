"use strict";
//Boolean
var contaPaga = false;
//Number
var idade = 27;
var avaliacao = 8.9;
//String
var nome = 'Felipe Braz';
//Array
var cidades = ['Goiânia', 'São Paulo', 'Brasília'];
var numbers = [0, 2, 5, 88, 74, 96, 53, 21];
//Tuple
var jogadores;
jogadores = ['Dybala', 'Cristiano Ronaldo', 'Messi'];
//Enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusAprov = statusAprovacao.Aprovado;
//Any
var retornoDaApi = [12, 'Felipe', true];
var retornoDaApi2 = {
//............
};
//Void
function printarNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Object
function criar(objeto) {
    //....
}
criar({
    propriedade: 1
});
//Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//Union Types
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
var familia = ['Felipe', 'Bruna', 'Miguel', 'Pedro'];
function verFamilia(familia) {
    //....
}
//Null - Regra "strictNullChecks:" false no tsconfig.json
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Felipe',
    telefone1: '9999999999',
    telefone2: '6666666666'
};
//Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
var input = document.getElementById("numero1");
console.log(input.value);
