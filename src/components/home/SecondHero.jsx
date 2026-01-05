export default function SecondHero() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[135vh] overflow-hidden">
      
      {/* IMAGE */}
      <img
        src="/images/Home/hero-2.webp"
        alt="Autonomous vehicle mission"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-[1440px]
          mx-auto
          px-5 sm:px-8 lg:px-16
          min-h-screen lg:h-[1080px]
          flex items-center
          translate-y-0 lg:-translate-y-12
        "
      >
        <div
          className="
            w-full
            sm:max-w-[80%]
            md:max-w-[55%]
            lg:max-w-[35vw]
            ml-0
            md:ml-[60px]
            lg:ml-[-150px]
            mb-72
          "
        >
          <p
            className="
              text-white
              text-[40px]
              
              text-start
              sm:text-start
              sm:text-[24px]
              md:text-[40px]
              lg:text-[34px]
              leading-[1.15]
              tracking-[-0.02em]
            "
            style={{ fontFamily: "Rethink Sans, sans-serif" }}
          >
            <span className="text-emerald-400">Our mission</span> is to make
            connected autonomous driving technology accessible and available
            to everyone
          </p>
        </div>
      </div>
    </section>
  );
}
