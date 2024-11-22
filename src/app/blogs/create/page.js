"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, author, image_url: imageUrl, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Failed to create the blog');
        return;
      }

      setSuccess('Blog created successfully!');
      setTimeout(() => router.push('/blogs'), 2000);
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <h1 className="text-4xl font-bold mb-6">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto bg-neutral p-6 rounded-lg shadow-md">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Create Blog
        </button>
      </form>
    </div>
  );
}