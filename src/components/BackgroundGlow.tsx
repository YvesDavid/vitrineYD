import { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#faf8f5]">
      {/* lumière centrale */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.95), rgba(255,255,255,0.55), transparent 70%)",
        }}
      />

      {/* orb bleu */}
      <div
        className="absolute top-[10%] left-[8%] w-[420px] h-[420px] rounded-full blur-3xl opacity-60 transition-transform duration-300"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.45), transparent 70%)",
        }}
      />

      {/* orb rose */}
      <div
        className="absolute top-[45%] right-[8%] w-[360px] h-[360px] rounded-full blur-3xl opacity-50 transition-transform duration-300"
        style={{
          transform: `translateY(${-scrollY * 0.12}px)`,
          background:
            "radial-gradient(circle, rgba(236,72,153,0.35), transparent 70%)",
        }}
      />

      {/* orb gold */}
      <div
        className="absolute bottom-[5%] left-[35%] w-[420px] h-[420px] rounded-full blur-3xl opacity-45 transition-transform duration-300"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
          background:
            "radial-gradient(circle, rgba(251,191,36,0.30), transparent 70%)",
        }}
      />
    </div>
  );
}