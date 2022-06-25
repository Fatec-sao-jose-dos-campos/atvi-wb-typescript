import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import { Cadastrar } from "../CRUD";

export default class CadastrarProduto extends Cadastrar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor: `);
        
        let produto = new Produto(
            nomeProduto,
            valor
        );

        this.produtos.push(produto)

        console.log(`\nCadastro concluído :)\n`);
    }
}
