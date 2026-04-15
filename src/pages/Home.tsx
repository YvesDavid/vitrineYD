import { Helmet } from "react-helmet-async";

import Contact from "../pages/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Yves David",
            url: "https://www.yvesdavid.fr",
            description:
              "Création de sites web modernes, design premium, référencement et développement sur mesure.",
            areaServed: "France",
            knowsAbout: [
              "Développement web",
              "Création de site internet",
              "SEO",
              "React",
              "Vite"
            ]
          })}
        </script>
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