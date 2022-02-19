// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
 }

// EXERCÍCIO 0B
 function imprimeMensagem() {
 //implemente sua lógica aqui
  const mensagem = prompt ('Diga algo legal')
  console.log(mensagem)

 }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const mensagem1 = prompt ('qual a altura do retangulo?')
  const mensagem2 = prompt ('qual a largura do retangulo?')

  const areaDoRetangulo = Number(mensagem1) * Number(mensagem2)

  console.log (areaDoRetangulo)

 }

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt ('qual o ano atual?')
  const anoNascimento =  prompt ('qual o ano em que nasceu?')
  
  const idade = Number(anoAtual) - Number(anoNascimento)
  console.log(idade)
 
 }

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  return peso / (altura * altura)


}

/*const peso = prompt ('qual seu peso?')
const altura = prompt ('qual sua altura?')

const alturaEPeso = Number(peso) / (Number(altura) * Number(altura))

return alturaEPeso */

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
   
  const nome = prompt ('nome')
  const idade = prompt ('idade')
  const email = prompt ('email')
 

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt ('cor 1')
  const cor2 = prompt ('cor 2') 
  const cor3 = prompt ('cor 3')


  tresCoresFavoritas = ([cor1, cor2, cor3])

  console.log(tresCoresFavoritas)
  
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase(string)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array [array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const auxiliar = array [0]

  array [0] = array [array.length -1]
  array [array.length -1] = auxiliar
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  if (string1.toLowerCase() === string2.toLowerCase()) {
    return true
  }
  else {
  return false   
  }
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que anos estamos?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const anoIdentidade = Number(prompt("Em que ano você fez a sua identidade?"))
  
  const idade = anoAtual - anoNascimento
  
  const renovacaoRG = anoAtual - anoIdentidade

  const compare1 = idade <= 20 && renovacaoRG >= 5
  const compare2 = (idade >= 20 && idade <= 50) && renovacaoRG >= 10
  const compare3 = idade > 50 && renovacaoRG > 15

  console.log(compare1 || compare2 || compare3)
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const divisivelpor4 = ano % 4 === 0;
  const semDivisivelpor100 = ano % 100 !== 0;
  const divisivelpor400 = ano % 400 === 0;

  return (divisivelpor4 && semDivisivelpor100) || divisivelpor400
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const confirmarIdade = prompt("tem mais de 18 anos de idade?")
  const confirmarEnsino = prompt("tem ensino médio completo")
  const confirmarHorario = prompt("tem disponibilidade de horários?")
  const sim = 'sim' 
   console.log((confirmarIdade == sim) && (confirmarEnsino == sim) && (confirmarHorario == sim)) 
    
  
  }

