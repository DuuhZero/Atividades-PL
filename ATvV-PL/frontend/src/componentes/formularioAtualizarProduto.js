import React from "react";

const FormularioAtualizarProduto = (props) => {
  const { tema } = props;

  return (
    <div className="container-fluid">
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Produto 1"
            aria-label="nomeproduto"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="10.99"
            aria-label="preco"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            style={{ background: tema }}
          >
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioAtualizarProduto;