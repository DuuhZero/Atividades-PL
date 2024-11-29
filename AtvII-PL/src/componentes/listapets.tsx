import { Component, ReactNode } from "react"

type props = {
    tema: string,
    selecionarView: (novaTela: string, evento: React.MouseEvent) => void

}
export default class ListaPets extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                Lista de Pets e Quais Serviços ou Produtos usam
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Pet1</a>
                    <div className="lista">
                        <a href="#" onClick={(evento) => this.props.selecionarView('Produtos', evento)} className="btn-verde2">Produtos</a>
                        <a href="#" onClick={(evento) => this.props.selecionarView('Serviços', evento)} className="btn-verde2">Serviços</a>
                    </div>
                </div>
            </div>
        )

    }
}