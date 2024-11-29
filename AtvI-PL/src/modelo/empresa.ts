import Cliente from "./cliente"
import { Funcionario } from "./funcionario"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private funcionarios: Array<Funcionario>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.funcionarios = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getFuncionarios() {
        return this.funcionarios;
    }
}