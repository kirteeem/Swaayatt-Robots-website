export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d4748] via-[#0b1e1d] to-black">
      {/* TOP DARK FADE */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[45%] z-0 bg-gradient-to-b from-black via-black/80 to-transparent" />

      {/* CENTER VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.75)_65%,rgba(0,0,0,0.95)_100%)]" />

      {/* CONTENT CONTAINER - 90vw max width */}
      <div className="relative z-10 w-[85vw] max-w-[90vw] mx-auto
        px-0
        pt-32 sm:pt-36 lg:pt-40
        pb-28 sm:pb-32 lg:pb-36">
        
        {/* MAIN HEADING */}
        <div className="relative">
          <h1 className="text-white font-normal tracking-wide font-Montserrat
            text-[24px] sm:text-[32px] md:text-[35px] lg:text-[42px] xl:text-[44px]
            leading-[1.5] sm:leading-[1.25] lg:leading-[1.3]
            max-w-full">
            Developing autonomous driving technologies
            <br className="hidden sm:block" />
            for the world&apos;s hardest driving scenarios.
          </h1>
        </div>

        {/* SWAAYAT TEXT - Responsive and within 90vw container */}
        <div
          className="pointer-events-none select-none
          w-[85vw]
            absolute left-1/2 -translate-x-1/2
            top-[70%] sm:top-[85%] md:top-[72%] lg:top-[70%] xl:top-[72%]
            text-white/[0.15] tracking-[0.3em] leading-[3] sm:leading-[1.8]
            text-[12vw] sm:text-[90px] md:text-[93px] lg:text-[180px] xl:text-[220px]
            scale-y-[1]
            font-black
            font-bold
            w-full max-w-full
            text-center
            overflow-visible
            whitespace-nowrap"
          style={{ 
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: 900
          }}
        >
          SWAAYATT
        </div>

      </div>

      {/* VEHICLE IMAGE - Also 90vw */}
      <div className="relative z-20 w-[90vw] max-w-[90vw] mx-auto
        mt-[-60px] sm:mt-[-80px] lg:mt-[-100px] xl:mt-[-120px]">
        <img
          src="/images/Home/head.webp"
          alt="Autonomous vehicles"
          className="w-full mb-40 md:mb-[30vh] object-contain scale-[1.03]"
          style={{
            transformOrigin: 'center top'
          }}
        />
      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}