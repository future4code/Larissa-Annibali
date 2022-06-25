// aula de variáveis
let atribuirNome;
let atribuirIdade;

console.log(typeof atribuirNome); //string
console.log(typeof atribuirIdade); //number

//o comando foi impresso pois é necessário saber do que se trata cada um

const nomeDoUsuário = prompt("Olá invocador, qual seu nome?");
const idadeDoUsuário = prompt("E qual sua idade invocador?");

console.log(nomeDoUsuário, idadeDoUsuário);

// notei que as respostas ficam armazenadas

console.log("Olá", nomeDoUsuário, "Você tem", idadeDoUsuário, "anos.");

const usandoPijama = "Sim";
const diaCheio = "Sim";
let tempo = "Não";

console.log(
  "Hoje estou usando pijama",
  usandoPijama,
  "tive um dia extramente cheio",
  diaCheio,
  "e não tenho tempo sobrando",
  tempo,
  "."
);

//3. 
let a = 30
let b = 50

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)

let c = 0 

a = c
b = a
c = b

console.log (a, b)

//desafios
//1. 

const primeiroNumero = prompt("Diga um número.");
const segundoNumero = prompt("Some com outro número.");

console.log(primeiroNumero + segundoNumero);

const mutiploNumero1 = prompt("Diga um número.");
const multiploNumero2 = prompt("Multiplique com outro número.");

console.log(multiploNumero1 * multiploNumero2)