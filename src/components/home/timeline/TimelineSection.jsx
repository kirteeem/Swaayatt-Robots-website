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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: isMobile ? "+=2500" : "+=3500",
      scrub: isMobile ? 0.8 : 1.2,
      pin: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
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
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Blog Nodes Component */}
      <BlogNodes progress={progress} isMobile={isMobile} />
      
      {/* Center Grid Lines */}
      <CenterFeature isMobile={isMobile} />
      
      {/* Road Timeline with Car */}
      <RoadTimeline progress={progress} isMobile={isMobile} />
      
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
      `}</style>
    </section>
  );
}

/* ================= BLOG NODES COMPONENT ================= */
function BlogNodes({ progress, isMobile }) {
  const refs = useRef([]);
  const [centerIndex, setCenterIndex] = useState(null);

  const images = [
    "/images/Blogs/Homepage-1.webp",
    "/images/Blogs/Homepage-1.webp",
    "/images/Blogs/Blog-1.webp",
    "/images/media/news/n1.webp",
    "/images/Blogs/Homepage-1.webp",
  ];

  const CENTER_TEXTS = [
    "Introducing Bidirectional Negotiation to\nthe World of Autonomous Driving:\nBiologically Inspired Model",
    "Human-like Decision Making\nfor Autonomous Vehicles\nUsing Negotiation-Based AI",
    "Biologically Inspired\nNegotiation Models for\nSmarter Autonomous Systems",
    "AI-driven Cooperative\nDecision Making in\nAutonomous Driving",
    "Redefining the Future of\nAutonomous Vehicles with\nBidirectional Intelligence",
  ];

  const SLOTS = [
    { x: "-42vw", scale: 0.42, opacity: 0.45, z: 5 },
    { x: "-24vw", scale: 0.65, opacity: 0.38, z: 10 },
    { x: "0vw", scale: 1.1, opacity: 1, z: 30 },
    { x: "24vw", scale: 0.65, opacity: 0.38, z: 10 },
    { x: "39vw", scale: 0.32, opacity: 0.45, z: 4 },
  ];

  useLayoutEffect(() => {
    const total = images.length;
    const CENTER_INDEX = Math.floor(total / 2);
    const safeProgress = progress ?? 0;
    const indexProgress = CENTER_INDEX + safeProgress * total;

    refs.current.forEach((el, i) => {
      if (!el) return;
      let offset = i - indexProgress;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const slotIndex = ((Math.round(offset + CENTER_INDEX) % total) + total) % total;
      const slot = SLOTS[slotIndex];
      const isCenter = slotIndex === CENTER_INDEX;

      gsap.to(el, {
        x: slot.x,
        scale: slot.scale,
        opacity: slot.opacity,
        zIndex: slot.z,
        duration: 0.45,
        ease: "power3.out",
      });

      if (isCenter) setCenterIndex(i);
    });
  }, [progress]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Green Reflection Glow */}
      <div
        className="absolute inset-0 blur-[5vw] sm:blur-[5vw]"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 35%,
              rgba(47, 52, 37, 0.9) 0%,
              rgba(47, 52, 37, 0.6) 20%,
              rgba(0, 0, 0, 0.85) 40%,
              rgba(0, 0, 0, 1) 100%
            )
          `,
        }}
      />

      {/* Blog Images */}
      {images.map((src, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className={`
            absolute
            sm:left-[38vw] 
            
            left-[50vw]
            -translate-x-1/2
            ${isMobile ? 'top-[24vh]' : 'top-[18%]'}
          `}
        >
          <div className={`relative ${isMobile ? 'w-[85vw] h-[40vh]' : 'w-[25vw] mx-auto'} aspect-video`}>
            <div
              className={`relative ${
                centerIndex === i
                  ? "rounded-none"
                  : "rounded-[1vw] overflow-hidden"
              }`}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[8vw] max-w-[5vh] aspect-square rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl">
                  <div
                    className="
                      ml-[0.4vw]
                      w-0 h-0
                      border-t-[1.4vh]
                      border-b-[1.4vh]
                      border-l-[2.2vh]
                      border-t-transparent
                      border-b-transparent
                      border-l-white
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile Green Glow Behind Text */}
      {isMobile && (
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            pointer-events-none
            top-[calc(24vh+75vw*0.5625+6vh)]
            w-[140vw]
            h-[35vh]
            blur-[9vw]
            opacity-85
          "
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(47,52,37,0.9) 0%, rgba(47,52,37,0.55) 35%, rgba(0,0,0,0) 70%)",
          }}
        />
      )}

      {/* Center Text */}
      {centerIndex !== null && (
        <div
          className={`
            absolute
            left-1/2
            -translate-x-1/2
            z-30
            ${isMobile ? 'px-[5vw] top-[calc(24vh+75vw*0.5625+8vh)]' : 'px-[2vw] top-[48%]'}
            text-center
          `}
        >
          <p className={`
            font-mono
            ${isMobile ? 'text-[3.6vw]' : 'text-[1.2vw]'}
            leading-[135%]
            tracking-[-0.02em]
            text-white
            ${isMobile ? 'max-w-[100vw]' : 'max-w-[38vw]'}
            whitespace-pre-line
          `}>
            {CENTER_TEXTS[centerIndex]}
          </p>
        </div>
      )}
    </div>
  );
}

/* ================= CENTER FEATURE (GRID LINES) ================= */
function CenterFeature({ isMobile }) {
  return (
    <>
      {/* Desktop Grid Lines */}
      {!isMobile && (
        <>
          <div className="absolute top-[5%] bottom-[18%] left-[35.5%] w-px bg-white/70 pointer-events-none" />
          <div className="absolute top-[5%] bottom-[16%] left-[66.4%]  w-px bg-white/70 pointer-events-none" />
          <div className="absolute left-0 top-[16.5%] w-full h-px bg-white/50 pointer-events-none" />
          <div className="absolute left-0 top-[42.5%] w-full h-px bg-white/50 pointer-events-none" />
        </>
      )}

      {/* Mobile Grid Lines */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-[20vh] w-full h-px bg-white/60 pointer-events-none" />
          <div className="absolute left-0 top-[58vh] w-full h-px bg-white/60 pointer-events-none" />
        </>
      )}
    </>
  );
}

/* ================= ROAD TIMELINE COMPONENT ================= */
function RoadTimeline({ progress, isMobile }) {
  const carRef = useRef(null);
  const wrapperRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const prevProgressRef = useRef(null);

  const DIVIDERS = [
    { left: "20%", date: "20 Aug 2025" },
    { left: "35%", date: "30 Jul 2025" },
    { left: "65%", date: "08 Jul 2025" },
    { left: "82%", date: "23 Apr 2025" },
  ];

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

  // Car animation
  useEffect(() => {
    if (!carRef.current || !wrapperRef.current || !imageLoaded) return;

    const width = wrapperRef.current.offsetWidth;
    const startX = 0;
    const endX = width * 0.78;

    if (
      prevProgressRef.current !== null &&
      progress < 0.1 &&
      prevProgressRef.current > 0.1
    ) {
      gsap.set(carRef.current, { x: 0 });
    }

    const safeProgress = gsap.utils.clamp(0, 1, progress ?? 0);
    gsap.to(carRef.current, {
      x: gsap.utils.interpolate(startX, endX, safeProgress),
      duration: 0.35,
      ease: "power3.out",
    });

    prevProgressRef.current = progress;
  }, [progress, imageLoaded]);

  if (isMobile) return null; // Hide road on mobile

  return (
    <div
      ref={wrapperRef}
      className="
        absolute
        bottom-[4vh]
        left-0
        right-0
        h-[22vh]
        z-40
        pointer-events-none
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
        className="absolute left-0 right-0 bg-black z-[5]"
        style={{
          top: "12.5vh",
          height: "9.5vh",
        }}
      />

      {/* Dividers with Dates */}
      {DIVIDERS.map((item, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: item.left,
            top: 0,
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "14vh",
              width: "0.1vw",
              transform: "rotate(25deg)",
              transformOrigin: "top",
            }}
          >
            {/* Main Line */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "white",
              }}
            />
            {/* Joint */}
            <div
              style={{
                position: "absolute",
                bottom: "-0.3vh",
                left: "-0.25vw",
                width: "0.6vw",
                height: "0.6vw",
                borderRadius: "50%",
                background: "white",
              }}
            />
            {/* Tilted Down Line */}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "0.1vw",
                height: "5vh",
                background: "white",
                transform: "rotate(-24deg)",
                transformOrigin: "top",
              }}
            />
            {/* Date */}
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 5vh)",
                left: "3vw",
                transform: "translateX(-50%) rotate(-24deg)",
                transformOrigin: "top",
                fontSize: "1.1vw",
                color: "rgba(255,255,255,0.7)",
                whiteSpace: "nowrap",
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
          -translate-y-1/2
          w-[22vw]
          max-w-[28vw]
          z-40
        "
        style={{
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
          transform: "translateY(-50%) translateX(0)",
          left: 0,
        }}
        alt="car"
      />
    </div>
  );
}

/* ================= HOOK FOR MOBILE DETECTION ================= */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}