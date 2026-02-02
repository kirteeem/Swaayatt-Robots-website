import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef(null);
  const [screenSize, setScreenSize] = useState({
    width: 1920,
    height: 1080,
    isMobile: false,
    isTablet: false,
    isDesktop: true
  });
  const [activeStep, setActiveStep] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const TOTAL_STEPS = 6;
  
  // Preload images to prevent layout shift
  useEffect(() => {
    const imageSources = [
      "/images/Blogs/Homepage-1.webp",
      "/images/Blogs/Blog-1.webp",
      "/images/media/news/n1.webp",
    ];
    
    let loadedCount = 0;
    const totalImages = imageSources.length;
    
    const imagePromises = imageSources.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolve even on error to prevent blocking
        img.src = src;
      });
    });
    
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
      // Refresh ScrollTrigger after images load
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });
  }, []);
  
  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      setScreenSize({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop
      });
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current || !imagesLoaded) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () =>
        screenSize.isMobile
          ? `+=${sectionRef.current.offsetHeight * 2.2}`
          : "+=" + window.innerHeight * 7.5,

      pin: true,
      scrub: screenSize.isMobile ? 1.2 : 1.8,
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        const p = self.progress;

        const step = Math.min(
          TOTAL_STEPS - 1,
          Math.floor(p * TOTAL_STEPS)
        );

        setActiveStep(step);

        if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(() => {
            setProgress(progressRef.current);
            rafRef.current = null;
          });
        }
      },
    });

    return () => {
      st.kill();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [screenSize, imagesLoaded]);

  // Don't render until images are loaded
  if (!imagesLoaded) {
    return (
      <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <BlogNodes progress={progress} activeStep={activeStep} screenSize={screenSize} />
      <CenterFeature screenSize={screenSize} />

      <style jsx>{`
        @keyframes slideUp {
          0% { transform: translateY(0); }
          25% { transform: translateY(-32px); }
          50% { transform: translateY(-64px); }
          75% { transform: translateY(-96px); }
          100% { transform: translateY(0); }
        }

        .road-wrap {
          position: absolute;
          inset: 0;
          perspective: 1000px;
          pointer-events: none;
        }

        .road-surface {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(27, 27, 27, 1) 0%,
            rgba(32, 32, 32, 1) 40%,
            rgba(38, 38, 38, 1) 70%,
            rgba(45, 45, 45, 1) 100%
          );
          transform: rotateX(9deg) scaleX(1.06) scaleY(1.08);
          transform-origin: center bottom;
        }

        .road-surface::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0.15) 45%,
            rgba(0, 0, 0, 0) 100%
          );
          filter: blur(4.2px);
          mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 30%,
            transparent 100%
          );
        }

        .road-center {
          position: absolute;
          top: 78px;
          left: 0;
          width: 100%;
          height: 8.5px;
          z-index: 20;
          transform: rotateX(9deg) scaleX(1.06);
          transform-origin: center bottom;
          pointer-events: none;
        }

        .road-dash {
          width: 100%;
          height: 100%;
          background-image: repeating-linear-gradient(
            80deg,
            rgba(255, 255, 255, 0.32) 0px,
            rgba(255, 255, 255, 0.32) 53px,
            transparent 53px,
            transparent 90px
          );
        }

        .road-vertical-divider {
          position: absolute;
          top: 10vh;
          height: 115px;
          width: 1px;
          background: rgba(255, 255, 255, 0.35);
          transform: rotateX(9deg) rotateZ(-25deg);
          transform-origin: top;
          pointer-events: none;
        }

        @keyframes carEnter {
          0% { transform: translateX(-100vw) translateY(-50%); }
          100% { transform: translateX(0) translateY(-50%); }
        }

        @keyframes carExit {
          0% { transform: translateX(0) translateY(-50%); }
          100% { transform: translateX(100vw) translateY(-50%); }
        }

        @keyframes pointGlow {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% { 
            box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7);
          }
        }
      `}</style>
    </section>
  );
}



function BlogNodes({ activeStep, screenSize }) {
  const refs = useRef([]);
  const [centerIndex, setCenterIndex] = useState(2);
  const mobileRefs = useRef([]);

  const images = [
    "/images/Blogs/Homepage-1.webp",
    "/images/Blogs/Homepage-1.webp",
    "/images/Blogs/Blog-1.webp",
    "/images/media/news/n1.webp",
    "/images/media/news/n1.webp",
    "/images/media/news/n1.webp",
  ];

  const MOBILE_DATES = [
    "20 Aug 2025",
    "30 Jul 2025",
    "08 Jul 2025",
    "23 Apr 2025",
    "11 Sep 2025",
    "11 Sep 2025",
  ];

  const DESKTOP_DATES = [
    "20 Aug 2025",
    "30 Jul 2025",
    "08 Jul 2025",
    "23 Apr 2025",
    "11 Sep 2025",
    "11 Sep 2025",
  ];

  const CENTER_TEXTS = [
    "Introducing Bidirectional Negotiation to\nthe World of Autonomous Driving:\nBiologically Inspired Model",
    "Human-like Decision Making\nfor Autonomous Vehicles\nUsing Negotiation-Based AI",
    "Biologically Inspired\nNegotiation Models for\nSmarter Autonomous Systems",
    "AI-driven Cooperative\nDecision Making in\nAutonomous Driving",
    "Redefining the Future of\nAutonomous Vehicles with\nBidirectional Intelligence",
    "Redefining the Future of\nAutonomous Vehicles with\nBidirectional Intelligence",
  ];

  const getSlots = () => {
    if (screenSize.isMobile) {
      return [
        { x: -220, scale: 0.6, opacity: 0.25, z: 1 },
        { x: -110, scale: 0.8, opacity: 0.5, z: 5 },
        { x: 0, scale: 1, opacity: 1, z: 20 },
        { x: 110, scale: 0.8, opacity: 0.5, z: 5 },
        { x: 220, scale: 0.6, opacity: 0.25, z: 1 },
      ];
    }

    return [
      { x: -2560, scale: 0.6, opacity: 0, z: 1 },
      { x: -1560, scale: 0.4, opacity: 0, z: 1 },
      { x: -650, scale: 0.4, opacity: 0.25, z: 5 },
      { x: 0, scale: 1, opacity: 1, z: 20 },
      { x: 650, scale: 0.4, opacity: 0.25, z: 5 },
      { x: 1560, scale: 0.6, opacity: 0.25, z: 1 },
      { x: 2560, scale: 0.6, opacity: 0, z: 1 },
    ];
  };

  /* ================= desktop GSAP ANIMATION ================= */
  useLayoutEffect(() => {
    const slots = getSlots();
    const CENTER = Math.floor(slots.length / 2);
    const total = images.length;

    let nextCenter = centerIndex;

    refs.current.forEach((el, i) => {
      if (!el) return;

      gsap.killTweensOf(el);

      let offset = i - activeStep;

      const slotIndex = offset + CENTER;
      const slot = slots[slotIndex];
      if (!slot) {
        gsap.to(el, {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          overwrite: true,
        });
        return;
      }

      if (slotIndex === CENTER) nextCenter = i;

      gsap.to(el, {
        x: slot.x,
        scale: slot.scale,
        opacity: slot.opacity,
        zIndex: slot.z,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });
    });

    if (nextCenter !== centerIndex) setCenterIndex(nextCenter);
  }, [activeStep, screenSize]);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
  }, []);

  /* ================= MOBILE GSAP ANIMATION ================= */
  useLayoutEffect(() => {
    if (!screenSize.isMobile) return;

    const items = mobileRefs.current;
    const total = items.length;
    const GAP = 380;

    items.forEach((el, i) => {
      gsap.set(el, {
        y: i * GAP,
        position: "absolute",
      });
    });

    const tl = gsap.to(items, {
      y: `-=${(total - 1) * GAP}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        id: "timeline-mobile",
        start: "top top",
        end: `+=${(total - 0) * 120}%`,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getById("timeline-mobile")?.kill();
    };
  }, [screenSize]);

  // MOBILE COMPONENT - SIMPLE VERSION
  if (screenSize.isMobile) {
    return (
      <section className="relative w-full h-screen bg-[#0b0f0c] timeline-wrapper overflow-hidden">
        {/* TIMELINE LINE */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/30" />

        {/* TIMELINE ITEMS */}
        <div className="absolute left-0 right-0 top-40 bottom-20">
          {images.slice(0, 5).map((src, i) => (
            <div
              key={i}
              ref={(el) => (mobileRefs.current[i] = el)}
              className="absolute left-0 right-0"
            >
              <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-[#0b0f0c] border-2 border-white z-10" />

              <div className="ml-12 text-white text-sm font-medium mb-3">
                {MOBILE_DATES[i]}
              </div>

              <div className="ml-12 mr-6 bg-black/50 rounded-xl overflow-hidden border border-white/20">
                <div className="relative group">
                  <img
                    src={src}
                    className="w-full h-[200px] object-cover"
                    draggable={false}
                    loading="eager"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center
                               backdrop-blur-sm
                               active:scale-95 transition-transform"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="ml-[2px]"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className="p-4">
                  <h3 className="text-white text-base font-medium">
                    {CENTER_TEXTS[i]}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ================= Desktop Animation JSX ================= */
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* CARDS */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-[460px] flex items-center justify-center isolate">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className="absolute will-change-transform mb-80"
              style={{
                width: "100%",
                maxWidth: screenSize.isMobile ? 460 : 870,
                height: "auto",
              }}
            >
              <div
                className={`relative sm:w-full sm:h-full h-[50vh] sm:mt-20 mt-[40vh] sm:p-0 p-2 overflow-hidden`}
              >
                <img
                  src={src}
                  className="w-full h-full object-cover object-fit object-center"
                  draggable={false}
                  loading="eager"
                />

                <div className="absolute inset-0 bg-black/10" />

                {/* PLAY */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="ml-1 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-transparent border-l-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CENTER DATE - DESKTOP ONLY */}
      {centerIndex !== null && screenSize.isDesktop && (
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 z-40">
          <div className="text-center px-6 py-3 rounded-lg backdrop-blur-sm">
            <p className="text-white font-mono text-lg font-semibold">
              {DESKTOP_DATES[centerIndex]}
            </p>
          </div>
        </div>
      )}

      {/* CENTER TEXT */}
      {centerIndex !== null && (
        <div className="absolute left-1/2 -translate-x-1/2 sm:bottom-[20vh] bottom-32 mt-[10vh] z-30 px-4 text-center w-[90vw] sm:w-[80vw] md:w-[75vw] lg:w-[40vw] xl:w-[35vw]">
          <p
            style={{ fontFamily: "Rethink, sans-serif" }}
            className="text-white whitespace-pre-line text-sm sm:text-base lg:text-lg leading-[10%] max-w-[620px] mx-auto"
          >
            {CENTER_TEXTS[centerIndex]}
          </p>
        </div>
      )}
    </div>
  );
}

/* ================= CENTER FEATURE (GRID LINES) ================= */
function CenterFeature({ screenSize }) {
  return (
    <>
      {/* Desktop Grid Lines */}
      {screenSize.isDesktop && (
        <>
          <div className="absolute top-[5%] bottom-[18%] left-[26.4%] w-px bg-white/30 pointer-events-none" />
          <div className="absolute top-[5%] bottom-[16%] left-[73.6%] w-px bg-white/30 pointer-events-none" />
          <div className="absolute left-0 top-[12.3%] w-full h-px bg-white/20 pointer-events-none" />
          <div className="absolute left-0 top-[62.8%] w-full h-px bg-white/20 pointer-events-none" />
        </>
      )}
    </>
  );
}