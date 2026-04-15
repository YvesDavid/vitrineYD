import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

/* Images */
import r1 from "../assets/projects/restaurant_1.png";
import r2 from "../assets/projects/restaurant_2.png";
import r3 from "../assets/projects/restaurant_3.png";

import s1 from "../assets/projects/saas_1.png";
import s2 from "../assets/projects/saas_2.png";
import s3 from "../assets/projects/saas_3.png";

import e1 from "../assets/projects/ecommerce_1.png";
import e2 from "../assets/projects/ecommerce_2.png";
import e3 from "../assets/projects/ecommerce_3.png";

const projects = [
  {
    title: "Plateforme d’entraide",
    desc: "Connexion simple entre besoins et aides disponibles.",
    category: "Projet perso",
    images: [s1, s2, s3],
  },
  {
    title: "Messagerie temps réel",
    desc: "Chat moderne avec salons privés et échanges fluides.",
    category: "Développement",
    images: [r1, r2, r3],
  },
  {
    title: "Application sport",
    desc: "Suivi des exercices, progression et motivation.",
    category: "Application",
    images: [e1, e2, e3],
  },
];

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 pb-24"
      >
        <p className="page-label">Projets</p>

        <h2 className="mt-3 text-4xl md:text-6xl font-semibold">
          Quelques réalisations premium.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              desc={project.desc}
              category={project.category}
              images={project.images}
            />
          ))}
        </div>
      </section>
    </Reveal>
  );
}