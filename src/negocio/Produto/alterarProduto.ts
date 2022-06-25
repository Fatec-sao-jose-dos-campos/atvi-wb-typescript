import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import { Alterar } from "../CRUD";

export default class CadastroProduto extends Alterar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public alterar(): void {
        console.log(`\nAlteração do Produto`);
        console.table(this.produtos);
        let escolhaProduto = this.entrada.receberNumero(`Escolha o produto para alterar pelo código(index): `);
        let produtoEscolhido = this.produtos[escolhaProduto];
        console.log('Campos:');
        console.log(
          `1 - Nome: ${produtoEscolhido.getNome}`
        );
        console.log(
          `2 - Valor: ${produtoEscolhido.getValor}`
        );
        let opcao = this.entrada.receberNumero(`Por favor escolhe um campo para alterar: `);

        switch (opcao) {
          case 1:
            let novoNome = this.entrada.receberTexto('Novo nome: ');
            this.produtos[escolhaProduto].setNome = novoNome;
            break;
          case 2:
            let novoValor = this.entrada.receberNumero('Novo valor: ');
            this.produtos[escolhaProduto].setValor = novoValor;
            break;
          default:
            console.log('Este campo não existe');
            break;
        }

        console.log(`\Alteração concluída :)\n`);
    }
}
