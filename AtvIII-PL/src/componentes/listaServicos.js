import React, { useEffect } from 'react';

const ListaProdutos = ({ tema, selecionarView }) => {
    useEffect(() => {
        console.log("Lista de produtos carregada");

        return () => {
            console.log("Componente ListaProdutos desmontado");
        };
    }, []);

    return (
        <div className="card" style={{ backgroundColor: tema }}>
            <div className="card-header">
                <h2>Lista de serviço</h2>
            </div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Serviço 1</td>
                            <td>R$ 50,00</td>
                            <td>Castração</td>
                            <td>
                                <button onClick={(e) => { selecionarView('Atualizar Servico', e) }} className="btn-verde2">Editar</button>
                                <button className="btn-verde2">Excluir</button>
                            </td>
                        </tr>
                        {/* Outros produtos aqui */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaProdutos;