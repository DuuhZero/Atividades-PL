import React from "react";

const ClienteConsumoProduto = (props) => {
  const { tema } = props;

  const dados = [
    { nome: "Cliente 1", quantidadeConsumida: 10, produto: "Produto 1" },
    { nome: "Cliente 2", quantidadeConsumida: 5, produto: "Produto 1" },
    { nome: "Cliente 3", quantidadeConsumida: 8, produto: "Produto 2" },
    { nome: "Cliente 4", quantidadeConsumida: 10, produto: "Produto 1" },
    { nome: "Cliente 5", quantidadeConsumida: 5, produto: "Produto 1" },
    { nome: "Cliente 6", quantidadeConsumida: 8, produto: "Produto 2" },
    { nome: "Cliente 7", quantidadeConsumida: 10, produto: "Produto 1" },
    { nome: "Cliente 8", quantidadeConsumida: 5, produto: "Produto 1" },
    { nome: "Cliente 9", quantidadeConsumida: 8, produto: "Produto 2" },
    { nome: "Cliente 10", quantidadeConsumida: 8, produto: "Produto 2" },
  ];

  return (
    <div className={`p-6 bg-${tema}-100`}>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Clientes que mais consumiram produtos:
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-lg">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">
                Quantidade de Produto Consumida
              </th>
              <th className="px-4 py-2 text-left">Produto</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                } hover:bg-gray-300 transition-colors`}
              >
                <td className="px-4 py-2 border border-gray-300">
                  {item.nome}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.quantidadeConsumida}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.produto}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClienteConsumoProduto;