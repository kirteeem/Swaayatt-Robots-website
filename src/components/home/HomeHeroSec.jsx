export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#020707]">
      
      {/* ================= GRADIENT LAYERS ================= */}

      {/* Base diagonal teal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d4748] via-[#0b1e1d] to-black" />

      {/* Center vignette (slightly left focused like Figma) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_45%,rgba(12, 79, 80, 0.83)_0%,rgba(0,0,0,0.85)_65%,rgba(0,0,0,1)_100%)]" />

      {/* Right-side dark fade (important for Figma look) */}
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/10 to-transparent" />

      {/* Top dark fade */}
      <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-black via-black/40 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div
        className="relative z-10 w-[85vw] mx-auto
        pt-32 sm:pt-36 lg:pt-40
        pb-24"
      >
        {/* Heading */}
        <h1
          className="text-white font-Montserrat  sm:mb-0 mb-10  font-medium tracking-wide
          text-[24px]  sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[44px]
          leading-[1.45] sm:leading-[1.3]
          max-w-[85vw]"
        >
          Developing autonomous driving technologies
          <br className="hidden sm:block" />
          for the world&apos;s hardest driving scenarios.
        </h1>

        {/* ================= SWAAYATT TEXT ================= */}
        {/* Positioned so image hides it naturally */}
        <div
          className="pointer-events-none sm:mt-0 mt-3 select-none absolute
          left-1/2 -translate-x-1/2
          top-[72%] sm:top-[90%] md:top-[75%]
          text-white/10
          tracking-[0.30em]


          font-extrabold
          
          text-[11vw] sm:text-[150px] md:text-[11vw] lg:text-[200px]
          whitespace-nowrap
          z-0"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          SWAAYATT
        </div>
      </div>

      {/* ================= VEHICLE IMAGE ================= */}
      <div
        className="relative z-20 w-[85vw] mb-40 md:mb-60 sm:mb-52 mx-auto
        mt-[-80px] sm:mt-[-110px] lg:mt-[-140px]"
      >
        <img
          src="/images/Home/head.webp"
          alt="Autonomous vehicles"
          className="w-full object-contain scale-[1.02]"
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
