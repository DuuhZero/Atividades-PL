import { useState, useEffect } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastro from "./formularioCadastro";
import FormularioAtualizarCliente from "./formularioAtualizarCliente";
import DetalhesCliente from "./detalhescliente";
import '../index.css';

export default function Roteador() {
  const [tela, setTela] = useState('Clientes');
  const [tema, setTema] = useState('#ffffff');
  const [clientes, setClientes] = useState([]);
  const [idCliente, setIdCliente] = useState(null);

  const selecionarView = (valor, e, id = null) => {
    e.preventDefault();
    setTela(valor);
    if (valor === 'Ver Detalhes' && id) {
      setIdCliente(id);
    }
  };

  const adicionarCliente = (novoCliente) => {
    setClientes(prevClientes => [...prevClientes, novoCliente]);
  };

  useEffect(() => {
    console.log(`Tela atual: ${tela}`);
    document.title = `${tela}`;
    return () => {
      console.log(`Saindo da tela: ${tela}`);
    };
  }, [tela]);

  const renderizarView = () => {
    switch (tela) {
      case 'Clientes':
        return <ListaCliente tema={tema} clientes={clientes} selecionarView={selecionarView} />;
      case 'Cadastrar':
        return <FormularioCadastro tema={tema} adicionarCliente={adicionarCliente} />;
      case 'Atualizar Cliente':
        return <FormularioAtualizarCliente tema={tema} idCliente={idCliente} />;
      case 'Ver Detalhes':
        return <DetalhesCliente tema={tema} id={idCliente} />;
      default:
        return <ListaCliente tema={tema} clientes={clientes} selecionarView={selecionarView} />;
    }
  };

  return (
    <>
      <BarraNavegacao seletorView={selecionarView} botoes={['Clientes', 'Cadastrar']} tema={tema} />
      <div className="container mt-4">
        {renderizarView()}
      </div>
    </>
  );
}