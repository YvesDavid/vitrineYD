import ContactForm from "../components/ContactForm";
import PageReveal from "../components/PageReveal";

export default function Contact() {
  return (
    <PageReveal>
      <section className="section-wrap">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="page-label">Contact</p>

          <h1 className="page-title">
            Parlons de votre projet.
          </h1>

          <p className="page-subtitle">
            Un besoin simple ou ambitieux ? Échangeons pour
            trouver la meilleure solution.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 mt-20 items-start">
          {/* Formulaire */}
          <ContactForm />

          {/* Infos */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold">
                Réponse rapide
              </h3>

              <p className="mt-4 text-stone-500 leading-8">
                Je réponds généralement sous 24h.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold">
                Contact direct
              </h3>

              <p className="mt-4 text-stone-500 leading-8">
                contact@email.com
              </p>
            </div>

            <div className="rounded-[32px] bg-stone-900 text-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">
                Devis gratuit
              </h3>

              <p className="mt-4 text-stone-300 leading-8">
                Expliquez-moi votre besoin et je vous orienterai
                simplement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}