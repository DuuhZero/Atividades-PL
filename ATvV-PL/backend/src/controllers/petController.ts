import { Request, Response } from 'express';
import Pet from '../modelo/pet';
import Cliente from '../modelo/cliente';

export default class PetControllers {

  public static async listarPet(req: Request, res: Response): Promise<any> {
    try {
      const opet = await Pet.findAll();

      const petsComCliente: any[] = [];

      for (const pet of opet) {
        const cliente = await Cliente.findByPk((pet as any).idCliente); 
        const petComCliente = { ...pet.toJSON(), cliente };
        petsComCliente.push(petComCliente);
      }

      return res.json(petsComCliente).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async cadastrarPet(req: Request, res: Response): Promise<any> {
    const data = req.body;

    if (!data.cpf) {
      return res.json({ message: "Por favor, digite o CPF do cliente!" });
    }

    try {
      const cliente = await Cliente.findOne({ where: { cpf: data.cpf } });

      if (!cliente) {
        return res.json({ message: "Cliente não encontrado com o CPF fornecido!" });
      }

      if (!data.nomePet) {
        return res.json({ message: "Por favor, digite o nome do pet!" });
      }

      if (!data.tipoPet) {
        return res.json({ message: "Por favor, digite o tipo de pet!" });
      }

      if (!data.racaPet) {
        return res.json({ message: "Por favor, digite a raça do pet!" });
      }

      if (!data.generoPet) {
        return res.json({ message: "Por favor, digite o gênero do pet!" });
      }

      const novoPet = await Pet.create({
        nomePet: data.nomePet,
        tipoPet: data.tipoPet,
        racaPet: data.racaPet,
        generoPet: data.generoPet,
        idCliente: cliente.get("idCliente"), 
      });

      res.json({ message: "Pet cadastrado com sucesso!", status: 201 }).status(201);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async deletarPet(req: Request, res: Response): Promise<any> {
    const idPet = req.params.idPet;
    try {
      await Pet.destroy({ 
        where: {
          idPet: idPet 
          } 
      })
    return res.json({message: "Pet excluído com sucesso!", status: 201}).status(201)
    } catch (error) {
        return res.json(error).status(500)
    }
  }

  public static async atualizarPet(req: Request, res: Response): Promise<any> {
    const idPet = req.params.idPet;
    const data = req.body;

    if (!data.nomePet) {
      return res.json({ message: "Por favor, digite o nome do Pet!" });
    }

    if (!data.racaPet) {
      return res.json({ message: "Por favor, digite a raça do pet" });
    }

    if (!data.tipoPet) {
      return res.json({ message: "Por favor, digite o tipo do Pet!" });
    }

    if (!data.generoPet) {
      return res.json({ message: "Por favor, digite o genêro do pet" });
    }

    try {
      await Pet.update(
        {
          nomePet: data.nomePet,
          racaPet: data.racaPet,
          tipoPet: data.tipoPet,
          generoPet: data.generoPet,
        },
        {
          where: {
            idPet: idPet,
          },
        }
      );
      res.status(200).json({ message: "Pet atualizado com sucesso!" });
    } catch (error) {
      return res.json("deu erro").status(500);
    }
  }

  static async procurarPet(req: Request, res: Response) {
    const idPet = req.params.idPet;
    try {
      const petProcurado = await Pet.findByPk(idPet);

      if (!idPet) {
        return res.status(422).json({ message: "Pet não encontrado" });
      }

      const cliente = await Cliente.findByPk((petProcurado as any).idCliente);

      return res.status(200).json({ pet: petProcurado, cliente });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao procurar cliente", error });
    }
  }
}