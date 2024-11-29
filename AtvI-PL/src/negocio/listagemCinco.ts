import Cliente from "../modelo/cliente"
import Registro from "./registro"

export default class CincoClientes extends Registro{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes=clientes
    }
    public registrar(): void {
        
    }
    public listartop5():void {
        const consumoClientes=this.clientes.map(cliente => {
            const totalProdutos=cliente.getProdutosConsumidos.reduce((total,produto)=>total+parseFloat(produto.valor.toString()),0)
            const totalServicos=cliente.getServicosConsumidos.reduce((total,servico)=>total+parseFloat(servico.valor.toString()),0)
            return{
                cliente:cliente,
                totalValor: totalProdutos+totalServicos
            }
        })
        consumoClientes.sort((a,b) => b.totalValor - a.totalValor)
        const top5Clientes=consumoClientes.slice(0,5)

        console.log(`\nTop 5 clientes que mais consumiram em valor: `)
        top5Clientes.forEach((item, index) =>{
            console.log(`${index+1}. Nome: ${item.cliente.nome}`)
            console.log(`Total de valor consumido: R$${item.totalValor.toFixed(2)}`)
            console.log(`------------------------------------------`)

        })
    }
    
}