export class Funcionario {
    public nome: string;
    protected codigo: string;

    constructor(nome: string, codigo: string) {
        this.nome = nome;
        this.codigo = codigo;
    }

    public validarCodigo(codigo: string): boolean {
        return this.codigo === codigo;
    }
}