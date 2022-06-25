import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: 'm' | 'f'
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(
        nome: string,
        nomeSocial: string,
        cpf: CPF,
        rg: Array<RG>,
        telefones: Array<Telefone>,
        produtosConsumidos: Array<Produto>,
        genero: 'm' | 'f'
    ) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rg;
        this.dataCadastro = new Date()
        this.telefones = telefones;
        this.produtosConsumidos = produtosConsumidos;
        this.servicosConsumidos = []
        this.genero = genero;
    }
    public get getCpf(): CPF {
        return this.cpf;
    }
    public get getRgs(): Array<RG> {
        return this.rgs;
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro;
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones;
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    }
    public get getGenero(): 'm' | 'f' {
        return this.genero;
    }
    public set setGenero(genero: 'm' | 'f') {
        this.genero = genero;
    }
    public set setCpf(cpf: CPF) {
        this.cpf.setValor= cpf.getValor;
        this.cpf.setDataEmissao = cpf.getDataEmissao;
    }
    public set setRgs(rgs: Array<RG>) {
        this.rgs = rgs;
    }
    public set setTelefones(telefones: Array<Telefone>) {
        this.telefones = telefones;
    }
    public set setProdutosConsumidos(produtosConsumidos: Array<Produto>) {
        this.produtosConsumidos = produtosConsumidos;
    }
}
