export default function BackgroundGlowwaves() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#faf8f5]">
      {/* vague 1 */}
      <div
        className="absolute -top-32 left-[-10%] w-[120%] h-[420px] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.22), transparent 45%), radial-gradient(circle at 70% 50%, rgba(236,72,153,0.18), transparent 45%)",
          animation: "wave 14s ease-in-out infinite",
        }}
      />

      {/* vague 2 */}
      <div
        className="absolute top-[35%] right-[-15%] w-[120%] h-[380px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 50%, rgba(251,191,36,0.18), transparent 45%), radial-gradient(circle at 75% 50%, rgba(59,130,246,0.14), transparent 45%)",
          animation: "wave 18s ease-in-out infinite reverse",
        }}
      />

      {/* vague 3 */}
      <div
        className="absolute bottom-[-80px] left-[-10%] w-[120%] h-[360px] opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(244,114,182,0.14), transparent 45%), radial-gradient(circle at 20% 50%, rgba(255,255,255,0.9), transparent 35%)",
          animation: "wave 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}