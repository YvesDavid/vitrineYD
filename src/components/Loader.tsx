import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";

export default function Loader() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  const [impact, setImpact] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById("navbar-logo");

      if (el) {
        const rect = el.getBoundingClientRect();

        setTarget({
          x: rect.left + rect.width / 2 - window.innerWidth / 2,
          y: rect.top + rect.height / 2 - window.innerHeight / 2,
        });

        setReady(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!ready || done) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-[#f7f5f2] flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        initial={{ scale: 5, x: 0, y: 0 }}
        animate={{ scale: 0.28, x: target.x, y: target.y }}
        transition={{
          delay: 2,
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={() => {
          setImpact(true);
          setTimeout(() => setDone(true), 350);
        }}
        className="w-52 h-52 object-contain"
      />

      {/* Pop impact */}
      <AnimatePresence>
  {impact && (
    <>
      {/* Flash central */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 0.28 }}
        className="absolute w-24 h-24 rounded-full"
        style={{
          left: `calc(50% + ${target.x}px - 48px)`,
          top: `calc(50% + ${target.y}px - 48px)`,
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 0 80px rgba(255,255,255,0.95)",
        }}
      />

      {/* Onde dorée principale */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0.95 }}
        animate={{ scale: 9, opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="absolute w-24 h-24 rounded-full border-[3px]"
        style={{
          left: `calc(50% + ${target.x}px - 48px)`,
          top: `calc(50% + ${target.y}px - 48px)`,
          borderColor: "#d6b36a",
          boxShadow: "0 0 24px rgba(214,179,106,0.65)",
        }}
      />

      {/* Onde secondaire douce */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0.75 }}
        animate={{ scale: 12, opacity: 0 }}
        transition={{ duration: 1, delay: 0.06, ease: "easeOut" }}
        className="absolute w-24 h-24 rounded-full border"
        style={{
          left: `calc(50% + ${target.x}px - 48px)`,
          top: `calc(50% + ${target.y}px - 48px)`,
          borderColor: "rgba(214,179,106,0.45)",
        }}
      />

      {/* Particules dorées */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: Math.cos((i / 10) * Math.PI * 2) * 110,
            y: Math.sin((i / 10) * Math.PI * 2) * 110,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.7 }}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            left: `calc(50% + ${target.x}px - 5px)`,
            top: `calc(50% + ${target.y}px - 5px)`,
            background: "#d6b36a",
            boxShadow: "0 0 12px rgba(214,179,106,0.9)",
          }}
        />
      ))}
    </>
  )}
</AnimatePresence>
    </div>
  );
}