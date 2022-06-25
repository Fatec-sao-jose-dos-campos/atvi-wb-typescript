export default class CPF {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
    public set setValor(valor: string) {
        this.valor = valor;
    }
    public set setDataEmissao(dataEmissao: Date) {
        this.dataEmissao = dataEmissao;
    }
}
