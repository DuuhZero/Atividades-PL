import React from "react";

const ProdutosMaisConsumidos = (props) => {
  const { tema } = props;

  const dados = [
    { nome: "Produto 1", quantidadeConsumida: 10 },
    { nome: "Produto 2", quantidadeConsumida: 5 },
    { nome: "Produto 3", quantidadeConsumida: 8 },
    { nome: "Produto 4", quantidadeConsumida: 10 },
    { nome: "Produto 5", quantidadeConsumida: 5 },
    { nome: "Produto 6", quantidadeConsumida: 8 },
    { nome: "Produto 7", quantidadeConsumida: 10 },
    { nome: "Produto 8", quantidadeConsumida: 5 },
    { nome: "Produto 9", quantidadeConsumida: 8 },
    { nome: "Produto 10", quantidadeConsumida: 8 },
  ];

  return (
    <div>
      <h2>Produtos mais consumidos:</h2>
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

export default ProdutosMaisConsumidos;