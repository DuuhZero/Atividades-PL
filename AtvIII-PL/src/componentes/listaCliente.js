import React from 'react';

export default function ListaCliente({ tema, selecionarView }) {
  const clientes = [
    { id: 1, nome: 'Cliente 1', cpf: '123.456.789-00' },
    { id: 2, nome: 'Cliente 2', cpf: '987.654.321-00' },
  ];

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.cpf}</td>
              <td>
              <button onClick={(e) => { selecionarView('Atualizar Cliente', e) }} className="btn-verde2">Editar</button>
              <button className="btn-verde2">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
