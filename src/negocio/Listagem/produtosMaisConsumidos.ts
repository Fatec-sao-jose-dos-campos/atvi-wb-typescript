import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import { Listar } from "../CRUD";

export default class ListarProdutosMaisConsumidos extends Listar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    constructor(
      clientes: Array<Cliente>,
      produtos: Array<Produto>
    ) {
        super()
        this.clientes = clientes
        this.produtos = produtos
    }
    public listar(): void {
      let produtosMaisConsumidos: {
        produto: string;
        quantidade: number;
      }[] = [];

      this.produtos.forEach(({ getNome: nomeProduto }, index) => {
        produtosMaisConsumidos.push({ 
          produto: nomeProduto,
          quantidade: 0
        });

        this.clientes.forEach(({ getProdutosConsumidos: produtosConsumidos }) => {
          let quantidadeProdutosConsumidos = produtosConsumidos.filter(
            ({ getNome: nomeProdutoConsumido }) => nomeProdutoConsumido === nomeProduto
          ).length;
          produtosMaisConsumidos[index].quantidade += quantidadeProdutosConsumidos; 
        })
      });

      console.log(`\nProduto mais consumido:`);
      console.table(
        produtosMaisConsumidos.sort((
          a: { quantidade: number },
          b: { quantidade: number }
        ) => b.quantidade = a.quantidade).slice(0, 1)
      );
      console.log(`\n`);
    }
}
