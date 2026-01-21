import { useEffect, useRef } from "react";
import gsap from "gsap";
import brandFeaturedData from "./BrandImages";
import { useTheme } from "../../context/ThemeContext";

export default function BrandFeaturedOn() {
  const marqueeRef = useRef(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -totalWidth,
      duration: window.innerWidth < 768 ? 18 : 12, // faster on mobile
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
        relative w-full overflow-hidden bg-black
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


      <div className="w-full px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 md:mt-32 bg-black">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center font-semibold text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12">Funded and Supported by</h1>

          <div className="w-full">
            {/* ===== LOGOS GRID ===== */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-center">

              {/* AXILOR */}
              <div className="space-y-2 sm:space-y-3">
                <img
                  src="/images/footer/footer.png"
                  alt="Axilor"
                  className="mx-auto h-12 sm:h-16 md:h-20 w-auto object-contain"
                />
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  INR 100K Prize<br />Jan, 2018
                </p>
              </div>

              {/* MEITY */}
              <div className="space-y-2 sm:space-y-3">
                <img
                  src="/images/footer/footer2.png"
                  alt="MeitY"
                  className="mx-auto h-12 sm:h-16 md:h-20 w-auto object-contain"
                />
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  INR 1M<br />Research Grant<br />March 22
                </p>
              </div>

              {/* SEED FUND */}
              <div className="space-y-2 sm:space-y-3">
                <img
                  src="/images/footer/footer1.jpg"
                  alt="Seed Fund"
                  className="mx-auto h-12 sm:h-16 md:h-20 w-auto object-contain"
                />
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  $3M Seed<br />July, 21
                </p>
              </div>

              {/* POST SEED */}
              <div className="space-y-2 sm:space-y-3">
                <img
                  src="/images/footer/footer2.png"
                  alt="Post Seed"
                  className="mx-auto h-12 sm:h-16 md:h-20 w-auto object-contain"
                />
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  $4M Post Seed<br />June, 24
                </p>
              </div>

              {/* NVIDIA */}
              <div className="space-y-2 sm:space-y-3">
                <img
                  src="/images/footer/footer3.jpg"
                  alt="Nvidia"
                  className="mx-auto h-12 sm:h-16 md:h-20 w-auto object-contain"
                />
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  $100,000<br />June, 22
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
