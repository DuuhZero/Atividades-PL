import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class BarraNavegacao extends Component {
  constructor(props) {
    super(props);
    this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
  }
  gerarSubItens(item) {
    if (item === "Cadastros") {
      return (
          <>
            <li>
              <a
                className="dropdown-item "
                href="#"
                onClick={(e) => this.props.seletorView("Cadastro Cliente", e)}
              >
                Novo Cliente
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-yellow-500 hover:bg-yellow-100"
                href="#"
                onClick={(e) => this.props.seletorView("Cadastro Serviço", e)}
              >
                Novo Serviço
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-yellow-500 hover:bg-yellow-100"
                href="#"
                onClick={(e) => this.props.seletorView("Cadastro Produto", e)}
              >
                Novo Produto
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-yellow-500 hover:bg-yellow-100"
                href="#"
                onClick={(e) => this.props.seletorView("Cadastro Pet", e)}
              >
                Novo Pet
              </a>
            </li>

          </>
      );
    } else if (item === "Listagens") {
      return (
        <>
          <li>
            <a
              className="dropdown-item text-yellow-500 hover:bg-yellow-100"
              href="#"
              onClick={(e) =>
                this.props.seletorView(
                  "Clientes que mais consumiram produtos",
                  e
                )
              }
            >
              Clientes Top Produtos
            </a>
          </li>
          <li>
            <a
              className="dropdown-item text-yellow-500 hover:bg-yellow-100"
              href="#"
              onClick={(e) =>
                this.props.seletorView(
                  "Clientes que mais consumiram serviços",
                  e
                )
              }
            >
              Clientes Top Serviços
            </a>
          </li>
          <li>
            <a
              className="dropdown-item text-yellow-500 hover:bg-yellow-100"
              href="#"
              onClick={(e) =>
                this.props.seletorView("Produtos mais consumidos", e)
              }
            >
              Produtos Populares
            </a>
          </li>
          <li>
            <a
              className="dropdown-item text-yellow-500 hover:bg-yellow-100"
              href="#"
              onClick={(e) =>
                this.props.seletorView("Serviços mais consumidos", e)
              }
            >
              Serviços Populares
            </a>
          </li>
          <li>
            <a
              className="dropdown-item text-yellow-500 hover:bg-yellow-100"
              href="#"
              onClick={(e) =>
                this.props.seletorView(
                  "Produtos mais consumidos por tipo e raça de pets",
                  e
                )
              }
            >
              Produtos por Raça/Tipo
            </a>
          </li>
          <li>
            <a
              className="dropdown-item text-yellow-500 hover:bg-yellow-100"
              href="#"
              onClick={(e) =>
                this.props.seletorView(
                  "Serviços mais consumidos por tipo e raça de pets",
                  e
                )
              }
            >
              Serviços por Raça/Tipo
            </a>
          </li>
          <li>
            <a
              className="dropdown-item text-yellow-500 hover:bg-yellow-100"
              href="#"
              onClick={(e) =>
                this.props.seletorView("Top 5 clientes que mais gastaram", e)
              }
            >
              Clientes Mais Gastaram
            </a>
          </li>
        </>
      );
    } else {
      return null;
    }
  }

  gerarListaBotoes() {
    if (this.props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = this.props.botoes.map((valor) => {
        if (valor === "Cadastros" || valor === "Listagens") {
          return (
            <li key={valor} className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-yellow-500 hover:text-yellow-400"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {valor}
              </a>
              <ul className="dropdown-menu bg-white border-yellow-500">
                {this.gerarSubItens(valor)}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={valor} className="nav-item">
              <a
                className="nav-link text-yellow-500 hover:text-yellow-400"
                href="#"
                onClick={(e) => this.props.seletorView(valor, e)}
              >
                {valor}
              </a>
            </li>
          );
        }
      });

      return lista;
    }
  }

  render() {
    const { tema } = this.props;
    return (
      <>
        <nav
          className="navbar navbar-expand-lg shadow-lg"
          style={{ backgroundColor: tema, marginBottom: 10 }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand text-yellow-500 font-bold text-lg hover:text-yellow-400"
              href="#"
              onClick={(e) => this.props.seletorView("Home", e)}
            >
              PetLovers
            </a>
            <button
              className="navbar-toggler border-0 text-yellow-500"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">{this.gerarListaBotoes()}</ul>
            </div>
          </div>
        </nav>
      </>
    );

  }
}
export default BarraNavegacao;