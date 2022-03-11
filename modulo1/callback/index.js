//Exercícios de interpretação de código

/*1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize 
as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
//a)
const dog0 = "Lupin";
const dog1 = "Polly";
const dog2 = "Madame";
const dog3 = "Quentinho";
const dog4 = "Fluffly";
const dog5 = "Caramelo";

const listaDeDogs = [
  "Lupin",
  "Polly",
  "Madame",
  "Quentinho",
  "Fluffly",
  "Caramelo",
];

listaDeDogs[6];

console.log(listaDeDogs);

//b

const pets1 = pets.filter((pets1) => {
  return pets1.raca === "Salsicha";
});

console.log(pets1);

//c

const desconto = pets
  .filter((doguinho) => {
    return doguinho.raca === "Poodle";
  })
  .map((poodle) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`;
  });

console.log(desconto);

/*2. Dado o seguinte array de produtos, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//a)

const comida0 = "Alface Lavada";
const comida1 = "Guaraná 2l";
const comida2 = "Veja Multiuso";
const comida3 = "Dúzia de Banana";
const comida4 = "Leite";
const comida5 = "Cândida";
const comida6 = "Detergente Ypê";
const comida7 = "Vinho Tinto";
const comida8 = "Berinjela kg";
const comida9 = "Sabão em Pó Ypê";

const listaDeProdutos = [
  "Alface Lavada",
  "Guaraná 2l",
  "Veja Multiuso",
  "Dúzia de Banana",
  "Leite",
  "Cândida",
  "Detergente Ypê",
  "Vinho Tinto",
  "Berinjela kg",
  "Sabão em Pó Ypê",
];

listaDeProdutos[10];

console.log(listaDeProdutos);

//b)
const promocao = produtos.map((produto) => {
  const desconto = (produto.preco * 5) / 100;
  const novopreço = produto.preco - desconto;
  const objeto = {
    nome: "produto",
    preco: novopreço.toFixed(2),
  };
  return objeto;
});

console.log(promocao);

//c)
const promo1 = produtos.filter((promo1) => {
  return promo1.categoria === "Bebidas";
});

console.log(promo1);

//d))
