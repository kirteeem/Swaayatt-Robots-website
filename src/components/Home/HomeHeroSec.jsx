export default function HomeHero() {
  return (
    <section className="relative w-full mb-[60vh] min-h-screen overflow-hidden bg-black">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
<img src="/images/Home/mission.png" alt="Autonomous vehicles" className=" w-full h-full object-cover [object-position:11%_center] object-left        /* 📱 mobile → show LEFT side */ md:object-bottom   /* 💻 desktop → bottom focus */ scale-100 md:scale-[1] " />
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
          style={{ fontFamily: '"Montserrat", "sans-serif"', fontWeight: "500"}}

          className="text-gray-300 tracking-wide  font-medium    text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[44px] leading-[1.45] sm:leading-[1.3]
          max-w-[85vw]"
        >
          Developing Autonomous Driving Technologies
          <br className="hidden sm:block" />
          For The World&apos;s Hardest Driving Scenarios.
        </p>

      </div>


      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
//Correct for desktop 