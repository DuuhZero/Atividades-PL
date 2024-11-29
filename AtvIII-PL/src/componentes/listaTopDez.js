import React, { useState, useEffect } from 'react';
import '../index.css';

export default function Top10() {
  const [clientes, setClientes] = useState([]);

  // Simulando os dados dos clientes com base na quantidade total consumida
  useEffect(() => {
    const dadosClientes = [
      {
        nome: 'Cliente 1',
        quantidadeConsumida: 35, 
      },
      {
        nome: 'Cliente 2',
        quantidadeConsumida: 30,
      },
      {
        nome: 'Cliente 3',
        quantidadeConsumida: 28,
      },
      {
        nome: 'Cliente 4',
        quantidadeConsumida: 25,
      },
      {
        nome: 'Cliente 5',
        quantidadeConsumida: 22,
      },
      {
        nome: 'Cliente 6',
        quantidadeConsumida: 20,
      },
      {
        nome: 'Cliente 7',
        quantidadeConsumida: 18,
      },
      {
        nome: 'Cliente 8',
        quantidadeConsumida: 16,
      },
      {
        nome: 'Cliente 9',
        quantidadeConsumida: 14,
      },
      {
        nome: 'Cliente 10',
        quantidadeConsumida: 12,
      }
    ];

    const clientesOrdenados = dadosClientes
      .sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida);
    setClientes(clientesOrdenados);
  }, []);

  return (
    <div className="container-fluid">
      <h1>Top 10 Clientes que Mais Consumiram Produtos ou Serviços</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome do Cliente</th>
            <th>Quantidade Total Consumida</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nome}</td>
              <td>{cliente.quantidadeConsumida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
