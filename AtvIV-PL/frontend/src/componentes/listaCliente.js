import React, { useState, useEffect } from 'react';

export default function ListaCliente({ tema, selecionarView }) {
  const [clientes, setClientes] = useState([]);

  const buscarClientes = async () => {
    try {
      const response = await fetch('http://localhost:32831/cliente/clientes');
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  // Função para excluir cliente
  const excluirCliente = async (cliente) => {
    try {
      const response = await fetch('http://localhost:32831/cliente/excluir', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', // Definindo o tipo de conteúdo como JSON
        },
        body: JSON.stringify(cliente), // Enviando o cliente no corpo da requisição
      });

      if (response.ok) {
        setClientes((prevClientes) => prevClientes.filter(c => c.id !== cliente.id));
      } else {
        const errorData = await response.json();
        console.error('Erro ao excluir cliente:', errorData);
      }
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  };

  // Chamada inicial para buscar clientes ao carregar o componente
  useEffect(() => {
    buscarClientes();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Clientes</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome Social</th>
            <th>Email</th>
            <th>CEP</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.nomeSocial}</td>
              <td>{cliente.email || 'N/A'}</td>
              <td>{cliente.endereco ? cliente.endereco.codigoPostal : 'N/A'}</td>
              <td>
                <button className="btn-verde2" onClick={(e) => selecionarView('Ver Detalhes', e, cliente.id)}>Ver Detalhes</button>
                <button className="btn-verde2" onClick={(e) => selecionarView('Atualizar Cliente', e, cliente)}>Editar</button>
                <button className="btn-verde2" onClick={() => excluirCliente(cliente)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}