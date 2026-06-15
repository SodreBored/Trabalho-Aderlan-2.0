import { Router } from 'express';
import * as categoriasController from '../controllers/categorias.controller.js';

const router = Router();

router.get('/', categoriasController.listar);

export default router;
