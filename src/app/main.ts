import Empresa from "../modelo/empresa";
import { 
    CadastrarCliente, 
    ListarClientes, 
    AlterarCliente,
    ExcluirCliente
} from "../negocio/Cliente";
import {
    CadastrarProduto, 
    ListarProdutos, 
    AlterarProduto,
    ExcluirProduto
} from "../negocio/Produto";
import { 
    ListarClientesConsumidores,
    ListarClientesPorGenero,
    ListarProdutosMaisConsumidos,
    ListarProdutosMaisConsumidosGenero
} from "../negocio/Listagem";

import Entrada from "../io/entrada";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Listagens`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        // área de cliente
        case 1:
            let execucaoAreaCliente = true;
            while (execucaoAreaCliente) {
                console.log(`\n1 - Cadastrar cliente`);
                console.log(`2 - Listar todos os clientes`);
                console.log(`3 - Alterar cliente`);
                console.log(`4 - Excluir cliente`);
                console.log(`0 - Voltar`);

                let opcaoCliente = entrada.receberNumero(`Por favor, escolha uma opção: `);

                switch (opcaoCliente) {
                    case 1:
                        let cadastroCliente = new CadastrarCliente(
                            empresa.getClientes,
                            empresa.getProdutos
                        )
                        cadastroCliente.cadastrar()
                        break;
                    case 2:
                        let listagemClientes = new ListarClientes(empresa.getClientes)
                        listagemClientes.listar()
                        break;
                    case 3:
                        let alteracaoCliente = new AlterarCliente(empresa.getClientes, empresa.getProdutos);
                        alteracaoCliente.alterar();
                        break;
                    case 4:
                        let exclusaoCliente = new ExcluirCliente(empresa.getClientes);
                        exclusaoCliente.excluir();
                        break;
                    case 0:
                        execucaoAreaCliente = false
                        console.log(`\n`)
                        break;
                    default:
                        console.log(`Operação não entendida :(\n`);
                        break;
                }
            }
            break;
        // área do produto
        case 2:
            let execucaoAreaProduto = true;
            while (execucaoAreaProduto) {
                console.log(`\n1 - Cadastrar Produto`);
                console.log(`2 - Listar Produtos`);
                console.log(`3 - Alterar Produto`);
                console.log(`4 - Excluir Produto`);
                console.log(`0 - Sair`);

                let opcaoProduto = entrada.receberNumero(`Por favor, escolha uma opção: `);

                switch (opcaoProduto) {
                    case 1:
                        let cadastroProduto = new CadastrarProduto(empresa.getProdutos);
                        cadastroProduto.cadastrar();
                        break;
                    case 2:
                        let listagemProdutos = new ListarProdutos(empresa.getProdutos);
                        listagemProdutos.listar();
                        break;
                    case 3:
                        let alteracaoProduto = new AlterarProduto(empresa.getProdutos);
                        alteracaoProduto.alterar();
                        break;
                    case 4:
                        let exclusaoProduto = new ExcluirProduto(empresa.getProdutos);
                        exclusaoProduto.excluir();
                        break;
                    case 0:
                        execucaoAreaProduto = false
                        console.log(`\n`)
                        break;
                    default:
                        console.log(`Operação não entendida :(\n`);
                        break;
                }
            }
            break;
        // Listagens
        case 3:
            let execucaoListagem = true;
            while (execucaoListagem) {
                console.log(`\n1 - Listar os 10 clientes que mais consumiram produtos`);
                console.log(`2 - Clientes por gênero`);
                console.log(`3 - Produto mais consumido`);
                console.log(`4 - Produto mais consumido por genero`);
                console.log(`0 - Sair`);

                let opcaoProduto = entrada.receberNumero(`Por favor, escolha uma opção: `);

                switch (opcaoProduto) {
                    case 1:
                        let listarClientesConsumidores = new ListarClientesConsumidores(empresa.getClientes);
                        listarClientesConsumidores.listar();
                        break;
                    case 2:
                        let listarClientesporGenero = new ListarClientesPorGenero(empresa.getClientes);
                        listarClientesporGenero.listar();
                        break;
                    case 3:
                        let listarProdutosMaisConsumidos = new ListarProdutosMaisConsumidos(
                            empresa.getClientes,
                            empresa.getProdutos
                        );
                        listarProdutosMaisConsumidos.listar();
                        break;
                    case 4:
                        let listarProdutosMaisConsumidosGenero = new ListarProdutosMaisConsumidosGenero(
                            empresa.getClientes,
                            empresa.getProdutos
                        );
                        listarProdutosMaisConsumidosGenero.listar();
                        break;
                    case 0:
                        execucaoListagem = false
                        console.log(`\n`)
                        break;
                    default:
                        console.log(`Operação não entendida :(\n`);
                        break;
                }
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}
