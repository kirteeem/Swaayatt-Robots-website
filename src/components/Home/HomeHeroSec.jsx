export default function HomeHero() {
  return (
    <section className="relative w-full mb-[60vh] min-h-screen overflow-hidden bg-black">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Home/mission.png"
          alt="Autonomous vehicles"
          className="w-full h-full  object-cover  object-bottom scale-[1.05]"
        />
      </div>

      {/* Top blur/fade overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-black via-black/90 to-transparent z-0" /> */}


      {/* ================= CONTENT ================= */}
      <div
        className="relative z-10 w-[85vw] mx-auto
        pt-32 sm:pt-36 lg:pt-40
        pb-24"
      >
        <p
          style={{ fontFamily: '"Rethink Sans", "sans-serif"' }}

          className="text-gray-300 tracking-wide  font-[200]    text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[44px] leading-[1.45] sm:leading-[1.3]
          max-w-[85vw]"
        >
          Developing autonomous driving technologies
          <br className="hidden sm:block" />
          for the world&apos;s hardest driving scenarios.
        </p>

      </div>


      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
