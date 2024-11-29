import React from 'react';
import '../index.css';

class ListaPets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [
        {
          nome: 'Pet1',
          cliente: 'Cliente1',
          produtosConsumidos: ['Produto A', 'Produto B'],
          servicosConsumidos: ['Serviço X', 'Serviço Y'],
        },
        {
          nome: 'Pet2',
          cliente: 'Cliente2',
          produtosConsumidos: ['Produto C'],
          servicosConsumidos: ['Serviço Z'],
        },
        {
          nome: 'Pet3',
          cliente: 'Cliente3',
          produtosConsumidos: ['Produto A', 'Produto D'],
          servicosConsumidos: ['Serviço X', 'Serviço W'],
        }
      ]
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Lista de Pets</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nome do Pet</th>
              <th>Cliente Associado</th>
              <th>Produtos Consumidos</th>
              <th>Serviços Consumidos</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pets.map((pet, index) => (
              <tr key={index}>
                <td>{pet.nome}</td>
                <td>{pet.cliente}</td>
                <td>
                  {pet.produtosConsumidos.length > 0 ? (
                    <ul>
                      {pet.produtosConsumidos.map((produto, i) => (
                        <li key={i}>{produto}</li>
                      ))}
                    </ul>
                  ) : (
                    'Nenhum produto consumido'
                  )}
                </td>
                <td>
                  {pet.servicosConsumidos.length > 0 ? (
                    <ul>
                      {pet.servicosConsumidos.map((servico, i) => (
                        <li key={i}>{servico}</li>
                      ))}
                    </ul>
                  ) : (
                    'Nenhum serviço consumido'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListaPets;