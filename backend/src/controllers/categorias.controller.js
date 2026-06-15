import * as categoriasService from '../services/categorias.service.js';

export async function listar(req, res, next) {
  try {
    const categorias = await categoriasService.listarCategorias();
    res.json(categorias);
  } catch (erro) {
    next(erro);
  }
}
