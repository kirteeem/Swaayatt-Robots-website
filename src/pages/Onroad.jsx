import React from "react";
import onroadVideos from "../data/onroadVideo";
import { useTheme } from "../context/ThemeContext";

/* ================= HERO IMAGE ================= */
const heroImage = "/images/research/onroad/Onroad.webp";

const OnRoadPage = () => {
  useTheme();

  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-white pt-[112.38px] transition-colors duration-300">

      {/* ================= HERO ================= */}
      <section className="w-full sm:max-w-[93vw] max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="relative h-[240px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden bg-gray-900">

          <img
            src={heroImage}
            alt="On-road autonomous driving"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-6 lg:px-16">
            <h1 className="font-rethink font-medium tracking-[-0.02em] leading-none text-[28px] sm:text-[44px] md:text-[56px] lg:text-[68px]">
              On Road
            </h1>

            <p className="max-w-[90%] sm:max-w-xl mt-2 sm:mt-3 text-[13px] sm:text-[16px] md:text-[18px] opacity-90">
              Revolutionizing Autonomous Driving: Conquering Complex Traffic on
              India’s Unpredictable Roads
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-full sm:max-w-[93vw] max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <p className="max-w-full lg:max-w-[1497px] font-rethink font-medium text-xl sm:text-[32px] leading-[1] tracking-[-0.02em] text-[#686868] dark:text-[#A3A3A3]">
          These demonstrations highlight our autonomous driving technology
          enabling navigation through unstructured environments with complex
          road conditions, and effectively negotiating stochastic, complex,
          and adversarial traffic dynamics.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="w-full sm:max-w-[93vw] max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {onroadVideos.map((card) => (
            <div key={card.id} className="flex flex-col">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-[#111] group cursor-pointer">
                <img src={card.thumbnail} alt={card.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[72px] h-[48px] bg-[#FF0000] rounded-xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-[2px]">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-4 max-w-[519px]">
                <h3 className="font-rethink font-bold text-[20px] leading-[1] tracking-[-0.02em] text-[#3F3F3F] dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-3 font-rethink font-normal text-[14px] leading-[1] tracking-[-0.02em] text-[#737373] dark:text-[#A3A3A3]">
                  {card.description}
                </p>

                <p className="mt-3 text-[12px] text-[#9CA3AF] font-mono">
                  {card.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default OnRoadPage;
