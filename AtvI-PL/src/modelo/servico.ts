export default class Servico {
    private static idCounter = 1
    public id:number
    public nome: string
    public valor: number
    constructor(nome:string, valor:number){
        this.id= Servico.idCounter++
        this.nome= nome
        this.valor=valor
    }
}