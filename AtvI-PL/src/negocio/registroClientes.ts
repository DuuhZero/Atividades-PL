import Cliente from "../modelo/cliente";
import Registro from "./registro";

export default class RegistroClientes extends Registro{
    private clientes:Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes=clientes
    }
    public registrar():void{
        console.log(`\nRegistro de consumo do cliente: `)
        this.clientes.forEach(cliente => {
            console.log(`ID:` + cliente.id)
            console.log(`Nome: ` + cliente.nome);
            cliente.getProdutosConsumidos.forEach(produto =>{
                console.log(`Consumo total de Produtos: ${produto.nome}, valor: ${produto.valor}`)
            })
            cliente.getServicosConsumidos.forEach(servico=>{
                console.log(`Consumo total de Serviços: ${servico.nome}, valor: ${servico.valor}`)
            })
            console.log(`------------------------------------------------`)
        });
    }
}