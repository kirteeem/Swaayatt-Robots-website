import { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Constants
const FEATURES = [
  {
    title: "Planning & Decision",
    desc: "Our state-of-the-art planning algorithms, powered by unsupervised learning, reinforcement learning, and (inverse-)reinforcement learning, excel at mastering unknown and unseen on- and off-road environments.",
    video: "/images/Home/Planning (1).mp4",
  },
  {
    title: "Localization",
    desc: "Our state-of-the-art localization technology achieves pin point accuracy with sparse maps, eliminating the need for dense HD maps.",
    video: "/images/Home/Localisation (1).mp4",
  },
  {
    title: "Perception",
    desc: "Our computationally efficient deep neural networks deliver ultra-high FPS on edge computing platforms.",
    video: "/images/Home/Perception (1).mp4",
  },
  {
    title: "Controls",
    desc: "Our reinforcement learning based control systems translate high-level plans into smooth, precise movements, ensuring unparalleled safety, efficiency on every journey.",
    video: "/images/Home/Controls (1).mp4",
  },
];

const DIAMOND_POSITIONS_DESKTOP = ["6.5%", "26.5%", "47.2%", "68.5%", "91.6%"];
const DIAMOND_POSITIONS_MOBILE = ["-9%", "28%", "66%", "105%"];

// Progress bar stop points (extracted from diamond positions)
const PROGRESS_BAR_STOPS_DESKTOP = ["6%", "26.5%", "47.2%", "68.5%", "92%"];
const PROGRESS_BAR_STOPS_MOBILE = ["0%", "28%", "66%", "105%"];



const SECTION_COLORS = [
  "linear-gradient( #242E23 0%, #000000 100%)",
  "linear-gradient( #3D160A 0%, #000000 100%)",
  "linear-gradient( #29143D 0%, #000000 100%)",
  "linear-gradient( #332F07 0%, #000000 100%)",
  "linear-gradient( #29143D 0%, #000000 100%)",
];



const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
};

const ANIMATION_TIMINGS = {
  DIAMOND_MOVE: 0.8,
  BG_CHANGE: 1,
  VIDEO_FADE_OUT: 0.4,
  VIDEO_FADE_IN: 0.6,
  CARD_HIDE: 0.3,
  CARD_SHOW: 0.45,
};

const SCROLL_TRIGGER_SETTINGS = {
  TOTAL_SECTIONS: 5,
  SECTION_HEIGHT_MULTIPLIER: 80,
};

export default function ThirdHero() {
  // State
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Refs
  const sectionRef = useRef(null);
  const diamondRef = useRef(null);
  const bgRef = useRef(null);
  const progressBarRef = useRef(null);
  const videoRef = useRef(null);
  const cardsRef = useRef([]);
  const videosRef = useRef([]);
  const progressTrackRef = useRef(null);

  const prevDiamondIndexRef = useRef(0);
  const prevVideoIndexRef = useRef(-1);
  const scrollTriggerRef = useRef(null);
  const mobileScrollTriggerRef = useRef(null);
  const mobileTimelineRef = useRef(null);


  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < BREAKPOINTS.MOBILE);
      setIsTablet(width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);




  // Desktop scroll animation
  useLayoutEffect(() => {
    if (isMobile || isTablet) return;

    const ctx = gsap.context(() => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      // Initialize video
      if (videoRef.current) {
        gsap.set(videoRef.current, {
          opacity: 1,
          scale: 1,
        });
        videoRef.current.src = FEATURES[0].video;
        videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
      }

      // Initialize diamond
      if (diamondRef.current) {
        gsap.set(diamondRef.current, {
          left: DIAMOND_POSITIONS_DESKTOP[0],
        });
      }

      // Initialize background
      if (bgRef.current) {
        gsap.set(bgRef.current, {
          background: SECTION_COLORS[0],
        });
      }

      // Initialize progress bar
      if (progressBarRef.current) {
        gsap.set(progressBarRef.current, {
          width: "0%",
        });
      }

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${SCROLL_TRIGGER_SETTINGS.TOTAL_SECTIONS * SCROLL_TRIGGER_SETTINGS.SECTION_HEIGHT_MULTIPLIER}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;

          // Determine which feature to highlight based on scroll progress
          let diamondIndex;
          if (progress < 0.2) {
            diamondIndex = 0;
          } else if (progress < 0.4) {
            diamondIndex = 1;
          } else if (progress < 0.6) {
            diamondIndex = 2;
          } else if (progress < 0.8) {
            diamondIndex = 3;
          } else if (progress < 0.95) {
            diamondIndex = 3;
          } else {
            diamondIndex = 4;
          }

          // Map diamond index to video index
          let videoIndex;
          if (diamondIndex === 0) {
            videoIndex = 0;
          } else if (diamondIndex === 1) {
            videoIndex = 1;
          } else if (diamondIndex === 2) {
            videoIndex = 2;
          } else if (diamondIndex === 3 || diamondIndex === 4) {
            videoIndex = 3;
          }

          // Update diamond position
          if (diamondRef.current && diamondIndex !== prevDiamondIndexRef.current) {
            gsap.to(diamondRef.current, {
              left: DIAMOND_POSITIONS_DESKTOP[diamondIndex],
              duration: ANIMATION_TIMINGS.DIAMOND_MOVE,
              ease: "power2.out",
              overwrite: "auto",
            });
            prevDiamondIndexRef.current = diamondIndex;
          }

          // Update progress bar - synchronized with diamond movement
          if (progressBarRef.current) {
            gsap.to(progressBarRef.current, {
              width: PROGRESS_BAR_STOPS_DESKTOP[diamondIndex],
              duration: ANIMATION_TIMINGS.DIAMOND_MOVE,
              ease: "power2.out",
              overwrite: "auto",
            });
          }

          // Update background color
          if (bgRef.current) {
            gsap.to(bgRef.current, {
              background: SECTION_COLORS[diamondIndex],
              duration: ANIMATION_TIMINGS.BG_CHANGE,
              ease: "power2.inOut",
            });
          }

          // Update active text index
          const textHighlightIndex = diamondIndex === 4 ? 3 : diamondIndex;
          setActiveIndex(textHighlightIndex);

          // Handle video transitions
          if (videoRef.current && videoIndex !== prevVideoIndexRef.current) {
            gsap.to(videoRef.current, {
              opacity: 0,
              scale: 0.95,
              duration: ANIMATION_TIMINGS.VIDEO_FADE_OUT,
              ease: "power2.in",
              onComplete: () => {
                videoRef.current.src = FEATURES[videoIndex].video;
                videoRef.current.load();
                videoRef.current.oncanplay = () => {
                  videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
                  gsap.to(videoRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: ANIMATION_TIMINGS.VIDEO_FADE_IN,
                    ease: "power3.out",
                  });
                };
              },
            });
            prevVideoIndexRef.current = videoIndex;
          }
        },

        onEnter: () => {
          prevDiamondIndexRef.current = 0;
          prevVideoIndexRef.current = 0;
          setActiveIndex(0);

          if (videoRef.current) {
            videoRef.current.src = FEATURES[0].video;
            gsap.set(videoRef.current, {
              opacity: 1,
              scale: 1,
            });
            videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
          }

          if (diamondRef.current) {
            gsap.set(diamondRef.current, {
              left: DIAMOND_POSITIONS_DESKTOP[0],
            });
          }

          if (bgRef.current) {
            gsap.set(bgRef.current, {
              background: SECTION_COLORS[0],
            });
          }

          if (progressBarRef.current) {
            gsap.set(progressBarRef.current, {
              width: "0%",
            });
          }
        },

        onLeaveBack: () => {
          prevDiamondIndexRef.current = 0;
          prevVideoIndexRef.current = 0;
          setActiveIndex(0);
        },
      });
    }, sectionRef);

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ctx.revert();
    };
  }, [isMobile, isTablet]);



  
// Mobile & tablet scroll animation
useLayoutEffect(() => {
  if (!isMobile && !isTablet) return;
  if (!sectionRef.current) return;

  mobileScrollTriggerRef.current?.kill();

  const ctx = gsap.context(() => {
    const total = FEATURES.length;
    let isAnimating = false;

    // RESET
    gsap.set(cardsRef.current, { opacity: 0, y: 40, pointerEvents: "none" });
    gsap.set(videosRef.current, { opacity: 0, pointerEvents: "none" });

    // SHOW FIRST
    gsap.set(cardsRef.current[0], { opacity: 1, y: 0, pointerEvents: "auto" });
    gsap.set(videosRef.current[0], { opacity: 1, pointerEvents: "auto" });
    videosRef.current[0]?.play().catch(() => {});
    setActiveIndex(0);
    prevDiamondIndexRef.current = 0;

    const ST = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",

      // ✅ FIXED END
      end: () => `+=${window.innerHeight * total * 2.2}`,




      pin: true,
      scrub: false,
      snap: {
        snapTo: 1 / (total - 1),
        duration: 0.45,
        delay: 0.12,
        ease: "power1.out",
      },

      onUpdate: self => {
        const index = Math.round(self.progress * (total - 1));

        // ✅ Ignore same section
        if (index === prevDiamondIndexRef.current) return;

        // ✅ Lock animation
        if (isAnimating) return;
        isAnimating = true;

        const prev = prevDiamondIndexRef.current;
        prevDiamondIndexRef.current = index;

        // Kill previous timeline
        mobileTimelineRef.current?.kill();

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          onComplete: () => {
            // ✅ Pause before allowing next section
            setTimeout(() => {
              isAnimating = false;
            }, 220);
          },
        });

        mobileTimelineRef.current = tl;

        // ---- DIAMOND ----
        tl.to(diamondRef.current, {
          left: DIAMOND_POSITIONS_MOBILE[index],
          duration: 0.3,
        }, 0);

        // ---- PROGRESS BAR ----
        tl.to(progressBarRef.current, {
          width: PROGRESS_BAR_STOPS_MOBILE[index],
          duration: 0.3,
        }, 0);

        // ---- BG ----
        tl.to(bgRef.current, {
          background: SECTION_COLORS[index],
          duration: 0.5,
        }, 0);

        // ---- HIDE PREV CARD ----
        if (cardsRef.current[prev]) {
          tl.to(cardsRef.current[prev], {
            opacity: 0,
            y: -30,
            duration: 0.25,
            onComplete: () => {
              gsap.set(cardsRef.current[prev], { pointerEvents: "none" });
            },
          }, 0);
        }

        // ---- SHOW CURRENT CARD ----
        if (cardsRef.current[index]) {
          tl.fromTo(
            cardsRef.current[index],
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              onStart: () => {
                gsap.set(cardsRef.current[index], { pointerEvents: "auto" });
              },
            },
            0.15
          );
        }

        // ---- VIDEO SWITCH (HARD SWAP) ----
        videosRef.current.forEach((v, i) => {
          if (!v) return;
          if (i === index) {
            v.currentTime = 0;
            v.style.display = "block";
            gsap.to(v, { opacity: 1, duration: 0.3 });
            v.play().catch(() => {});
          } else {
            gsap.set(v, { opacity: 0, display: "none" });
            v.pause();
          }
        });

        requestAnimationFrame(() => setActiveIndex(index));
      },
    });

    mobileScrollTriggerRef.current = ST;

    // ✅ Refresh after layout settles (important on mobile)
    setTimeout(() => ScrollTrigger.refresh(), 300);
  }, sectionRef);

  return () => {
    mobileScrollTriggerRef.current?.kill();
    mobileTimelineRef.current?.kill();
    ctx.revert();
  };
}, [isMobile, isTablet]);



  return (
    <>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden min-h-[100vh]"
        style={{
          height: isMobile || isTablet ? "auto" : "110vh"
        }}
      >

        {/* Animated Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        {/* Top Blind Effect */}
        <div className="absolute top-0 left-0 w-full h-40 sm:h-48 lg:h-56 z-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent backdrop-blur-lg" />
          <div className="absolute inset-0 opacity-40">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-1.5 bg-black/50"
                style={{
                  top: `${i * 10}%`,
                  backdropFilter: "blur(3px)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Grid Lines - Desktop Only */}
        {!isMobile && !isTablet && (
          <div className="absolute top-0 left-0 right-0 h-[80vh] pointer-events-none z-10">

            <div className="absolute left-32 top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
            <div className="absolute right-[150px] top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
            <div className="absolute left-[27%] top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
            <div className="absolute left-[48%] top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
            <div className="absolute left-[69%] top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />

          </div>
        )}

        {/* Progress Indicator */}
        <div className="absolute top-[60px] left-0 right-0 z-20">
          {/* Progress Track */}
          <div
            ref={progressTrackRef}
            className="h-[3px] bg-white/20 w-full sm:block hidden relative max-w-[100vw] mx-auto px-6"
          >
            {/* Progress Bar */}
            <div
              ref={progressBarRef}
              className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-out"
              style={{ width: '14%' }}
            />

            {/* Diamond Indicator */}
            <div
              ref={diamondRef}
              className="absolute sm:bottom-[-8px] bottom-[-4px] sm:w-5 sm:h-5 w-2 h-2 rotate-45 bg-white shadow-[0_0_16px_rgba(255,255,255,0.95),0_0_30px_rgba(255,255,255,0.6)] transition-all duration-500 ease-out z-30"
            />



            {/* Tablet Marks */}
            {isTablet && (
              <>
                <div className="absolute left-0 top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-white/70 rounded-full z-10" />
                <div className="absolute left-1/3 top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-white/70 rounded-full z-10" />
                <div className="absolute left-2/3 top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-white/70 rounded-full z-10" />
                <div className="absolute left-full top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-white/70 rounded-full z-10" />
              </>
            )}
          </div>
        </div>

        {/* Mobile & Tablet View */}
        {isMobile || isTablet ? (
          <div className="relative z-30 w-full px-4 pt-20 pb-40">
            <div className="relative w-full min-h-[90vh] overflow-hidden">
              {FEATURES.map((item, i) => (
               <div
  key={i}
  ref={el => (cardsRef.current[i] = el)}
  className="absolute top-0 left-0 w-full"
>

                  <div className="rounded-2xl p-4 mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed drop-shadow">
                      {item.desc}
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-xl mt-6 shadow-2xl">
                    <video
                        ref={el => (videosRef.current[i] = el)}
                      src={item.video}
                      className="w-full h-[450px] object-cover"
                      muted
                      loop
                      playsInline
                      preload="auto"
                      autoPlay
                      style={{ opacity: i === 0 ? 1 : 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop View */
          <>
            <div className="relative z-30 max-w-[85vw]  px-6 pt-32">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                {FEATURES.map((item, i) => (
                  <div key={i} className="px-4 sm:px-6 lg:px-10">
                    <h3
                     style={{ fontFamily: "Rethink, sans-serif" }}
                      className={`text-[22px] sm:text-[26px] lg:text-[32px] ml-[5vw] w-full mt-[-6vh] py-4
                         transition-colors duration-400 drop-shadow-lg ${activeIndex === i ? "text-white" : "text-white/40"
                        }`}
                    >
                      {item.title}
                    </h3>

                    <p
                     style={{ fontFamily: "Rethink, sans-serif" }}
                      className={`text-[12px]   lg:text-[18px] ml-[10vh] font-normal w-full transition-colors
                         font-Rethink Sans duration-400 drop-shadow ${activeIndex === i ? "text-white" : "text-white/40"
                        }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Video */}
            <div className="relative z-40 max-w-[85vw] min-h-[10vh] mx-auto mt-10 pr-8 px-2 pb-32">
              <div className="overflow-hidden rounded-md shadow-2xl">
                <video
                  ref={videoRef}
                  src={FEATURES[0].video}
                  className="w-full h-[640px] object-cover opacity-100"
                  muted
                  playsInline
                  preload="auto"
                  autoPlay
                  loop
                />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}