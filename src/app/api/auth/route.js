import db from '@/utils/dbConnection';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'd.mortozacowles@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Charlie1978!';

// Fetch all blogs
export async function GET(req) {
  try {
    const blogs = await db.query('SELECT * FROM blogs ORDER BY created_at DESC;');
    return new Response(JSON.stringify(blogs.rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch blogs' }), { status: 500 });
  }
}

// Authenticate user
async function authenticate(req) {
  const { email, password } = await req.json();
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

// Create a new blog
export async function POST(req) {
  try {
    if (!(await authenticate(req))) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { title, content, author, image_url } = await req.json();
    const result = await db.query(
      'INSERT INTO blogs (title, content, author, image_url) VALUES ($1, $2, $3, $4) RETURNING *;',
      [title, content, author, image_url]
    );
    return new Response(JSON.stringify(result.rows[0]), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create blog' }), { status: 500 });
  }
}

// Update a blog
export async function PUT(req) {
  try {
    if (!(await authenticate(req))) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { id, title, content, author, image_url } = await req.json();
    const result = await db.query(
      'UPDATE blogs SET title = $1, content = $2, author = $3, image_url = $4 WHERE id = $5 RETURNING *;',
      [title, content, author, image_url, id]
    );
    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update blog' }), { status: 500 });
  }
}

// Delete a blog
export async function DELETE(req) {
  try {
    if (!(await authenticate(req))) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { id } = await req.json();
    await db.query('DELETE FROM blogs WHERE id = $1;', [id]);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete blog' }), { status: 500 });
  }
}