import { useEffect, useRef } from "react";
import gsap from "gsap";
/* ================= DIVIDERS DATA ================= */
const DIVIDERS = [
  { left: "20%", date: "20 Aug 2025" },
  { left: "35%", date: "20 Jul 2025" },
  { left: "65%", date: "08 Jul 2025" },
  { left: "82%", date: "18 Mar 2025" },
];
export default function RoadTimeline({ progress }) {
  const carRef = useRef(null);
  const wrapperRef = useRef(null);
  useEffect(() => {
    if (!carRef.current || !wrapperRef.current) return;
    const width = wrapperRef.current.offsetWidth;
    const startX = 0;
    const endX = width * 0.78;
    const safeProgress = gsap.utils.clamp(0, 1, progress ?? 0);
    gsap.to(carRef.current, {
      x: gsap.utils.interpolate(startX, endX, safeProgress),
      duration: 0.35,
      ease: "power3.out",
    });
  }, [progress]);
  return (
    <div
      ref={wrapperRef}
      className="
        absolute
        bottom-[14vh]
        left-0
        right-0
        h-[190px]
        z-40
        pointer-events-none
      "
    >
      {/* ================= ROAD ================= */}
      <div className="absolute top-[-8px] left-0 right-0 h-[115px] z-10 road-wrap">
        <div className="road-surface" />
        {/* CENTER STRIPS */}
        <div className="road-center">
          <div className="road-dash" />
        </div>
      </div>
      {/* BLACK AREA BELOW ROAD */}
      <div
        className="absolute left-0 right-0 bg-black"
        style={{
          top: "107px",
          height: "83px",
          zIndex: 5,
        }}
      />
      {/* ================= DIVIDERS + DATE ================= */}
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
          {/* TOP ROTATED SEGMENT */}
          <div
            style={{
              position: "relative",
              height: "125px",
              width: "0.5px",
              transform: "rotate(25deg)",
              transformOrigin: "top",
            }}
          >
            {/* MAIN LINE */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "white",
              }}
            />
            {/* JOINT */}
            <div
              style={{
                position: "absolute",
                bottom: "-2px",
                left: "-1px",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "white",
              }}
            />
            {/* TILTED DOWN LINE */}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "0px",
                width: "0.5px",
                height: "45px",
                background: "white",
                transform: "rotate(-24deg)",
                transformOrigin: "top",
              }}
            />
            {/* DATE ONLY */}
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 44px)",
                left: "26px",
                transform: "translateX(-50%) rotate(-24deg)",
                transformOrigin: "top",
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                whiteSpace: "nowrap",
              }}
            >
              {item.date}
            </div>
          </div>
        </div>
      ))}
      {/* ================= CAR ================= */}
      <img
        ref={carRef}
        src="/images/Swaayatt/Bolero.png"
        className="
          absolute
          top-[60px]
          -translate-y-1/2
          w-[22vw]
          max-w-[320px]
          z-40
        "
        alt="car"
      />
    </div>
  );
}