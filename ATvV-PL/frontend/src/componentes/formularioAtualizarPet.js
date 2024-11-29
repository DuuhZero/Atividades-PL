import React from "react";

const FormularioAtualizarPet = (props) => {
  const { tema } = props;

  return (
    <div className="container-fluid">
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ray"
            aria-label="Nome do Pet"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pit Bull"
            aria-label="Raça"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Macho"
            aria-label="Gênero"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Canino"
            aria-label="Tipo"
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

export default FormularioAtualizarPet;