import React from "react";

export default function TwitterSpotlight() {
  // IMAGES
  const twitterCards = [
    "/images/media/twitter/t1.webp",
    "/images/media/twitter/t2.webp",
    "/images/media/twitter/t3.webp",
    "/images/media/twitter/t4.webp",
    "/images/media/twitter/t2.webp",
    "/images/media/twitter/t4.webp",
    "/images/media/twitter/t3.webp",
  ];

  return (
    <section className="sm:max-w-[89vw] max-w-[100vw] mx-auto px-6 pb-20">

      {/* ================= SECTION TITLE ================= */}
  <h2
  className="
    font-rethink
    font-medium
    text-[32px]
    leading-[100%]
    tracking-[-0.02em]
    text-[#101010] dark:text-white
    mb-8
  "
>
  Twitter Spotlight
</h2>


      {/* ================= GRID ================= */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        {twitterCards.map((img, index) => (
          <div
            key={index}
            className="
              rounded-[12px]
              overflow-hidden
              bg-white
        
              border border-black/10
              hover:shadow-md
              transition
            "
          >
            <img
              src={img}
              alt={`Twitter spotlight ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
