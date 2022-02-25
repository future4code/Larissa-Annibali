//exercícios de interpretação

/*1. 
a) Explique o que o código faz. Qual o teste que ele realiza? 
O código pede para que o usuário teste um numero que ele deseja, digitando no prompt de comando. 

b) Para que tipos de números ele imprime no console "Passou no teste"? 

Apenas para números em que o resto for 2 ou igual a 0

c) Para que tipos de números a mensagem é "Não passou no teste"?

Para número que forem com resto diferente de dois ou 0*/




//1.

const idadeDoUsuario = (prompt('Qual sua idade?'))
const numero = Number(idadeDoUsuario)

function verificadorDeIdade(idade) {

    if (idade >= 20) {
        console.log('Ele(a) pode dirigir.')
    }
    else {
        console.log('Ele(a) não pode dirigir.')
    }
}



//2.

const turmaAluno = prompt('Qual é sua turma?')

switch (turmaAluno) {
    case 'M':
        'Bom dia'
        break;
    case 'V':
        'Boa tarde'
        break;
    case 'N':
        'Boa noite'
        break;

}

//3. 





