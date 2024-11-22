import CharacterSheet from '../components/CharacterSheet';
import SpellBox from '../components/SpellBox';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-6">Dominique Mortoza-Cowles</h1>
        <p className="text-2xl italic">Sorcerer Level 20 (Phoenix Bloodline)</p>
      </header>
      <main className="container mx-auto mt-8">
        <SpellBox />
        <CharacterSheet />
      </main>
      <footer className="mt-8 text-center">
        <div className="mt-4">
          <Link href="/blogs" className="btn btn-secondary mr-4">
            Read Blogs
          </Link>
          <Link href="/contact" className="btn btn-accent">
            Contact Me
          </Link>
        </div>
      </footer>
    </div>
  );
}
