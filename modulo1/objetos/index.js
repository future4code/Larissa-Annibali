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

 console.log(`Eu sou ${pessoaEu.nome} mas você pode me chamar de: 
 ${pessoaEu.apelidos[0]}, ${pessoaEu.apelidos[1]} ou ${pessoaEu.apelidos[2]}.`)



 /*b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, 
 mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior 
 passando como argumento o novo objeto  */
     

 

 const pessoaEu2 = {
      ...pessoaEu,
    apelidos: ['Lala', 'Larinha', 'Risada de chaleira']
 }

 console.log(`Eu sou ${pessoaEu2.nome} mas você pode me chamar de: ${pessoaEu2.apelidos}.`)

 /*2. Resolva os passos à seguir: 
 a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
 b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`*/

