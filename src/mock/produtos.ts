import Produto from "../modelo/produto";

let produtos: {
  nome: string;
  valor: number;
}[] = [
  {
    nome: 'Sabão em pó',
    valor: 12
  },
  {
    nome: 'Amaciante',
    valor: 20
  },
  {
    nome: 'Detergente',
    valor: 22
  },
  {
    nome: 'Água sanitária',
    valor: 89
  },
  {
    nome: 'Esponja de aço',
    valor: 65
  },
  {
    nome: 'Buchinha de pia',
    valor: 120
  },
  {
    nome: 'Sabão em pedra',
    valor: 28
  },
  {
    nome: 'Detergente',
    valor: 22
  },
  {
    nome: 'Sabonete',
    valor: 76
  },
  {
    nome: 'Shampoo',
    valor: 68
  },
  // aqui a outra metade
  {
    nome: 'Condicionador',
    valor: 88
  },
  {
    nome: 'Desinfetante',
    valor: 22
  },
  {
    nome: 'Lustra móveis',
    valor: 74
  },
  {
    nome: 'Tira manchas',
    valor: 31
  },
  {
    nome: 'Limpa vidros',
    valor: 68
  },
  {
    nome: 'Alcool',
    valor: 124
  },
  {
    nome: 'Saco de lixo 30l',
    valor: 55
  },
  {
    nome: 'Saco de lixo 50l',
    valor: 75
  },
  {
    nome: 'Refrigerante 2l',
    valor: 7
  },
  {
    nome: 'Suco garrafa 1l',
    valor: 4
  },
];

let produtosInstanciados: Produto[] = 
  produtos.map(({ nome, valor }) => new Produto(nome, valor));

export { produtosInstanciados }
