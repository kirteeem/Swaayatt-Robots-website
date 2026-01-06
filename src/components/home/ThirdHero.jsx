import { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Planning & Decision",
    desc:
      "Our state-of-the-art planning algorithms, powered by unsupervised learning, reinforcement learning, and (inverse-)reinforcement learning, excel at mastering unknown and unseen on- and off-road environments.",
    image: "/images/Home/head-3.webp"
  },
  {
    title: "Localization",
    desc:
      "Our state-of-the-art localization technology achieves pin point accuracy with sparse maps, eliminating the need for dense HD maps.",
    image: "/images/Home/hero-2.webp"
  },
  {
    title: "Perception",
    desc:
      "Our computationally efficient deep neural networks deliver ultra-high FPS on edge computing platforms.",
    image: "/images/Home/head-3.webp"
  },
  {
    title: "Controls",
    desc:
      "Our reinforcement learning based control systems translate high-level plans into smooth, precise movements, ensuring unparalleled safety, efficiency on every journey.",
    image: "/images/Home/hero-2.webp"
  },
];

// Diamond positions: 4 main positions + 1 extra for end
const diamondPositions = ["-0.7%", "22.7%", "47.2%", "71.7%", "98%"]; // Added 5th position
const diamondPositionsMobile = ["-9%", "28%", "66%", "105%"];

const sectionColors = [
  "linear-gradient( #242E23 0%, #000000 100%)",
  "linear-gradient( #3D160A 0%, #000000 100%)",
  "linear-gradient( #29143D 0%, #000000 100%)",
  "linear-gradient( #332F07 0%, #000000 100%)",
    "linear-gradient( #29143D 0%, #000000 100%)",
];


export default function ThirdHero() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef(null);
  const diamondRef = useRef(null);
  const bgRef = useRef(null);
  const imageRef = useRef(null);
  const prevDiamondIndexRef = useRef(0);
  const prevImageIndexRef = useRef(-1);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const scrollTriggerRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ================= GSAP SCROLL LOGIC (Desktop only) =================
  useLayoutEffect(() => {
    if (isMobile || isTablet) return;

    const ctx = gsap.context(() => {
      // Clean up previous ScrollTrigger
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      // Initial state
      if (imageRef.current) {
        gsap.set(imageRef.current, {
          opacity: 0,
          scale: 0.95,
        });
      }

      if (diamondRef.current) {
        gsap.set(diamondRef.current, {
          left: diamondPositions[0],
        });
      }

      if (bgRef.current) {
        gsap.set(bgRef.current, {
          background: sectionColors[0],
        });
      }

      const TOTAL_SECTIONS = 5;

      // Create ScrollTrigger with 5 sections (0-4)
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=80",
        end: `+=${TOTAL_SECTIONS * 120}%`, // Increased for 5 sections
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Map progress to 5 diamond positions (0-4)
          let diamondIndex;
          if (progress < 0.2) {
            diamondIndex = 0; // First 20% - position 1 (-0.7%)
          } else if (progress < 0.4) {
            diamondIndex = 1; // Next 20% - position 2 (22.7%)
          } else if (progress < 0.6) {
            diamondIndex = 2; // Next 20% - position 3 (47.2%)
          } else if (progress < 0.8) {
            diamondIndex = 3; // Next 20% - position 4 (71.7%) - 
          } else if (progress < 0.95) {
            diamondIndex = 3; // 80-95%
          } else {
            diamondIndex = 4; // Last 5% - position 5 (98%) - end position
          }

          let imageIndex;
          if (diamondIndex === 0) {
            imageIndex = -1; // No image for first diamond position
          } else if (diamondIndex >= 1 && diamondIndex <= 3) {
            imageIndex = diamondIndex - 1; // Show previous image
          } else if (diamondIndex === 4) {
            imageIndex = 3; // At end, show last image (index 3)
          }

          // Update diamond position
          if (diamondRef.current && diamondIndex !== prevDiamondIndexRef.current) {
            gsap.to(diamondRef.current, {
              left: diamondPositions[diamondIndex],
              duration: 0.8,
              ease: "power2.out",
              overwrite: "auto"
            });
            prevDiamondIndexRef.current = diamondIndex;
          }

          // Update background (use modulo for colors since we have only 4 colors)
          if (bgRef.current) {
      const colorIndex = diamondIndex;
            gsap.to(bgRef.current, {
              background: sectionColors[colorIndex],
              duration: 1,
              ease: "power2.inOut",
            });
          }

          // Update active index for text highlighting
          const textHighlightIndex = diamondIndex === 4 ? 3 : diamondIndex;
          setActiveIndex(textHighlightIndex);

          // Handle image transitions
          if (imageRef.current && imageIndex !== prevImageIndexRef.current) {
            // Hide image when no image should be shown
            if (imageIndex < 0) {
              gsap.to(imageRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                ease: "power2.in",
              });
            } 
            // Show image when moving to valid index
            else {
              // Fade out current image
              gsap.to(imageRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                  // Change image source
                  imageRef.current.src = features[imageIndex].image;
                  // Fade in new image
                  gsap.to(imageRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power3.out",
                  });
                }
              });
            }
            prevImageIndexRef.current = imageIndex;
          }
        },
        
        onEnter: () => {
          // Reset to initial state when entering section
          prevDiamondIndexRef.current = 0;
          prevImageIndexRef.current = -1;
          setActiveIndex(-1);
          
          if (imageRef.current) {
            gsap.set(imageRef.current, {
              opacity: 0,
              scale: 0.95,
            });
          }
          
          if (diamondRef.current) {
            gsap.set(diamondRef.current, {
              left: diamondPositions[0],
            });
          }
          
          if (bgRef.current) {
            gsap.set(bgRef.current, {
              background: sectionColors[0],
            });
          }
        },
        
        onLeaveBack: () => {
          // When scrolling back past the section
          prevDiamondIndexRef.current = 0;
          prevImageIndexRef.current = -1;
        }
      });
    }, sectionRef);

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ctx.revert();
    };
  }, [isMobile, isTablet]);

  // ================= MOBILE ANIMATION (CARD + IMAGE FIXED) =================
  useLayoutEffect(() => {
    if (!isMobile && !isTablet) return;

    const ctx = gsap.context(() => {
      const totalCards = features.length;
      const sectionHeight = window.innerHeight * totalCards * 1.2;

      // Initial state
      gsap.set(cardsRef.current, {
        y: "100%",
        opacity: 0,
        display: "none",
      });

      gsap.set(imagesRef.current, {
        opacity: 0,
        display: "none",
      });

      // First card + image
      if (cardsRef.current[0]) {
        gsap.set(cardsRef.current[0], {
          y: "0%",
          opacity: 1,
          display: "block",
        });
      }

      if (imagesRef.current[0]) {
        gsap.set(imagesRef.current[0], {
          opacity: 1,
          display: "block",
        });
      }

      // Set initial background color
      if (bgRef.current) {
        gsap.set(bgRef.current, {
          background: sectionColors[0],
        });
      }

      // Set initial diamond position
      if (diamondRef.current) {
        gsap.set(diamondRef.current, {
          left: diamondPositionsMobile[0],
        });
      }

      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${sectionHeight}`,
        pin: true,
        scrub: 0.8,
        markers: false,

        onUpdate: (self) => {
          const progress = self.progress;
          const sectionSize = 1 / totalCards;
          
          let currentIndex = 0;
          for (let i = 0; i < totalCards; i++) {
            if (progress >= i * sectionSize && progress < (i + 1) * sectionSize) {
              currentIndex = i;
              break;
            }
          }
          
          // For last section
          if (progress >= (totalCards - 1) * sectionSize) {
            currentIndex = totalCards - 1;
          }

          if (currentIndex === prevDiamondIndexRef.current) return;

          const prev = prevDiamondIndexRef.current;
          const current = currentIndex;

          // 🔹 Diamond moves
          if (diamondRef.current) {
            gsap.to(diamondRef.current, {
              left: diamondPositionsMobile[current],
              duration: 0.5,
              ease: "power2.out",
            });
          }

          // 🔹 Background color change
          if (bgRef.current) {
            gsap.to(bgRef.current, {
              background: sectionColors[current],
              duration: 0.8,
              ease: "power2.inOut",
            });
          }

          // 🔹 Hide previous card
          if (prev !== null && cardsRef.current[prev]) {
            gsap.to(cardsRef.current[prev], {
              y: "-40%",
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
              onComplete: () =>
                gsap.set(cardsRef.current[prev], { display: "none" }),
            });
          }

          // 🔹 Hide previous image
          if (prev !== null && imagesRef.current[prev]) {
            gsap.to(imagesRef.current[prev], {
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
              onComplete: () =>
                gsap.set(imagesRef.current[prev], { display: "none" }),
            });
          }

          // 🔹 Show current card
          if (cardsRef.current[current]) {
            gsap.fromTo(
              cardsRef.current[current],
              {
                y: "100%",
                opacity: 0,
                display: "block",
              },
              {
                y: "0%",
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
              }
            );
          }

          // 🔹 Show current image
          if (imagesRef.current[current]) {
            gsap.fromTo(
              imagesRef.current[current],
              {
                opacity: 0,
                display: "block",
              },
              {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.15,
              }
            );
          }

          setActiveIndex(current);
          prevDiamondIndexRef.current = current;
        },
      });

      return () => scrollTrigger.kill();
    }, sectionRef);

    return () => ctx.revert();
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
        className={`relative overflow-hidden sm:mt-0 mt-40 scrollbar-hide ${
          isMobile || isTablet ? "h-[100vh]" : "h-[110vh]"
        }`}
      >
        {/* ================= ANIMATED BACKGROUND ================= */}
        <div 
          ref={bgRef}
          className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        {/* ================= GRID LINES (Desktop only) ================= */}
        {!isMobile && !isTablet && (
          <div className="absolute top-0 left-0 right-0 h-[80vh] pointer-events-none z-10">
            <div className="absolute left-32 top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
            <div className="absolute right-[150px] top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
            <div className="absolute left-[27%] top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
            <div className="absolute left-[48%] top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
            <div className="absolute left-[69%] top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/30 to-transparent" />
          </div>
        )}

        <div className="absolute top-[120px] left-0 right-0 z-20">
          {/* ===== MAIN LINE (DESKTOP + MOBILE SAME) ===== */}
          <div className="h-[1px] bg-white/40 w-full relative">
            {/* ===== MOBILE ONLY MARKS ===== */}
            {(isMobile || isTablet) && (
              <>
                <div className="absolute left-0 top-1/2 w-1 h-1 
                        -translate-x-1/2 -translate-y-1/2 
                        bg-white/70 rounded-full z-10" />
                <div className="absolute left-1/3 top-1/2 w-1 h-1 
                        -translate-x-1/2 -translate-y-1/2 
                        bg-white/70 rounded-full z-10" />
                <div className="absolute left-2/3 top-1/2 w-1 h-1 
                        -translate-x-1/2 -translate-y-1/2 
                        bg-white/70 rounded-full z-10" />
                <div className="absolute left-full top-1/2 w-1 h-1 
                        -translate-x-1/2 -translate-y-1/2 
                        bg-white/70 rounded-full z-10" />
              </>
            )}
          </div>

          {/* ===== DIAMOND CONTAINER ===== */}
          <div className="max-w-[85vw] mx-auto px-6 relative">
            <div
              ref={diamondRef}
              className="absolute sm:bottom-[-8px] bottom-[-4px] sm:w-5 sm:h-5  w-2 h-2 rotate-45 bg-white
                 shadow-[0_0_16px_rgba(255,255,255,0.95),0_0_30px_rgba(255,255,255,0.6)]
                 transition-all duration-500 ease-out z-30"
            />
          </div>
        </div>

        {/* ================= MOBILE & TABLET VIEW ================= */}
        {(isMobile || isTablet) ? (
          <div className="relative z-30 w-full px-4 pt-52 pb-40">
            <div className="relative w-full min-h-[70vh] overflow-hidden">
              {features.map((item, i) => (
                <div
                  key={i}
                  ref={el => cardsRef.current[i] = el}
                  className="absolute top-0 left-0 w-full"
                  style={{ display: i === 0 ? 'block' : 'none' }}
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
                    <img
                      ref={el => imagesRef.current[i] = el}
                      src={item.image}
                      className="w-full h-[350px] object-cover"
                      alt={item.title}
                      style={{ opacity: i === 0 ? 1 : 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ================= DESKTOP VIEW ================= */
          <>
            <div className="relative z-30 max-w-[85vw] mx-auto px-6 pt-32">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                {features.map((item, i) => (
                  <div key={i} className="px-4 sm:px-6 lg:px-10">
                    <h3
                      className={`text-[22px] sm:text-[26px] lg:text-[32px] font-Rethink Sans mb-1 py-4 transition-colors duration-400 drop-shadow-lg
                        ${activeIndex === i ? "text-white" : "text-white/80"}`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-[14px] sm:text-[16px] lg:text-[18px] transition-colors font-Rethink Sans duration-400 drop-shadow
                        ${activeIndex === i ? "text-white" : "text-white/60"}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= DESKTOP IMAGE WITH SLIDE-UP ANIMATION ================= */}
            <div className="relative z-40 max-w-[80vw] min-h-[80vh] mx-auto mt-20 pr-8 px-2 pb-32">
              <div className="overflow-hidden rounded-md shadow-2xl">
                <img
                  ref={imageRef}
                  src={features[0].image}
                  className="w-full object-cover opacity-100"
                  alt=""
                />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}