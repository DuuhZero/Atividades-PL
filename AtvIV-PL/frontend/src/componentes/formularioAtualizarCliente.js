import React, { useState, useEffect } from 'react';

export default function FormularioAtualizarCliente({ clienteData }) {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    nomeSocial: '',
    endereco: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      codigoPostal: '',
      informacoesAdicionais: '',
    },
  });

  const [clienteInicial, setClienteInicial] = useState(cliente);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alteracoes, setAlteracoes] = useState({});

  // Preencher os dados do cliente inicial quando recebido
  useEffect(() => {
    if (clienteData) {
      setCliente(clienteData);
      setClienteInicial(clienteData);
    }
  }, [clienteData]);

  // Detectar alterações nos campos do formulário
  useEffect(() => {
    const isChanged = JSON.stringify(cliente) !== JSON.stringify(clienteInicial);
    if (isChanged) {
      const updatedFields = {};
      for (const key in cliente) {
        if (typeof cliente[key] === 'object') {
          for (const subKey in cliente[key]) {
            if (cliente[key][subKey] !== clienteInicial[key][subKey]) {
              updatedFields[key] = true;
              break;
            }
          }
        } else if (cliente[key] !== clienteInicial[key]) {
          updatedFields[key] = true;
        }
      }
      setAlteracoes(updatedFields);
    } else {
      setAlteracoes({});
    }
  }, [cliente, clienteInicial]);

  // Submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isChanged = JSON.stringify(cliente) !== JSON.stringify(clienteInicial);
    if (!isChanged) {
      alert('Nenhuma alteração foi feita.');
      return;
    }

    setIsSubmitting(true);
    try {
      const url = `http://localhost:32831/cliente/atualizar/`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',  // Não é necessário aqui, mas pode tentar em alguns casos
        },
        body: JSON.stringify(cliente),
        credentials: 'same-origin',  // Caso precise de autenticação com cookies
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Erro ao atualizar cliente:', errorResponse);
        alert(`Erro: ${errorResponse.message || response.statusText}`);
      } else {
        console.log('Cliente atualizado com sucesso:', cliente);
        alert('Cliente atualizado com sucesso!');
        setClienteInicial(cliente);
        setAlteracoes({});
      }
    } catch (error) {
      console.error('Erro de rede ou de conexão:', error);
      alert(`Erro ao atualizar o cliente: ${error.message || error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Renderização do formulário
  return (
    <div className="card">
      <div className="card-body">
        <h2>Atualizar Cliente</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(cliente).map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
              {typeof cliente[key] === 'object' ? (
                Object.keys(cliente[key]).map((subKey) => (
                  <div key={subKey}>
                    <label htmlFor={subKey}>
                      {subKey.charAt(0).toUpperCase() + subKey.slice(1)}:
                    </label>
                    <input
                      type="text"
                      name={subKey}
                      value={cliente[key][subKey]}
                      onChange={(e) =>
                        setCliente({
                          ...cliente,
                          [key]: { ...cliente[key], [subKey]: e.target.value },
                        })
                      }
                      className={`form-control ${alteracoes[key] ? 'border-danger' : ''}`}
                    />
                  </div>
                ))
              ) : (
                <input
                  type="text"
                  name={key}
                  value={cliente[key]}
                  onChange={(e) => setCliente({ ...cliente, [key]: e.target.value })}
                  className={`form-control ${alteracoes[key] ? 'border-danger' : ''}`}
                />
              )}
            </div>
          ))}
          <button type="submit" className="btn-verde2" disabled={isSubmitting}>
            {isSubmitting ? 'Atualizando...' : 'Atualizar Cliente'}
          </button>
        </form>
      </div>
    </div>
  );
}