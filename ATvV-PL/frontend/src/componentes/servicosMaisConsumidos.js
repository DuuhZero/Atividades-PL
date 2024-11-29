import React from "react";

const ServicosMaisConsumidos = (props) => {
  const { tema } = props;

  const dados = [
    { nome: "Serviço 1", quantidadeConsumida: 10 },
    { nome: "Serviço 2", quantidadeConsumida: 5 },
    { nome: "Serviço 3", quantidadeConsumida: 8 },
    { nome: "Serviço 4", quantidadeConsumida: 10 },
    { nome: "Serviço 5", quantidadeConsumida: 5 },
    { nome: "Serviço 6", quantidadeConsumida: 8 },
    { nome: "Serviço 7", quantidadeConsumida: 10 },
    { nome: "Serviço 8", quantidadeConsumida: 5 },
    { nome: "Serviço 9", quantidadeConsumida: 8 },
    { nome: "Serviço 10", quantidadeConsumida: 8 },
  ];

  return (
    <div>
      <h2>Serviços mais consumidos:</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Quantidade Consumida</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.quantidadeConsumida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicosMaisConsumidos;