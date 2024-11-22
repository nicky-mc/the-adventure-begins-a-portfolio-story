import Link from 'next/link';

function Header() {
  return (
    <header className="bg-black text-neutral p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Site Title */}
        <h1 className="text-4xl font-bold">Nicky Mortoza-Cowles</h1>

        {/* Dropdown Navigation */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4">
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

export default Header;
