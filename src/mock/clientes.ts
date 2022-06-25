import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import { produtosInstanciados } from "./produtos";

let clientes: {
  nome: string;
  nomeSocial: string;
  genero: 'm' | 'f';
  cpf: CPF;
  rgs: Array<RG>
  dataCadastro: Date
  telefones: Array<Telefone>
  produtosConsumidos: Array<Produto>
  servicosConsumidos: Array<Servico>
}[] = [
  {
    nome: 'Kleber',
    nomeSocial: 'KLB',
    genero: 'm',
    cpf: new CPF('036.902.540-78', '10/02/2000'),
    rg: [new RG('30.594.828-3', '10/02/2000')]
  }
];
