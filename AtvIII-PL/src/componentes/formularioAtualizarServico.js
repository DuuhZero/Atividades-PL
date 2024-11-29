import React, { useState } from 'react';

export default function FormularioAtualizarservico(props) {
  const { tema } = props;
  const [servico, setservico] = useState({
    nome: '',
    valor: '',
    descricao: ''
  });

  const handleChange = (e) => {
    setservico({
      ...servico,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Servico atualizado:", servico);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Atualizar Serviço</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" value={servico.nome} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">Valor:</label>
            <input type="text" name="cpf" value={servico.valor} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Descrição:</label>
            <input type="email" name="email" value={servico.descricao} onChange={handleChange} className="form-control" />
          </div>
          <button type="submit" className="btn btn-verde2">Atualizar servico</button>
        </form>
      </div>
    </div>
  );
}