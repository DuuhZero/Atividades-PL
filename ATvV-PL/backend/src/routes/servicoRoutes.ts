import { Router } from 'express';
import ServicoController from '../controllers/servicoController';

const router = Router();

router.get("/listar", ServicoController.listarServico);
router.get("/listar/:idServico", ServicoController.procurarServico);
router.put("/atualizarCliente/:idServico", ServicoController.atualizarServico);
router.post('/cadastrarServico', ServicoController.cadastrarServico);
router.delete("/deletar/:idServico", ServicoController.deletarServico);


router.get("/listarServicoConsumido", ServicoController.listarServicoConsumido);
router.get("/listarCliente", ServicoController.listarClientesMaisConsumiram);
router.get("/listarTipoeRaca", ServicoController.listarServicosMaisConsumidosPorTipoERaca);
router.get("/listarServicoMaisConsumido", ServicoController.listarServicosMaisConsumidos);
router.post('/cadastrarServicoConsumido', ServicoController.cadastrarServicoConsumido);

router.get("/listarClienteValor", ServicoController.listarClientesMaisConsumiramValor);

export default router;