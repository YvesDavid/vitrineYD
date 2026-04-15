import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Loader from "./components/Loader";
import BackgroundGlow from "./components/BackgroundGlow";

import Home from "./pages/Home";
import Projects from "./pages/ProjectsPage";
import Services from "./pages/Services";
import Referencement from "./pages/Referencement";
import Developpement from "./pages/Developpement";
import Design from "./pages/Design";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-stone-900 relative overflow-hidden">
      <Loader />
      <BackgroundGlow />
      <Header />

<div className="relative z-10 pt-52 md:pt-56">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/referencement" element={<Referencement />} />
          <Route path="/design" element={<Design />} />
          <Route path="/developpement" element={<Developpement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}