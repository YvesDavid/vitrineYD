import { motion } from "framer-motion";

function ScreenUI() {
  return (
    <div className="h-full w-full rounded-[22px] bg-white p-4 flex flex-col gap-3">
      <div className="h-8 rounded-xl bg-slate-100" />
      <div className="grid grid-cols-3 gap-3 flex-1">
        <div className="rounded-2xl bg-stone-900 col-span-2" />
        <div className="rounded-2xl bg-slate-100" />
        <div className="rounded-2xl bg-slate-100" />
        <div className="rounded-2xl bg-slate-100" />
        <div className="rounded-2xl bg-slate-100" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="uppercase tracking-[0.28em] text-xs text-stone-400">
          Développeur Web Freelance
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
          Je crée des sites modernes qui donnent envie de vous contacter.
        </h1>

        <p className="mt-7 text-lg text-stone-600 leading-8 max-w-xl">
          Un design soigné, une navigation claire et une image professionnelle.
        </p>
      </motion.div>

      <div className="relative h-[560px]">
        <div className="absolute right-0 top-8 w-[520px] h-[330px] rounded-[32px] bg-stone-900 p-3 shadow-2xl">
          <ScreenUI />
        </div>
      </div>
    </section>
  );
}