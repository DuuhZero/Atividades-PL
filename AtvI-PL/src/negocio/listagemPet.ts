import Cliente from "../modelo/cliente";

export default class ListagemConsumidosPets{
    private clientes:Array<Cliente>
    constructor(clientes:Array<Cliente>){   
        this.clientes=clientes
    }
    public ListarConsumoPet():void{
        const consumoRaca: {[key:string]: {produtos: {[key:string]:number}, servicos: {[key:string]:number}}}={}
        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet =>{
                const tipoRaca= `${pet.getTipo}-${pet.getRaca}`

                if(!consumoRaca[tipoRaca]){
                    consumoRaca[tipoRaca]={
                        produtos: {},
                        servicos: {},
                    }
                }
                cliente.getProdutosConsumidos.forEach(produto =>{
                    consumoRaca[tipoRaca].produtos[produto.nome]=(consumoRaca[tipoRaca].produtos[produto.nome] || 0)+1
                })
                cliente.getServicosConsumidos.forEach(servico =>{
                    consumoRaca[tipoRaca].servicos[servico.nome]=(consumoRaca[tipoRaca].servicos[servico.nome] || 0)+1  
                })
            })
        })
        console.log(`\nConsumo de produtos e serviços por tipo e raça de pets:`)
        for (const[key,consumo] of Object.entries(consumoRaca)){
            console.log(`\nTipo e Raça: ${key}`)
            console.log(`\nProdutos consumidos:`)
            for(const[produto,quantidade] of Object.entries(consumo.produtos)){
                console.log(`\n${produto}: ${quantidade}`)
            }
            console.log(`\nServiços consumidos:`)
            for(const[servico,quantidade] of Object.entries(consumo.servicos)){
                console.log(`\n${servico}: ${quantidade}`)
            }
        }
    }
}