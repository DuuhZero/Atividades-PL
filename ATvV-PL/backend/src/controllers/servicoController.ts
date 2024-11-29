import { Request, Response } from 'express';
import Servico from '../modelo/servico';
import Pet from '../modelo/pet';
import Cliente from '../modelo/cliente';
import ServicoConsumido from '../modelo/servicoConsumido';

export default class ServicoControllers {

  public static async cadastrarServico(req: Request, res: Response): Promise<any> {
    const data = req.body;
  
    if (!data.nomeServico) {
      return res.json({ message: "Por favor, digite o nome do Servico!" });
    }
  
    if (!data.valorServico) {
      return res.json({ message: "Por favor, digite o valor do Servico!" });
    }
  
    try {
      const novoServico = await Servico.create(
        {
          nomeServico: data.nomeServico,
          valorServico: data.valorServico,
        },
      );
  
      res.json({ message: "Servico cadastrado com sucesso!", status: 201 }).status(201);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async deletarServico(req: Request, res: Response): Promise<any> {
    const idServico = req.params.idServico;
    try {
      await Servico.destroy({ 
        where: {
          idServico: idServico 
          } 
      })
    return res.json({message: "Servico excluído com sucesso!", status: 201}).status(201)
    } catch (error) {
        return res.json(error).status(500)
    }
  }

  public static async atualizarServico(req: Request, res: Response): Promise<any> {
    const idServico = req.params.idServico;
    const data = req.body;
  
    try {
      const updateData: any = {};
  
      if (data.nomeServico) {
        updateData.nomeServico = data.nomeServico;
      }
  
      if (data.valorServico) {
        updateData.valorServico = data.valorServico;
      }
  
      await Servico.update(updateData, {
        where: {
          idServico: idServico,
        },
      });
  
      res.status(200).json({ message: "Servico atualizado com sucesso!" });
    } catch (error) {
      return res.json("deu erro").status(500);
    }
  }

  public static async listarServico(req: Request, res: Response): Promise<any> {
    try {
      const servicos = await Servico.findAll();
  
      return res.json(servicos).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  static async procurarServico(req: Request, res: Response) {
    const idServico = req.params.idServico;
    try {
      const servicoProcurado = await Servico.findByPk(idServico);
  
      if (!servicoProcurado) {
        return res.status(422).json({ message: "Servico não encontrado" });
      }
    
      return res.status(200).json({ servico: servicoProcurado });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao procurar servico", error });
    }
  }

  public static async cadastrarServicoConsumido(req: Request, res: Response): Promise<any> {
    const data = req.body;
  
    if (!data.idCliente) {
      return res.json({ message: "Por favor, informe o ID do cliente!" });
    }
  
    if (!data.idPet) {
      return res.json({ message: "Por favor, informe o ID do pet!" });
    }
  
    if (!data.idServico) {
      return res.json({ message: "Por favor, informe o ID do serviço!" });
    }
  
    const idCliente = data.idCliente; 
    const idPet = data.idPet; 
    const idServico = data.idServico; 
  
    try {
      const cliente = await Cliente.findByPk(idCliente);
      const pet = await Pet.findByPk(idPet);
      const servico = await Servico.findByPk(idServico);
  
      if (!cliente) {
        return res.json({ message: "Cliente não encontrado!" });
      }
  
      if (!pet) {
        return res.json({ message: "Pet não encontrado!" });
      }
  
      if (!servico) {
        return res.json({ message: "Serviço não encontrado!" });
      }
  
      const servicoConsumido = await ServicoConsumido.create({
        idCliente: idCliente,
        idPet: idPet,
        idServico: idServico,
        quantidade: data.quantidade || 1, // Quantidade do serviço consumido
      });
  
      res.json({ message: "Serviço consumido cadastrado com sucesso!", status: 201 }).status(201);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarServicoConsumido(req: Request, res: Response): Promise<any> {
    try {
      const servicosConsumidos = await ServicoConsumido.findAll({
        include: [
          { model: Cliente, attributes: ['nomeCliente'] },
          { model: Pet, attributes: ['nomePet'] },
          { model: Servico, attributes: ['nomeServico', 'valorServico'] },
        ],
      });
  
      const listaServicosConsumidos = servicosConsumidos.map((servicoConsumido: any) => {
        const nomeCliente = servicoConsumido.cliente?.nomeCliente || 'Cliente não encontrado';
        const nomePet = servicoConsumido.pet?.nomePet || 'Pet não encontrado';
        const nomeServico = servicoConsumido.servico?.nomeServico || 'Serviço não encontrado';
        const valorServico = servicoConsumido.servico?.valorServico || 0;
  
        return {
          nomeCliente,
          nomePet,
          nomeServico,
          valorServico,
        };
      });
  
      return res.json(listaServicosConsumidos).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarClientesMaisConsumiram(req: Request, res: Response): Promise<any> {
    try {
      const clientesQuantidade: Map<string, number> = new Map();
  
      // Calcular a quantidade total de serviços consumidos por cada cliente
      const servicosConsumidos = await ServicoConsumido.findAll();
      servicosConsumidos.forEach((servicoConsumido: any) => {
        const idCliente = servicoConsumido.idCliente.toString();
        const quantidade = servicoConsumido.quantidade;
  
        if (clientesQuantidade.has(idCliente)) {
          clientesQuantidade.set(idCliente, clientesQuantidade.get(idCliente)! + quantidade);
        } else {
          clientesQuantidade.set(idCliente, quantidade);
        }
      });
  
      // Ordenar os clientes por quantidade de serviços consumidos em ordem decrescente
      const clientesOrdenados = Array.from(clientesQuantidade.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
  
      const listaClientesMaisConsumiram = await Promise.all(
        clientesOrdenados.map(async ([idCliente, quantidade]) => {
          const cliente = await Cliente.findByPk(idCliente);
          const nomeCliente = cliente?.get("nomeCliente") || 'Cliente não encontrado';
  
          return {
            nomeCliente,
            quantidade,
          };
        })
      );
  
      return res.json(listaClientesMaisConsumiram).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarServicosMaisConsumidos(req: Request, res: Response): Promise<any> {
    try {
      const servicosQuantidade: Map<string, number> = new Map();
  
      // Calcular a quantidade total de cada serviço consumido
      const servicosConsumidos = await ServicoConsumido.findAll();
      servicosConsumidos.forEach((servicoConsumido: any) => {
        const idServicoConsumido = servicoConsumido.idServico.toString();
        const quantidade = servicoConsumido.quantidade;
  
        if (servicosQuantidade.has(idServicoConsumido)) {
          servicosQuantidade.set(idServicoConsumido, servicosQuantidade.get(idServicoConsumido)! + quantidade);
        } else {
          servicosQuantidade.set(idServicoConsumido, quantidade);
        }
      });
  
      // Ordenar os serviços por quantidade consumida em ordem decrescente
      const servicosOrdenados = Array.from(servicosQuantidade.entries())
        .sort((a, b) => b[1] - a[1]);
  
      const listaServicosMaisConsumidos = await Promise.all(
        servicosOrdenados.map(async ([idServicoConsumido, quantidade]) => {
          const servico = await Servico.findByPk(idServicoConsumido);
          const nomeServico = servico?.get('nomeServico') || 'Serviço não encontrado';
  
          return {
            nomeServico,
            quantidade,
          };
        })
      );
  
      return res.json(listaServicosMaisConsumidos).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarClientesMaisConsumiramValor(req: Request, res: Response): Promise<any> {
    try {
      const clientesValor: Map<number, number> = new Map();
  
      // Obter todos os registros de ServicoConsumido
      const servicosConsumidos = await ServicoConsumido.findAll();
  
      // Calcular o valor total consumido por cada cliente
      for (const servicoConsumido of servicosConsumidos) {
        const idCliente = servicoConsumido.getDataValue('idCliente');
        const idServico = servicoConsumido.getDataValue('idServico');
        const quantidade = servicoConsumido.getDataValue('quantidade');
  
        // Obter o valor do serviço
        const servico = await Servico.findByPk(idServico);
        const valorServico = servico?.getDataValue('valorServico') || 0;
  
        // Calcular o valor total
        const valorTotal = valorServico * quantidade;
  
        if (clientesValor.has(idCliente)) {
          clientesValor.set(idCliente, clientesValor.get(idCliente)! + valorTotal);
        } else {
          clientesValor.set(idCliente, valorTotal);
        }
      }
  
      // Ordenar os clientes por valor consumido em ordem decrescente
      const clientesOrdenados = Array.from(clientesValor.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
  
      const listaClientesMaisConsumiramValor = await Promise.all(
        clientesOrdenados.map(async ([idCliente, _]) => {
          const cliente = await Cliente.findByPk(idCliente);
          const nomeCliente = cliente?.getDataValue('nomeCliente') || 'Cliente não encontrado';
  
          // Calcular o valor total gasto pelo cliente
          let valorGasto = 0;
          const servicosCliente = servicosConsumidos.filter(
            (servicoConsumido) => servicoConsumido.getDataValue('idCliente') === idCliente
          );
  
          for (const servicoConsumido of servicosCliente) {
            const idServico = servicoConsumido.getDataValue('idServico');
            const quantidade = servicoConsumido.getDataValue('quantidade');
            const servico = await Servico.findByPk(idServico);
            const valorServico = servico?.getDataValue('valorServico') || 0;
            valorGasto += valorServico * quantidade;
          }
  
          return {
            nomeCliente,
            valorGasto,
          };
        })
      );
  
      return res.json(listaClientesMaisConsumiramValor).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarServicosMaisConsumidosPorTipoERaca(req: Request, res: Response): Promise<any> {
    try {
      const servicosTipoRaca: Map<string, Map<string, number>> = new Map();
  
      // Calcular a quantidade total de cada serviço consumido por tipo e raça de pet
      const servicosConsumidos = await ServicoConsumido.findAll();
  
      for (const servicoConsumido of servicosConsumidos) {
        const idPet = Number(servicoConsumido.get("idPet"));
        const pet = await Pet.findByPk(idPet);
        if (!pet) {
          continue;
        }
  
        const tipoPet = String(pet.get("tipoPet"));
        const racaPet = String(pet.get("racaPet"));
        const quantidadeServico = Number(servicoConsumido.get("quantidade"));
  
        if (!servicosTipoRaca.has(tipoPet)) {
          servicosTipoRaca.set(tipoPet, new Map());
        }
  
        const servicosRaca = servicosTipoRaca.get(tipoPet);
        if (servicosRaca && servicosRaca.has(racaPet)) {
          servicosRaca.set(racaPet, servicosRaca.get(racaPet)! + quantidadeServico);
        } else {
          servicosRaca?.set(racaPet, quantidadeServico);
        }
      }
  
      const listaServicosMaisConsumidosPorTipoERaca: { tipoPet: string, racaPet: string, quantidade: number }[] = [];
      servicosTipoRaca.forEach((servicosRaca, tipoPet) => {
        servicosRaca.forEach((quantidadeServico, racaPet) => {
          listaServicosMaisConsumidosPorTipoERaca.push({
            tipoPet,
            racaPet,
            quantidade: quantidadeServico
          });
        });
      });
  
      // Ordenar os serviços por quantidade consumida em ordem decrescente
      listaServicosMaisConsumidosPorTipoERaca.sort((a, b) => b.quantidade - a.quantidade);
  
      return res.json(listaServicosMaisConsumidosPorTipoERaca).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }
}