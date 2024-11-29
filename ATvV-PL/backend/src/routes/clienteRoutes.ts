import { Router } from 'express';
import ClienteController from '../controllers/clienteController';

const router = Router();
router.post('/cadastrarCliente', ClienteController.cadastrarCliente);
router.delete("/deletar/:idCliente", ClienteController.deletarCliente);
router.get("/listar/:idCliente", ClienteController.procurarCliente);
router.get("/listar", ClienteController.listarCliente);
router.put("/atualizarCliente/:idCliente", ClienteController.atualizarCliente);

export default router;