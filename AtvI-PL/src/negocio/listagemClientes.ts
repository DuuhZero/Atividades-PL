import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`ID:` + cliente.id)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Produtos Consumidos:`);
            if (cliente.getProdutosConsumidos.length > 0) {
                cliente.getProdutosConsumidos.forEach(produto => {
                    console.log(`  - [${produto.id}] ${produto.nome} - R$ ${produto.valor.toFixed(2)}`);
                });
            } else {
                console.log(`  Nenhum produto consumido.`);
            }
            console.log(`Serviços Consumidos:`);
            if (cliente.getServicosConsumidos.length > 0) {
                cliente.getServicosConsumidos.forEach(servico => {
                    console.log(`  - [${servico.id}] ${servico.nome} - R$ ${servico.valor.toFixed(2)}`);
                });
            } else {
                console.log(`  Nenhum serviço consumido.`);
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}