import Contact from "../pages/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}