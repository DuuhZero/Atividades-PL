import React, { useState } from 'react';

export default function FormularioAtualizarProduto(props) {
  const { tema } = props;
  const [produto, setproduto] = useState({
    nome: '',
    valor: '',
    descricao: ''
  });

  const handleChange = (e) => {
    setproduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produto atualizado:", produto);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Atualizar Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" value={produto.nome} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">Valor:</label>
            <input type="text" name="cpf" value={produto.valor} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Descrição:</label>
            <input type="email" name="email" value={produto.descricao} onChange={handleChange} className="form-control" />
          </div>
          <button type="submit" className="btn btn-verde2">Atualizar Produto</button>
        </form>
      </div>
    </div>
  );
}