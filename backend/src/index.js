import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import transacoesRoutes from './routes/transacoes.routes.js';
import categoriasRoutes from './routes/categorias.routes.js';
import resumoRoutes from './routes/resumo.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Camada de Apresentacao da API (rotas -> controllers)
app.use('/api/transacoes', transacoesRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/resumo', resumoRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Tratamento de erros centralizado
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    erro: err.message || 'Erro interno do servidor',
    detalhes: err.detalhes,
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API de financas rodando na porta ${PORT}`);
});
