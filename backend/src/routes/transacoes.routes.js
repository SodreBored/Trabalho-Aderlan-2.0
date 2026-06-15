import { Router } from 'express';
import * as transacoesController from '../controllers/transacoes.controller.js';

const router = Router();

router.get('/', transacoesController.listar);
router.post('/', transacoesController.criar);
router.put('/:id', transacoesController.atualizar);
router.delete('/:id', transacoesController.remover);

export default router;
