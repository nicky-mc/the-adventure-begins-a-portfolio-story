import './globals.css';

export const metadata = {
  title: "Dominique Mortoza-Cowles Portfolio",
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
          <footer className="bg-secondary text-neutral p-4 text-center mt-6">
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
        <h1 className="text-4xl font-bold">Dominique Mortoza-Cowles</h1>
        <nav className="flex gap-4">
          <a href="/" className="btn btn-ghost btn-sm text-neutral">
            Home
          </a>
          <a href="/blogs" className="btn btn-ghost btn-sm text-neutral">
            Blogs
          </a>
          <a href="/projects" className="btn btn-ghost btn-sm text-neutral">
            Projects
          </a>
          <a href="/contact" className="btn btn-ghost btn-sm text-neutral">
            Contact
          </a>
          <a href="/about" className="btn btn-ghost btn-sm text-neutral">
            About Me
          </a>
        </nav>
      </div>
    </header>
  );
}