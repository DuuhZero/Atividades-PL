import React, { useEffect, useState } from "react";

const ListaCliente = ({ tema, abrirAtualizarCliente }) => {
  const [clientes, setClientes] = useState([]);

  const handleDelete = (idCliente) => {
    // Lógica para exclusão de cliente
    console.log(`Cliente com id ${idCliente} deletado`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Dados simulados (mock)
    const clientesMock = [
      { idCliente: 1, nomeCliente: "Carlos Silva", nomeSocial: "Carlos S.", email: "carlos.silva@email.com", cpf: "123.456.789-00", telefone: "(11) 91234-5678" },
      { idCliente: 2, nomeCliente: "Ana Oliveira", nomeSocial: "Ana O.", email: "ana.oliveira@email.com", cpf: "234.567.890-11", telefone: "(21) 98765-4321" },
      { idCliente: 3, nomeCliente: "Marcos Souza", nomeSocial: "Marcos S.", email: "marcos.souza@email.com", cpf: "345.678.901-22", telefone: "(31) 97654-3210" },
      { idCliente: 4, nomeCliente: "Juliana Ferreira", nomeSocial: "Juliana F.", email: "juliana.ferreira@email.com", cpf: "456.789.012-33", telefone: "(41) 96543-2109" },
      { idCliente: 5, nomeCliente: "Paulo Costa", nomeSocial: "Paulo C.", email: "paulo.costa@email.com", cpf: "567.890.123-44", telefone: "(51) 95432-1098" },
      { idCliente: 6, nomeCliente: "Beatriz Lima", nomeSocial: "Beatriz L.", email: "beatriz.lima@email.com", cpf: "678.901.234-55", telefone: "(61) 94321-0987" },
      { idCliente: 7, nomeCliente: "Ricardo Mendes", nomeSocial: "Ricardo M.", email: "ricardo.mendes@email.com", cpf: "789.012.345-66", telefone: "(71) 93210-9876" },
      { idCliente: 8, nomeCliente: "Fernanda Alves", nomeSocial: "Fernanda A.", email: "fernanda.alves@email.com", cpf: "890.123.456-77", telefone: "(81) 92109-8765" },
      { idCliente: 9, nomeCliente: "Gustavo Rocha", nomeSocial: "Gustavo R.", email: "gustavo.rocha@email.com", cpf: "901.234.567-88", telefone: "(91) 91098-7654" },
      { idCliente: 10, nomeCliente: "Camila Martins", nomeSocial: "Camila M.", email: "camila.martins@email.com", cpf: "012.345.678-99", telefone: "(81) 90987-6543" }
    ];
    
    setClientes(clientesMock);
  };

  return (
    <div className="container-fluid">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome Social</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.idCliente}>
              <td>{cliente.nomeCliente}</td>
              <td>{cliente.nomeSocial}</td>
              <td>{cliente.email}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.telefone}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  style={{ marginRight: '2cm' }}
                  onClick={abrirAtualizarCliente}
                >
                  Atualizar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(cliente.idCliente)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaCliente;