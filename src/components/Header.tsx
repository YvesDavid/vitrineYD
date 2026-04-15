import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-stone-900 font-semibold"
      : "text-stone-500";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pt-5">

        {/* Branding initial */}
        <motion.div
          animate={{
            opacity: scrolled ? 0 : 1,
            height: scrolled ? 0 : "auto",
            marginBottom: scrolled ? 0 : 18,
          }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <img
              id="navbar-logo"
              src={logo}
              alt="Logo"
              className="h-14 w-14 rounded-2xl object-contain bg-white shadow-sm border border-stone-200"
            />

            <div>
              <div className="text-5xl font-semibold tracking-tight leading-none">
                Yves David
              </div>

              <div className="text-sm tracking-[0.35em] uppercase text-stone-500 mt-2">
                Web Developer
              </div>
            </div>
          </div>

          <div className="italic text-stone-400 hidden md:block">
            #Aimons nous les uns les autres<br />
            1 Jean 4:7
          </div>
        </motion.div>

        {/* Navbar */}
        <motion.div
          animate={{
            height: scrolled ? 72 : 64,
            borderRadius: scrolled ? 0 : 999,
            paddingLeft: scrolled ? 28 : 20,
            paddingRight: scrolled ? 28 : 20,
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0.78)",
            y: scrolled ? -20 : 0,
          }}
          transition={{ duration: 0.35 }}
          className="border border-stone-200 shadow-sm backdrop-blur-xl flex items-center"
        >
          {/* Logo scroll */}
          <motion.div
            animate={{
              opacity: scrolled ? 1 : 0,
              width: scrolled ? 56 : 0,
            }}
            className="overflow-hidden"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
          </motion.div>

          {/* Centre */}
          <div className="flex-1 text-center">
            <motion.div
              animate={{
                opacity: scrolled ? 1 : 0,
                y: scrolled ? 0 : 8,
              }}
              transition={{ duration: 0.25 }}
              className="text-sm md:text-base tracking-[0.35em] uppercase text-stone-700 font-medium"
            >
              Web Developer
            </motion.div>
          </div>

          {/* Menu */}
         {/* Desktop nav */}
<nav className="hidden md:flex gap-6 md:gap-8 text-sm text-stone-600 items-center">
  <Link to="/" className={isActive("/")}>Accueil</Link>
  <Link to="/projects" className={isActive("/projects")}>Projets</Link>
  <Link to="/services" className={isActive("/services")}>Services</Link>
  <Link to="/contact" className={isActive("/contact")}>Contact</Link>
</nav>

{/* Mobile button */}
<button
  onClick={() => setMobileOpen(true)}
  className="md:hidden h-11 w-11 rounded-full border border-stone-200 bg-white flex items-center justify-center"
>
  <Menu size={18} />
</button>
        </motion.div>
      </div>

      {mobileOpen && (
  <div className="md:hidden fixed inset-0 z-[80] bg-black/30 backdrop-blur-sm">
    <div className="absolute top-4 right-4 left-4 rounded-[28px] bg-white p-6 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <div className="font-semibold">Menu</div>

        <button
          onClick={() => setMobileOpen(false)}
          className="h-10 w-10 rounded-full bg-stone-100 flex items-center justify-center"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {[
          ["Accueil", "/"],
          ["Projets", "/projects"],
          ["Services", "/services"],
          ["Contact", "/contact"],
        ].map(([label, path]) => (
          <Link
            key={label}
            to={path}
            onClick={() => setMobileOpen(false)}
            className="h-14 rounded-2xl bg-stone-50 px-5 flex items-center"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  </div>
)}
    </header>
  );
}