import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: "Nicky Mortoza-Cowles Portfolio",
  description: "High-fantasy themed portfolio showcasing Dominique's web development skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-parchment text-ink font-serif">
        {/* Main Layout Container */}
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow container mx-auto p-6">{children}</main>

          {/* Footer */}
          <footer className="bg-black text-neutral p-4 text-center mt-6">
            <p>© {new Date().getFullYear()} Dominique Mortoza-Cowles. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-black text-neutral p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold">Nicky Mortoza-Cowles</h1>
        <nav className="flex gap-4">
          <Link href="/" className="btn btn-ghost btn-sm text-neutral">
            Home
          </Link>
          <Link href="/contact" className="btn btn-ghost btn-sm text-neutral">
            Contact
          </Link>
          <Link href="/about" className="btn btn-ghost btn-sm text-neutral">
            About Me
          </Link>
          <Link href="/blogs" className="btn btn-ghost btn-sm text-neutral">
            Blogs
          </Link>
          <Link href="/projects" className="btn btn-ghost btn-sm text-neutral">
            Projects
          </Link>
         
        </nav>
      </div>
    </header>
  );
}