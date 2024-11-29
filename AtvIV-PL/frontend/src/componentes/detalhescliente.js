import React, { useEffect, useState } from 'react';

const DetalhesCliente = ({ tema, id }) => {
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCliente = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:32831/cliente/${id}`);
          const data = await response.json();
          setCliente(data);
        } catch (error) {
          console.error('Erro ao buscar os dados do cliente:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCliente();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!cliente) {
    return <div>Cliente não encontrado.</div>;
  }

  return (
    <div>
      <h1>{cliente.nome}</h1>
      <p>Nome Social: {cliente.nomeSocial}</p>
      <p>Email: {cliente.email || 'Não disponível'}</p>
      <h2>Endereço:</h2>
      <p>{cliente.endereco.rua}, {cliente.endereco.numero}</p>
      <p>{cliente.endereco.bairro}, {cliente.endereco.cidade}, {cliente.endereco.estado}</p>
      <p>Código Postal: {cliente.endereco.codigoPostal}</p>
      <p>Informações Adicionais: {cliente.endereco.informacoesAdicionais}</p>
      <h2>Telefones:</h2>
      {cliente.telefones && cliente.telefones.length > 0 ? (
        cliente.telefones.map(telefone => (
          <p key={telefone.id}>{telefone.ddd} {telefone.numero}</p>
        ))
      ) : (
        <p>Nenhum telefone disponível.</p>
      )}
    </div>
  );
};

export default DetalhesCliente;