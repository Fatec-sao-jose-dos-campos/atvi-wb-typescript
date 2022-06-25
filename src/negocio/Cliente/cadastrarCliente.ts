import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import { Cadastrar } from "../CRUD";

export default class CadastrarCliente extends Cadastrar {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    private produtos: Array<Produto>;
    constructor(
        clientes: Array<Cliente>, 
        produtos: Array<Produto>
    ) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.produtos = produtos
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Informe seu gênero (m/f): `);
        let valorCpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let [date, month, year] = dataCPF.split('/');
        let dataEmissaoCPF = new Date(
            Number(year), 
            Number(month), 
            Number(date)
        )
        let rgs: Array<RG> = [];
        let maisRgs = true;
        while (maisRgs) {
            let valorRg = this.entrada.receberTexto(`Por favor informe o número do rg: `);
            let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
            let [date, month, year] = dataRg.split('/');
            let dataEmissaoRG = new Date(
                Number(year), 
                Number(month), 
                Number(date)
            );
            rgs.push(new RG(valorRg, dataEmissaoRG));
            maisRgs = this.entrada.receberTexto(`Possuí mais RGs? (s/n) `) === 's' ? true : false;
        }

        let telefones: Array<Telefone> = [];
        let maisTelefones = true;
        while (maisTelefones) {
            let valorTelefone = this.entrada.receberTexto(`Por favor informe o telefone, no padrão (99) 99999-9999: `);

            let [ddd, numero] = valorTelefone.split(' ');
            
            telefones.push(
                new Telefone(
                    ddd,
                    numero
                )
            );

            maisTelefones = this.entrada.receberTexto(`Possuí mais telefones? (s/n) `) === 's' ? true : false;
        }

        let cpf = new CPF(valorCpf, dataEmissaoCPF);

        let produtosConsumidos: Array<Produto> = [];
        let maisProdutos = true
        while (maisProdutos) {
            if (this.produtos.length === 0) {
                console.warn('\nNão há produtos cadastrados');
                console.log('Tente novamente mais tarde');
                break;
            }

            console.table(this.produtos); 
            let codigoProdutoConsumido = this.entrada.receberNumero('Selecione o produto pelo código(index): ');
            let produtoConsumido = this.produtos.find(
                (_, index) => index === codigoProdutoConsumido
            )

            if (produtoConsumido) produtosConsumidos.push(produtoConsumido);
            else {
                console.warn('Não há produto com esse código');
            }

            maisProdutos = this.entrada.receberTexto(`Mais Produtos? (s/n) `) === 's' ? true : false;
        }
        
        let cliente = new Cliente(
            nome, 
            nomeSocial, 
            cpf, 
            rgs, 
            telefones, 
            produtosConsumidos,
            genero as 'm' | 'f'
        );
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}
