import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= MAIN TIMELINE COMPONENT ================= */
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
    if (!sectionRef.current) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => "+=" + window.innerHeight * 4.5,

      scrub: screenSize.isMobile ? 0.8 : 1.2,
      pin: true,
      onUpdate: (self) => {
        const p = self.progress;
        progressRef.current = p;

        // 4 steps for 4 divider points
        const step = Math.min(3, Math.floor(p * 4));
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
  }, [screenSize]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Blog Nodes Component */}
      <BlogNodes progress={progress} activeStep={activeStep} screenSize={screenSize} />

      {/* Center Grid Lines */}
      <CenterFeature screenSize={screenSize} />

      {/* Road Timeline with Car */}
      <RoadTimeline progress={progress} activeStep={activeStep} screenSize={screenSize} />

      {/* Inline CSS */}
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
          top: 58px;
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
          top: 0;
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
  ];



  const MOBILE_DATES = [
    "20 Aug 2025",
    "30 Jul 2025",
    "08 Jul 2025",
    "23 Apr 2025",
    "11 Sep 2025",
  ];


  const CENTER_TEXTS = [
    "Introducing Bidirectional Negotiation to\nthe World of Autonomous Driving:\nBiologically Inspired Model",
    "Human-like Decision Making\nfor Autonomous Vehicles\nUsing Negotiation-Based AI",
    "Biologically Inspired\nNegotiation Models for\nSmarter Autonomous Systems",
    "AI-driven Cooperative\nDecision Making in\nAutonomous Driving",
    "Redefining the Future of\nAutonomous Vehicles with\nBidirectional Intelligence",
  ];

  /* ================= SLOT SYSTEM (FIGMA SAFE) ================= */
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
      { x: -760, scale: 0.6, opacity: 0.25, z: 1 },
      { x: -450, scale: 0.8, opacity: 0.55, z: 5 },
      { x: 0, scale: 1, opacity: 1, z: 20 },
      { x: 450, scale: 0.8, opacity: 0.55, z: 5 },
      { x: 760, scale: 0.6, opacity: 0.25, z: 1 },
    ];
  };

  /* ================= GSAP ANIMATION ================= */
  useLayoutEffect(() => {
    const total = images.length;
    const CENTER = Math.floor(total / 2);
    const slots = getSlots();

    let nextCenter = centerIndex;

    refs.current.forEach((el, i) => {
      if (!el) return;

      gsap.killTweensOf(el);

      let offset = i - activeStep;
      if (offset > CENTER) offset -= total;
      if (offset < -CENTER) offset += total;

      const slotIndex = offset + CENTER;
      const slot = slots[slotIndex];
      if (!slot) return;

      if (slotIndex === CENTER) nextCenter = i;

      gsap.to(el, {
        x: slot.x,
        scale: slot.scale,
        opacity: slot.opacity,
        zIndex: slot.z,
        duration: 0.9,
        ease: "power4.out",
        force3D: true,
        transformOrigin: "50% 50%",
      });
    });

    if (nextCenter !== centerIndex) setCenterIndex(nextCenter);
  }, [activeStep, screenSize]);



  //mobile view

  useLayoutEffect(() => {
    if (!screenSize.isMobile) return;

    const cards = mobileRefs.current;
    const total = cards.length;

    // Initial state
    gsap.set(cards, {
      y: 420,
      opacity: 0,
    });

    // First card visible
    gsap.set(cards[0], {
      y: 0,
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cards[0].parentElement,
        start: "top top",
        end: `+=${total * 100}%`,
        pin: true,
        scrub: 1,
        snap: 1 / (total - 1),
        anticipatePin: 1,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;

      // Show current card
      tl.to(card, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // Hide previous card
      tl.to(
        cards[i - 1],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<" // same time start
      );
    });

  }, [screenSize]);




  // mobile screen

  if (screenSize.isMobile) {
    return (
      <div className="relative w-full">
        {/* Vertical Line */}
        <div className="fixed left-6 top-40 h-[60vh] w-[2px] bg-green-500/40 z-0" />

        <div className="relative h-screen flex items-center">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => (mobileRefs.current[i] = el)}
              className="absolute w-full flex flex-col items-start px-4"
              style={{ zIndex: i + 1 }}
            >
              {/* Date Row */}
              <div className="relative flex items-center mb-3">
                {/* Connector */}

                {/* Date */}
                <div className="ml-4 mb-4 bg-gray-800 px-4 py-1 text-xs text-gray-100 font-mono whitespace-nowrap rounded">
                  {MOBILE_DATES[i]}
                </div>
              </div>

              {/* Card */}
              <div className="ml-4 mb-10 w-[85vw] min-w-[80vw] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,255,0,0.25)]">
                <img
                  src={src}
                  className="w-full h-[420px] object-cover"
                  draggable={false}
                />

          <div className="ml-2 mt-2 w-[80vw] text-center">
  <p className="text-white text-md leading-relaxed whitespace-pre-line opacity-90">
    {CENTER_TEXTS[i]}
  </p>
</div>



                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-14 h-14 rounded-full bg-red-600
      flex items-center justify-center
      shadow-[0_0_30px_rgba(255,0,0,0.6)]"
                  >
                    <div
                      className="ml-1 w-0 h-0
        border-t-[8px] border-t-transparent
        border-b-[8px] border-b-transparent
        border-l-[14px] border-l-white"
                    />
                  </div>
                </div>
              </div>
            </div>





  
          ))}


        </div>
      </div>
    );
  }




  /* ================= JSX ================= */
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0, 255, 0, 0.13)_0%,rgba(0,0,0,1)_65%)]" />

      {/* CARDS */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-[360px] flex items-center justify-center isolate">

          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className="absolute will-change-transform mb-80"
              style={{
                width: "100%",
                maxWidth: screenSize.isMobile ? 460 : 420,
                height: "auto",
              }}

            >
              <div
                className={`relative sm:w-full sm:h-full h-[50vh]  sm:mt-0 mt-[40vh] sm:p-0 p-2 rounded-xl overflow-hidden ${centerIndex === i
                  ? "shadow-[0_0_80px_rgba(0,255,0,0.45)]"
                  : ""
                  }`}
              >
                <img
                  src={src}
                  className="w-full h-full object-cover object-fit object-center"
                  draggable={false}
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






      {/* CENTER TEXT */}
      {centerIndex !== null && (
        <div className="absolute sm:bottom-[35%] bottom-[0%]  sm:w-[30vw] md:w-[30vw]  w-[90vw]  left-1/2 -translate-x-1/2 text-center z-30 px-4">
          <p className="font-mono text-white whitespace-pre-line text-sm sm:text-base lg:text-lg max-w-[620px] leading-[150%]">
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
          <div className="absolute top-[5%] bottom-[18%] left-[35.5%] w-px bg-white/30 pointer-events-none" />
          <div className="absolute top-[5%] bottom-[16%] left-[64.4%] w-px bg-white/30 pointer-events-none" />


          <div className="absolute left-0 top-[16.5%] w-full h-px bg-white/20 pointer-events-none" />
          <div className="absolute left-0 top-[49.5%] w-full h-px bg-white/20 pointer-events-none" />
        </>
      )}

    </>
  );
}

/* ================= ROAD TIMELINE COMPONENT ================= */
function RoadTimeline({ progress, activeStep, screenSize }) {
  const carRef = useRef(null);
  const wrapperRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const prevActiveStepRef = useRef(-1);
  const [isExiting, setIsExiting] = useState(false);

  // Responsive divider positions
  const getDividers = () => {
    if (screenSize.isMobile) {
      return [
        { left: "15%", date: "20 Aug 2025" },
        { left: "40%", date: "30 Jul 2025" },
        { left: "65%", date: "08 Jul 2025" },
        { left: "90%", date: "23 Apr 2025" },
      ];
    } else if (screenSize.isTablet) {
      return [
        { left: "12%", date: "20 Aug 2025" },
        { left: "38%", date: "30 Jul 2025" },
        { left: "64%", date: "08 Jul 2025" },
        { left: "90%", date: "23 Apr 2025" },
      ];
    } else {
      return [
        { left: "10%", date: "20 Aug 2025" },
        { left: "38%", date: "30 Jul 2025" },
        { left: "65%", date: "08 Jul 2025" },
        { left: "92%", date: "23 Apr 2025" },
      ];
    }
  };

  const DIVIDERS = getDividers();

  // Image load handler
  useEffect(() => {
    const img = carRef.current;
    if (!img) return;

    const handleLoad = () => setImageLoaded(true);
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.addEventListener("load", handleLoad);
      return () => img.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!carRef.current || !wrapperRef.current || !imageLoaded) return;

    const car = carRef.current;
    const width = wrapperRef.current.offsetWidth;

    // Start and end positions
    const startX = -car.offsetWidth * 1.2;
    const lastDivider =
      parseFloat(DIVIDERS[DIVIDERS.length - 1].left) / 100;
    const exitX = width + car.offsetWidth * 1.2;

    let x;

    // 🚗 NORMAL DRIVE (0 → 90% scroll)
    if (progress < 0.9) {
      const driveProgress = gsap.utils.mapRange(
        0,
        0.9,
        startX,
        width * lastDivider,
        progress
      );
      x = driveProgress;
    }
    // 🚗 EXIT DRIVE (90% → 100%)
    else {
      x = gsap.utils.mapRange(
        0.9,
        1,
        width * lastDivider,
        exitX,
        progress
      );
    }

    gsap.to(car, {
      x,
      duration: 0.6,
      ease: progress > 0.9 ? "power2.in" : "power2.out",
      overwrite: true,
    });

    car.style.opacity = "1";
  }, [progress, imageLoaded, screenSize]);


  if (screenSize.isMobile) return null;

  return (
    <div
      ref={wrapperRef}
      className="
        absolute
        bottom-0
        left-0
        right-0
        h-[20vh]
        z-40
        pointer-events-none
        overflow-visible
      "
    >
      {/* Road Surface */}
      <div className="absolute top-[-1vh] left-0 right-0 h-[13vh] z-10 road-wrap">
        <div className="road-surface" />
        {/* Center Strips */}
        <div className="road-center">
          <div className="road-dash" />
        </div>
      </div>

      {/* Black Area Below Road */}
      <div
        className="absolute left-[-20px] right-0 bg-black z-[5]"
        style={{
          top: "12.5vh",
          height: "9.5vh",
        }}
      />

      {/* Dividers with Dates */}
      {DIVIDERS.map((item, i) => (
        <div
          key={i}
          className="divider-point"
          style={{
            position: "absolute",
            left: item.left,
            top: 0,
            zIndex: 25,
            pointerEvents: "none",
            transform: activeStep >= i ? "scale(1)" : "scale(0.8)",
            transition: "transform 0.3s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "10vh",
              width: "1px",
              transform: "rotate(25deg)",
              transformOrigin: "top",
            }}
          >
            {/* Main Line */}
            <div
              className={`transition-all duration-500 ${activeStep >= i ? "bg-white" : "bg-gray-600"
                }`}
              style={{
                position: "absolute",
                inset: 0,
              }}
            />
            {/* Joint with active state */}
            <div
              className={`${activeStep >= i ? "bg-white" : "bg-gray-600"} ${activeStep === i ? "active-point" : ""
                }`}
              style={{
                position: "absolute",
                bottom: "-0.3vh",
                left: "-0.25vw",
                width: "0.6vw",
                height: "0.6vw",
                borderRadius: "50%",
                transition: "all 0.3s ease",
              }}
            />
            {/* Tilted Down Line */}
            <div
              className={`transition-all duration-500 ${activeStep >= i ? "bg-white" : "bg-gray-600"
                }`}
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "1px",
                height: "5vh",
                transform: "rotate(-24deg)",
                transformOrigin: "top",
              }}
            />
            {/* Date */}
            <div
              className={`transition-all duration-500 ${activeStep >= i ? "text-white" : "text-gray-500"
                }`}
              style={{
                position: "absolute",
                top: "calc(100% + 5vh)",
                left: "3vw",
                transform: "translateX(-50%) rotate(-24deg)",
                transformOrigin: "top",
                fontSize: `${screenSize.isTablet ? '14px' : '16px'}`,
                whiteSpace: "nowrap",
                fontWeight: activeStep === i ? "bold" : "normal",
              }}
            >
              {item.date}
            </div>
          </div>
        </div>
      ))}

      {/* Car */}
      <img
        ref={carRef}
        src="/images/Swaayatt/Bolero.png"
        onLoad={() => setImageLoaded(true)}
        className="
          absolute
          top-[7vh]
          ${screenSize.isTablet ? 'w-[25vw]' : 'w-[22vw]'}
          max-w-[28vw]
          z-50
          transition-transform duration-1000 ease-out
        "
        style={{
          opacity: 0,
          transform: "translateY(-50%)",
          left: 0,
          filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
        }}
        alt="car"
      />
    </div>
  );
}