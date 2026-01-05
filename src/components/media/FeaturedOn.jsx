import React from "react";

export default function FeaturedOn() {
  // f2 → f11
  const logos = Array.from({ length: 10 }, (_, i) => `f${i + 2}`);

  return (
    <section className="bg-gray-50 py-14">

      {/* ================= TITLE ================= */}
      <p
        className="
          text-center
          font-rethink
          font-normal
          text-[14px]
          leading-[100%]
          tracking-[-0.02em]
          text-[#737373]
          mb-8
        "
      >
        Featured on
      </p>

      {/* ================= LOGOS ================= */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6
          flex
          flex-wrap
          justify-center
          items-center
          gap-x-12
          gap-y-8
        "
      >
        {logos.map((logo) => (
          <div
            key={logo}
            className="
              w-[120px]
              h-[46px]

              sm:w-[130px]
              sm:h-[48px]

              md:w-[140px]
              md:h-[52px]

              flex
              items-center
              justify-center
            "
          >
            <img
              src={`/images/media/featured/${logo}.png`}
              alt={logo}
              className="
                max-w-full
                max-h-full
                object-contain
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
