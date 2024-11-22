import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.NEXT_SUPABASE_DB_URL, // Use your database connection URL
});

const db = {
  query: (text, params) => pool.query(text, params),
};

export default db;
