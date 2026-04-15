import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const points = [
    {
        title: "Optimisation technique",
        text: "Un site rapide, propre et bien structuré pour Google et pour vos visiteurs.",
    },
    {
        title: "Mots-clés stratégiques",
        text: "Identifier les recherches utiles pour attirer de vrais prospects.",
    },
    {
        title: "Contenu efficace",
        text: "Des textes clairs, utiles et pensés pour mieux se positionner.",
    },
    {
        title: "SEO local",
        text: "Être visible dans votre ville et sur Google Maps.",
    },
    {
        title: "Suivi & amélioration",
        text: "Analyser les résultats et améliorer dans le temps.",
    },
    {
        title: "Conversion",
        text: "Transformer les visiteurs en demandes de contact.",
    },
];

export default function Referencement() {
    return (
        <section className="section-wrap">      {/* Hero */}
            <Reveal>
                <div className="text-center max-w-4xl mx-auto">
                    <p className="page-label">
                        Référencement
                    </p>

                    <h1 className="page-title">
                        Être trouvé par les bonnes personnes.
                    </h1>

                    <p className="page-subtitle">
                        Le référencement naturel permet à votre site d’apparaître
                        sur Google lorsqu’un client recherche vos services.
                    </p>
                </div>
            </Reveal>

            {/* Pourquoi */}
            <div className="mt-24 grid md:grid-cols-2 gap-10 items-center">
                <div className="rounded-[32px] bg-white border border-stone-200 p-10 shadow-sm">
                    <h2 className="text-4xl font-semibold">
                        Pourquoi c’est important ?
                    </h2>

                    <div className="mt-6 space-y-4 text-stone-600 leading-8">
                        <p>• Plus de visibilité</p>
                        <p>• Plus de trafic qualifié</p>
                        <p>• Plus de crédibilité</p>
                        <p>• Des prospects réguliers</p>
                        <p>• Un investissement durable</p>
                    </div>
                </div>

                <div className="rounded-[32px] bg-stone-900 text-white p-10">
                    <div className="text-6xl font-semibold">+ Visibilité</div>
                    <p className="mt-4 text-stone-300 text-lg">
                        Votre site travaille pour vous 24h/24.
                    </p>
                </div>
            </div>

            {/* Prestations */}
            <div className="mt-28">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-semibold">
                        Ce que je peux améliorer
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-14">
                    {points.map((item, i) => (
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
            </div>

            {/* Tarifs */}
            <div className="mt-28 rounded-[36px] bg-white border border-stone-200 p-10 md:p-14 shadow-sm">
                <p className="uppercase tracking-[0.3em] text-xs text-stone-500">
                    Tarifs indicatifs
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                    Des solutions adaptées.
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {[
                        ["Audit SEO", "À partir de 190€"],
                        ["Optimisation SEO", "À partir de 390€"],
                        ["Suivi mensuel", "À partir de 290€/mois"],
                    ].map((item, i) => (
                        <div key={i} className="rounded-3xl bg-stone-50 p-6">
                            <div className="text-xl font-semibold">{item[0]}</div>
                            <div className="mt-3 text-[#d6b36a] font-medium">
                                {item[1]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-24">
                <h2 className="text-4xl md:text-5xl font-semibold">
                    Parlons de votre visibilité.
                </h2>

                <p className="mt-5 text-stone-500 text-lg">
                    Un premier échange simple pour voir ce qui est possible.
                </p>

                <a
                    href="/contact"
                    className="inline-block mt-8 px-8 py-4 rounded-full bg-stone-900 text-white"
                >
                    Demander un devis
                </a>
            </div>

            <Reveal>
                <section className="mt-28">
                    <div className="text-center">
                        <p className="uppercase tracking-[0.3em] text-xs text-stone-500">
                            Résultat concret
                        </p>

                        <h2 className="mt-4 text-4xl md:text-6xl font-semibold">
                            Avant / Après optimisation SEO
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-14">
                        {/* Avant */}
                        <div className="rounded-[32px] bg-white border border-stone-200 p-8 shadow-sm">
                            <div className="text-sm uppercase tracking-[0.2em] text-stone-400">
                                Avant
                            </div>

                            <h3 className="mt-4 text-3xl font-semibold">
                                Site invisible
                            </h3>

                            <div className="mt-6 space-y-4 text-stone-500 leading-8">
                                <p>• Peu trouvé sur Google</p>
                                <p>• Temps de chargement lent</p>
                                <p>• Peu de visites qualifiées</p>
                                <p>• Peu de demandes</p>
                            </div>
                        </div>

                        {/* Après */}
                        <div className="rounded-[32px] bg-stone-900 text-white p-8 shadow-sm">
                            <div className="text-sm uppercase tracking-[0.2em] text-stone-400">
                                Après
                            </div>

                            <h3 className="mt-4 text-3xl font-semibold">
                                Site performant
                            </h3>

                            <div className="mt-6 space-y-4 text-stone-300 leading-8">
                                <p>• Mieux positionné</p>
                                <p>• Chargement rapide</p>
                                <p>• Plus de trafic ciblé</p>
                                <p>• Plus de contacts</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Reveal>
        </section>
    );
}