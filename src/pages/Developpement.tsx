import { motion } from "framer-motion";

const items = [
  {
    title: "Applications web",
    text: "Dashboard, espace membre, réservation, outils internes ou SaaS.",
  },
  {
    title: "Fonctionnalités sur mesure",
    text: "Créer exactement ce dont votre activité a besoin.",
  },
  {
    title: "Performance",
    text: "Des interfaces rapides, fluides et agréables à utiliser.",
  },
  {
    title: "Architecture propre",
    text: "Un code structuré pour évoluer facilement dans le temps.",
  },
  {
    title: "Automatisation",
    text: "Gagner du temps avec des processus simplifiés.",
  },
  {
    title: "Évolutivité",
    text: "Une base solide pour ajouter de nouvelles fonctionnalités.",
  },
];

export default function Developpement() {
  return (
<section className="section-wrap">      {/* Hero */}
      <div className="text-center max-w-4xl mx-auto">
<p className="page-label">
              Développement
        </p>

        <h1 className="page-title">
          Des outils conçus pour avancer.
        </h1>

        <p className="page-subtitle">
          Au-delà d’un site vitrine, je peux créer des solutions
          concrètes qui simplifient votre activité.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="rounded-[28px] bg-white border border-stone-200 p-8 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-stone-900 mb-5" />

            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-4 text-stone-500 leading-8">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-stone-900 text-white"
        >
          Parler de votre projet
        </a>
      </div>
    </section>
  );
}