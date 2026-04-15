import { Helmet } from "react-helmet-async";

import Contact from "../pages/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Yves David | Développeur Web Freelance" />
        <meta
          property="og:description"
          content="Création de sites web modernes, design premium et développement sur mesure."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yvesdavid.fr/" />
        <meta property="og:image" content="https://www.yvesdavid.fr/og-cover.jpg" />
      </Helmet>

      <Hero />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}