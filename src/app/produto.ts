export class Produto {
    nome: string;
    quantidade: number;
    descricao: string;
    tamanho: string;
    categoria: string;
    
    constructor() {
        this.nome = "";
        this.quantidade = 1;
        this.descricao = "";
        this.tamanho = "";
        this.categoria = "";
    }

    create(nome:string, qtd: number, desc:string, tam:string, ctg:string) {
        this.nome = nome;
        this.quantidade = qtd;
        this.descricao = desc;
        this.tamanho = tam;
        this.categoria = ctg;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome:string){
        this.nome = nome;
    }

    getQuantidade(): number {
        return this.quantidade;
    }

    setQuantidade(qtd: number){
        this.quantidade = qtd;
    }

    getDescricao(): string {
        return this.descricao;
    }

    setDescricao(desc:string){
        this.descricao = desc;
    }

    getTamanho(): string {
        return this.tamanho;
    }

    setTamanho(tam:string){
        this.tamanho = tam;
    }

    getCategoria():string{
        return this.categoria;
    }

    setCategoria(ctg:string){
        this.categoria = this.categoria;
    }
}
