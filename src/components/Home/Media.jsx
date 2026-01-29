
/////// MEDIA COURANGE CODE ////////////

import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MediaCard({
  imageSrc,
  sourceIcon,
  sourceName,
  headline,
  isFeatured = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${isFeatured ? "h-full" : "h-full"
        }`}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={headline}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay for entire image */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Gradient blur overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
        <div className="flex items-start gap-3 md:gap-4">
          {/* Source icon */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={sourceIcon}
                alt={sourceName || "Source"}
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-white/30"
              />
              <div className="absolute inset-0 rounded-full border border-white/10" />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            {sourceName && (
              <span className="text-white/90 text-sm sm:text-base font-medium mb-1 md:mb-1.5 block">
                {sourceName}
              </span>
            )}

            <h3
              className={`text-white font-semibold leading-tight ${isFeatured
                ? "text-lg "
                : ""
                }`}
            >
              {headline}
            </h3>

          </div>
        </div>
      </div>
    </div>
  );
}

const mediaArticles = [
  {
    id: 1,
    imageSrc: "/images/img-media/p1.png",
    sourceIcon: "/images/Home/logo.png",
    headline: "Anand Mahindra Praises Swaayatt Robots' Level 5 Autonomy Efforts",
    isFeatured: true,
  },
  {
    id: 2,
    imageSrc: "/images/img-media/p2.png",
    sourceIcon: "/images/Home/logo2.png",
    sourceName: "Swaayatt Robots",
    headline: "Swaayatt Robots Raises $4 Million at $151 Million Valuation",
  },
  {
    id: 3,
    imageSrc: "/images/img-media/p3.png",
    sourceIcon: "/images/Home/logo3.png",
    headline:
      "Self-Driving Vehicle | Meet Sanjeev Sharma, An IITian Who Turned Bolero Into Self-Driving Car",
  },
  {
    id: 4,
    imageSrc: "/images/img-media/p4.png",
    sourceIcon: "/images/Home/logo3.png",
    headline: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
  },
  {
    id: 5,
    imageSrc: "/images/img-media/p5.png",
    sourceIcon: "/images/Home/logo3.png",
    headline: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
  },
];





function Index() {
  const navigate = useNavigate();

  const handleMediaClick = (blog) => {
    navigate('/media');
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <section className="min-h-screen mx-auto w-full  max-w-[100vw] sm:max-w-[90vw] md:max-w-[100vw] bg-background py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 mb-16 md:mb-24 lg:mb-32 overflow-hidden">
        {/* Header */}
        <div className="flex  sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
          <p className="text-2xl font-Rethink sm:text-2xl md:text-5xl lg:text-6xl  font-heading text-white">
            Media Coverage
          </p>

          <div className="flex items-center justify-between gap-3 sm:gap-6">


            <button
              onClick={handleMediaClick}
             className="group relative flex items-center border border-white h-8 sm:h-14 overflow-hidden">

              {/* WHITE SLIDE BACKGROUND */}
              <span
                className="
                  absolute right-0 top-0
                  h-10 sm:mt-1.5 sm:mr-1.5 w-8 sm:w-12



                  bg-white
                  transition-all duration-300 ease-in-out
                  group-hover:w-full
                  group-hover:h-full 
                  group-hover:mt-0 group-hover:mr-0
                  z-0
                "
              />

              {/* TEXT */}
              <span
                className="
                  relative z-10
                  px-3 sm:px-8
                  text-xs sm:text-lg
                  text-white
                  group-hover:text-black
                  transition-colors duration-300
                "
              >
                ALL Media
              </span>

              {/* ARROW */}
              <span
                className="
                  relative z-10
                  flex items-center justify-center
                  w-8 sm:w-12 h-full
                  text-black 
                "
              >
                <i class="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>

            </button>
          </div>




        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Featured Article - Left Side */}
          <div className="lg:col-span-1 lg:row-span-2 h-64 sm:h-96 md:h-[50vh] lg:h-[72vh]">
            <MediaCard
              imageSrc={mediaArticles[0].imageSrc}
              sourceIcon={mediaArticles[0].sourceIcon}
              headline={mediaArticles[0].headline}
              isFeatured={true}
            />
          </div>

          {/* Right Side Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-5 md:gap-6 ">
            {mediaArticles.slice(1).map((article) => (
              <div
                key={article.id}
                className="h-64 sm:h-80 md:h-[35vh]"
              >
                <MediaCard
                  imageSrc={article.imageSrc}
                  sourceIcon={article.sourceIcon}
                  sourceName={article.sourceName}
                  headline={article.headline}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="sm:hidden mt-8 flex justify-center">
          <button
            className="flex items-center gap-2 px-5 py-2.5 text-white border border-white/40 rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-full justify-center max-w-xs"
          >
            <span className="text-sm font-medium">SEE ALL ARTICLES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </main>
  );
}

export default Index;