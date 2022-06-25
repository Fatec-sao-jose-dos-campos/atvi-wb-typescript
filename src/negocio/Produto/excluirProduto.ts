import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import { Excluir } from "../CRUD";

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public excluir(): void {
        console.log(`\nExclusão do Produto`);
        console.table(this.produtos);
        let escolhaProduto = this.entrada.receberNumero(`Escolha o produto para deletar pelo código(index): `);
        this.produtos.splice(escolhaProduto, 1);

        console.log(`\nExclusão concluída :)\n`);
    }
}
