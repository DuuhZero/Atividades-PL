import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServico from "./listaServico";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaPet from "./listaPet";
import FormularioCadastroPet from "./formularioCadastroPet";
import PaginaInicial from "./paginaInicial";
import FormularioAtualizarCliente from "./formularioAtualizarCliente";
import FormularioAtualizarProduto from "./formularioAtualizarProduto";
import FormularioAtualizarServico from "./formularioAtualizarServico";
import FormularioAtualizarPet from "./formularioAtualizarPet";
import ClienteConsumoProduto from "./clienteConsumoProduto";
import ClienteConsumoServico from "./clienteConsumoServico";
import ProdutosMaisConsumidos from "./produtosMaisConsumidos";
import ServicosMaisConsumidos from "./servicosMaisConsumidos";
import ProdutoRacaePet from "./produtoRacaePet";
import ServicoRacaePet from "./servicoRacaePet";
import MaisGastaram from "./maisGastaram";

const Roteador = () => {
  const [tela, setTela] = useState("Home");
  const tema = "#FFDF00"; // Definindo o tema de cor de forma consistente

  const selecionarView = (novaTela, evento) => {
    evento.preventDefault();
    setTela(novaTela);
  };

  const abrirAtualizarCliente = (evento) => selecionarView("Atualizar Cliente", evento);
  const abrirAtualizarProduto = (evento) => selecionarView("Atualizar Produto", evento);
  const abrirAtualizarServico = (evento) => selecionarView("Atualizar Serviço", evento);
  const abrirAtualizarPet = (evento) => selecionarView("Atualizar Pet", evento);

  const barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema={tema}
      botoes={["Clientes", "Produtos", "Serviços", "Pets", "Cadastros", "Listagens"]}
    />
  );

  const renderContent = () => {
    switch (tela) {
      case "Clientes":
        return <ListaCliente tema={tema} abrirAtualizarCliente={abrirAtualizarCliente} />;
      case "Cadastro Cliente":
        return <FormularioCadastroCliente tema={tema} />;
      case "Produtos":
        return <ListaProduto tema={tema} abrirAtualizarProduto={abrirAtualizarProduto} />;
      case "Cadastro Produto":
        return <FormularioCadastroProduto tema={tema} />;
      case "Serviços":
        return <ListaServico tema={tema} abrirAtualizarServico={abrirAtualizarServico} />;
      case "Cadastro Serviço":
        return <FormularioCadastroServico tema={tema} />;
      case "Pets":
        return <ListaPet tema={tema} abrirAtualizarPet={abrirAtualizarPet} />;
      case "Cadastro Pet":
        return <FormularioCadastroPet tema={tema} />;
      case "Home":
        return <PaginaInicial tema={tema} seletorView={selecionarView} />;
      case "Atualizar Cliente":
        return <FormularioAtualizarCliente tema={tema} />;
      case "Atualizar Produto":
        return <FormularioAtualizarProduto tema={tema} />;
      case "Atualizar Serviço":
        return <FormularioAtualizarServico tema={tema} />;
      case "Atualizar Pet":
        return <FormularioAtualizarPet tema={tema} />;
      case "Clientes que mais consumiram produtos":
        return <ClienteConsumoProduto tema={tema} />;
      case "Clientes que mais consumiram serviços":
        return <ClienteConsumoServico tema={tema} />;
      case "Produtos mais consumidos":
        return <ProdutosMaisConsumidos tema={tema} />;
      case "Serviços mais consumidos":
        return <ServicosMaisConsumidos tema={tema} />;
      case "Produtos mais consumidos por tipo e raça de pets":
        return <ProdutoRacaePet tema={tema} />;
      case "Serviços mais consumidos por tipo e raça de pets":
        return <ServicoRacaePet tema={tema} />;
      case "Top 5 clientes que mais gastaram":
        return <MaisGastaram tema={tema} />;
      default:
        return <PaginaInicial tema={tema} seletorView={selecionarView} />;
    }
  };

  return (
    <>
      {barraNavegacao}
      {renderContent()}
    </>
  );
};

export default Roteador;