import { Router } from 'express';
import * as resumoController from '../controllers/resumo.controller.js';

const router = Router();

router.get('/', resumoController.obter);

export default router;
