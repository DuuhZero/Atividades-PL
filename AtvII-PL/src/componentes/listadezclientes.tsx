import { Component, ReactNode } from "react"

type props = {
    tema: string,
}
export default class ListaDez extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h1>Top 10 Clientes que mais consumiram produtos ou serviços</h1>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 6</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 7</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 8</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 9</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 10</a>
                </div>
            </div>
        )

    }
}