import Entrada from "../io/entrada";
import { Funcionario } from "../modelo/funcionario";
import Servico from "../modelo/servico";
import Update from "./update";

export default class UpdateServico extends Update {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    private funcionario: Funcionario;

    constructor(servicos: Array<Servico>, funcionario: Funcionario) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
        this.funcionario = funcionario;
    }

    public update(): void {
        console.log(`\nInício do processo de atualizar cadastro de serviços`);
        const codigoFuncionario = this.entrada.receberTexto(`Por favor, insira o código do funcionário: `);

        if (this.funcionario.validarCodigo(codigoFuncionario)) {
            const idServico = this.entrada.receberNumero(`Por favor, insira o ID do serviço a ser atualizado: `);
            const index = this.servicos.findIndex(servico => servico.id === idServico);

            if (index !== -1) {
                let servico = this.servicos[index];
                let nome = this.entrada.receberTexto(`Por favor, informe o novo nome do serviço: `);
                let valor = this.entrada.receberNumero(`Por favor, informe o novo valor do serviço: `);

                servico.nome = nome;
                servico.valor=valor

                console.log(`\nOs dados foram atualizados com sucesso:`);
                console.log(`Serviço ID: ${servico.id}, Nome: ${servico.nome}, Valor: ${servico.valor}`);
            } else {
                console.log(`Serviço com ID ${idServico} não encontrado.`);
            }
        } else {
            console.log(`Código de funcionário inválido. Acesso negado.`);
        }
    }
}
