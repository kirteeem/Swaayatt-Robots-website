import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedVideoReveal() {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 🔤 Text fade-in (only once)
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // 📱 Mobile
      mm.add("(max-width: 639px)", () => {
        gsap.fromTo(
          videoWrapperRef.current,
          { width: "75vw", height: "40vh" },
          {
            width: "95vw",
            height: "70vh",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 📱 Tablet
      mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
        gsap.fromTo(
          videoWrapperRef.current,
          { width: "60vw", height: "40vh" },
          {
            width: "92vw",
            height: "70vh",
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 🖥 Desktop
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          videoWrapperRef.current,
          { width: "40vw", height: "36vh" },
          {
            width: "86vw",
            height: "82vh",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full sm:min-h-screen   bg-black flex items-center"
    >
      <div className="relative w-full h-screen flex items-center justify-center">
        <div
          ref={videoWrapperRef}
          className="
            relative
            overflow-hidden
            bg-black
            rounded-xl
            origin-center
          "
        >
          {/* 🎥 Video */}
          <video
            src="/images/footer/video-f.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* 📝 Center Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2
                style={{ fontFamily: "'Chivo Mono', monospace" }}
              ref={textRef}
              className="
                text-white
                text-center
                font-semibold
                tracking-wide
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-6xl
                drop-shadow-lg
              "
            >
             THE JOURNEY OF AUTONOMOUS MOBILITY89
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
