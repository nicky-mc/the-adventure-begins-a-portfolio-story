"use client";
import CharacterSheet from '../components/CharacterSheet';
import SpellBox from '../components/SpellBox';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show or hide the "Return to Top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-6">Nicky Mortoza-Cowles</h1>
        <p className="text-2xl italic">Sorcerer Level 20 (Phoenix Bloodline)</p>
      </header>
      <main className="container mx-auto mt-8">
        <SpellBox />
        <CharacterSheet />
      </main>
      <footer className="mt-8 text-center">
        <div className="mt-4">
          <Link href="/about" className="btn btn-accent mr-4">
            Some of My Story So Far
          </Link>
          <Link href="/blogs" className="btn btn-secondary mr-4">
            Read Blogs
          </Link>
          <Link href="/contact" className="btn btn-accent">
            Contact Me
          </Link>
        </div>
      </footer>

      {/* Return to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}