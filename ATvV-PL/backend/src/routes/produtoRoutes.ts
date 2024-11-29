import { Router } from 'express';
import ProdutoController from '../controllers/produtoController';

const router = Router();
router.delete("/deletar/:idProduto", ProdutoController.deletarProduto);
router.post('/cadastrarProduto', ProdutoController.cadastrarProduto);
router.get("/listar/:idProduto", ProdutoController.procurarProduto);
router.get("/listar", ProdutoController.listarProduto);
router.put("/atualizarCliente/:idProduto", ProdutoController.atualizarProduto);
router.get("/listarProdutoMaisConsumido", ProdutoController.listarProdutosMaisConsumidos);
router.get("/listarTipoeRaca", ProdutoController.listarProdutosMaisConsumidosPorTipoERaca);
router.get("/listarClienteValor", ProdutoController.listarClientesMaisConsumiramValor);
router.get("/listarProdutoConsumido", ProdutoController.listarProdutoConsumido);
router.get("/listarCliente", ProdutoController.listarClientesMaisConsumiram);
router.post('/cadastrarProdutoConsumido', ProdutoController.cadastrarProdutoConsumido);

export default router;