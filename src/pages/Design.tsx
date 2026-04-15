import { motion } from "framer-motion";
import PageReveal from "../components/PageReveal";

const items = [
  {
    title: "Identité visuelle",
    text: "Créer une image cohérente et professionnelle pour inspirer confiance.",
  },
  {
    title: "UI / UX",
    text: "Des interfaces belles, simples et pensées pour l’utilisateur.",
  },
  {
    title: "Responsive",
    text: "Un rendu premium sur mobile, tablette et ordinateur.",
  },
  {
    title: "Modernisation",
    text: "Rafraîchir une image vieillissante pour gagner en crédibilité.",
  },
  {
    title: "Hiérarchie claire",
    text: "Guider naturellement le regard vers l’essentiel.",
  },
  {
    title: "Conversion",
    text: "Un design qui aide à générer des prises de contact.",
  },
];

export default function Design() {
  return (
        <PageReveal>

<section className="section-wrap">      {/* Hero */}
      <div className="text-center max-w-4xl mx-auto">
<p className="page-label">
              Design
        </p>

        <h1 className="page-title">
          Un design qui donne confiance.
        </h1>

        <p className="page-subtitle">
          Votre image en ligne influence immédiatement la perception
          de votre activité. Un bon design rassure et valorise.
        </p>
      </div>

      {/* Cards */}
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
          Discuter de votre image
        </a>
      </div>
    </section>
        </PageReveal>

  );
}