import * as resumoService from '../services/resumo.service.js';

export async function obter(req, res, next) {
  try {
    const { mes, ano } = req.query;
    const resumo = await resumoService.gerarResumo({ mes, ano });
    res.json(resumo);
  } catch (erro) {
    next(erro);
  }
}
