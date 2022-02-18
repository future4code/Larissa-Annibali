/* 1 . a) O que vai ser impresso no console?

no console vai aparecer o valor da minha função retornando vezes 
em vezes o valor informado (5) sendo ele 5 * 2 (10) e 5 * 10 (50)

b) retirando o console.log deixaria ele vazio.

 
2. a) ele vai retornar true ou false dependendo de qual for a resposta do usuário

b) cada uma das funções vai: inserir a resposta após a pergunta do usuário, na segunda ele vai deixar cenoura
em caixa alta, e na terceira todas em palavras minusculas. Todas dariam true na função. */


//Exercícios

/* 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber 
    nenhum parâmetro e deve imprimir uma mensagem falando algumas informações 
    sobre você.*/

    const nome ='Larissa'
    const idade = '26'
    const cidade = 'São Paulo' 
    
    console.log(`Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou estudante.`)

    
 
    /*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
    o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
    Ela deve retornar uma string que unifique todas as informações da pessoa em uma só 
    mensagem com o template.*/

    const parametro1 = ('Larissa')
    const parametro2 = ('26')
    const parametro3 = ('cidade')
    
    function nomesTrocados1 (parametro1, parametro2, parametro3) {
    
    {
    console.log("Eu sou" (Caio)", tenho " Number(23) "anos, moro em "(São Paulo)" e sou estudante.")

    
    
  /*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
  faça a soma das duas entradas e retorne o resultado. Invoque a função 
  e imprima no console o resultado.
  */

  
  const parametro4 = 23
  const parametro5 = 52
  function DoisNumeros (parametro4 + parametro5){
    return resultado
  }

  const resultado = 75
  
  function ResultadoConta (resultado) {
   }
  console.log(resultado)




  /*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
  primeiro número é **maior ou igual** ao segundo.

  c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

  d) Faça uma função que recebe uma mensagem 
  (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão 
  dela em letras maiúsculas.  

  
  
  
    /*3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
  Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses 
  valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o 
  resultado das operações. */
    
 
    let num1 = prompt("insira um número")
    let num2 = prompt("insira outro número")

    function operacoesASeremImpressas (numeroUm, numeroDois){

        return numeroUm + NumeroDois
    }


    console.log("Números inseridos", Number(numeroUm), Number(numeroDois))
    console.log("Soma", Number(numeroUm) + Number(numeroDois))
    console.log("Diferença", Number(numeroUm) - Number(numeroDois))
    console.log("Multiplicação", Number(numeroUm) * Number(numeroDois))
    console.log("Divisão", Number(numeroUm) / Number(numeroDois))




