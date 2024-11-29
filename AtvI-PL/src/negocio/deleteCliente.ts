import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import { Funcionario } from "../modelo/funcionario";
import Delete from "./delete";

export default class DeleteCliente extends Delete {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    private funcionario: Funcionario;

    constructor(clientes: Array<Cliente>, funcionario: Funcionario) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
        this.funcionario = funcionario;
    }

    public deletar(): void {
        console.log(`\nInício do processo de deletar cadastro de cliente`);

        const codigoFuncionario = this.entrada.receberTexto(`Por favor, insira o código do funcionário para remoção: `);

        if (this.funcionario.validarCodigo(codigoFuncionario)) {
            const idCliente = this.entrada.receberNumero(`Por favor, insira o ID do cliente a ser removido: `);

            const index = this.clientes.findIndex(cliente => cliente.id === idCliente);

            if (index !== -1) {
                this.clientes.splice(index, 1);
                console.log(`Cliente com ID ${idCliente} foi deletado com sucesso.`);
            } else {
                console.log(`Cliente com ID ${idCliente} não encontrado.`);
            }
        } else {
            console.log(`Código de funcionário inválido. Acesso negado.`);
        }
    }
}