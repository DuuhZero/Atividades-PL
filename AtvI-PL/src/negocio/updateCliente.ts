import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import { Funcionario } from "../modelo/funcionario";
import Update from "./update";

export default class UpdateCliente extends Update{
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    private funcionario: Funcionario;
    constructor(clientes: Array<Cliente>, funcionario: Funcionario) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
        this.funcionario = funcionario;
    }
    public update(): void {
        console.log(`\nInício do processo de atualizar cadastro de cliente`)
        const codigoFuncionario = this.entrada.receberTexto(`Por favor, insira o código do funcionário: `)
        if (this.funcionario.validarCodigo(codigoFuncionario)) {
            const idCliente = this.entrada.receberNumero(`Por favor, insira o ID do cliente a ser atualizado: `);
            const index = this.clientes.findIndex(cliente => cliente.id === idCliente);
            if (index !== -1){

                let cliente=this.clientes[index]
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                
                cliente.nome=nome
                cliente.nomeSocial=nomeSocial

                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)

                
                cliente.getCpf.setValor(valor)
                cliente.getCpf.setDataEmissao(dataEmissao)
                console.log(`\nOs dados foram atualizados: `)
                console.log(`\nCliente ID ${cliente.id}`)
            }
        }else {
            console.log(`Código de funcionário inválido. Acesso negado.`);
        }
    }
}