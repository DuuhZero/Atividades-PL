import Entrada from "../io/entrada";
import { Funcionario } from "../modelo/funcionario";
import Servico from "../modelo/servico";
import Delete from "./delete";

export default class DeleteServico extends Delete {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    private funcionario: Funcionario;

    constructor(servicos: Array<Servico>, funcionario: Funcionario) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
        this.funcionario = funcionario;
    }

    public deletar(): void {
        console.log(`\nInício do processo de deletar cadastro de serviço`);

        const codigoFuncionario = this.entrada.receberTexto(`Por favor, insira o código do funcionário para remoção: `);

        if (this.funcionario.validarCodigo(codigoFuncionario)) {
            const idServico = this.entrada.receberNumero(`Por favor, insira o ID do serviço a ser removido: `);

            const index = this.servicos.findIndex(servico => servico.id === idServico);

            if (index !== -1) {
                this.servicos.splice(index, 1);
                console.log(`Serviço com ID ${idServico} foi deletado com sucesso.`);
            } else {
                console.log(`Serviço com ID ${idServico} não encontrado.`);
            }
        } else {
            console.log(`Código de funcionário inválido. Acesso negado.`);
        }
    }
}
