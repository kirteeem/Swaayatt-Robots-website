import { useEffect, useRef } from "react";
import gsap from "gsap";
import brandFeaturedData from "./BrandImages";

export default function BrandFeaturedOn() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -totalWidth,
      duration: window.innerWidth < 768 ? 18 : 28, // faster on mobile
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, []);

  return (
    <section
      className="
        relative w-full overflow-hidden bg-white
        py-12 sm:py-14 md:py-16 lg:py-20
      "
    >
      {/* ================= FEATURED ON TEXT ================= */}
      <div className="flex flex-col items-center mb-8 z-20">
        <p
          className="
            font-montserrat font-semibold text-gray-500
            text-sm sm:text-base md:text-lg
            tracking-tight whitespace-nowrap
          "
        >
          Featured on
        </p>
        <span className="mt-3 w-32 sm:w-40 md:w-48 h-[2px] bg-gray-300" />
      </div>

      {/* ================= LOGO MARQUEE ================= */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="
            flex w-max items-center
            gap-8 sm:gap-12 md:gap-16 lg:gap-20
            px-8 sm:px-12 md:px-16
          "
        >
          {[...brandFeaturedData, ...brandFeaturedData].map((logo, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center shrink-0
                h-12 sm:h-14 md:h-16 lg:h-20
              "
            >
              <img
                src={logo.src}
                alt={logo.name}
                draggable={false}
                className="
                  object-contain opacity-90
                  max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16
                  max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= EDGE FADE ================= */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />
    </section>
  );
}
