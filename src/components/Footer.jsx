import { Facebook, Github, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-blue-800 to-purple-600 
                 dark:from-gray-900 dark:to-gray-800 
                 p-6 md:p-10 text-white dark:text-gray-200 
                 text-center space-y-4 transition-colors duration-300 shadow-md"
    >
      <p className="font-semibold">
        &copy; 2025 Julianna Nicole. Tous droits réservés.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <p>Tél: +261 38 21 829 13</p>

        <Link
          to="mailto:juliannanic1321@gmail.com"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition 
                     transform hover:scale-110 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <Mail size={24} className="text-white dark:text-gray-200" />
        </Link>

        <Link
          to="https://www.facebook.com/fifalianarivonjisoa.julianna.nicole"
          target="_blank"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 
                     transition transform hover:scale-110 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <Facebook size={24} className="text-white dark:text-gray-200" />
        </Link>

        <Link
          to="https://github.com/Julianna-coder"
          target="_blank"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 
                     transition transform hover:scale-110 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <Github size={24} className="text-white dark:text-gray-200" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
