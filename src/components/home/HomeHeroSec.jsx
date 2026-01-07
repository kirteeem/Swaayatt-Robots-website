export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d4748] via-[#0b1e1d] to-black">
      {/* TOP DARK FADE */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[45%] z-0 bg-gradient-to-b from-black via-black/80 to-transparent" />

      {/* CENTER VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.75)_65%,rgba(0,0,0,0.95)_100%)]" />

      {/* CONTENT CONTAINER - 90vw宽度 */}
      <div className="relative z-10 w-[85vw] mx-auto
        px-0 sm:px-0
        pt-32 sm:pt-36 lg:pt-40
        pb-28 sm:pb-32 lg:pb-36">
        
        {/* MAIN HEADING */}
        <div className="relative">
          <h1 className="text-white font-normal tracking-wide font-Montserrat
            text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px]
            leading-[1.2] sm:leading-[1.25] lg:leading-[1.3]
            max-w-full
            ml-0">
            Developing autonomous driving technologies
            <br className="hidden sm:block" />
            for the world's hardest driving scenarios.
          </h1>
        </div>

      <div
  className="pointer-events-none select-none
    absolute left-1/2 -translate-x-1/2
    top-[70%] sm:top-[90%] lg:top-[72%] xl:top-[74%]
    text-white/[0.15] tracking-[0.08em] leading-none
    text-[45px]  sm:mt-0 mt-10 sm:text-[150px] md:text-[120px] lg:text-[240px] xl:text-[280px]
    scale-y-[1.1]
    whitespace-nowrap
    font-[900]
    w-full max-w-[90vw]
    text-center"
  style={{ fontFamily: 'Ubuntu, Cantarell, DejaVu Sans, Liberation Sans, Noto Sans, sans-serif' }}
>
  SWAAYATT
</div>


      </div>

      {/* VEHICLE IMAGE - 90vw宽度对齐 */}
      <div className="relative z-20 w-[90vw] mx-auto
        mt-[-80px] sm:mt-[-100px] lg:mt-[-120px] xl:mt-[-140px]">
        <img
          src="/images/Home/head.webp"
          alt="Autonomous vehicles"
          className="w-full mb-52 object-contain
            scale-[1.03]"
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