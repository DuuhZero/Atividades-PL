import React, { useState } from 'react';

const FormularioCadastro = ({ tema, adicionarCliente, selecionarView }) => {
  const [cliente, setCliente] = useState({
    nome: '',
    nomeSocial: '',
    cep: '',
    email: '',
    endereco: {
      estado: '',
      cidade: '',
      bairro: '',
      rua: '',
      numero: '',
      codigoPostal: '',
      informacoesAdicionais: ''
    },
    telefones: [
      {
        numero: '',
        ddd: ''
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('endereco.')) {
      const enderecoField = name.split('.')[1]; 
      setCliente(prev => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          [enderecoField]: value
        }
      }));
    } else {
      setCliente(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    try {
      const response = await fetch('http://localhost:32831/cliente/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const result = await response.json();
      console.log("Cliente cadastrado:", result);

      adicionarCliente(result); // Adiciona o cliente à lista de clientes

      // Redirecionar para a tela de Clientes após o cadastro
      selecionarView('Clientes', e);

      // Resetar o formulário
      setCliente({
        nome: '',
        nomeSocial: '',
        cep: '',
        email: '',
        endereco: {
          estado: '',
          cidade: '',
          bairro: '',
          rua: '',
          numero: '',
          codigoPostal: '',
          informacoesAdicionais: ''
        },
        telefones: [
          {
            numero: '',
            ddd: ''
          }
        ]
      });
      
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: tema }}>
      <div className="card mb-4">
        <div className="card-header">
          <h2>Cadastrar Cliente</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}> {/* Adiciona o onSubmit aqui */}
            {['nome', 'nomeSocial', 'cep', 'email'].map(field => (
              <div className="mb-3" key={field}>
                <label htmlFor={field} className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input 
                  type={field === 'email' ? 'email' : 'text'}
                  className="form-control"
                  id={field}
                  name={field}
                  value={cliente[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            {/* Campos de Endereço */}
            {['estado', 'cidade', 'bairro', 'rua', 'numero', 'codigoPostal'].map(field => (
              <div className="mb-3" key={field}>
                <label htmlFor={`endereco.${field}`} className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input 
                  type="text"
                  className="form-control"
                  id={`endereco.${field}`}
                  name={`endereco.${field}`}
                  value={cliente.endereco[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            {/* Campo de Informações Adicionais */}
            <div className="mb-3">
              <label htmlFor="informacoesAdicionais" className="form-label">Informações Adicionais:</label>
              <textarea
                className="form-control"
                id="informacoesAdicionais"
                name="informacoesAdicionais" 
                value={cliente.endereco.informacoesAdicionais} 
                onChange={(e) => {
                  const { value } = e.target;
                  setCliente(prev => ({
                    ...prev,
                    endereco: { ...prev.endereco, informacoesAdicionais: value }
                  }));
                }}
              />
            </div>
            {/* Campo para Telefone */}
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">Telefone:</label>
              <input 
                type="text"
                className="form-control"
                id="telefone"
                name="telefone"
                value={cliente.telefones[0].numero}
                onChange={(e) => {
                  const { value } = e.target;
                  setCliente(prev => ({
                    ...prev,
                    telefones: [{ ...prev.telefones[0], numero: value }]
                  }));
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ddd" className="form-label">DDD:</label>
              <input 
                type="text"
                className="form-control"
                id="ddd"
                name="ddd"
                value={cliente.telefones[0].ddd}
                onChange={(e) => {
                  const { value } = e.target;
                  setCliente(prev => ({
                    ...prev,
                    telefones: [{ ...prev.telefones[0], ddd: value }]
                  }));
                }}
                required
              />
            </div>
            <button type="submit" className="btn btn-verde2" onClick={(e) => selecionarView('Clientes', e)}>Cadastrar Cliente</button> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioCadastro;