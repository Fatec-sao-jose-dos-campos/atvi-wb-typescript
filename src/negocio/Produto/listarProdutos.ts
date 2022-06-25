import Produto from "../../modelo/produto";
import { Listar } from "../CRUD";

export default class ListarProdutos extends Listar {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        console.table(this.produtos);
        console.log(`\n`);
    }
}
