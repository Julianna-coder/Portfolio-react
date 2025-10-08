import React from "react";

function Projets() {
  return (
    <section
      className="
        bg-gradient-to-r from-indigo-50 to-purple-50 
        dark:from-gray-800 dark:to-gray-700
        text-gray-800 dark:text-gray-100
        p-10 shadow-lg max-w-5xl mx-auto
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
        Mes projets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            titre: "Mon portfolio",
            description: "Vous trouverez tous mes formulaires dans ce site.",
            lien: "https://portfolio-react-beryl-chi.vercel.app",
          },
          {
            titre: "E-commerce",
            description:
              "Site de vente en ligne : ajoutez vos produits au panier et envoyez-les.",
            lien: "https://fmarkets.netlify.app",
          },
          {
            titre: "Réservation en ligne",
            description:
              "Réservez en ligne l'hôtel où vous voulez passer vos séjours ou vacances.",
            lien: "https://freservation.netlify.app",
          },
          {
            titre: "Mon blog",
            description:
              "Sur ce site, il y a tous les projets que je fais avec leurs explications de fonctionnement.",
            lien: "https://blog-livid-eta-52.vercel.app",
          },
          {
            titre: "Restaurant",
            description:
              "Cet un site de commande de repas en ligne ou réserver de table dans un restaurant.",
            lien: "https://restaurant-steel-one.vercel.app",
          },
        ].map((projet, index) => (
          <div
            key={index}
            className="
              bg-white dark:bg-gray-800 
              p-6 rounded-lg shadow hover:shadow-xl 
              transition transform hover:-translate-y-1 
              dark:hover:bg-gray-700
            "
          >
            <h3 className="text-purple-800 dark:text-purple-400 font-semibold text-2xl mb-2">
              {projet.titre}
            </h3>
            <p className="mb-3">{projet.description}</p>
            <a
              href={projet.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-blue-700 hover:bg-blue-800 
                dark:bg-blue-600 dark:hover:bg-blue-700
                p-2 rounded-lg m-1 text-white inline-block transition
              "
            >
              Voir le Site
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projets;
