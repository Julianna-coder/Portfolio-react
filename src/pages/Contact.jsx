import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    emailjs
      .sendForm(
        "service_foj2db3",
        "template_aealg6i",
        form.current,
        "DBoCg1TX_2Jukjfi3"
      )
      .then(
        () => {
          setFeedback("✅ Message envoyé avec succès !");
          e.target.reset();
        },
        (error) => {
          setFeedback("❌ Une erreur est survenue. Veuillez réessayer.");
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100 p-10 shadow-lg max-w-3xl mx-auto transition-colors duration-500 mb-0">
      <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Me contacter
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Nom"
          required
          className="w-full p-3 text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 outline-none transition"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="w-full p-3 text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 outline-none transition"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="w-full p-3 text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 outline-none transition"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-full bg-blue-900 dark:bg-blue-700 text-white font-semibold shadow-lg transition-transform duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-xl"
          }`}
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>

        {feedback && (
          <p className="mt-4 text-center font-medium text-sm text-gray-700 dark:text-gray-200">
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
