import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import { Excluir } from "../CRUD";

export default class ExcluirCliente extends Excluir {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public excluir(): void {
        console.log(`\nExclusão do Cliente`);
        console.table(this.clientes.map(({ nome }) => nome));
        let escolhaCliente = this.entrada.receberNumero(`Escolha o cliente para deletar pelo código(index): `);
        this.clientes.splice(escolhaCliente, 1);

        console.log(`\nExclusão concluída :)\n`);
    }
}
