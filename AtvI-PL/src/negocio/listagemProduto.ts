import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProduto extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`ID:` + produto.id)
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}