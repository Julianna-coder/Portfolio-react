import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Trophy, Folder, Phone, Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

 
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="relative z-50">
      <nav
        className={`max-w-7xl px-6 py-10 flex justify-between items-center transition-colors duration-300
        bg-gradient-to-r from-blue-800 to-purple-600 text-white shadow-md
        dark:from-gray-900 dark:to-gray-800 dark:text-gray-200`}
      >
      
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-300"
            src="/images/Nicole.jpg"
            alt="Logo"
          />
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            Julianna Nicole
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <ul
          className={`flex flex-col md:flex-row absolute md:static w-full md:w-auto left-0 top-[80px] md:top-auto px-6 md:px-0 py-6 md:py-0 space-y-6 md:space-y-0 md:space-x-5 font-medium text-[0.9rem] transition-all duration-300 z-50 ${isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 md:opacity-100 md:translate-y-0"
            }`}
        >
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              <Home size={20} /> Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/apropos"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              <Info size={20} /> À propos
            </Link>
          </li>
          <li>
            <Link
              to="/competences"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              <Trophy size={20} /> Compétences
            </Link>
          </li>
          <li>
            <Link
              to="/projets"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              <Folder size={20} /> Projets
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={20} /> Contact
            </Link>
          </li>
          <li><button
            onClick={toggleDarkMode}
            className="hidden md:flex items-center gap-2 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
