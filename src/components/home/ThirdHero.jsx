import { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Planning & Decision",
    desc:
      "Our state-of-the-art planning algorithms, powered by unsupervised learning, reinforcement learning, and (inverse-)reinforcement learning, excel at mastering unknown and unseen on- and off-road environments.",
  },
  {
    title: "Localization",
    desc:
      "Our state-of-the-art localization technology achieves pin point accuracy with sparse maps, eliminating the need for dense HD maps.",
  },
  {
    title: "Perception",
    desc:
      "Our computationally efficient deep neural networks deliver ultra-high FPS on edge computing platforms.",
  },
  {
    title: "Controls",
    desc:
      "Our reinforcement learning based control systems translate high-level plans into smooth, precise movements, ensuring unparalleled safety, efficiency on every journey.",
  },
];

const images = [
  "/images/Home/head-3.webp",
  "/images/Home/hero-2.webp",
  "/images/Home/head-3.webp",
  "/images/Home/hero-2.webp",
];

const diamondPositions = ["-0.7%", "22.7%", "47.2%", "71.7%"];

export default function ThirdHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const diamondRef = useRef(null);
  const prevIndexRef = useRef(0);

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
    // Only run GSAP on desktop (1024px and above)
    if (isMobile || isTablet) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=80",
        end: "+=300%",
        pinSpacing: true,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(3, Math.floor(progress * 4));
          
          if (index !== prevIndexRef.current) {
            setActiveIndex(index);
            
            if (diamondRef.current) {
              gsap.to(diamondRef.current, {
                left: diamondPositions[index],
                duration: 0.4,
                ease: "power2.out"
              });
            }
            
            if (imageRef.current) {
              gsap.to(imageRef.current, {
                opacity: 0,
                y: 300,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                  imageRef.current.src = images[index];
                  gsap.fromTo(
                    imageRef.current,
                    {
                      opacity: 1,
                      y: 40,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.45,
                      ease: "power3.out",
                    }
                  );
                },
              });
            }
            
            prevIndexRef.current = index;
          }
        }
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
        className={`relative overflow-hidden bg-black scrollbar-hide ${
          isMobile || isTablet ? "min-h-auto" : "min-h-screen"
        }`}
      >
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Home/head-3.webp"
            className="w-full h-full object-cover blur-[0.5px]"
            alt=""
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* ================= GRID LINES (Desktop only) ================= */}
        {!isMobile && !isTablet && (
          <div className="absolute top-0 left-0 right-0 h-[80vh] pointer-events-none z-10">
            <div className="absolute left-32 top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/20 to-transparent" />
            <div className="absolute right-[150px] top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/20 to-transparent" />
            <div className="absolute left-[27%] top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/20 to-transparent" />
            <div className="absolute left-[48%] top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/20 to-transparent" />
            <div className="absolute left-[69%] top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/20 to-transparent" />
          </div>
        )}

        {/* ================= HORIZONTAL LINE + DIAMOND (Desktop only) ================= */}
        {!isMobile && !isTablet && (
          <div className="absolute top-[90px] left-0 right-0 z-20">
            <div className="h-1 bg-white/30 w-full" />
            <div className="max-w-[85vw] mx-auto px-6 relative">
              <div
                ref={diamondRef}
                className="absolute bottom-[-8px] w-4 h-4 rotate-45 bg-white
                           shadow-[0_0_14px_rgba(255,255,255,0.9)]
                           transition-all duration-300 ease-out"
                style={{ left: diamondPositions[0] }}
              />
            </div>
          </div>
        )}

        {/* ================= MOBILE & TABLET VIEW (Cards with images) ================= */}
        {(isMobile || isTablet) ? (
          <div className="relative z-30 px-6 pt-12 pb-72">
            <div className="space-y-8 md:space-y-12">
              {features.map((item, i) => (
                <div key={i} className="space-y-6">
                  {/* Card */}
                  <div 
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    style={{ fontFamily: "Rethink Sans, sans-serif" }}
                  >
                    <h3 className="text-xl md:text-2xl font-Rethink Sans mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg font-Rethink Sans text-white/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Image below card - Always show for all cards */}
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={images[i]}
                      className="w-full h-64 md:h-80 object-cover"
                      alt={item.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ================= DESKTOP VIEW (Original Animation Layout) ================= */
          <>
            <div className="relative z-30 max-w-[85vw] mx-auto px-6 pt-32">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                {features.map((item, i) => (
                  <div key={i} className="px-4 sm:px-6 lg:px-10">
                    <h3
                      className={`text-[22px] sm:text-[26px] lg:text-[32px] font-Rethink Sans mb-4 transition-colors duration-400
                        ${activeIndex === i ? "text-white" : "text-white/50"}`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-[14px] sm:text-[16px] lg:text-[18px] transition-colors font-Rethink Sans duration-400
                        ${activeIndex === i ? "text-white" : "text-white/40"}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= DESKTOP IMAGE ================= */}
            <div className="relative z-40 max-w-[80vw] min-h-[105vh] mx-auto mt-24 px-2 pb-24">
              <div className="overflow-hidden rounded-md shadow-2xl">
                <img
                  ref={imageRef}
                  src={images[0]}
                  className="w-full object-cover transition-opacity duration-400"
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