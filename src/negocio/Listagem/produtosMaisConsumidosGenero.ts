import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import { Listar } from "../CRUD";

interface ProdutosConsumidos {
  produto: string;
  quantidade: number;
}

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
      let produtosMaisConsumidosMasculino: {
        produto: string;
        quantidade: number;
      }[] = [];

      let produtosMaisConsumidosFeminino: {
        produto: string;
        quantidade: number;
      }[] = [];

      this.produtos.forEach(({ getNome: nomeProduto }, index) => {
        produtosMaisConsumidosMasculino.push({ 
          produto: nomeProduto,
          quantidade: 0
        });

        produtosMaisConsumidosFeminino.push({ 
          produto: nomeProduto,
          quantidade: 0
        });

        this.clientes.filter(({ genero }) => genero === 'm')
          .forEach(({ getProdutosConsumidos: produtosConsumidos }) => {
            let quantidadeProdutosConsumidos = produtosConsumidos.filter(
              ({ getNome: nomeProdutoConsumido, getValor: valorProduto }) => 
                nomeProdutoConsumido === nomeProduto && valorProduto > 0
            ).length;
            produtosMaisConsumidosMasculino[index].quantidade += quantidadeProdutosConsumidos; 
          })

        this.clientes.filter(({ genero }) => genero === 'f')
          .forEach(({ getProdutosConsumidos: produtosConsumidos }) => {
            let quantidadeProdutosConsumidos = produtosConsumidos.filter(
              ({ getNome: nomeProdutoConsumido, getValor: valorProduto }) => 
                nomeProdutoConsumido === nomeProduto && valorProduto > 0
            ).length;
            produtosMaisConsumidosFeminino[index].quantidade += quantidadeProdutosConsumidos; 
          })
      });

      console.log(`\nProduto mais consumido:`);
      console.log('Produto mais consumido masculino');
      console.table(
        produtosMaisConsumidosMasculino.sort((
          a: { quantidade: number },
          b: { quantidade: number }
        ) => b.quantidade = a.quantidade).slice(0, 1)
      );
      console.log('Produto mais consumido feminino');
      console.table(
        produtosMaisConsumidosFeminino.sort((
          a: { quantidade: number },
          b: { quantidade: number }
        ) => b.quantidade = a.quantidade).slice(0, 1)
      );
      console.log(`\n`);
    }
}
