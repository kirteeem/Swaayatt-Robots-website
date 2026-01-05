import React from "react";
import motionPlanningVideos from "../data/motionPlanningVideos";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path

/* ================= HERO IMAGE ================= */
const heroImage = "/images/research/motion-planning/motion.webp";

const MotionPlanningPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <main className={`min-h-screen transition-colors pt-32 duration-300 ${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'}`}>

      {/* ================= HERO ================= */}
      <section className="sm:max-w-[93vw] max-w-[100vw]  mx-auto p-4 sm:p-0 sm:px-6 sm:px-10 lg:px-16  ">
        <div className={`relative h-[260px] sm:h-[320px]  md:h-[400px] rounded-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'}`}>
          <img
            src={heroImage}
            alt="Motion planning and decision making"
            className="w-full h-full object-cover opacity-85"
          />

          <div className="absolute inset-0 flex flex-col justify-center text-white px-6 sm:px-10 lg:px-16">
            <h1
              className="
                font-rethink
                font-medium
                tracking-[-0.02em]
                leading-none
                text-[36px]
                sm:text-[44px]
                md:text-[56px]
                lg:text-[68px]
              "
            >
              Motion Planning and Decision Making
            </h1>

            <p className="max-w-xl mt-2 text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
              Reinforcement-driven motion planning and robust decision strategies
              for real-world autonomous mobility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="sm:max-w-[93vw] max-w-[100vw] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <p
          className={`
            max-w-[1497px]
            font-rethink
            font-medium
            sm:text-[32px] text-xl
            leading-[1]
            tracking-[-0.02em]
            ${isDarkMode ? 'text-gray-300' : 'text-[#686868]'}
          `}
        >
          These videos demonstrate advanced motion planning and adaptive
          decision-making in stochastic dynamic traffic, employing reinforcement
          learning and robust control strategies.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="sm:max-w-[93vw] max-w-[100vw] mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {motionPlanningVideos.map((card) => (
            <div key={card.id} className="flex flex-col">

              {/* ================= THUMBNAIL ================= */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 group cursor-pointer">

                {/* IMAGE */}
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/40' : 'bg-black/20'} group-hover:bg-black/30 transition-colors duration-300`} />

                {/* YOUTUBE RECTANGLE PLAY ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[72px] h-[48px] bg-[#FF0000] rounded-xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-7 h-7 fill-white ml-[2px]"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* ================= TEXT ================= */}
              <div className="mt-4 max-w-[519px]">
                <h3
                  className={`
                    font-rethink
                    font-bold
                    text-[20px]
                    leading-[1.1]
                    tracking-[0.02em]
                    ${isDarkMode ? 'text-gray-100' : 'text-[#3F3F3F]'}
                  `}
                >
                  {card.title}
                </h3>

                <p
                  className={`
                    mt-3
                    font-rethink
                    font-normal
                    text-[16px]
                    leading-[1]
                    tracking-[-0.02em]
                    ${isDarkMode ? 'text-gray-300' : 'text-[#737373]'}
                  `}
                >
                  {card.description}
                </p>

                <p className={`mt-3 text-[12px] ${isDarkMode ? 'text-gray-400' : 'text-[#9CA3AF]'} font-mono`}>
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

export default MotionPlanningPage;