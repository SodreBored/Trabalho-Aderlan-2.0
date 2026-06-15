import * as transacoesService from '../services/transacoes.service.js';

export async function listar(req, res, next) {
  try {
    const { mes, ano } = req.query;
    const transacoes = await transacoesService.listarTransacoes({ mes, ano });
    res.json(transacoes);
  } catch (erro) {
    next(erro);
  }
}

export async function criar(req, res, next) {
  try {
    const nova = await transacoesService.criarTransacao(req.body);
    res.status(201).json(nova);
  } catch (erro) {
    next(erro);
  }
}

export async function atualizar(req, res, next) {
  try {
    const atualizada = await transacoesService.atualizarTransacao(req.params.id, req.body);
    res.json(atualizada);
  } catch (erro) {
    next(erro);
  }
}

export async function remover(req, res, next) {
  try {
    await transacoesService.removerTransacao(req.params.id);
    res.status(204).send();
  } catch (erro) {
    next(erro);
  }
}
