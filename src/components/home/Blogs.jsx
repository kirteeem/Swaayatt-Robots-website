import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    image: "/images/Blogs/blog1.png",
  },
  {
    id: 2,
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    image: "/images/Blogs/blog2.png",
  },
  {
    id: 3,
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    image: "/images/Blogs/blog3.png",
  },
  {
    id: 4,
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    image: "/images/Blogs/blog4.png",
  },
  {
    id: 5,
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    image: "/images/Blogs/blog4.png",
  },
  {
    id: 6,
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    image: "/images/Blogs/blog3.png",
  },
];

const Blogs = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const sliderRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0); // dynamic pixel width

  // Detect screen size and visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // tablet
      } else {
        setVisibleCards(4); // desktop
      }

      // Calculate card width dynamically
      if (sliderRef.current) {
        const card = sliderRef.current.querySelector("article");
        if (card) setCardWidth(card.offsetWidth + parseInt(getComputedStyle(card).marginRight)); // include margin if any
      }
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (index < blogs.length - visibleCards) setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#052f1d] via-[#0a1a12] to-[#0c1210] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[100vw] sm:max-w-[90vw] lg:max-w-[87vw] mx-auto px-4 sm:px-6 lg:px-0">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-[550] text-white">
            Blogs
          </p>

          <div className="flex gap-3 mt-4 sm:mt-0">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/30 rounded-full flex items-center justify-center disabled:opacity-40"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={handleNext}
              disabled={index >= blogs.length - visibleCards}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/30 rounded-full flex items-center justify-center disabled:opacity-40"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden" ref={sliderRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {blogs.map((post) => (
              <article
                key={post.id}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 h-[500px] lg:h-[720px] relative overflow-hidden bg-black border border-white/10 rounded-lg mr-2"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative h-full flex items-end p-5">
                  <p className="text-lg lg:text-xl font-semibold text-white">
                    {post.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* DOTS – mobile/tablet only */}
        <div className="flex justify-center mt-8 lg:hidden">
          {Array.from({ length: blogs.length - visibleCards + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 mx-1 rounded-full ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
