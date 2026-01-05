import { useState, useLayoutEffect, useRef } from "react";
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
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const diamondRef = useRef(null);
  const prevIndexRef = useRef(0);

  // ================= GSAP SCROLL LOGIC =================
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create smoother ScrollTrigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=80",
        end: "+=300%",
          pinSpacing: true,
        pin: true,
        scrub: 0.5, // Increased scrub for smoother animation
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(3, Math.floor(progress * 4));
          
          // Only update if index changed
          if (index !== prevIndexRef.current) {
            setActiveIndex(index);
            
            // Smooth diamond movement
            if (diamondRef.current) {
              gsap.to(diamondRef.current, {
                left: diamondPositions[index],
                duration: 0.4,
                ease: "power2.out"
              });
            }
            
            // Smooth image crossfade
           if (imageRef.current) {
  gsap.to(imageRef.current, {
    opacity: 0,
    y: 300,                 // 👈 move down
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      imageRef.current.src = images[index];

      gsap.fromTo(
        imageRef.current,
        {
          opacity: 1,
          y: 40,             // 👈 start from bottom
        },
        {
          opacity: 1,
          y: 0,              // 👈 come to normal
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
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Optional: Smooth scroll for the entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <section
        ref={sectionRef}
        className="relative min-h-screen  overflow-hidden bg-black  scrollbar-hide"
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

        {/* ================= GRID LINES ================= */}
    <div className="absolute top-0 left-0 right-0 h-[80vh] pointer-events-none z-10">
  {/* LEFT */}
  <div className="absolute left-32 top-0 h-full w-px bg-gradient-to-b
                  from-white/30 via-white/20 to-transparent" />

  {/* RIGHT */}
  <div className="absolute right-[150px] top-0 h-full w-px bg-gradient-to-b
                  from-white/30 via-white/20 to-transparent" />

  {/* MIDDLE */}
  <div className="absolute left-[27%] top-0 h-full w-px bg-gradient-to-b
                  from-white/30 via-white/20 to-transparent" />
  <div className="absolute left-[48%] top-0 h-full w-px bg-gradient-to-b
                  from-white/30 via-white/20 to-transparent" />
  <div className="absolute left-[69%] top-0 h-full w-px bg-gradient-to-b
                  from-white/30 via-white/20 to-transparent" />
</div>



        {/* ================= HORIZONTAL LINE + DIAMOND ================= */}
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

        {/* ================= TEXT GRID ================= */}
        <div className="relative z-30 max-w-[85vw] mx-auto px-6 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            {features.map((item, i) => (
              <div key={i} className="px-4 sm:px-6 lg:px-10">
                <h3
                  className={`text-[22px] sm:text-[26px] lg:text-[32px] font-Rethink Sans  mb-4 transition-colors duration-400
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

        {/* ================= FRONT IMAGE (SWAPS ON SCROLL) ================= */}
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
      </section>
    </>
  );
}