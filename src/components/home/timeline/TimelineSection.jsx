import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlogNodes from "./BlogNodes";
import RoadTimeline from "./RoadTimeline";
import CenterFeature from "./CenterFeature";
gsap.registerPlugin(ScrollTrigger);
export default function TimelineSection() {
  const sectionRef = useRef(null);


  const [progress, setProgress] = useState(0);

  const progressRef = useRef(0);
  const rafRef = useRef(null);
  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=3500",
      scrub: 1.2,
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
  }, []);
  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[100vh]
        bg-black
        overflow-hidden
        overflow-x-hidden
        touch-none
      "
    >
      {/* BLOG / SIDE NODES */}
      <BlogNodes progress={progress} />
      {/* CENTER FEATURE */}
      <CenterFeature progress={progress} />
      {/* ROAD */}
      <RoadTimeline />
    </section>
  );
}