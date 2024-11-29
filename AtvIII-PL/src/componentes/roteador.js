import { useState, useEffect } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";

import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import ListaPets from "./listaPets";
import Top10 from "./listaTopDez";
import Top5 from "./listaTopCinco";

import FormularioAtualizarCliente from "./formularioAtualizarCliente";
import FormularioAtualizarProduto from "./formularioAtualizarProduto";
import FormularioCadastro from "./formularioCadastro";
import FormularioAtualizarservico from "./formularioAtualizarServico";

export default function Roteador() {
  const [tela, setTela] = useState('Clientes');
  const [tema, setTema] = useState('#ffffff');

  const selecionarView = (valor, e) => {
    e.preventDefault();
    setTela(valor);
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
        return <ListaCliente tema={tema} selecionarView={selecionarView} />;
      case 'Cadastrar':
        return <FormularioCadastro tema={tema} />;
      case 'Produtos':
        return <ListaProdutos tema={tema} selecionarView={selecionarView} />;
      case 'Serviços':
        return <ListaServicos tema={tema} selecionarView={selecionarView} />;
      case 'Pets':
        return <ListaPets tema={tema} />;
      case 'Top 10 Clientes':
        return <Top10 tema={tema} />;
      case 'Top 5 Clientes':
        return <Top5 tema={tema} />;
      case 'Atualizar Cliente':
        return <FormularioAtualizarCliente tema={tema} />;
      case 'Atualizar Produto':
        return <FormularioAtualizarProduto tema={tema} />;
      case 'Atualizar Servico':
        return <FormularioAtualizarservico tema={tema} />;
      default:
        return <ListaCliente tema={tema} selecionarView={selecionarView} />;
    }
  };

  return (
    <>
      <BarraNavegacao seletorView={selecionarView} botoes={['Clientes', 'Cadastrar', 'Produtos', 'Serviços', 'Pets', 'Top 10 Clientes', 'Top 5 Clientes']} tema={tema} />
      <div className="container mt-4">
        {renderizarView()}
      </div>
    </>
  );
}
