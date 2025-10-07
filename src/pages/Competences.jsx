import React from "react";

function Competences() {
  return (
    <section
      className="
        bg-gradient-to-r from-indigo-50 to-purple-50 
        dark:from-gray-800 dark:to-gray-700
        text-gray-800 dark:text-gray-100
        py-16 px-6 md:px-20 shadow-lg max-w-5xl mx-auto
        transition-colors duration-500 mb-0
      "
    >
      <h2
        className="
          text-4xl font-bold mb-10 text-center text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-700 to-purple-600
          dark:from-blue-400 dark:to-purple-400
        "
      >
        Mes compétences
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "HTML / CSS / JS",
          "TailwindCSS",
          "Git et Github",
          "Django",
          "React",
          "Figma",
        ].map((competence, index) => (
          <li
            key={index}
            className="
              bg-white dark:bg-gray-800 
              p-6 rounded-xl shadow-md hover:shadow-xl 
              transition transform hover:-translate-y-1
              dark:hover:bg-gray-700
            "
          >
            {competence}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Competences;
