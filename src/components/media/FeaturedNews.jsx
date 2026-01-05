import React from "react";

export default function FeaturedNews() {
  const news = [
    {
      id: 1,
      image: "/images/media/news-articles/article-1.webp",
      title: "Swaayatt Robots Raises $4 Million at $151 Million Valuation",
      logo: "/images/media/news-articles/logo-1.png",
    },
    {
      id: 2,
      image: "/images/media/news-articles/article-2.webp",
      title: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System in India",
      logo: "/images/media/news-articles/logo-2.png",
    },
    {
      id: 3,
      image: "/images/media/news-articles/article-2.webp",
      title: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System in India",
      logo: "/images/media/news-articles/logo-1.png",
    },
  ];

  return (
    <section className="sm:max-w-[89vw] max-w-[100vw] mx-auto px-4 pb-24">

      {/* ================= HEADING ================= */}
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
  News and Articles
</h2>


      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="
              relative
              h-[260px]
              rounded-[20px]
              overflow-hidden
            "
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-5 left-5 right-5">

              {/* LOGO + TITLE (ONE LINE) */}
              <div className="flex items-center gap-3">
                {/* LOGO */}
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
                  <img
                    src={item.logo}
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                </div>

                {/* TITLE */}
                <p
                  className="
                    font-rethink
                    font-medium
                    text-[18px]
                    leading-[100%]
                    tracking-[-0.02em]
                    text-white
                    max-w-[379px]
                  "
                >
                  {item.title}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
