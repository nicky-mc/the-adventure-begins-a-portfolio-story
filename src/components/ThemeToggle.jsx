"use client";
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline btn-primary mt-4"
    >
      Switch to {theme === 'fantasy' ? 'Dark Mode' : 'Fantasy Mode'}
    </button>
  );
}