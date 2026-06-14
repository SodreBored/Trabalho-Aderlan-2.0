import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'financas_user',
  password: process.env.DB_PASSWORD || 'financas_pass',
  database: process.env.DB_NAME || 'financas_db',
});

pool.on('error', (err) => {
  console.error('Erro inesperado no pool de conexoes do Postgres:', err);
});

export default pool;
