import { pool } from '../../config/db';

const createUser = async (payload: Record<string, any>) => {
  const { name, email } = payload;
  const result = await pool.query(
    `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`,
    [name, email]
  );
  return result;
};

export const userService = {
  createUser,
};
