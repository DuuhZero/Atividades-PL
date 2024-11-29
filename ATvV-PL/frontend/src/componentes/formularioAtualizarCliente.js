import React, { useState } from "react";
import Mascara from "./mascara";

const FormularioAtualizarCliente = (props) => {
  const { tema } = props;

  const [telefones, setTelefones] = useState([]);
  const [rg, setRg] = useState([]);
  const [cpf, setCpf] = useState("");

  const adicionarTelefone = () => {
    setTelefones([...telefones, ""]);
  };

  const adicionarRG = () => {
    setRg([...rg, ""]);
  };

  const handleChangeTelefone = (index, value) => {
    if (value.length <= 15) {
      const novosTelefones = [...telefones];
      const telefoneFormatado = Mascara.formatarTelefone(value);
      novosTelefones[index] = telefoneFormatado;
      setTelefones(novosTelefones);
    }
  };

  const handleChangeRg = (index, value) => {
    if (value.length <= 12) {
      const novoRg = [...rg];
      novoRg[index] = Mascara.formatarRG(value);
      setRg(novoRg);
    }
  };

  const handleChangeCPF = (value) => {
    if (value.length <= 11) {
      setCpf(Mascara.formatarCPF(value));
    }
  };

  return (
    <div className="container-fluid">
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cliente 1"
            aria-label="Nome"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cliente 1"
            aria-label="Nome social"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="input-group-text"
            id="basic-addon1"
            style={{ background: tema }}
          >
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="cliente1@gmail.com"
            aria-label="E-mail"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="123.123.123.12"
            aria-label="CPF"
            aria-describedby="basic-addon1"
            value={cpf}
            onChange={(e) => handleChangeCPF(e.target.value)}
          />
        </div>
        {rg.map((rgValue, index) => (
          <div className="input-group mb-3" key={index}>
            <input
              type="text"
              className="form-control"
              placeholder="RG"
              aria-label="RG"
              aria-describedby="basic-addon1"
              value={rgValue}
              onChange={(e) => handleChangeRg(index, e.target.value)}
            />
          </div>
        ))}
        <button
          className="btn btn-outline-secondary"
          type="button"
          style={{ background: tema }}
          onClick={adicionarRG}
        >
          Adicionar RG
        </button>
        {telefones.map((telefone, index) => (
          <div className="input-group mb-3" key={index}>
            <input
              type="text"
              className="form-control"
              placeholder="Telefone"
              aria-label="Telefone"
              aria-describedby="basic-addon1"
              value={telefone}
              onChange={(e) => handleChangeTelefone(index, e.target.value)}
            />
          </div>
        ))}
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            style={{ background: tema }}
            onClick={adicionarTelefone}
          >
            Adicionar Telefone
          </button>
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

export default FormularioAtualizarCliente;