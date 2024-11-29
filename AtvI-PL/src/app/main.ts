import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import { Funcionario } from "../modelo/funcionario";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import DeleteCliente from "../negocio/deleteCliente";
import DeleteProduto from "../negocio/deleteProduto";
import DeleteServico from "../negocio/deleteServico";
import CincoClientes from "../negocio/listagemCinco";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemMaisConsumidos from "../negocio/listagemConsumo";
import TopClientes from "../negocio/listagemDez";
import ListagemConsumidosPets from "../negocio/listagemPet";
import ListagemProduto from "../negocio/listagemProduto";
import ListagemServico from "../negocio/listagemServico";
import RegistroClientes from "../negocio/registroClientes";
import UpdateCliente from "../negocio/updateCliente";
import UpdateProduto from "../negocio/updateProduto";
import UpdateServico from "../negocio/updateServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true
let funcionario = new Funcionario('João Func','C0dt04c3ss')

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Remover cliente`);
    console.log(`4 - Atualizar cliente`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Remover produto`);
    console.log(`8 - Atualizar produto`);
    console.log(`9 - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Remover serviço`);
    console.log(`12 - Atualizar serviço`);
    console.log(`13 - Registro de consumo dos clientes`)
    console.log(`14 - Top 10 Clientes que mais consumiram (Quantidade)`)
    console.log(`15 - Serviços e Produtos mais consumidos`)
    console.log(`16 - Serviços e Produtos mais consumidos por tipo e raça de pet`)
    console.log(`17 - Top 5 Clientes que mais consumiram (Valor)`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos,empresa.getServicos)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let deleteCliente = new DeleteCliente(empresa.getClientes, funcionario)
            deleteCliente.deletar()
            break;
        case 4:
            let updateCliente = new UpdateCliente(empresa.getClientes, funcionario)
            updateCliente.update()
            break
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProduto = new ListagemProduto(empresa.getProdutos)
            listagemProduto.listar()
            break;  
        case 7:
            let deleteProduto = new DeleteProduto(empresa.getProdutos, funcionario)
            deleteProduto.deletar()
            break;
        case 8:
            let updateProduto = new UpdateProduto(empresa.getProdutos, funcionario)
            updateProduto.update()
            break
        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar()
            break;
        case 11:
            let deleteServico = new DeleteServico(empresa.getServicos, funcionario)
            deleteServico.deletar()
            break;
        case 12:
            let updateServico = new UpdateServico(empresa.getServicos, funcionario)
            updateServico.update()
            break
        case 13:
            let registroCliente = new RegistroClientes(empresa.getClientes)
            registroCliente.registrar()
            break
        case 14:
            let top10Clientes = new TopClientes(empresa.getClientes)
            top10Clientes.listartop10()
            break
        case 15:
            let listagemConsumo = new ListagemMaisConsumidos(empresa.getClientes)
            listagemConsumo.listarMaisConsumidos()
            break
        case 16:
            let consumoPets = new ListagemConsumidosPets(empresa.getClientes)
            consumoPets.ListarConsumoPet()
            break
        case 17:
            let top5Clientes= new CincoClientes(empresa.getClientes)
            top5Clientes.listartop5()
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}