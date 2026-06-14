import pool from '../db.js';

export async function listar() {
  const { rows } = await pool.query('SELECT * FROM categorias ORDER BY tipo, nome');
  return rows;
}

export async function buscarPorId(id) {
  const { rows } = await pool.query('SELECT * FROM categorias WHERE id = $1', [id]);
  return rows[0];
}
