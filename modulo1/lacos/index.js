//exercicios

//exercicios de escrita

/* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

O código abaiso está interando uma array, onde a condicional é 0 a zero e menor que 5, em um looping
assim sendo impresso o valor que a variável manda. 

O valor impresso então é 10.
*/

/*2. a) O que vai ser impresso no console?
Números maiors que 18 ou seja, 19, 21, 23, 25, 27, 30.

b) Se eu quisesse acessar o índice de cada elemento dessa lista, 
o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

Seria suficiente se você não for modificar a variável dentro do bloco., dessa forma poderia ser 
alterado apenas a numeração e incrementando o < 18. Então as númerações impressas seriam: 15, 12, 11 e 10.
*/

/*Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

Seria impresso no console 4 sessões de * um em cada linha sendo especificicamente: *, **, ***, ****. */

//Exercícios de escrita de código

const bichinhos = Number(prompt('Quantos pets você tem?'))
const arrayBichinhos = []


if (bichinhos === 0) {
    console.log('Que pena! Você pode adotar um pet!')
}

else if (bichinhos > 0) {
    for (let index = 0; index < bichinhos; index++) {
        let nomeBichinhos = prompt('Qual o nome deles?')
        arrayBichinhos.push(nomeBichinhos);
    }

}

function arrayOriginal(valorMaximo, valorMinimo)
let valorMaximo = 0;
let valorMinimo = arrayOriginal[0];
for (let arrayNumero of arrayOriginal) {
    if (valorMaximo < arrayNumero) {
        valorMaximo = arrayNumero;
    }
    for (let arrayNumero of arrayOriginal) {
        if (valorMinimo > arrayNumero) {
            valorMinimo = arrayNumero;
        }
    }
}

console.log('O maior número é ${valorMaximo} e o menor é ${valorMinimo}');



