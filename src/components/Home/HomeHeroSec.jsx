export default function HomeHero() {
  return (
    <section className="relative w-full mb-[60vh] min-h-screen overflow-hidden bg-black">

      {/* ================= BACKGROUND IMAGE (UNCHANGED) ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/Home/mission.png"
          alt="Autonomous vehicles"
          className="
            w-full h-full
            object-cover
            object-left
            [object-position:11%_center]
            md:object-bottom
            scale-100
            md:scale-[1]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          w-[85vw]
          max-w-[85vw]
          pt-32 sm:pt-36 lg:pt-40
          pb-24
          ml-[7.5vw]          /* ✅ push content from left */
          lg:max-w-[1100px]
        "
      >
        <p
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
          className="
            text-gray-300
            tracking-wide
            text-left             /* ✅ force left alignment */
            text-[24px]
            sm:text-[30px]
            md:text-[36px]
            lg:text-[42px]
            xl:text-[44px]
            leading-[1.45]
            sm:leading-[1.3]
          "
        >
          Developing Autonomous Driving Technologies
          <br className="hidden sm:block" />
          For The World&apos;s Hardest Driving Scenarios.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
