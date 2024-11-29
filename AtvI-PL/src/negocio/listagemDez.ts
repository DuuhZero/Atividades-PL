import Cliente from "../modelo/cliente"
import Registro from "./registro"

export default class TopClientes extends Registro{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes=clientes
    }
    public registrar(): void {
        
    }
    public listartop10():void {
        const consumoClientes=this.clientes.map(cliente => {
            const totalProdutos=cliente.getProdutosConsumidos.length
            const totalServicos=cliente.getServicosConsumidos.length
            return{
                cliente:cliente,
                totalConsumo: totalProdutos+totalServicos
            }
        })
        consumoClientes.sort((a,b) => b.totalConsumo - a.totalConsumo)
        const top10Clientes=consumoClientes.slice(0,10)

        console.log(`\nTop 10 clientes que mais consumiram produtos ou serviços: `)
        top10Clientes.forEach((item, index) =>{
            console.log(`${index+1}. Nome: ${item.cliente.nome}`)
            console.log(`Total de itens consumidos: ${item.totalConsumo}`)
            console.log(`Produtos consumidos: ${item.cliente.getProdutosConsumidos.length}`)
            console.log(`Serviços consumidos: ${item.cliente.getServicosConsumidos.length}`)
            console.log(`------------------------------------------`)

        })
    }
    
}