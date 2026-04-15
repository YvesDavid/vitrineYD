export default function Services() {
  const items = [
    {
      title: "Site vitrine",
      text: "Présentez votre activité avec une image premium et rassurante.",
    },
    {
      title: "Application web",
      text: "Dashboard, espace membre, réservation, outil métier.",
    },
    {
      title: "Refonte & amélioration",
      text: "Moderniser un site existant pour gagner en crédibilité.",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-6 pb-24"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center rounded-[36px] bg-white border border-stone-200 p-8 md:p-12 shadow-sm">
        <div>
          <p className="uppercase tracking-[0.28em] text-xs text-stone-400">
            Services
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Des solutions sur mesure.
          </h2>

          <p className="mt-6 text-stone-600 leading-8 max-w-xl">
            Chaque projet est pensé selon votre besoin réel :
            simplicité, efficacité et résultat.
          </p>
        </div>

        <div className="grid gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl bg-slate-50 border border-stone-200 p-6"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}