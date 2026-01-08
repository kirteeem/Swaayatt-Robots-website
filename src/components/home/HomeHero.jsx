export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black/10">

      {/* ================= BACKGROUND IMAGE ================= */}
    <video
  className="
    absolute inset-0
    w-full h-full
    object-cover object-center
    z-0
    saturate-[0.85]
    contrast-[1.05]
    brightness-[0.85]
  "
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/images/Home/hero.mov" type="video/webm" />
</video>

     

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-30
          max-w-[93vw]
          mx-auto
          px-5 sm:px-8 lg:px-16
          flex items-center
          min-h-screen
          text-center lg:text-left
        "
      >
        <div className="w-full lg:max-w-[620px] mt-[15vh] sm:mt-[18vh] lg:mt-0">

          {/* AUTONOMOUS */}
          <h1
            className="
              font-extrabold uppercase
              text-[34px]
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
              text-[36px]
              sm:text-[56px]
              lg:text-[80px]
              leading-[120%]
              lg:leading-[150%]
              tracking-[-0.02em]
              text-white
              -mt-1 lg:-mt-2
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            MOBILITY
          </h2>

          {/* SUBTITLE */}
          <p
            className="
              mt-4 sm:mt-5 lg:mt-6
              text-[15px]
              sm:text-[16px]
              lg:text-[20px]
              leading-[135%]
              tracking-[-0.02em]
              text-white/65
              max-w-[92%]
              mx-auto lg:mx-0
            "
            style={{ fontFamily: "Rethink Sans, sans-serif" }}
          >
            Deep Reinforcement Learning to navigate adversarial, real-world
            complexity beyond structured environments.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}

    </section>
  );
}
