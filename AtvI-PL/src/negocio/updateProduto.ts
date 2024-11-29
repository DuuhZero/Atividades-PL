import Entrada from "../io/entrada";
import { Funcionario } from "../modelo/funcionario";
import Produto from "../modelo/produto";
import Update from "./update";

export default class UpdateProduto extends Update {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    private funcionario: Funcionario;

    constructor(produtos: Array<Produto>, funcionario: Funcionario) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
        this.funcionario = funcionario;
    }

    public update(): void {
        console.log(`\nInício do processo de atualizar cadastro de produtos`);
        const codigoFuncionario = this.entrada.receberTexto(`Por favor, insira o código do funcionário: `);

        if (this.funcionario.validarCodigo(codigoFuncionario)) {
            const idProduto = this.entrada.receberNumero(`Por favor, insira o ID do produto a ser atualizado: `);
            const index = this.produtos.findIndex(produto => produto.id === idProduto);

            if (index !== -1) {
                let produto = this.produtos[index];
                let nome = this.entrada.receberTexto(`Por favor, informe o novo nome do produto: `);
                let valor = this.entrada.receberNumero(`Por favor, informe o novo valor do produto: `);

                produto.nome = nome;
                produto.valor = valor;

                console.log(`\nOs dados foram atualizados com sucesso:`);
                console.log(`Produto ID: ${produto.id}, Nome: ${produto.nome}, Valor: ${produto.valor}`);
            } else {
                console.log(`Produto com ID ${idProduto} não encontrado.`);
            }
        } else {
            console.log(`Código de funcionário inválido. Acesso negado.`);
        }
    }
}
