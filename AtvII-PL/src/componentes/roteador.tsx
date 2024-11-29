import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastro";
import FormularioDeletarCliente from "./formularioDeletar";
import FormularioCadastro from "./formularioCadastro";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import UpdateCliente from "./formularioUpdate";
import FormularioUpdateCliente from "./formularioUpdate";
import FormularioUpdate from "./formularioUpdate";
import FormularioDeletar from "./formularioDeletar";
import ListaDez from "./listadezclientes";
import ListaCinco from "./listacincoclientes";
import ListaPets from "./listapets";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: React.MouseEvent) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#87b62a" botoes={['Clientes', 'Produtos', 'Serviços','Pets', 'Top 10','Top 5', 'Cadastros', 'Deletar', 'Atualizar']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" selecionarView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastro tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Deletar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioDeletar tema='#e3f2fd' />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd" selecionarView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd" selecionarView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPets tema="#e3f2fd" selecionarView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === "Top 10") {
            return (
                <>
                    {barraNavegacao}
                    <ListaDez tema="#e3f2fd"/>
                </>
            )
        } else if (this.state.tela === "Top 5"){
            return (
                <>
                    {barraNavegacao}
                    <ListaCinco tema="#e3f2fd"/>
                </>
            )
        }
        else if (this.state.tela === 'Atualizar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioUpdate tema="#e3f2fd" />
                </>
            )
        }
    }
}