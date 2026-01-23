import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import team from "/images/career/head.png";
import "./career.css";
import gsap from "gsap";

import frame from "/images/career/head1.png";

export default function Career() {
  const [activeTab, setActiveTab] = useState("Full Time");
  const { isDarkMode } = useTheme();


//  const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const interval = 2500;
//    const className = ""// Total cycle time

// // wrap-around helper
//   const getTextAtIndex = (offset) => {
//     const idx = (currentIndex + offset + texts.length) % texts.length;
//     return texts[idx];
//   };

const texts = [
  "Machine Learning Engineer",
  "Data Scientist",
  "Full Stack Developer",
  "AI Engineer",
  "Software Architect",
  "Tech Lead",
   "Machine Learning Engineer",
  "Data Scientist",
  "Full Stack Developer",
  "AI Engineer",
  "Software Architect",
  "Tech Lead",
];


  const itemsRef = useRef([]);
  const current = useRef(0);

  useEffect(() => {
    const items = itemsRef.current;

    // Initial positions
    gsap.set(items, { y: 40, opacity: 0 });
    gsap.set(items[0], { y: 0, opacity: 1 });

    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    texts.forEach((_, i) => {
      const next = (i + 1) % texts.length;

      timeline
        // current -> top (fade)
        .to(items[i], {
          y: -90,
          opacity: 0.3,
          duration: 1,
          ease: "power2.inOut",
        })
        // next -> center
        .fromTo(
          items[next],
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
    });

    return () => timeline.kill();
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIsAnimating(true);

  //     // animation duration = 600ms
  //     setTimeout(() => {
  //       setCurrentIndex((prev) => (prev + 1) % texts.length);

  //       // reset animation
  //       setTimeout(() => {
  //         setIsAnimating(false);
  //       }, 100);
  //     }, 600);
  //   }, interval);

  //   return () => clearInterval(timer);
  // }, [currentIndex, texts.length, interval]);



  const jobsData = [
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `ft-${i}`,
      title: "Machine Learning Engineer",
      location: "Bhopal, Madhya Pradesh",
      type: "Full Time",
      experience: "2 – 3 year",
    })),
    ...Array.from({ length: 3 }, (_, i) => ({
      id: `ft-ml-${i}`,
      title: "Machine Learning Engineer",
      location: "Remote",
      type: "Full Time",
      experience: "3 – 5 year",
    })),
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `in-${i}`,
      title: "Machine Learning Intern",
      location: "Bhopal, Madhya Pradesh",
      type: "Internship",
      experience: "0 – 1 year",
    })),
  ];



  return (
    <main className={`w-full min-h-screen  transition-colors duration-300 ${isDarkMode ? "bg-black text-gray-100" : "bg-white text-gray-900"
      }`}>

     <section className="py-6 sm:py-8 ">
  <div className="sm:max-w-[93vw]  max-w-[130vw] mx-auto px-4 sm:px-10 lg:px-16">


    <div className="relative rounded-2xl mt-20 overflow-hidden">
      <div className="relative">
        <img
          src={team}
          alt="Careers at Swaayatt Robots"
          className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[624px] object-cover   sm:object-[50%_80%]"
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden md:block h-[180px] sm:h-[200px] lg:h-[317px] bg-black/55 pointer-events-none" />

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6  sm:px-20 md:px-20 lg:px-2  lg:w-[80vw] h-auto min-h-[30vh] left-0 right-0 pb-10 sm:pb-8 lg:pb-10">
        <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center text-white px-2 sm:px-4 lg:px-12">
          {/* LEFT TEXT */}
        <div
  className="
    max-w-full
    sm:px-10
    sm:mt-0
    mt-[80vh]
    lg:max-w-[520px]
    mb-8
    lg:mb-0

    text-center
    lg:text-left

    mx-auto
    lg:mx-0
  "
>
  <p className="font-rethink text-base sm:text-lg mb-2">
    Careers @ Swaayatt Robots
  </p>

  <h1 className="font-rethink font-bold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.02em] mb-2">
    Join the Journey
  </h1>

  <p className="font-rethink text-md sm:text-[20px] lg:text-[24px] 2xl:text-[30px]">
    Build Something Great With Us
  </p>
</div>




{/* ///animation */}
  <div className="relative hidden md:flex items-center justify-center h-20  md:mr-16  overflow-hidden">
      <div className="relative h-10 w-[300px] bg-white/20 py-8 rounded-md  text-center">

        {texts.map((text, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="absolute inset-0 mt-4 text-white mb-5 font-bold text-lg"
          >
            {text}
          </div>
        ))}

      </div>
    </div>



        </div>
      </div>
    </div>




  </div>
</section>





      <section className="sm:max-w-[100vw] mx-auto px-4 sm:px-10 lg:px-16 sm:py-20 py-10">
        <p className={`
          sm:max-w-[70vw] max-w-[100vw]  mx-auto text-start sm:text-center font-rethink font-normal
          text-xl sm:text-[33px]   leading-[1.3] tracking-[-0.01em]
          ${isDarkMode ? "text-gray-200" : "text-[#1A212F]"}
        `}>
          <span className="text-blue-500">Our mission</span> is to revolutionize
          the future of transportation and contribute to the advancement of
          autonomous systems on a global scale. By becoming part of the
          Swaayatt&apos;s team, you will be surrounded by passionate individuals
          who are dedicated to pushing the boundaries of technology and
          reshaping the world of autonomy.
        </p>
      </section>



<section
  className="
    max-w-[100vw]
    md:max-w-[95vw]
    lg:max-w-[89.5vw]
    mx-auto
    px-4 md:px-6 lg:px-8
    pb-20
  "
>
  <div className="relative rounded-2xl overflow-hidden">
    {/* Background Image */}
    <img
      src={frame}
      alt="Innovation That Matters"
      className="
        w-full
        h-[880px]
        sm:h-[420px]
        md:h-[620px]
        lg:h-[635px]
        object-cover
      "
    />

    {/* Overlay */}
    <div className="absolute inset-0 flex">
      {/* Left side transparent */}
      <div className="flex-1"></div>

      {/* Right side blur black */}
      <div
        className="
          w-full
          max-w-full
          md:max-w-[420px]
          lg:max-w-[570px]
          bg-gradient-to-l
          from-black/90
          via-black/70
          to-transparent
          backdrop-blur
        "
      >
        <div className="w-full h-full flex items-center">
          <div className="px-4 md:px-6 lg:px-8 text-white py-8 lg:py-12">
            <h2 className="font-rethink font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
              Innovation That Matters
            </h2>

            <p className="font-rethink text-base md:text-lg leading-[1.6] space-y-4">
              <span className="block">
                At Swaayatt Robots, we have been at the forefront of developing
                India's first autonomous driving technology since 2016.
              </span>

              <span className="block">
                Join our innovative team and embark on a journey to work on
                cutting-edge research in the field of autonomous driving and
                artificial intelligence.
              </span>

              <span className="block">
                At Swaayatt, you'll have access to continuous learning opportunities
                and the latest advancements in tools and technologies related to
                autonomous driving and AI.
              </span>

              <span className="block">
                We take pride in being recognized as the first company in the world
                to enable autonomous driving in some of the most challenging and
                stochastic environments, such as India.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= WE ARE HIRING ================= */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-12  pb-20">
        <div className="text-center mx-auto mb-12">
          <h2 className={`font-rethink sm:text-4xl text-2xl font-bold tracking-[-0.02em] mb-4 ${isDarkMode ? "text-white" : "text-[#1A212F]"
            }`}>
            We Are Hiring | Join Us
          </h2>

          <p className={`
            max-w-[1081px] mx-auto font-rethink font-normal
            text-[20px] leading-[1.35] tracking-[-0.02em] mb-6
            ${isDarkMode ? "text-gray-300" : "text-[#5D5D5D]"}
          `}>
            Swaayatt Robots is looking for passionate minds ready to shape the future
            of autonomous driving and AI. Join a team pushing the limits of innovation,
            where every idea drives progress and every project breaks new ground. If
            you're eager to make real impact in cutting-edge technology, this is where
            your journey begins.
          </p>

          <p className={`font-rethink text-[20px] ${isDarkMode ? "text-gray-200" : "text-[#1A212F]"
            }`}>
            Check out current openings and send your resume to{" "}
            <a
              href="mailto:career@swaayatt.com"
              className="underline text-blue-500 hover:text-blue-400 transition-colors"
            >
              career@swaayatt.com
            </a>
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div className="flex justify-center mb-14">
          <div className={`flex border rounded-full p-2 ${isDarkMode ? "border-gray-700" : "border-blue-300"
            }`}>
            {["Full Time", "Internship"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${activeTab === tab
                  ? "bg-blue-600 text-white"
                  : isDarkMode
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-blue-50"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ================= JOB LIST ================= */}
        <div className="space-y-6">
          {jobsData
            .filter((job) => job.type === activeTab)
            .map((job) => (
              <div
                key={job.id}
                className={`
                  flex flex-col sm:flex-row items-start sm:items-center
                  justify-between gap-6 border rounded-xl px-6 py-6
                  transition-all duration-300 hover:scale-[1.01]
                  ${isDarkMode
                    ? "border-gray-800 bg-gray-800/50 hover:bg-gray-800"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                  }
                `}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <h3 className={`text-2xl font-medium ${isDarkMode ? "text-white" : "text-[#1A212F]"
                      }`}>
                      {job.title}
                    </h3>
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors"
                    >
                      View Job Description ↗
                    </a>
                  </div>

                  <div className={`flex flex-wrap gap-6 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase
                        size={16}
                        strokeWidth={1.5}
                        className="[&>path:nth-child(2)]:hidden"
                      />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <button
                  className={`
                    px-6 py-2.5 rounded-lg text-sm font-medium
                    transition-all duration-300 hover:scale-105
                    whitespace-nowrap
                    ${isDarkMode
                      ? "bg-white text-blue-600 "
                      : "bg-blue-600 text-white hover:bg-blue-700"
                    }
                  `}
                >
                  Apply to this role
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* FLOATING APPLY BUTTON (MOBILE) */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
          Apply Now
        </button>
      </div>
    </main>
  );
}