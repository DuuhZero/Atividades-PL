import React, { useState } from 'react';

const FormularioCadastro = ({ tema }) => {
  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [cpf, setCpf] = useState('');
  const [pet, setPet] = useState('');
  const [email, setEmail] = useState('');

  const [nomeProduto, setNomeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');

  const [nomeServico, setNomeServico] = useState('');
  const [valorServico, setValorServico] = useState('');
  const [descricaoServico, setDescricaoServico] = useState('');

  const handleSubmitCliente = (e) => {
    e.preventDefault();
    console.log("Cliente cadastrado:", { nome, nomeSocial, cpf, pet, email });
  };

  const handleSubmitProduto = (e) => {
    e.preventDefault();
    console.log("Produto cadastrado:", { nomeProduto, valorProduto, descricaoProduto });
  };

  const handleSubmitServico = (e) => {
    e.preventDefault();
    console.log("Serviço cadastrado:", { nomeServico, valorServico, descricaoServico });
  };

  return (
    <div className="container" style={{ backgroundColor: tema }}>
      <div className="card mb-4">
        <div className="card-header">
          <h2>Cadastrar Cliente</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmitCliente}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input 
                type="text"
                className="form-control"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nomeSocial" className="form-label">Nome Social:</label>
              <input 
                type="text"
                className="form-control"
                id="nomeSocial"
                value={nomeSocial}
                onChange={(e) => setNomeSocial(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">CPF:</label>
              <input 
                type="text"
                className="form-control"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pet" className="form-label">Pet:</label>
              <input 
                type="text"
                className="form-control"
                id="pet"
                value={pet}
                onChange={(e) => setPet(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input 
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-verde2">Cadastrar Cliente</button>
          </form>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h2>Cadastrar Produto</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmitProduto}>
            <div className="mb-3">
              <label htmlFor="nomeProduto" className="form-label">Nome:</label>
              <input 
                type="text"
                className="form-control"
                id="nomeProduto"
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valorProduto" className="form-label">Valor:</label>
              <input 
                type="number"
                className="form-control"
                id="valorProduto"
                value={valorProduto}
                onChange={(e) => setValorProduto(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descricaoProduto" className="form-label">Descrição:</label>
              <textarea 
                className="form-control"
                id="descricaoProduto"
                value={descricaoProduto}
                onChange={(e) => setDescricaoProduto(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-verde2">Cadastrar Produto</button>
          </form>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h2>Cadastrar Serviço</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmitServico}>
            <div className="mb-3">
              <label htmlFor="nomeServico" className="form-label">Nome:</label>
              <input 
                type="text"
                className="form-control"
                id="nomeServico"
                value={nomeServico}
                onChange={(e) => setNomeServico(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valorServico" className="form-label">Valor:</label>
              <input 
                type="number"
                className="form-control"
                id="valorServico"
                value={valorServico}
                onChange={(e) => setValorServico(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descricaoServico" className="form-label">Descrição:</label>
              <textarea 
                className="form-control"
                id="descricaoServico"
                value={descricaoServico}
                onChange={(e) => setDescricaoServico(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-verde2">Cadastrar Serviço</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioCadastro;