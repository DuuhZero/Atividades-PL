import React, { useState, useEffect } from 'react';
import '../index.css';

export default function Top5() {
  const [clientes, setClientes] = useState([]);

  // Simulando os dados dos clientes com base no valor total consumido
  useEffect(() => {
    const dadosClientes = [
      {
        nome: 'Cliente 1',
        valorTotalConsumido: 1500.50,
      },
      {
        nome: 'Cliente 2',
        valorTotalConsumido: 1400.75,
      },
      {
        nome: 'Cliente 3',
        valorTotalConsumido: 1300.00,
      },
      {
        nome: 'Cliente 4',
        valorTotalConsumido: 1200.25,
      },
      {
        nome: 'Cliente 5',
        valorTotalConsumido: 1100.80,
      },
      {
        nome: 'Cliente 6',
        valorTotalConsumido: 900.00,
      }
    ];

    const clientesOrdenados = dadosClientes
      .sort((a, b) => b.valorTotalConsumido - a.valorTotalConsumido)
      .slice(0, 5);
    setClientes(clientesOrdenados);
  }, []);

  return (
    <div className="container-fluid">
      <h1>Top 5 Clientes Que Mais Consumiram em Valor</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome do Cliente</th>
            <th>Valor Total Consumido</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nome}</td>
              <td>R$ {cliente.valorTotalConsumido.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}