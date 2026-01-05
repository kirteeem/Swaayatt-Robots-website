import React, { useState } from "react";
import head from "/images/media/featured/f1.webp";

import back from "/images/icon/back.svg";
import right from "/images/icon/right.svg";

export default function FeaturedStories() {
  const slides = [
    {
      image: head,
      title:
        "Driverless Car: बिना ड्राइवर के ही फर्राटे भर रही ये गाड़ी, अब तक 50 हजार Km का ट्रायल रन हुआ कंप्लीट",
      description:
        "Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती। शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ देता है। क्या भारत में भी कभी ड्राइवरलेस कार दौड़ सकेगी? यह सवाल आपके मन में भी कई बार आया होगा। लेकिन इस सवाल का जवाब ढूंढने के लिए हम आपको लेकर चलते हैं...",
    },
    {
      image: head,
      title: "India’s First Level-5 Autonomous Driving System Tested Successfully",
      description:
        "This breakthrough showcases reinforcement-learning-based autonomy operating in complex Indian traffic conditions, highlighting robust perception, planning, and decision-making pipelines.",
    },
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section className="sm:max-w-[89vw] max-w-[100vw] mx-auto px-4 sm:px-6 pb-16 sm:pb-24">

      {/* SECTION TITLE */}
      <h2 className="font-rethink font-medium text-2xl sm:text-[32px] tracking-[-0.02em] text-[#101010] dark:text-white mb-6">
        Featured Stories
      </h2>

      {/* CARD */}
      <div className="bg-white dark:bg-[#1F1F1F] rounded-2xl sm:rounded-[24px] 
                      p-4 sm:p-8 lg:p-10
                      grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]
                      gap-6 lg:gap-16
                      shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden rounded-xl h-[220px] sm:h-[320px] lg:h-[420px]">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.image}
                alt="Featured"
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between min-h-[220px] sm:min-h-[320px] lg:min-h-[420px]">

          {/* TEXT */}
          <div>
            <h3
              className="
    font-rethink
    sm:w-[30vw] w-[85vw] 
    font-semibold
    text-xl sm:text-2xl lg:text-[32px]
    leading-[2] sm:leading-[2] lg:leading-[1.2]
    tracking-normal
    text-[#1A212F] dark:text-white
  "
            >
              {slides[index].title}
            </h3>


            <p className="mt-4 sm:mt-6  sm:w-[32vw] w-[85vw] font-rethink text-base sm:text-lg lg:text-[20px]
                          leading-loose
                          text-[#1A212F]/70 dark:text-white/70
                          line-clamp-5">
              {slides[index].description}
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex bg-white dark:bg-[#1F1F1F] justify-end gap-3 mt-6">

            <div
  onClick={next}
  className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
>
  <i className="ri-arrow-left-s-line text-3xl"></i>
</div>

<div
  onClick={prev}
  className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer"
>
  <i className="ri-arrow-right-s-line text-3xl"></i>
</div>

          </div>

        </div>
      </div>
    </section>
  );
}
