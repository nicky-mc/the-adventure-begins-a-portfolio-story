"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <h1 className="text-4xl font-bold mb-6">The Musings of an Adventurer</h1>
      <Link href="/blogs/create" className="btn btn-accent mb-4">
        Create New Entry
      </Link>
      <Link href="/" className="btn btn-accent mb-4">
        return home
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="card bg-base-100 shadow-md p-4">
              <img
                src={blog.image_url || '/images/placeholder.png'}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-600">By {blog.author}</p>
              <p className="text-sm text-gray-700 mt-2">
                {blog.content.substring(0, 100)}...
              </p>
              <Link href={`/blogs/${blog.id}`} className="btn btn-secondary mt-4 w-full">
                Read More
              </Link>
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}