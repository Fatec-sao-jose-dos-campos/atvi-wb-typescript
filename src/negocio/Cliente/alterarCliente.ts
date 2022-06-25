import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import { Alterar } from "../CRUD";

export default class CadastroProduto extends Alterar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
        this.produtos = produtos;
    }
    public alterar(): void {
        console.log(`\nAlteração do Cliente`);
        console.table(this.clientes.map(({ nome }) => nome));
        let escolhaCliente = this.entrada.receberNumero(`Escolha o cliente para alterar pelo código(index): `);
        let clienteEscolhido = this.clientes[escolhaCliente];
        console.log('Campos:');
        console.log(
          `1 - Nome: ${clienteEscolhido.nome}`
        );
        console.log(
          `2 - Nome Social: ${clienteEscolhido.nomeSocial}`
        );
        console.log(`3 - Gênero`);
        console.log('4 - CPF')
        console.table([clienteEscolhido.getCpf]);
        console.log(`5 - RGs:`);
        console.table(clienteEscolhido.getRgs);
        console.log(`6 - Telefones:`)
        console.table(clienteEscolhido.getTelefones);
        console.log(`7 - Produtos Consumidos:`)
        console.table(clienteEscolhido.getProdutosConsumidos);
        let opcao = this.entrada.receberNumero(`Por favor escolhe um campo para alterar: `);

        switch (opcao) {
          case 1:
            let novoNome = this.entrada.receberTexto('Novo nome: ');
            this.clientes[escolhaCliente].nome = novoNome;
            break;
          case 2:
            let novoNomeSocial = this.entrada.receberTexto('Novo nome Social: ');
            this.clientes[escolhaCliente].nomeSocial = novoNomeSocial;
            break;
          case 3:
            let novoGenero = this.entrada.receberTexto('Novo genero (m/f): ');
            this.clientes[escolhaCliente].setGenero = novoGenero as 'm' | 'f';
            break;
          case 4:
            console.log(`1 - Valor ${clienteEscolhido.getCpf.getValor}`);
            console.log(`2 - Data Emissão ${clienteEscolhido.getCpf.getDataEmissao}`);
            let opcaoCpf = this.entrada.receberNumero('Deseja alterar qual campo do CPF? ');
            switch (opcaoCpf) {
              case 1:
                let novoValorCpf = this.entrada.receberTexto('Novo Valor: ');
                this.clientes[escolhaCliente].setCpf = new CPF(novoValorCpf, clienteEscolhido.getCpf.getDataEmissao);
                break;
              case 2:
                let novoDataEmissaoCpf = this.entrada.receberTexto('Nova data de emissão do cpf, no padrão dd/mm/yyyy: : ');
                let [date, month, year] = novoDataEmissaoCpf.split('/');
                let dataEmissaoCPF = new Date(
                    Number(year), 
                    Number(month), 
                    Number(date)
                )
                this.clientes[escolhaCliente].setCpf = new CPF(clienteEscolhido.getCpf.getValor, dataEmissaoCPF);
                break;
              default:
                break;
            }
            break;
          case 5:
            console.table(clienteEscolhido.getRgs);
            let escolhaRg = this.entrada.receberNumero(`Escolha o RG para alterar pelo código(index): `);
            let rgEscolhido = clienteEscolhido.getRgs[escolhaRg];
            console.log(`1 - Valor ${rgEscolhido.getValor}`);
            console.log(`2 - Data Emissão ${rgEscolhido.getDataEmissao}`);
            let opcaoCampoRg = this.entrada.receberNumero('Deseja alterar qual campo do RG escolhido? ');
            switch (opcaoCampoRg) {
              case 1:
                let novoValorRg = this.entrada.receberTexto('Novo Valor: ');
                let rgs = clienteEscolhido.getRgs;
                rgs[escolhaRg].setValor = novoValorRg;
                this.clientes[escolhaCliente].setRgs = rgs;
                break;
              case 2:
                let novoDataEmissaoRG = this.entrada.receberTexto('Nova data de emissão do cpf, no padrão dd/mm/yyyy: : ');
                let [date, month, year] = novoDataEmissaoRG.split('/');
                let dataEmissaoRG = new Date(
                    Number(year), 
                    Number(month), 
                    Number(date)
                )
                let rgs2 = clienteEscolhido.getRgs;
                rgs2[escolhaRg].setDataEmissao = dataEmissaoRG;
                this.clientes[escolhaCliente].setRgs = rgs2;
                break;
              default:
                break;
            }
            break;
          case 6:
            console.table(clienteEscolhido.getTelefones);
            let escolhaTelefone = this.entrada.receberNumero(`Escolha o telefone para alterar pelo código(index): `);
            let novoTelefone = this.entrada.receberTexto('Novo Telefone (99) 9999-99999: ');let telefoneEscolhido = clienteEscolhido.getTelefones[escolhaTelefone];
            let [ddd, numero] = novoTelefone.split(' ');
            let telefones = clienteEscolhido.getTelefones;
            telefones[escolhaTelefone].setDdd = ddd;
            telefones[escolhaTelefone].setNumero = numero;
            this.clientes[escolhaCliente].setTelefones = telefones;
            break;
          case 7:
            console.log('1 - Adicionar');
            console.log('2 - Remover');
            let operacaoProduto = this.entrada.receberNumero('O que deseja fazer com o produto:');
            switch (operacaoProduto) {
              case 1:
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
                      this.clientes[escolhaCliente].setProdutosConsumidos = [
                        ...this.clientes[escolhaCliente].getProdutosConsumidos,
                        ...produtosConsumidos
                      ];
                      break;
                      case 2:
                        console.table(clienteEscolhido.getProdutosConsumidos);
                        let escolhaProduto = this.entrada.receberNumero(`Escolha o produto pelo código(index) dos produtos consumidos: `);
                        let produtos = clienteEscolhido.getProdutosConsumidos;
                        produtos.splice(escolhaProduto, 1);
                        this.clientes[escolhaCliente].setProdutosConsumidos = produtos;
                break;
            
              default:
                break;
            }
            break;
        }

        console.log(`\nAlteração concluída :)\n`);
    }
}
