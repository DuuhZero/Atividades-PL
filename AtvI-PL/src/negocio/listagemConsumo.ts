import Cliente from "../modelo/cliente" 
import Produto from "../modelo/produto" 
import Servico from "../modelo/servico" 

export default class ListagemMaisConsumidos {
    private clientes: Array<Cliente> 

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listarMaisConsumidos(): void {
        const consumoProdutos: { [key: string]: { produto: Produto, quantidade: number } } = {}
        const consumoServicos: { [key: string]: { servico: Servico, quantidade: number } } = {}

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (consumoProdutos[produto.nome]) {
                    consumoProdutos[produto.nome].quantidade++ 
                } else {
                    consumoProdutos[produto.nome] = { produto, quantidade: 1 } 
                }
            }) 

            cliente.getServicosConsumidos.forEach(servico => {
                if (consumoServicos[servico.nome]) {
                    consumoServicos[servico.nome].quantidade++ 
                } else {
                    consumoServicos[servico.nome] = { servico, quantidade: 1 } 
                }
            }) 
        }) 

        const produtosOrdenados = Object.keys(consumoProdutos).map(key => consumoProdutos[key]).sort((a, b) => b.quantidade - a.quantidade) 
        const servicosOrdenados = Object.keys(consumoServicos).map(key => consumoServicos[key]).sort((a, b) => b.quantidade - a.quantidade) 

        console.log(`\nProdutos mais consumidos:`) 
        produtosOrdenados.forEach((item, index) => {
            console.log(`${index + 1}. Produto: ${item.produto.nome} | Quantidade consumida: ${item.quantidade}`) 
        }) 

        console.log(`\nServiços mais consumidos:`) 
        servicosOrdenados.forEach((item, index) => {
            console.log(`${index + 1}. Serviço: ${item.servico.nome} | Quantidade consumida: ${item.quantidade}`) 
        }) 
    }
}
