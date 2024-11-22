"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function BlogDetail() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const [blog, setBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', author: '', image_url: '', email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) {
          throw new Error('Blog not found');
        }
        const data = await res.json();
        setBlog(data);
        setForm(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBlog();
  }, [id]);

  const handleEdit = async () => {
    try {
      const res = await fetch('/api/blogs', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, id }),
      });

      if (res.ok) {
        setBlog({ ...blog, ...form });
        setIsEditing(false);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to update the blog');
      }
    } catch (error) {
      setError('An error occurred.');
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/blogs" className="btn btn-accent mb-4">
          Back to Blogs
        </Link>
        {error && <p className="text-red-500">{error}</p>}
        {isEditing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit();
            }}
          >
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="input input-bordered w-full mb-4"
            />
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="textarea textarea-bordered w-full mb-4"
            />
            <input
              type="text"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="input input-bordered w-full mb-4"
            />
            <input
              type="url"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              className="input input-bordered w-full mb-4"
            />
            <input
              type="email"
              placeholder="Admin Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input input-bordered w-full mb-4"
              required
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input input-bordered w-full mb-4"
              required
            />
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        ) : (
          <>
            <img
              src={blog.image_url || '/images/placeholder.png'}
              alt={blog.title}
              className="w-full h-60 object-contain mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-sm text-gray-600 mb-4">By {blog.author}</p>
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <button onClick={() => setIsEditing(true)} className="btn btn-secondary mt-4">
              Edit Blog
            </button>
          </>
        )}
      </div>
    </div>
  );
}
