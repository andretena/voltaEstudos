
//Função simples

function saudacao() {
    console.log ('olá mundo!')
}

//função com parametro:
function saudacao(nome = 'visitante') {
    console.log('Olá, ' + nome + '!');
}

saudacao(); // Isso imprimirá "Olá, visitante!" no console
saudacao('André'); // Isso imprimirá "Olá, André!" no console

//Escopo de variaveis:

//O escopo de uma variável refere-se à região do código onde a variável pode ser acessada. Em JavaScript, 
//as variáveis podem ser locais (dentro de uma função) ou globais (fora de qualquer função). Veja um exemplo:

let globalVar = 'Eu sou global'; // Variável global

function exemploEscopo() {
    let localVar = 'Eu sou local'; // Variável local dentro da função
    console.log(globalVar); // Acesso à variável global
    console.log(localVar); // Acesso à variável local
}

exemploEscopo();
// console.log(localVar); // Isso resultaria em um erro, pois localVar não está acessível fora da função

//Retorno de valores
//As funções podem retornar valores usando a palavra-chave return. 
//Isso permite que você obtenha um resultado da função e o use em outros lugares do seu código. Exemplo:
function soma(a, b) {
    return a + b;
}

let resultado = soma(3, 5);
console.log(resultado); // Isso imprimirá 8 no console

//Funções Anônimas:
//Funções anônimas são funções que não têm um nome definido. 
//Elas são frequentemente usadas como argumentos para outras funções ou atribuídas a variáveis. Aqui está um exemplo comum usando uma função anônima:
let saudacao = function(nome) {
    console.log('Olá, ' + nome + '!');
};

saudacao('Alice'); // Isso imprimirá "Olá, Alice!" no console

