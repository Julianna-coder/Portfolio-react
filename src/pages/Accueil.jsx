import React from "react";

function Accueil() {
  return (
    <div
      className="relative flex items-center justify-center text-center 
                 h-screen bg-cover bg-center 
                 text-white transition-colors duration-300
                 dark:text-gray-200"
      style={{
        backgroundImage: "url('/images/Fond.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

      <section className="relative z-10 p-10 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Bienvenue sur mon Portfolio
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Bonjour, je suis Julianna
        </h2>
        <p className="text-lg md:text-xl">
          Étudiante en gestion & passionnée du développement web et du design UI.
        </p>
      </section>
    </div>
  );
}

export default Accueil;
