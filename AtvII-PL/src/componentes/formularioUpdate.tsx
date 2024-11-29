import { Component } from "react";
type props = {
    tema: string
}

export default class FormularioUpdate extends Component<props> {
    render(){
        let tema= this.props.tema
        return(
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Id do Cliente" aria-label="id" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Novo Nome do cliente" aria-label="Novo Nome do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Novo Email do Cliente" aria-label="Novo Email do Cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor:'#87b62a' }}>Senha do Funcionário</span>
                        <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-verde" type="submit" style={{ background: tema }}>Atualizar Cliente</button>
                    </div>
                </form>
                <form>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Id do Produto" aria-label="id" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Novo nome do Produto" aria-label="Novo Nome do Produto" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Novo Valor do Produto" aria-label="Novo Valor do Produto" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text senha" id="basic-addon1" style={{ backgroundColor:'#87b62a'}}>Senha do Funcionário</span>
                        <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-verde" type="submit" style={{ background: tema }}>Atualizar Produto</button>
                    </div>
                </form>
                <form>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Id do Serviço" aria-label="id" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Novo Nome do Serviço" aria-label="Novo Nome do Serviço" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Novo Valor do Serviço" aria-label="Novo Valor do Serviço" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text senha" id="basic-addon1" style={{ backgroundColor:'#87b62a' }}>Senha do Funcionário</span>
                        <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-verde" type="submit" style={{ background: tema }}>Atualizar Serviço</button>
                    </div>
                </form>

            </div>
        )
    }
}