import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

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

type Category =
  | "Tous"
  | "Sites web"
  | "Développement"
  | "Refonte"
  | "Projets perso";

type Project = {
  title: string;
  category: Category;
  images: string[];
};

const restaurantImages = [r1, r2, r3];
const saasImages = [s1, s2, s3];
const ecommerceImages = [e1, e2, e3];

const projects: Project[] = [
  { title: "Restaurant Premium", category: "Sites web", images: restaurantImages },
  { title: "Coach Business", category: "Sites web", images: restaurantImages },
  { title: "Agence Luxe", category: "Sites web", images: restaurantImages },

  { title: "Dashboard CRM", category: "Développement", images: saasImages },
  { title: "Messagerie Temps Réel", category: "Développement", images: saasImages },
  { title: "SaaS Gestion", category: "Développement", images: saasImages },

  { title: "Refonte Artisan", category: "Refonte", images: ecommerceImages },
  { title: "Refonte Cabinet", category: "Refonte", images: ecommerceImages },
  { title: "Refonte E-commerce", category: "Refonte", images: ecommerceImages },

  { title: "App Sport", category: "Projets perso", images: saasImages },
  { title: "Plateforme Entraide", category: "Projets perso", images: saasImages },
  { title: "Mini Réseau Social", category: "Projets perso", images: saasImages },
];

const filters: Category[] = [
  "Tous",
  "Sites web",
  "Développement",
  "Refonte",
  "Projets perso",
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("Tous");

  const filtered =
    active === "Tous"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <Helmet>
        <title>Mes Projets | Yves David</title>

        <meta
          name="description"
          content="Découvrez une sélection de projets web, applications et refontes réalisés avec soin, performance et design moderne."
        />

        <meta
          name="keywords"
          content="portfolio développeur web, projets react, création site web, applications web, refonte site internet"
        />
      </Helmet>

      <section className="section-wrap">
        <div className="text-center">
          <p className="page-label">Portfolio</p>
          <h1 className="page-title">Mes Projets</h1>
          <p className="page-subtitle">
            Une sélection de réalisations pensées pour allier
            image, clarté et efficacité.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={active === filter ? "btn-dark" : "btn-light"}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-3 gap-8 mt-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  desc="Un projet pensé pour allier image, clarté et efficacité."
                  images={project.images}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}