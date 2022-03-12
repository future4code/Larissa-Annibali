/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const user1 = [];
const user2 = [];
const carta = comprarCarta();

const welcomeMessage = 'Boas vindas ao jogo de Blackjack!'
console.log(welcomeMessage)

const joyGame = confirm('Quer iniciar uma nova rodada? Sim ou não?');
console.log(joyGame)
if (!joyGame) {
   alert('O jogo Acabou');

} else {
   joyGame === true;

   console.log(`Usuário - carta, ${carta.texto}, ${carta.texto}, ${carta.valor}, ${carta.valor}`)
}