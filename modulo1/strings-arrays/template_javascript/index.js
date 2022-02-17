//Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
 /* a array retorna como indefinida, b ela ainda dá como infefinida (null)
 c retorna como resposa 11, d retorna como 3, e retorna 11 e as numerações
e retorna com valor 9 */

/*2. Leia o código abaixo com atenção 
    
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    
    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?*/


/* Vai imprimir a frase com todas as letras em maisculo e o tamanho da contagem de letras que daria 27*/

//Exercícios de escrita de código

/*1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!*/

   /* const emailDoUsuario = prompt('Qual seu nome de usuário?')
    const nomeDoUsuario = prompt('Qual seu nome de usuário?')
    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)*/

    /*2. Faça um programa que contenha um array com 5 
    das suas comidas preferidas, armazenado em uma variável. 
    Em seguida, siga os passos:*/

    const comidaPreferida1 = 'ovo'
    const comidaPreferida2 = 'frango'
    const comidaPreferida3 = 'macarrão'
    const comidaPreferida4 = 'pão'
    const comidaPreferida5 = 'coca'

    // a) Imprima no console o array completo

    console.log(comidaPreferida1, comidaPreferida2,  comidaPreferida3,  comidaPreferida4,  comidaPreferida5)



    /*b) Imprima no console a mensagem 
    "Essas são as minhas comidas preferidas: ", 
    seguida por cada uma das comidas, uma embaixo da outra.*/

    const listaDeComidas = ["ovo", "frango", "macarrão", "pão", "coca"]

    listaDeComidas [5] = "comidas gostosas"
    
    console.log(listaDeComidas) 
    
        

    /* c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    Troque a segunda comida da sua lista pela inserida pelo usuário. 
    Imprima no consolea nova lista*/

    const usuario = prompt('Qual sua comida favorita?')

    console.log(splice(usuario))