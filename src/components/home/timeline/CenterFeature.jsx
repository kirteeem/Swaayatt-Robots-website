import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
/* ================= DATA ================= */
const images = [
  "/images/Blogs/Homepage-1.webp",
  "/images/Blogs/Homepage-1.webp",
  "/images/Blogs/Blog-1.webp",
  "/images/media/news/n1.webp",
  "/images/Blogs/Homepage-1.webp",
];
const CENTER_TEXT =
  "Introducing Bidirectional Negotiation to\n" +
  "the World of Autonomous Driving:\n" +
  "Biologically Inspired Model";
/* ================= POSITIONS ================= */
const SLOTS = [
  { x: "-42vw", scale: 0.42, opacity: 0.18, z: 5 },
  { x: "-24vw", scale: 0.65, opacity: 0.38, z: 10 },
  { x: "0vw", scale: 1.1, opacity: 1, z: 30 }, // CENTER
  { x: "24vw", scale: 0.65, opacity: 0.38, z: 10 },
  { x: "39vw", scale: 0.32, opacity: 0.16, z: 4 },
];
/* ================= COMPONENT ================= */
export default function BlogNodes({ progress }) {
  const refs = useRef([]);
  const [centerIndex, setCenterIndex] = useState(null);
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
      const slotIndex = wrapIndex(
        Math.round(offset + CENTER_INDEX),
        total
      );
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
      {/* ================= GREEN REFLECTION ================= */}
      <div
        className="absolute inset-0 blur-[80px] sm:blur-[110px]"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 54%,
              rgba(47, 52, 37, 0.85) 0%,
              rgba(47, 52, 37, 0.55) 22%,
              rgba(0, 0, 0, 0.85) 45%,
              rgba(0, 0, 0, 1) 100%
            )
          `,
        }}
      />
      {/* ================= IMAGES ================= */}
      {images.map((src, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="absolute top-[22%] sm:top-[18%] left-1/2 -translate-x-1/2"
        >
          <div className="relative w-[68vw] sm:w-[38vw] md:w-[22vw] aspect-video overflow-visible">
            <div
              className={`
                relative z-20
                ${
                  centerIndex === i
                    ? "rounded-none overflow-visible"
                    : "rounded-lg overflow-hidden"
                }
              `}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/25" />
              {/* PLAY BUTTON */}
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <div className="w-[12vw] sm:w-[5vw] md:w-[3.8vw] min-w-[42px] min-h-[42px] max-w-[60px] max-h-[60px] rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl">
                  <div className="ml-[3px] w-0 h-0 border-t-[9px] border-b-[9px] border-l-[14px] border-t-transparent border-b-transparent border-l-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* ================= CENTER TEXT ================= */}
      {centerIndex !== null && (
        <div className="absolute left-1/2 top-[52%] sm:top-[45%] -translate-x-1/2 z-30 px-4">
          <p className="font-['Chivo_Mono'] text-[14px] sm:text-[16px] md:text-[18px] leading-[115%] tracking-[-0.02em] text-white max-w-[92vw] sm:max-w-[620px] whitespace-pre-line text-left">
            {CENTER_TEXT}
          </p>
        </div>
      )}
    </div>
  );
}
/* ================= UTILS ================= */
function wrapIndex(value, length) {
  return ((value % length) + length) % length;
}