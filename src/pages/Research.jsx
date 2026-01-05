  import { useRef } from "react";
  import VideoCard from "../components/VideoCard";
  import PageContainer from "../components/PageContainer";
  import { useTheme } from "../context/ThemeContext"; // Add this import

  import onroadVideos from "../data/onroadVideo";
  import offroadVideos from "../data/offroadVideo";
  import perceptionVideos from "../data/perceptionVideos";
  import motionPlanningVideos from "../data/motionPlanningVideos";
  import mappingLocalizationVideos from "../data/mappingLocalizationVideos";

  /* ================= ARROW BUTTON ================= */
  const ArrowButton = ({ children, onClick, isDarkMode }) => {
    return (
      <button
        onClick={onClick}
        className={`
          w-11 h-11
          rounded-full
          border-2 ${isDarkMode ? "border-white/30 hover:border-white" : "border-[#2B2B2B] hover:border-black"}
          ${isDarkMode ? "text-white/90" : "text-[#2B2B2B]"}
          flex items-center justify-center
          text-[20px] font-medium
          transition-all duration-200 ease-out
          hover:scale-[1.05]
          active:scale-95
        `}
      >
        {children}
      </button>
    );
  };

  export default function Research() {
    const onRoadRef = useRef(null);
    const offRoadRef = useRef(null);
    const motionRef = useRef(null);
    const perceptionRef = useRef(null);
    const mappingRef = useRef(null);
    
    // Get theme context
    const { isDarkMode } = useTheme();

    const scroll = (ref, dir) => {
      if (!ref.current) return;
      ref.current.scrollBy({
        left: dir === "left" ? -420 : 420,
        behavior: "smooth",
      });
    };

    return (
      <main className={`${isDarkMode ? "bg-black text-white" : "bg-white text-[#333333]"} mx-auto  max-w-[100vw]  transition-colors duration-300`}>
  <div className="sm:max-w-[86vw] pt-32 max-w-[100vw] mx-auto">


        {/* ================= HERO ================= */}
        <PageContainer>
          <div className="mt-8 relative h-[384px] lg:h-[384px] rounded-2xl overflow-hidden">
            <img
              src="/images/research/offroad/Offroad.webp"
              alt="Research"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="text-white max-w-[620px] px-6 sm:px-8">
                <h1 className="font-rethink sm:ml-10 font-semibold text-[42px] lg:text-[48px] leading-[1.05] mb-4">
                  Research
                </h1>

                <p className="font-rethink sm:ml-10 text-[16px] lg:text-[18px] opacity-90 leading-[1.4]">
                  Explore how autonomous vehicles navigate the chaotic, bidirectional traffic on India's unpredictable roads. Dive into the challenges, breakthroughs, and the potential of self-driving cars in one of the world's most complex driving environments.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>

        {/* ================= CONTENT ================= */}
        <PageContainer>
          <div className="py-16 sm:py-20 space-y-24 sm:space-y-28">

            {/* ================= AUTONOMOUS DRIVING ================= */}
            <section className="space-y-8 sm:space-y-3">
              <h2 className={`font-rethink font-bold text-[36px] sm:text-[38px] ${isDarkMode ? "text-white" : "text-[#333333]"} tracking-[-0.02em]`}>
                Autonomous Driving
              </h2>

              <p className={`font-rethink text-[18px] sm:text-[20px] ${isDarkMode ? "text-gray-300" : "text-[#5D5D5D]"} max-w-[1000px]`}>
                These videos demonstrate the ability of our autonomous vehicle to
                navigate complex real-world environments independently.
              </p>

              {/* On Road Header + Buttons */}
              <div className="flex items-center pt-10 justify-between">
                <div className={`font-rethink text-xl sm:text-[28px] flex items-center gap-2 ${isDarkMode ? "text-white" : "text-[#333333]"}`}>
                  On Road <span className="text-[20px]">↗</span>
                </div>

                <div className="flex gap-3">
                <div
              onClick={() => scroll(onRoadRef, "left")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border  rounded-full cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-3xl"></i>
              </div>

              <div
            onClick={() => scroll(onRoadRef, "right")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-3xl"></i>
              </div>
                </div>


              





              </div>

              <div
                ref={onRoadRef}
                className="flex flex-nowrap gap-8  overflow-hidden"
              >
                {onroadVideos.map((item) => (
                  <VideoCard key={item.id} data={item} section="onroad" isDarkMode={isDarkMode} />
                ))}
              </div>
            </section>




            {/* ================= OFF ROAD ================= */}
            <section className="space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between">
                <div className={`font-rethink sm:text-[32px] text-xl sm:text-[28px] flex items-center gap-2 ${isDarkMode ? "text-white" : "text-[#333333]"}`}>
                  Off Road <span className="text-[20px]">↗</span>
                </div>

              




                <div className="flex gap-3">
                <div
              onClick={() => scroll(offRoadRef, "left")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-3xl"></i>
              </div>

              <div
            onClick={() => scroll(offRoadRef, "right")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-3xl"></i>
              </div>
                </div>





              </div>

              <div
                ref={offRoadRef}
                className="flex flex-nowrap gap-8 overflow-hidden"
              >
                {offroadVideos.map((item) => (
                  <VideoCard key={item.id} data={item} section="offroad" isDarkMode={isDarkMode} />
                ))}
              </div>
            </section>

            {/* ================= MOTION PLANNING ================= */}
            <section className="space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between">
                <h2 className={`font-rethink font-bold sm:text-[32px] text-xl sm:text-[38px] flex items-center gap-2 ${isDarkMode ? "text-white" : "text-[#333333]"} tracking-[-0.02em]`}>
                  Motion Planning and Decision Making
                  <span className="text-[22px] sm:text-[24px]    hidden sm:block">↗</span>
                </h2>

                
                <div className="flex gap-3">
                <div
              onClick={() => scroll(motionRef, "left")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-3xl"></i>
              </div>

              <div
            onClick={() => scroll(motionRef, "right")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-3xl"></i>
              </div>
                </div>




              </div>

              <div
                ref={motionRef}
                className="flex flex-nowrap gap-8 overflow-hidden"
              >
                {motionPlanningVideos.map((item) => (
                  <VideoCard
                    key={item.id}
                    data={item}
                    section="motion-planning"
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </section>

            {/* ================= PERCEPTION ================= */}
            <section className="space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between">
                <h2 className={`font-rethink font-bold sm:text-[32px] text-xl sm:text-[38px] flex items-center gap-2 ${isDarkMode ? "text-white" : "text-[#333333]"} tracking-[-0.02em]`}>
                  Perception <span className="text-[22px] hidden sm:block sm:text-[24px]">↗</span>
                </h2>

                <div className="flex gap-3">
                <div
              onClick={() => scroll(perceptionRef, "left")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-3xl"></i>
              </div>

              <div
            onClick={() => scroll(perceptionRef, "right")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-3xl"></i>
              </div>
                </div>



              </div>

              <div
                ref={perceptionRef}
                className="flex flex-nowrap gap-8 overflow-hidden"
              >
                {perceptionVideos.map((item) => (
                  <VideoCard key={item.id} data={item} section="perception" isDarkMode={isDarkMode} />
                ))}
              </div>
            </section>

            {/* ================= MAPPING & LOCALIZATION ================= */}
            <section className="space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between">
                <h2 className={`font-rethink font-bold sm:text-[32px] text-xl sm:text-[38px] flex items-center gap-2 ${isDarkMode ? "text-white" : "text-[#333333]"} tracking-[-0.02em]`}>
                  Mapping & Localization <span className="text-[22px] sm:text-[24px]  hidden sm:block">↗</span>
                </h2>

              
                <div className="flex gap-3">
                <div
              onClick={() => scroll(mappingRef, "left")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-3xl"></i>
              </div>

              <div
            onClick={() => scroll(mappingRef, "right")} isDarkMode={isDarkMode}
                className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-3xl"></i>
              </div>
                </div>



              </div>

              <div
                ref={mappingRef}
                className="flex flex-nowrap gap-8 overflow-hidden"
              >
                {mappingLocalizationVideos.map((item) => (
                  <VideoCard
                    key={item.id}
                    data={item}
                    section="mapping-localization"
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </section>

          </div>
        </PageContainer>

        </div>
      </main>
    );
  }