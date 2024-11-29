import React from "react";

export default function PaginaInicial(props) {
  const { tema, seletorView } = props;

  return (
    <div className="container">
      <h1 className="text-center">Menu Seleção</h1>
      <table className="d-flex justify-content-center flex-wrap gap-2">
        {/* Clientes */}
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Clientes", e)}
        >
          Lista de Clientes
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Cadastro Cliente", e)}
        >
          Cadastrar Cliente
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Clientes que mais consumiram produtos", e)}
        >
          Clientes que mais consumiram produtos
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Clientes que mais consumiram serviços", e)}
        >
          Clientes que mais consumiram serviços
        </button>

        {/* Produtos */}
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Produtos", e)}
        >
          Lista de Produtos
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Cadastro Produto", e)}
        >
          Cadastrar Produto
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Produtos mais consumidos", e)}
        >
          Produtos mais consumidos
        </button>

        {/* Serviços */}
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Serviços", e)}
        >
          Lista de Serviços
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Cadastro Serviço", e)}
        >
          Cadastrar Serviço
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Serviços mais consumidos", e)}
        >
          Serviços mais contratados
        </button>

        {/* Pets */}
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Pets", e)}
        >
          Lista de Pets
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Cadastro Pet", e)}
        >
          Cadastrar Pet
        </button>
        <button
          className="btn btn-outline-secondary"
          style={{ background: tema, fontSize: "1.2rem", color: "black" }}
          onClick={(e) => seletorView("Pets mais atendidos", e)}
        >
          Pets mais atendidos
        </button>
      </table>
    </div>
  );
}
