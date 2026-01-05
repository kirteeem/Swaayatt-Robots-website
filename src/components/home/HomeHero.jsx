export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden  bg-gradient-to-br
    from-[#0d4748]
    via-[#0b1e1d]
    to-black pb-[120px] sm:pb-[160px] lg:pb-[260px]">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/images/Home/head.webp"
        alt="Autonomous Vehicles"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-center
          z-0
        "
      />

      {/* Dark cinematic overlay */}




      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-30
          max-w-[93vw]
          mx-auto
          px-5 sm:px-8 lg:px-16
          flex
          items-center
          min-h-screen
          text-center lg:text-left
        "
      >
        <div className="w-full mb-60 lg:max-w-[620px] sm:mx-auto  lg:mx-0">

          {/* AUTONOMOUS */}
          <h1
            className="
              font-extrabold uppercase
              text-[35px]
              sm:text-[56px]
              lg:text-[80px]
              leading-[100%]
              tracking-[-0.02em]
              text-white
              
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            AUTONOMOUS
          </h1>

          {/* MOBILITY */}
          <h2
            className="
              font-extralight uppercase
              text-[40px]
              sm:text-[56px]
              lg:text-[80px]
              leading-[130%]
              lg:leading-[160%]
              tracking-[-0.02em]
              text-white
              mt-[-4px] lg:mt-[-10px]
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            MOBILITY
          </h2>

          {/* SUBTITLE */}
          <p
            className="
              mt-4 sm:mt-5 lg:mt-6
              text-[16px]
              sm:text-[16px]
              lg:text-[20px]
              leading-[130%]
              tracking-[-0.02em]
              text-white/60
              max-w-[90%]
              mx-auto lg:mx-0
            "
            style={{ fontFamily: "Rethink Sans, sans-serif" }}
          >
            Deep Reinforcement Learning to navigate adversarial, real-world
            complexity beyond structured environments.
          </p>
        </div>
      </div>

      {/* ================= CENTER GREEN LIGHT ================= */}
      <div
        className="
          absolute inset-0 z-[20] pointer-events-none
          bg-[radial-gradient(
            120%_70%_at_50%_60%,
            rgba(40,190,160,0.35),
            rgba(25,120,100,0.25)_45%,
            rgba(0,0,0,0.2)_70%,
            transparent_85%
          )]
          mix-blend-screen
        "
      />

      {/* ================= BOTTOM GRADIENT ================= */}
      <div className="absolute inset-0 z-[15] bg-gradient-to-b from-transparent via-black/40 to-black" />

    </section>
  );
}
