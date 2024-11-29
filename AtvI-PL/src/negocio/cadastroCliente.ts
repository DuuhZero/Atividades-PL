import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import CPF from "../modelo/cpf"
import Cadastro from "./cadastro"
import Servico from "../modelo/servico"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        let adicionarProduto = true;
        while (adicionarProduto) {
            let idProduto = this.entrada.receberNumero(`Por favor informe o ID do produto consumido (ou -1 para parar): `);
            if (idProduto === -1) {
                adicionarProduto = false;
            } else {
                let produto = this.produtos.find(p => p.id === idProduto);
                if (produto) {
                    cliente.produtosConsumidos.push(produto);
                } else {
                    console.log(`Produto com ID ${idProduto} não encontrado.`);
                }
            }
        }
        let adicionarServico = true;
        while (adicionarServico) {
            let idServico = this.entrada.receberNumero(`Por favor informe o ID do serviço consumido (ou -1 para parar): `);
            if (idServico === -1) {
                adicionarServico = false;
            } else {
                let servico = this.servicos.find(s => s.id === idServico);
                if (servico) {
                    cliente.servicosConsumidos.push(servico);
                } else {
                    console.log(`Serviço com ID ${idServico} não encontrado.`);
                }
            }
        }
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :\n`);
        console.log(`\nCliente ID: ${cliente.id}`)
    }
}