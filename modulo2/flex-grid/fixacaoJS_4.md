```js

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 const quantidadeNumeros = arrayDeNumeros.filter((num) => {
    return num === numeroEscolhido;
 });
  
  const quantidadeTotal = quantidadeNumeros.length
  
  if (quantidadeTotal !== 0) {
    return `O número ${numeroEscolhido} aparece ${quantidadeTotal}x`
  } else if (quantidadeTotal === 0) {
      return "Número não encontrado"