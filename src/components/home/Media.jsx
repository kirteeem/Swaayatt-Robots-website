import { ArrowRight } from "lucide-react";

function MediaCard({
  imageSrc,
  sourceIcon,
  sourceName,
  headline,
  isFeatured = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${
        isFeatured ? "h-full" : "h-full"
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
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-white/30"
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
              className={`text-white font-semibold leading-tight ${
                isFeatured
                  ? "text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  : "text-base sm:text-lg md:text-xl"
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
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <section className="min-h-screen mx-auto w-full  max-w-[100vw] sm:max-w-[90vw] bg-background py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 mb-16 md:mb-24 lg:mb-32 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
          <p className="text-2xl font-Rethink Sans sm:text-2xl md:text-5xl lg:text-6xl font-semibold font-heading text-white">
            Media Coverage
          </p>
          <button
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 text-white border border-white/40 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:border-white"
          >
            <span className="text-sm md:text-base font-medium">SEE ALL ARTICLES</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 h-auto">
          {/* Featured Article - Left Side */}
          <div className="lg:col-span-1 lg:row-span-2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full">
            <MediaCard
              imageSrc={mediaArticles[0].imageSrc}
              sourceIcon={mediaArticles[0].sourceIcon}
              headline={mediaArticles[0].headline}
              isFeatured={true}
            />
          </div>

          {/* Right Side Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 h-auto">
            {mediaArticles.slice(1).map((article) => (
              <div 
                key={article.id} 
                className="h-[290px] sm:h-[280px] md:h-[300px] lg:h-[290px] xl:h-[300px]"
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