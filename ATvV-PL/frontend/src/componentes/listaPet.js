/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ListaPet = ({ tema, abrirAtualizarPet }) => {
  return (
    <div className="container-fluid">
      <table className="table table-bordered tabela-curvada">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Responsável</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pet 1</td>
            <td>Cliente 1</td>
            <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarPet}
              >                  
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </td>
          </tr>
          <tr>
            <td>Pet 2</td>
            <td>Cliente 2</td>
            <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarPet}
              >                  
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </td>
          </tr>
          <tr>
            <td>Pet 3</td>
            <td>Cliente 3</td>
            <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarPet}
              >                  
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </td>
          </tr>
          <tr>
            <td>Pet 4</td>
            <td>Cliente 4</td>
            <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarPet}
              >                  
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </td>
          </tr>
          <tr>
            <td>Pet 5</td>
            <td>Cliente 5</td>
            <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarPet}
              >                  
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </td>
          </tr>
          <tr>
            <td>Pet 6</td>
            <td>Cliente 6</td>
            <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarPet}
              >                  
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListaPet;