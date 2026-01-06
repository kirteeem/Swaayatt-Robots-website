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

const diamondPositions = ["-0.7%", "22.7%", "47.2%", "71.7%"];
const diamondPositionsMobile = ["-9%", "28%", "66%", "105%"];

const sectionColors = [
  "linear-gradient(to bottom, #1d7e73ff 0%, #054927ff 40%, #000000 55%, #000000 100%)",
  "linear-gradient(to bottom, #780f83ff 0%, #611923ff 40%, #000000 55%, #000000 100%)",
  "linear-gradient(to bottom, #135086ff 0%, #0a5b5fff 40%, #000000 55%, #000000 100%)",
  "linear-gradient(to bottom, #7a0aa3ff 0%, #530d6fff 40%, #000000 55%, #000000 100%)",
];

export default function ThirdHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef(null);
  const diamondRef = useRef(null);
  const bgRef = useRef(null);
  const imageRef = useRef(null);
  const prevIndexRef = useRef(0);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

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
      // Initial animation setup for image
      if (imageRef.current) {
        gsap.set(imageRef.current, {
          opacity: 0,
          y: 100,
          scale: 0.95,
        });
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=80",
        end: "+=300%",
        pinSpacing: true,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(3, Math.floor(progress * 4));

          if (index !== prevIndexRef.current) {
            setActiveIndex(index);

            if (diamondRef.current) {
              gsap.to(diamondRef.current, {
                left: diamondPositions[index],
                duration: 1,
                ease: "power2.out",
              });
            }

            // Animate background color change
            if (bgRef.current) {
              gsap.to(bgRef.current, {
                background: sectionColors[index],
                duration: 1.5,
                ease: "power2.inOut",
              });
            }

            // Image slide-up animation when diamond moves
            if (imageRef.current) {
              // First fade out and move down current image
              gsap.to(imageRef.current, {
                opacity: 0,
                y: 100,
                scale: 0.95,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                  // Change image source
                  imageRef.current.src = features[index].image;
                  
                  // Animate new image from bottom
                  gsap.fromTo(
                    imageRef.current,
                    {
                      opacity: 0,
                      y: 100,
                      scale: 0.95,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      duration: 0.8,
                      ease: "power3.out",
                    }
                  );
                }
              });
            }

            prevIndexRef.current = index;
          }
        },
        
        // Animation for the first time when page loads
        onEnter: () => {
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, isTablet]);

  // ================= MOBILE ANIMATION (CARD + IMAGE FIXED) =================
  useLayoutEffect(() => {
    if (!isMobile && !isTablet) return;

    const ctx = gsap.context(() => {
      const totalCards = features.length;
      const sectionHeight = window.innerHeight * totalCards;

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

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${sectionHeight}`,
        pin: true,
        scrub: 0.6,

        onUpdate: (self) => {
          const index = Math.min(
            totalCards - 1,
            Math.floor(self.progress * totalCards)
          );

          if (index === prevIndexRef.current) return;

          const prev = prevIndexRef.current;
          const current = index;

          // 🔹 Diamond
          if (diamondRef.current) {
            gsap.to(diamondRef.current, {
              left: diamondPositionsMobile[current],
              duration: 0.4,
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
              duration: 0.35,
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

          // 🔹 Show current card (BOTTOM → CENTER)
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
                duration: 0.55,
                ease: "power3.out",
              }
            );
          }

          // 🔹 Show current image (FADE IN)
          if (imagesRef.current[current]) {
            gsap.fromTo(
              imagesRef.current[current],
              {
                opacity: 0,
                display: "block",
              },
              {
                opacity: 1,
                duration: 0.45,
                ease: "power2.out",
                delay: 0.1,
              }
            );
          }

          prevIndexRef.current = current;
        },
      });
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
          isMobile || isTablet ? "h-[100vh]" : "min-h-screen"
        }`}
      >
        {/* ================= ANIMATED BACKGROUND ================= */}
        <div 
          ref={bgRef}
          className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
          style={{ background: sectionColors[0] }}
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
          <div className="h-1 bg-white/40 w-full relative">
            {/* ===== MOBILE ONLY MARKS ===== */}
            {(isMobile || isTablet) && (
              <>
                <div className="absolute left-0 top-1/2 w-3 h-3 
                        -translate-x-1/2 -translate-y-1/2 
                        bg-white/70 rounded-full z-10" />
                <div className="absolute left-1/3 top-1/2 w-3 h-3 
                        -translate-x-1/2 -translate-y-1/2 
                        bg-white/70 rounded-full z-10" />
                <div className="absolute left-2/3 top-1/2 w-3 h-3 
                        -translate-x-1/2 -translate-y-1/2 
                        bg-white/70 rounded-full z-10" />
                <div className="absolute left-full top-1/2 w-3 h-3 
                        -translate-x-1/2 -translate-y-1/2 
                        bg-white/70 rounded-full z-10" />
              </>
            )}
          </div>

          {/* ===== DIAMOND CONTAINER ===== */}
          <div className="max-w-[85vw] mx-auto px-6 relative">
            <div
              ref={diamondRef}
              className="absolute bottom-[-8px] w-4 h-4 rotate-45 bg-white
                 shadow-[0_0_16px_rgba(255,255,255,0.95),0_0_30px_rgba(255,255,255,0.6)]
                 transition-all duration-500 ease-out z-30"
              style={{
                left: isMobile || isTablet
                  ? diamondPositionsMobile[0]
                  : diamondPositions[0],
              }}
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
            <div className="relative z-40 max-w-[80vw] min-h-[105vh] mx-auto mt-20 pr-8 px-2 pb-32">
              <div className="overflow-hidden rounded-md shadow-2xl">
                <img
                  ref={imageRef}
                  src={features[activeIndex].image}
                  className="w-full object-cover"
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