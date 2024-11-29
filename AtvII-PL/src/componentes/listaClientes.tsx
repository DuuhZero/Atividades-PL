import { Component } from "react";

type props = {
    tema: string,
    selecionarView: (novaTela: string, evento: React.MouseEvent) => void
}

export default class ListaCliente extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h1>Lista de Clientes</h1>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
                    <div className="lista">
                        <a href="#" onClick={(evento) => this.props.selecionarView('Deletar', evento)} className="btn-verde2">Deletar</a>
                        <a href="#" onClick={(evento) => this.props.selecionarView('Atualizar', evento)} className="btn-verde2">Atualizar</a>
                    </div>

                    <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                    <div className="lista">
                        <a href="#" onClick={(evento) => this.props.selecionarView('Deletar', evento)} className="btn-verde2">Deletar</a>
                        <a href="#" onClick={(evento) => this.props.selecionarView('Atualizar', evento)} className="btn-verde2">Atualizar</a>
                    </div>

                    <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                    <div className="lista">
                        <a href="#" onClick={(evento) => this.props.selecionarView('Deletar', evento)} className="btn-verde2">Deletar</a>
                        <a href="#" onClick={(evento) => this.props.selecionarView('Atualizar', evento)} className="btn-verde2">Atualizar</a>
                    </div>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 4</a>
                    <div className="lista">
                        <a href="#" onClick={(evento) => this.props.selecionarView('Deletar', evento)} className="btn-verde2">Deletar</a>
                        <a href="#" onClick={(evento) => this.props.selecionarView('Atualizar', evento)} className="btn-verde2">Atualizar</a>
                    </div>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
                    <div className="lista">
                        <a href="#" onClick={(evento) => this.props.selecionarView('Deletar', evento)} className="btn-verde2">Deletar</a>
                        <a href="#" onClick={(evento) => this.props.selecionarView('Atualizar', evento)} className="btn-verde2">Atualizar</a>
                    </div>

                    <a href="#" className="list-group-item list-group-item-action">Cliente 6</a>
                    <div className="lista">
                        <a href="#" onClick={(evento) => this.props.selecionarView('Deletar', evento)} className="btn-verde2">Deletar</a>
                        <a href="#" onClick={(evento) => this.props.selecionarView('Atualizar', evento)} className="btn-verde2">Atualizar</a>
                    </div>
                </div>
            </div>
        )
    }
}