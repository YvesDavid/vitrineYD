export default function ContactForm() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 pb-24"
    >
      <div className="rounded-[36px] bg-stone-900 text-white p-10 md:p-16">
        <p className="uppercase tracking-[0.28em] text-xs text-stone-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
          Parlons de votre projet.
        </h2>

        <p className="mt-6 text-slate-300 max-w-2xl text-lg leading-8">
          Un besoin simple ou ambitieux ? Discutons ensemble
          de la meilleure solution pour votre activité.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="mailto:contact@email.com"
            className="px-7 py-4 rounded-full bg-white text-stone-900 font-medium"
          >
            Envoyer un email
          </a>

          <a
            href="#projects"
            className="px-7 py-4 rounded-full border border-slate-600 text-white font-medium"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}