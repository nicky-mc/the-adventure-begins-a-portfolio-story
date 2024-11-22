import db from '@/utils/dbConnection';

// Fetch a single blog by ID
export async function GET(req, { params }) {
  const { id } = params;
  try {
    const result = await db.query('SELECT * FROM blogs WHERE id = $1;', [id]);
    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Blog not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error('Failed to fetch blog:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch blog' }), { status: 500 });
  }
}