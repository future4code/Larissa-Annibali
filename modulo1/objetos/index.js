//exercícios sobre objeto
/*1. a) O que vai ser impresso no console?
Será impresso no console dois nomes do elenco do filme auto da compadecida e será feita
a transmissão do filme que é na globo com o horário às 14h pos ela estpa na posição 2 de 0 à 10
Assim como no primeiro console é impresso o primeiro e o ultimo nome*/

/*2. a) O que vai ser impresso no console?

Será impresso no console o nome do cachorro JUBA porém ele será introduzido com 
três entradas, Juba, Jubo e Juca

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Ele é chamado de Spread. Ele permitem que os arrays se expandam.*/

/* 3. a) O que vai ser impresso no console?
Será impresso no console um booleano falso e um undefined.

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
Acontece porque na função não foi indicado os objetos de maneira correta, e não tinha as maiores informações*/


//Exercícios

/*1. Resolva os passos a seguir:
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
(um array que sempre terá exatamente três apelidos). Depois, escreva uma função que
 recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:*/

 //entrada

 function apelidos (pessoaEu) {
    return apelidos 
   }
 
const pessoaEu = {
     nome: "Larissa",
     apelidos: ["Lari", "Sayo", "Annibali"] 
}

 //saída

 console.log(`Eu sou ${pessoaEu.nome} mas você pode me chamar de: ${pessoaEu.apelidos[0]}, ${pessoaEu.apelidos[1]} ou ${pessoaEu.apelidos[2]}.`)



 /*b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, 
 mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior 
 passando como argumento o novo objeto  */
     

 

 const pessoaEu2 = {
      ...pessoaEu,
    apelidos: ['Lala', 'Larinha', 'Risada de chaleira']
 }

 console.log(`Eu sou ${pessoaEu2.nome} mas você pode me chamar de: ${pessoaEu2.apelidos}.`)

 /*2. Resolva os passos à seguir: 
 a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.*/

 const pessoasProfissoes = {
     nome: 'Kalista',
     idade: '200',
     profissao: 'adcarry'
    } 
//lolzeira que vive em mim nasceu de novo
  const pessoasProfissoes2 =   {
      nome: 'Kayn',
      idade:'26',
      profissao: 'tank'

  }

   /*b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`*/

function champions (pessoasProfissoes, pessoasProfissoes2) {
    return array1, array2}
  
   { const array1 = ['Kalista', 7, 200, 'adcarry', 7]
    console.log(array1)
  
    const array2 = ['Kayn', 4, 26, 'tank', 4]
    console.log (array2)
}

//3. Resolva os passos a seguir:
/*a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`*/

const carrinho = []

/*b) Crie três novos objetos que representem frutas de um sacolão. E
les devem ter as seguintes propriedades: nome (`string`) e 
disponibilidade (`boolean` - devem começar como `true`)*/

const fruta0 = {
    nome: 'Manga',
    disponibilidade: true

}
const fruta1 = {
    nome: 'Pêra',
    disponibilidade: true
}
const fruta2 = {
    nome: 'Morango',
    disponibilidade: true
}


/*c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a 
dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.*/
const fruta = receberFrutas => {
    carrinho.push(receberFrutas)
}

fruta ([fruta0, fruta1, fruta2])
/*d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. */

console.log(carrinho)

//Desafios 


/*1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console 
um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para 
garantir que é um objeto.*/

function informacoesUsuario (nome, idade, profissao) {
    return nome, idade, profissao}

const informacoesInseridas = {
 nome:'Larissa',
 idade:'26',
 profissao: 'Atendente'
}

console.log(`nome: ${informacoesInseridas.nome} idade: ${informacoesInseridas.idade} profissão: ${informacoesInseridas.profissao}.`)

const informacoesImportantes = {
   infos: 'Informações sobre o usuário'
}
console.log(informacoesImportantes.infos)

/*Crie uma função que receba dois objetos que representam filmes. Eles devem ter as 
propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true*/

const filme = {
	nome: 'Um Amor Para Recordar', 
	ano: '2002', 
    lançado1: false
}

const filme2 = {
    nome: 'A visita',
    ano: '2015',
    lançado2: false
}

console.log(`O primeiro filme foi lançado antes do segundo? ${filme.lançado1}.`)
console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme2.lançado2}.`)

/*3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o 
controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse 
mesmo objeto com a propriedade disponibilidade com o valor invertido. */



const fruta4 = {
    nome: 'Banana',
    disponibilidade: true
}

const fruta5 = {
    nome: 'kiwi',
    disponibilidade: false
}

const frutas = receberFrutas2 => {
    carrinho.push(receberFrutas2)
}

frutas ([fruta4, fruta5])

console.log(carrinho)

//rezando a deus do sono que depois de tudo isso eu tenha acertado pelo menos alguma coisa plmdds