import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  title: string;
  text: string;
  price: string;
  details: string[];
};

const services: Service[] = [
  {
    title: "Site vitrine premium",
    text: "Un site élégant, rapide et pensé pour convertir.",
    price: "À partir de 490€",
    details: [
      "Design premium",
      "Responsive mobile",
      "SEO de base",
      "Formulaire de contact",
      "Livraison rapide",
    ],
  },
  {
    title: "Application web sur mesure",
    text: "Dashboard, réservation, espace membre, outil métier.",
    price: "À partir de 990€",
    details: [
      "Interface sur mesure",
      "Logique métier",
      "Espace utilisateur",
      "Architecture scalable",
      "Évolutif",
    ],
  },
  {
    title: "Refonte stratégique",
    text: "Moderniser votre image et améliorer vos performances.",
    price: "À partir de 390€",
    details: [
      "Audit existant",
      "Nouveau design",
      "Meilleure UX",
      "Optimisation vitesse",
      "Crédibilité renforcée",
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <>
      <Helmet>
        <title>Services Web | Yves David</title>

        <meta
          name="description"
          content="Site vitrine, application web, refonte, référencement : des solutions digitales sur mesure pour développer votre activité."
        />

        <meta
          name="keywords"
          content="création site vitrine, développeur freelance, application web sur mesure, refonte site internet, référencement web"
        />
      </Helmet>

      <section className="section-wrap">
        <div className="text-center max-w-4xl mx-auto">
          <p className="page-label">Services</p>

          <h1 className="page-title">
            Des solutions pensées pour votre activité.
          </h1>

          <p className="page-subtitle">
            Des prestations claires, modernes et orientées résultats.
          </p>
        </div>

        {/* 3 catégories */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {["Design", "Référencement", "Développement"].map((item) => (
            <div
              key={item}
              className="glass-card p-6 text-center"
            >
              <div className="text-xl font-semibold">{item}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(service)}
              className="text-left glass-card p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-stone-900 mb-6" />

              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-stone-500 leading-8">
                {service.text}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-xl w-full rounded-[32px] bg-white p-8 shadow-xl"
              >
                <h2 className="text-3xl font-semibold">
                  {selected.title}
                </h2>

                <p className="mt-4 text-[#d6b36a] font-medium text-lg">
                  {selected.price}
                </p>

                <ul className="mt-6 space-y-3 text-stone-600">
                  {selected.details.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="btn-dark mt-8"
                >
                  Demander un devis
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}