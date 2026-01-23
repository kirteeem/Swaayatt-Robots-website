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
  return (
    <main className="min-h-screen bg-black py-6 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6   lg:max-w-[94vw] lg:mx-auto">

        {/* HEADER */}
        <div className="flex flex sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8 sm:mb-10">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-[550] text-white">
            Blogs
          </p>

          {/* ALL BLOGS BUTTON */}
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            <button className="group relative flex items-center border border-white h-8 sm:h-14 overflow-hidden">

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
                ALL BLOGS
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

        {/* SLIDER */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-slide-left w-max">
            {[...blogs, ...blogs].map((post, i) => (
              <article
                key={i}
                className="w-[85vw] sm:w-[75vw] md:w-[45vw] lg:w-[25vw]
                flex-shrink-0 h-[550px] sm:h-[450px] md:h-[550px] lg:h-[720px]
                relative overflow-hidden bg-black border border-white/10  mr-4"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover border border-white/10"
                />

                <div className="relative h-full flex items-end p-4 sm:p-6 lg:p-8">
                  <p className="text-sm sm:text-base lg:text-xl text-white line-clamp-3">
                    {post.title}
                  </p>
                </div>

              </article>
            ))}
          </div>
        </div>

      </div>


      <>
        <style>
          {`
      @keyframes slide-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .animate-slide-left {
        animation: slide-left 25s linear infinite;
      }

      /* Mobile optimizations */
      @media (max-width: 640px) {
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    `}
        </style>

      </>

    </main>
  );
};

export default Blogs;
