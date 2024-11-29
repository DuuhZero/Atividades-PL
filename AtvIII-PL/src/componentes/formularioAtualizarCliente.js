import React, { useState } from 'react';

export default function FormularioAtualizarCliente(props) {
  const { tema } = props;
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    email: '',
    nomeSocial: '',
  });

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cliente atualizado:", cliente);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Atualizar Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" value={cliente.nome} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" name="cpf" value={cliente.cpf} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={cliente.email} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="nomeSocial">Nome Social:</label>
            <input type="text" name="nomeSocial" value={cliente.nomeSocial} onChange={handleChange} className="form-control" />
          </div>
          <button type="submit" className="btn btn-verde2">Atualizar Cliente</button>
        </form>
      </div>
    </div>
  );
}