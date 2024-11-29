import React from "react";

const FormularioAtualizarServico = (props) => {
  const { tema } = props;

  return (
    <div className="container-fluid">
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Serviço 1"
            aria-label="Nome"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="10.99"
            aria-label="Preço"
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

export default FormularioAtualizarServico;