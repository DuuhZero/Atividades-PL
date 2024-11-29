import { Component, ReactNode } from "react"

type props = {
    tema: string,
}
export default class ListaCinco extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h1>Top 5 Clientes que Mais Consumiram em Valor</h1>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
                </div>
            </div>
        )

    }
}