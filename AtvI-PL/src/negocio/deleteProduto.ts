import Entrada from "../io/entrada";
import { Funcionario } from "../modelo/funcionario";
import Produto from "../modelo/produto";
import Delete from "./delete";

export default class DeleteProduto extends Delete {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    private funcionario: Funcionario;

    constructor(produtos: Array<Produto>, funcionario: Funcionario) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
        this.funcionario = funcionario;
    }

    public deletar(): void {
        console.log(`\nInício do processo de deletar cadastro de produto`);

        const codigoFuncionario = this.entrada.receberTexto(`Por favor, insira o código do funcionário para remoção: `);

        if (this.funcionario.validarCodigo(codigoFuncionario)) {
            const idProduto = this.entrada.receberNumero(`Por favor, insira o ID do produto a ser removido: `);

            const index = this.produtos.findIndex(produto => produto.id === idProduto);

            if (index !== -1) {
                this.produtos.splice(index, 1);
                console.log(`Produto com ID ${idProduto} foi deletado com sucesso.`);
            } else {
                console.log(`Produto com ID ${idProduto} não encontrado.`);
            }
        } else {
            console.log(`Código de funcionário inválido. Acesso negado.`);
        }
    }
}
