import { useRef } from "react";
import VideoCard from "../VideoCard";

export default function ResearchSlider({ videos, section }) {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -520, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 520, behavior: "smooth" });
  };

  return (
    <section className="relative">

      {/* ===== RIGHT FLOATING BUTTONS (FIGMA STYLE) ===== */}
      <div className="absolute right-0 -top-14 flex gap-3">
        <button
          onClick={scrollLeft}
          className="
            w-10 h-10 rounded-full border
            bg-white flex items-center justify-center
            text-gray-500 hover:text-black
            hover:shadow transition
          "
        >
          ‹
        </button>

        <button
          onClick={scrollRight}
          className="
            w-10 h-10 rounded-full border
            bg-white flex items-center justify-center
            text-gray-500 hover:text-black
            hover:shadow transition
          "
        >
          ›
        </button>
      </div>

      {/* ===== ONE-LINE THUMBNAILS ===== */}
      <div
        ref={rowRef}
        className="
          flex flex-nowrap gap-10
          overflow-x-auto
          scroll-smooth
          scrollbar-hide
          pr-[10%]   /* visual breathing space like Figma */
        "
      >
        {videos.map((item) => (
          <VideoCard
            key={item.id}
            data={item}
            section={section}
          />
        ))}
      </div>
    </section>
  );
}
