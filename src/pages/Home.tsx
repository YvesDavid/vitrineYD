import { Helmet } from "react-helmet-async";

import Contact from "../pages/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Yves David | Développeur Web Freelance
        </title>

        <meta
          name="description"
          content="Création de sites web modernes, design premium, référencement et développement sur mesure pour professionnels et entreprises."
        />

        <meta
          name="keywords"
          content="développeur web freelance, création site internet, site vitrine, application web, référencement, freelance France"
        />
      </Helmet>

      <Hero />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}