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
    
    const imagePromises = imageSources.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
      });
    });
    
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
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
        progressRef.current = p;

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
    "AI-driven Cooperative\nDecision Making in\nAutonomous Driving"
    ,
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

    const items = mobileRefs.current.filter(Boolean);
    const GAP = 380;

    items.forEach((el, i) => {
      gsap.set(el, {
        y: i * GAP,
        position: "absolute",
      });
    });

    const tl = gsap.to(items, {
      y: `-=${(items.length - 1) * GAP}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        id: "timeline-mobile",
        start: "top top",
        end: `+=${items.length * 120}%`,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getById("timeline-mobile")?.kill();
    };
  }, [screenSize]);

  // MOBILE COMPONENT
  if (screenSize.isMobile) {
    return (
      <section className="relative w-full h-screen bg-[#0b0f0c] timeline-wrapper overflow-hidden">
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/30" />
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
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center backdrop-blur-sm active:scale-95 transition-transform">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="white" className="ml-[2px]">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
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
      {/* CARDS CONTAINER - FIXED POSITIONING */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className="absolute will-change-transform"
              style={{
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* IMAGE WRAPPER WITH FIXED VH/VW */}
              <div className="relative" style={{
                width: '60vw',
                height: '58vh',
                maxWidth: '870px',
                minHeight: '450px',
              }}>
                <img
                  src={src}
                  className="w-full h-full object-cover rounded-lg"
                  draggable={false}
                  loading="eager"
                  alt={`Blog ${i + 1}`}
                />

                <div className="absolute inset-0 bg-black/10 rounded-lg" />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
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
        <div className="fixed top-[6vh] left-1/2 -translate-x-1/2 z-40 pointer-events-none">
          <div className="text-center px-6 py-3 rounded-lg backdrop-blur-sm">
            <p className="text-white font-mono text-lg font-semibold">
              {DESKTOP_DATES[centerIndex]}
            </p>
          </div>
        </div>
      )}

      {/* CENTER TEXT */}
      {centerIndex !== null && (
        <div className="fixed bottom-[10vh] left-1/2 -translate-x-1/2 z-30 px-4 text-center pointer-events-none"
          style={{
            width: screenSize.isMobile ? '90vw' : '40vw',
            maxWidth: '620px'
          }}
        >
          <p
            style={{ fontFamily: "Rethink, sans-serif" }}
            className="text-white whitespace-pre-line text-sm sm:text-base lg:text-lg leading-relaxed"
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
          {/* Vertical Lines */}
          <div className="fixed top-[6vh] bottom-[15vh] left-[26.4%] w-px bg-white/30 pointer-events-none z-10" />
          <div className="fixed top-[6vh] bottom-[15vh] left-[73.6%] w-px bg-white/30 pointer-events-none z-10" />

          {/* Horizontal Lines */}
          <div className="fixed left-0 top-[12vh] w-full h-px bg-white/20 pointer-events-none z-10" />
          <div className="fixed left-0 bottom-[22vh] w-full h-px bg-white/20 pointer-events-none z-10" />
        </>
      )}
    </>
  );
}