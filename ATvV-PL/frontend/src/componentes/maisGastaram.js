import React from "react";

const MaisGastaram = (props) => {
  const { tema } = props;

  const dados = [
    { nome: "Produto 1", valorGasto: 10 },
    { nome: "Produto 2", valorGasto: 5 },
    { nome: "Produto 3", valorGasto: 8 },
    { nome: "Produto 4", valorGasto: 10 },
    { nome: "Produto 5", valorGasto: 5 },
  ];

  return (
    <div>
      <h2>Produtos que mais foram consumidos:</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Valor Gasto</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.valorGasto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaisGastaram;