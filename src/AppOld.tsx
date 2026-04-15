import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScreenUI(){return <div className='h-full w-full rounded-[22px] bg-white p-4 flex flex-col gap-3'>
<div className='h-8 rounded-xl bg-slate-100 flex items-center px-3 gap-2'><div className='h-3 w-3 rounded-full bg-red-300'/><div className='h-3 w-3 rounded-full bg-yellow-300'/><div className='h-3 w-3 rounded-full bg-green-300'/></div>
<div className='grid grid-cols-3 gap-3 flex-1'>
<div className='rounded-2xl bg-stone-900 col-span-2 p-4 text-white flex flex-col justify-end'><div className='text-xs uppercase text-slate-300'>Agence</div><div className='text-2xl font-semibold mt-2'>Une image premium.</div></div>
<div className='rounded-2xl bg-slate-100'/>
<div className='rounded-2xl bg-slate-100'/><div className='rounded-2xl bg-slate-100'/><div className='rounded-2xl bg-slate-100'/></div></div>}

function ProjectSlider({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const slides = [1, 2, 3];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="rounded-[28px] bg-white border border-stone-200 p-5 shadow-sm hover:shadow-xl transition smooth-card">
      <div className="rounded-2xl bg-slate-100 p-3 h-56 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-3"
          >
            {index === 0 && (
              <div className="h-full rounded-2xl bg-stone-900 p-4 text-white flex items-end text-xl font-semibold">
                Dashboard moderne
              </div>
            )}

            {index === 1 && (
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="rounded-2xl bg-white"></div>
                <div className="rounded-2xl bg-white"></div>
                <div className="rounded-2xl bg-white col-span-2"></div>
              </div>
            )}

            {index === 2 && (
              <div className="h-full rounded-2xl bg-gradient-to-br from-blue-200 to-white"></div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? 'bg-stone-900' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prev}
          className="h-9 w-9 rounded-full border border-slate-300 bg-white"
        >
          ←
        </button>

        <button
          onClick={next}
          className="h-9 w-9 rounded-full border border-slate-300 bg-white"
        >
          →
        </button>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-stone-600 leading-7">{desc}</p>

      <a
        href="#"
        className="inline-block mt-5 px-5 py-3 rounded-full bg-stone-900 text-white text-sm font-medium"
      >
        Voir le projet
      </a>
    </div>
  );
}

export default function App(){return <main className='min-h-screen bg-[#faf8f5] text-stone-900'>
<header className='fixed top-0 inset-x-0 z-50'><div className='max-w-6xl mx-auto px-6 pt-5'><div className='h-16 rounded-full bg-white/90 backdrop-blur-xl border border-stone-200 shadow-sm px-6 flex items-center justify-between'><div className='font-semibold'>Yves David</div><nav className='hidden md:flex gap-8 text-sm text-stone-500'><a href='#'>Accueil</a><a href='#'>Projets</a><a href='#'>Tarifs</a><a href='#'>Contact</a></nav></div></div></header>
<section className='max-w-6xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-16 items-center'>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
<p className='uppercase tracking-[0.28em] text-xs text-stone-400'>Développeur Web Freelance</p>
<h1 className='mt-5 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]'>Je crée des sites modernes qui donnent envie de vous contacter.</h1>
<p className='mt-7 text-lg text-stone-600 leading-8 max-w-xl'>Un design soigné, une navigation claire et une image professionnelle pour inspirer confiance dès les premières secondes.</p>
<div className='mt-10 flex gap-4 flex-wrap'><a href='#' className='px-7 py-4 rounded-full bg-stone-900 text-white font-medium'>Voir mes projets</a><a href='#' className='px-7 py-4 rounded-full border border-slate-300 bg-white font-medium'>Discuter de votre projet</a></div>
</motion.div>
<motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.1,duration:.8}} className='relative h-[560px]'>
<div className='absolute right-0 top-8 w-[520px] h-[330px] rounded-[32px] bg-stone-900 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.22)]'><ScreenUI/></div>
<div className='absolute left-8 bottom-0 w-[180px] h-[360px] floaty rounded-[38px] bg-black p-2 shadow-2xl'><div className='h-full w-full rounded-[30px] bg-white p-3'><div className='h-24 rounded-2xl bg-stone-900'/><div className='mt-3 space-y-3'><div className='h-12 rounded-xl bg-slate-100'/><div className='h-12 rounded-xl bg-slate-100'/><div className='h-12 rounded-xl bg-slate-100'/></div></div></div>
<div className='absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 to-white blur-3xl'/>
</motion.div>
</section>

<section className='max-w-6xl mx-auto px-6 pb-24'>
  <div className='mb-12'>
    <p className='uppercase tracking-[0.28em] text-xs text-stone-400'>Projets</p>
    <h2 className='mt-3 text-4xl md:text-6xl font-semibold tracking-tight'>Quelques réalisations premium.</h2>
    <p className='mt-4 text-stone-600 max-w-2xl leading-8'>Chaque projet est pensé pour être beau, simple à utiliser et efficace.</p>
  </div>

<div className='grid md:grid-cols-3 gap-6'>
  {[
    ['Plateforme d’entraide','Connexion simple entre besoins et aides disponibles.'],
    ['Messagerie temps réel','Chat moderne avec salons privés et échanges fluides.'],
    ['Application sport','Suivi des exercices, progression et motivation.']
  ].map((item,i)=>(
    <ProjectSlider
      key={i}
      title={item[0]}
      desc={item[1]}
    />
  ))}
</div>
</section>

<section className='max-w-6xl mx-auto px-6 pb-24'>
  <div className='grid md:grid-cols-2 gap-8 items-center rounded-[36px] bg-white border border-stone-200 p-8 md:p-12 shadow-sm'>
    <div>
      <p className='uppercase tracking-[0.28em] text-xs text-stone-400'>Services</p>
      <h2 className='mt-4 text-4xl md:text-6xl font-semibold tracking-tight'>Des solutions sur mesure, sans complexité inutile.</h2>
      <p className='mt-6 text-stone-600 leading-8 max-w-xl'>Chaque projet est pensé selon votre besoin réel : présence en ligne, automatisation, image de marque ou outil interne. L’objectif est toujours le même : simplicité, efficacité et résultat.</p>
      <a href='#' className='inline-block mt-8 px-7 py-4 rounded-full bg-stone-900 text-white font-medium'>Parler de votre besoin</a>
    </div>
    <div className='grid gap-4'>
      <div className='rounded-3xl bg-slate-50 border border-stone-200 p-6'><h3 className='text-xl font-semibold'>Site vitrine</h3><p className='mt-2 text-stone-600'>Présenter votre activité avec une image premium et rassurante.</p></div>
      <div className='rounded-3xl bg-slate-50 border border-stone-200 p-6'><h3 className='text-xl font-semibold'>Application web</h3><p className='mt-2 text-stone-600'>Dashboard, espace membre, réservation, outil métier.</p></div>
      <div className='rounded-3xl bg-slate-50 border border-stone-200 p-6'><h3 className='text-xl font-semibold'>Refonte & amélioration</h3><p className='mt-2 text-stone-600'>Moderniser un site existant pour gagner en crédibilité.</p></div>
    </div>
  </div>
</section>

<section className='max-w-6xl mx-auto px-6 pb-24'>
  <div className='text-center max-w-3xl mx-auto'>
    <p className='uppercase tracking-[0.28em] text-xs text-stone-400'>Pourquoi me choisir</p>
    <h2 className='mt-4 text-4xl md:text-6xl font-semibold tracking-tight'>Un partenaire simple, sérieux et impliqué.</h2>
    <p className='mt-6 text-stone-600 leading-8'>Au-delà du code, je cherche à comprendre votre besoin pour proposer une solution claire, utile et durable.</p>
  </div>
  <div className='grid md:grid-cols-3 gap-6 mt-12'>
    <div className='rounded-3xl bg-white border border-stone-200 p-8 shadow-sm'><h3 className='text-xl font-semibold'>Écoute & clarté</h3><p className='mt-3 text-stone-600'>Des échanges simples, sans jargon inutile.</p></div>
    <div className='rounded-3xl bg-white border border-stone-200 p-8 shadow-sm'><h3 className='text-xl font-semibold'>Design & impact</h3><p className='mt-3 text-stone-600'>Un rendu moderne qui valorise votre image.</p></div>
    <div className='rounded-3xl bg-white border border-stone-200 p-8 shadow-sm'><h3 className='text-xl font-semibold'>Fiabilité</h3><p className='mt-3 text-stone-600'>Un projet mené proprement, avec suivi et sérieux.</p></div>
  </div>
</section>

<section className='max-w-6xl mx-auto px-6 pb-24'>
  <div className='rounded-[36px] bg-stone-900 text-white p-10 md:p-16'>
    <p className='uppercase tracking-[0.28em] text-xs text-stone-400'>Contact</p>
    <h2 className='mt-4 text-4xl md:text-6xl font-semibold tracking-tight'>Parlons de votre projet.</h2>
    <p className='mt-6 text-slate-300 max-w-2xl text-lg leading-8'>Un besoin simple ou ambitieux ? Discutons ensemble de la meilleure solution pour votre activité.</p>
    <div className='mt-8 flex gap-4 flex-wrap'>
      <a href='mailto:contact@email.com' className='px-7 py-4 rounded-full bg-white text-stone-900 font-medium'>Envoyer un email</a>
      <a href='#' className='px-7 py-4 rounded-full border border-slate-600 text-white font-medium'>Voir mes projets</a>
    </div>
  </div>
</section>
<style>{`@media (max-width: 768px){section{scroll-margin-top:90px} h1{font-size:42px!important;line-height:1.05!important} h2{font-size:34px!important;line-height:1.1!important} .mobile-stack{grid-template-columns:1fr!important} } .smooth-card{transition:transform .25s ease, box-shadow .25s ease} .smooth-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,.08)} @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}} .floaty{animation:floaty 4s ease-in-out infinite}`}</style></main>}
