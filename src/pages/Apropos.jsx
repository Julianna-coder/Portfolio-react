import React from "react";
import { Mail, Facebook, Github, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

function Apropos() {
  return (
    <section
      className="
        bg-gradient-to-r from-gray-300 to-purple-200 
        dark:from-gray-800 dark:to-gray-700
        text-gray-800 dark:text-gray-100
        py-16 px-6 md:px-20 shadow-lg max-w-5xl mb-0 mx-auto mt-0
      "
    >
      <h2
        className="
          text-4xl font-bold mb-6 text-center 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-700 to-purple-600
          dark:from-blue-400 dark:to-purple-400
        "
      >
        À propos de moi
      </h2>

      <p className="text-lg leading-relaxed text-center md:text-justify text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
        Bonjour ! Je m'appelle{" "}
        <span className="font-semibold text-blue-700 dark:text-blue-400">
          Julianna
        </span>
        , j'ai 18 ans et je suis passionnée par le{" "}
        <span className="font-semibold text-purple-700 dark:text-purple-400">
          développement web
        </span>
        .  
        J’aime créer des sites modernes, intuitifs et attrayants. J'adore
        apprendre de nouvelles technologies, relever des défis et transformer
        des idées en projets concrets.  
        Mon objectif est de devenir une{" "}
        <span className="italic">développeuse full-stack</span> capable de créer
        des expériences utilisateur élégantes et performantes.
      </p>

      <div className="flex justify-center mt-8">
        <img
          src="/images/Nicole.jpg"
          alt="Julianna"
          className="
            w-40 h-40 rounded-full object-cover 
            border-4 border-blue-500 dark:border-blue-400
            shadow-md hover:scale-105 transition-transform duration-300
          "
        />
      </div>
      <div className="flex justify-center mt-8 gap-6">
        <a
          href="mailto:juliannanic1321@gmail.com"
          className="
            p-3 rounded-full 
            bg-blue-100 text-blue-700 hover:bg-blue-200 
            dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800
            transition transform hover:scale-110
          "
        >
          <Mail size={24} />
        </a>

        <a
          href="https://www.facebook.com/fifalianarivonjisoa.julianna.nicole"
          target="_blank"
          rel="noopener noreferrer"
          className="
            p-3 rounded-full 
            bg-blue-100 text-blue-700 hover:bg-blue-200 
            dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800
            transition transform hover:scale-110
          "
        >
          <Facebook size={24} />
        </a>

        <a
          href="https://github.com/Julianna-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="
            p-3 rounded-full 
            bg-blue-100 text-blue-700 hover:bg-blue-200 
            dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700
            transition transform hover:scale-110
          "
        >
          <Github size={24} />
        </a>

        <Link
          to="/competences"
          className="
            p-3 rounded-full 
            bg-purple-100 text-purple-700 hover:bg-purple-200 
            dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800
            transition transform hover:scale-110
          "
        >
          <Trophy size={24} />
        </Link>
      </div>
    </section>
  );
}

export default Apropos;
