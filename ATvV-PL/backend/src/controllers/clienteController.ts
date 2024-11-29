import { Request, Response } from 'express';
import Cliente from '../modelo/cliente';
import Telefone from '../modelo/telefone';
import RG from '../modelo/rg';

export default class ClienteControllers {

  public static async listarCliente(req: Request, res: Response): Promise<any> {
    try {
      const clientes = await Cliente.findAll();
  
      const clientesComTelefonesERGs = await Promise.all(
        clientes.map(async (cliente: any) => {
          const telefones = await Telefone.findAll({
            where: { idCliente: cliente.idCliente },
          });
  
          const rgs = await RG.findAll({
            where: { idCliente: cliente.idCliente },
          });

          return {
            ...cliente.toJSON(),
            telefones,
            rgs,
          };
        })
      );
  
      return res.json(clientesComTelefonesERGs).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  static async procurarCliente(req: Request, res: Response) {
    const idCliente = req.params.idCliente;
    try {
      const clienteProcurado = await Cliente.findByPk(idCliente);
  
      if (!clienteProcurado) {
        return res.status(422).json({ message: "Cliente não encontrado" });
      }
  
      const telefones = await Telefone.findAll({ where: { idCliente: idCliente } });
  
      return res.status(200).json({ cliente: clienteProcurado, telefones });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao procurar cliente", error });
    }
  }

  public static async cadastrarCliente(req: Request, res: Response): Promise<any> {
    const data = req.body;
  
    if (!data.nomeCliente) {
      return res.json({ message: "Por favor, digite o nome do cliente!" });
    }
  
    if (!data.nomeSocialCliente) {
      return res.json({ message: "Por favor, digite o nome social do cliente!" });
    }
  
    if (!data.cpf) {
      return res.json({ message: "Por favor, digite o CPF do cliente!" });
    }

    const rgs = data.rgs || [];
  
    const telefones = data.telefones || [];
  
    const telefoneList = telefones.map((telefone: string) => {
      const [ddd, numero] = telefone.split('-');
  
      return {
        ddd: ddd.trim(),
        numero: numero.trim(),
      };
    });
  
    try {
      const novoCliente = await Cliente.create(
        {
          nomeCliente: data.nomeCliente,
          nomeSocialCliente: data.nomeSocialCliente,
          cpf: data.cpf,
        },
      );

      if (rgs.length > 0) {
        await RG.bulkCreate(
          rgs.map((numeroRG: string) => ({
            numeroRG,
            idCliente: novoCliente.get("idCliente"),
          }))
        );
      }
  
      if (telefoneList.length > 0) {
        await Telefone.bulkCreate(
          telefoneList.map((telefone: { ddd: string; numero: string }) => ({
            ddd: telefone.ddd,
            numero: telefone.numero,
            idCliente: novoCliente.get("idCliente"),
          }))
        );
      }
  
      res.json({ message: "Cliente cadastrado com sucesso!", status: 201 }).status(201);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async deletarCliente(req: Request, res: Response): Promise<any> {
    const oId_cliente = req.params.idCliente;
    try {
      await Cliente.destroy({ 
        where: {
            idCliente: oId_cliente 
          } 
      })
    return res.json({message: "Cliente excluído com sucesso!", status: 201}).status(201)
    } catch (error) {
        return res.json(error).status(500)
    }
  }

  public static async atualizarCliente(req: Request, res: Response): Promise<any> {
    const idCliente = req.params.idCliente;
    const data = req.body;
  
    try {
      const updateData: any = {};
  
      if (data.nomeCliente) {
        updateData.nomeCliente = data.nomeCliente;
      }
  
      if (data.nomeSocialCliente) {
        updateData.nomeSocialCliente = data.nomeSocialCliente;
      }
  
      if (data.telefones && data.telefones.length > 0) {
        const telefones = data.telefones.map((telefone: string) => {
          const [ddd, numero] = telefone.split('-');
  
          return {
            ddd: ddd.trim(),
            numero: numero.trim(),
          };
        });
  
        await Telefone.destroy({
          where: {
            idCliente: idCliente,
          },
        });
  
        await Telefone.bulkCreate(
          telefones.map((telefone: { ddd: string; numero: string }) => ({
            ddd: telefone.ddd,
            numero: telefone.numero,
            idCliente: idCliente,
          }))
        );
      }
  
      await Cliente.update(updateData, {
        where: {
          idCliente: idCliente,
        },
      });
  
      res.status(200).json({ message: "Cliente atualizado com sucesso!" });
    } catch (error) {
      return res.json("deu erro").status(500);
    }
  }
}