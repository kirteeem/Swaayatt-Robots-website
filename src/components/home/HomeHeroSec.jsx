export default function HomeHero() {
  return (
    <section className="relative w-full mb-[40vh] min-h-screen overflow-hidden bg-[#020707]">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Home/mission.png"
          alt="Autonomous vehicles"
          className="w-full h-full object-cover  object-bottom scale-[1.05]"
        />
        {/* Dark overlay */}
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="relative z-10 w-[85vw] mx-auto
        pt-32 sm:pt-36 lg:pt-40
        pb-24"
      >
        <h1
          className="text-white font-Montserrat font-medium tracking-wide
          text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[44px]
          leading-[1.45] sm:leading-[1.3]
          max-w-[85vw]"
        >
          Developing autonomous driving technologies
          <br className="hidden sm:block" />
          for the world&apos;s hardest driving scenarios.
        </h1>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
