import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/ContactForm";
import BackgroundGlow from "./components/BackgroundGlow";
import Loader from "./components/Loader";

export default function App() {
  return (
<main className="min-h-screen bg-[#faf8f5] text-stone-900 relative overflow-hidden">
<Loader />
  <BackgroundGlow />

  <div className="relative z-10">
    <Header />
    <Hero />
    <Projects />
    <Services />
    <Contact />
  </div>
</main>
  );
}