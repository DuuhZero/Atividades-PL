import { Request, Response } from 'express';
import Produto from '../modelo/produto';
import Cliente from '../modelo/cliente';
import Pet from '../modelo/pet';
import ProdutoConsumido from '../modelo/produtoConsumido';

export default class ProdutoControllers {

  public static async cadastrarProduto(req: Request, res: Response): Promise<any> {
    const { nomeProduto, valorProduto } = req.body;

    if (!nomeProduto) {
      return res.status(400).json({ message: "Por favor, digite o nome do Produto!" });
    }

    if (!valorProduto) {
      return res.status(400).json({ message: "Por favor, digite o valor do Produto!" });
    }

    try {
      await Produto.create({ nomeProduto, valorProduto });
      return res.status(201).json({ message: "Produto cadastrado com sucesso!" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public static async deletarProduto(req: Request, res: Response): Promise<any> {
    const { idProduto } = req.params;

    try {
      await Produto.destroy({ where: { idProduto } });
      return res.status(200).json({ message: "Produto excluído com sucesso!" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public static async atualizarProduto(req: Request, res: Response): Promise<any> {
    const { idProduto } = req.params;
    const { nomeProduto, valorProduto } = req.body;

    try {
      const updateData: any = {};

      if (nomeProduto) updateData.nomeProduto = nomeProduto;
      if (valorProduto) updateData.valorProduto = valorProduto;

      await Produto.update(updateData, { where: { idProduto } });

      return res.status(200).json({ message: "Produto atualizado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar o produto", error });
    }
  }

  public static async listarProduto(req: Request, res: Response): Promise<any> {
    try {
      const produtos = await Produto.findAll();
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public static async procurarProduto(req: Request, res: Response): Promise<any> {
    const { idProduto } = req.params;

    try {
      const produto = await Produto.findByPk(idProduto);

      if (!produto) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      return res.status(200).json({ produto });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao procurar produto", error });
    }
  }

  public static async cadastrarProdutoConsumido(req: Request, res: Response): Promise<any> {
    const { idCliente, idPet, idProduto, quantidade = 1 } = req.body;

    if (!idCliente || !idPet || !idProduto) {
      return res.status(400).json({ message: "Por favor, informe os IDs do cliente, pet e produto!" });
    }

    try {
      const cliente = await Cliente.findByPk(idCliente);
      const pet = await Pet.findByPk(idPet);
      const produto = await Produto.findByPk(idProduto);

      if (!cliente || !pet || !produto) {
        return res.status(404).json({ message: "Cliente, Pet ou Produto não encontrado!" });
      }

      await ProdutoConsumido.create({ idCliente, idPet, idProduto, quantidade });

      return res.status(201).json({ message: "Produto consumido cadastrado com sucesso!" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public static async listarProdutoConsumido(req: Request, res: Response): Promise<any> {
    try {
      const produtosConsumidos = await ProdutoConsumido.findAll({
        include: [
          { model: Cliente, attributes: ['nomeCliente'] },
          { model: Pet, attributes: ['nomePet'] },
          { model: Produto, attributes: ['nomeProduto', 'valorProduto'] },
        ],
      });

      const listaProdutosConsumidos = produtosConsumidos.map((produtoConsumido: any) => ({
        nomeCliente: produtoConsumido.cliente?.nomeCliente || 'Cliente não encontrado',
        nomePet: produtoConsumido.pet?.nomePet || 'Pet não encontrado',
        nomeProduto: produtoConsumido.produto?.nomeProduto || 'Produto não encontrado',
        valorProduto: produtoConsumido.produto?.valorProduto || 0,
      }));

      return res.status(200).json(listaProdutosConsumidos);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public static async listarClientesMaisConsumiram(req: Request, res: Response): Promise<any> {
    try {
      const clientesQuantidade: Map<string, number> = new Map();

      const produtosConsumidos = await ProdutoConsumido.findAll();
      produtosConsumidos.forEach((produtoConsumido: any) => {
        const idCliente = produtoConsumido.idCliente.toString();
        const quantidade = produtoConsumido.quantidade;

        clientesQuantidade.set(idCliente, (clientesQuantidade.get(idCliente) || 0) + quantidade);
      });

      const clientesOrdenados = Array.from(clientesQuantidade.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      const listaClientesMaisConsumiram = await Promise.all(
        clientesOrdenados.map(async ([idCliente, quantidade]) => {
          const cliente = await Cliente.findByPk(idCliente);
          return {
            nomeCliente: cliente?.get("nomeCliente") || 'Cliente não encontrado',
            quantidade,
          };
        })
      );

      return res.status(200).json(listaClientesMaisConsumiram);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public static async listarProdutosMaisConsumidos(req: Request, res: Response): Promise<any> {
    try {
      const produtosQuantidade: Map<string, number> = new Map();

      const produtosConsumidos = await ProdutoConsumido.findAll();
      produtosConsumidos.forEach((produtoConsumido: any) => {
        const idProdutoConsumido = produtoConsumido.idProduto.toString();
        const quantidade = produtoConsumido.quantidade;

        produtosQuantidade.set(idProdutoConsumido, (produtosQuantidade.get(idProdutoConsumido) || 0) + quantidade);
      });

      const produtosOrdenados = Array.from(produtosQuantidade.entries())
        .sort((a, b) => b[1] - a[1]);

      const listaProdutosMaisConsumidos = await Promise.all(
        produtosOrdenados.map(async ([idProdutoConsumido, quantidade]) => {
          const produto = await Produto.findByPk(idProdutoConsumido);
          return {
            nomeProduto: produto?.get('nomeProduto') || 'Produto não encontrado',
            quantidade,
          };
        })
      );

      return res.status(200).json(listaProdutosMaisConsumidos);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public static async listarClientesMaisConsumiramValor(req: Request, res: Response): Promise<any> {
    try {
      const clientesValor: Map<number, number> = new Map();

      const produtosConsumidos = await ProdutoConsumido.findAll();

      for (const produtoConsumido of produtosConsumidos) {
        const idCliente = produtoConsumido.getDataValue('idCliente');
        const idProduto = produtoConsumido.getDataValue('idProduto');
        const quantidade = produtoConsumido.getDataValue('quantidade');

        const produto = await Produto.findByPk(idProduto);
        const valorProduto = produto?.getDataValue('valorProduto') || 0;

        const valorTotal = valorProduto * quantidade;
        clientesValor.set(idCliente, (clientesValor.get(idCliente) || 0) + valorTotal);
      }

      const clientesOrdenados = Array.from(clientesValor.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      const listaClientesMaisConsumiramValor = await Promise.all(
        clientesOrdenados.map(async ([idCliente]) => {
          const cliente = await Cliente.findByPk(idCliente);
          return {
            nomeCliente: cliente?.getDataValue('nomeCliente') || 'Cliente não encontrado',
            valorGasto: clientesValor.get(idCliente) || 0,
          };
        })
      );

      return res.status(200).json(listaClientesMaisConsumiramValor);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public static async listarProdutosMaisConsumidosPorTipoERaca(req: Request, res: Response): Promise<any> {
    try {
      const produtosTipoRaca: Map<string, Map<string, number>> = new Map();

      const produtosConsumidos = await ProdutoConsumido.findAll();

      for (const produtoConsumido of produtosConsumidos) {
        const idPet = Number(produtoConsumido.get("idPet"));
        const pet = await Pet.findByPk(idPet);
        if (!pet) continue;

        const tipoPet = String(pet.get("tipoPet"));
        const racaPet = String(pet.get("racaPet"));
        const quantidadeProduto = Number(produtoConsumido.get("quantidade"));

        if (!produtosTipoRaca.has(tipoPet)) {
          produtosTipoRaca.set(tipoPet, new Map());
        }

        const tipoRacaMap = produtosTipoRaca.get(tipoPet);
        const chaveRaca = `${racaPet}`;
        tipoRacaMap?.set(chaveRaca, (tipoRacaMap.get(chaveRaca) || 0) + quantidadeProduto);
      }

      const listaProdutosPorTipoERaca = Array.from(produtosTipoRaca.entries())
        .map(([tipoPet, tipoRacaMap]) => {
          const listaProdutosPorRaca = Array.from(tipoRacaMap.entries())
            .sort((a, b) => b[1] - a[1]);

          return { tipoPet, listaProdutosPorRaca };
        });

      return res.status(200).json(listaProdutosPorTipoERaca);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}