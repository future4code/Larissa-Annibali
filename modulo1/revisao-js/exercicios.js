// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => (a - b))
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numeroPar = a => a % 2 === 0
    return array.filter(numeroPar)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosElevados = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosElevados.push((array[i] * array[i]))
        }
    }
    return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.max(num1, num2) - Math.min(num1, num2),
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayVazio = [];
    for (let i = 0; arrayVazio.length < n; i++) {
        if (i % 2 === 0) {
            arrayVazio.push(i);
        }
    }
    return arrayVazio
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"

    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const array1 = array.sort((a, b) => a - b)
    return [array1[array1.length - 2], array1[1]]
}



// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}