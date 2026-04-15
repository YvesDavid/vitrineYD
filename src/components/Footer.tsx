import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 rounded-2xl object-contain border border-stone-200 bg-white"
            />

            <div>
              <div className="text-xl font-semibold">
                Yves David
              </div>

              <div className="text-xs tracking-[0.3em] uppercase text-stone-500 mt-1">
                Web Developer
              </div>
            </div>
          </div>

          <p className="mt-5 text-stone-500 leading-7 max-w-sm">
            Création de sites web modernes, design premium,
            référencement et développement sur mesure.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg">
            Navigation
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-stone-600">
            <Link to="/">Accueil</Link>
            <Link to="/projects">Projets</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg">
            Contact
          </h3>

          <div className="mt-5 space-y-3 text-stone-600">
            <p>contact@email.com</p>
            <p>France</p>
            <p>Disponible pour nouveaux projets</p>
          </div>

          <a
            href="/contact"
            className="btn-dark mt-6"
          >
            Démarrer un projet
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-stone-500 flex flex-col md:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Yves David</p>
          <p>Design & Développement sur mesure</p>
        </div>
      </div>
    </footer>
  );
}