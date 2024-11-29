import { Router } from 'express';
import PetController from '../controllers/petController';

const router = Router();
router.delete("/deletar/:idPet", PetController.deletarPet);
router.post('/cadastrarPet', PetController.cadastrarPet);
router.get("/listar/:idPet", PetController.procurarPet);
router.get("/listar", PetController.listarPet);
router.put("/atualizarPet/:idPet", PetController.atualizarPet);

export default router;