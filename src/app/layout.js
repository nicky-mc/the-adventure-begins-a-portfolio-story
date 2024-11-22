import './globals.css';
import Header from '@/components/Header'; 
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
