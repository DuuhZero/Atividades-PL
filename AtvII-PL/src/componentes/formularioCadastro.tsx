import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastro extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <><div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Data Emissão CPF" aria-label="Data Emissão CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-verde" type="submit" style={{ background: tema }}>Cadastrar Cliente</button>
                    </div>
                </form>
            </div>
            <br></br>
            <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome-produto" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" placeholder="Valor do produto" aria-label="valor" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-verde" type="submit" style={{ background: tema }}>Cadastrar Produto</button>
                        </div>
                    </form>
            </div>
                <br></br>
            <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome do serviço" aria-label="Nome-serviço" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" placeholder="Valor do produto" aria-label="valor" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-verde" type="submit" style={{ background: tema }}>Cadastrar Serviços</button>
                        </div>
                    </form>
            </div></>
        )
    }
}