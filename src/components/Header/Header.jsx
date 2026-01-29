import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { researchMenu } from "../../data/researchMenu";
import { useTheme } from "../../context/ThemeContext";

const researchCollage = [
  "/images/research/collage/img-1.webp",
  "/images/research/collage/img-2.png",
  "/images/research/collage/img-3.jpg",
  "/images/research/collage/img-4.webp",
  "/images/research/collage/img-5.webp",
];

export default function Header({ variant = "default" }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme();
  const isHome = variant === "home";
  const isDarkVariant = variant === "dark";
  const useDarkTheme = isDarkMode || isDarkVariant || (isHome && !scrolled);


  const [locked, setLocked] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);





  const handleMouseEnter = () => {
    if (!locked) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!locked) setOpen(false);
  };

  // Click → lock popup open
  const handleClickLock = (e) => {
    e.stopPropagation();
    setOpen(true);
    setLocked(true);
  };


  const handleIconClick = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
    setLocked((prev) => !prev);
  };

  // Click outside → close popup
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setLocked(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);




  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled
        ? "translate-y-[-100%]"
        : "translate-y-0"
        }`}
    >
      <div className="max-w-[93vw] mx-auto py-3 px-6 sm:px-10 lg:px-16">
        <div className="h-[70px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/Swaayatt/Swaayatt.png"
              className="w-10 h-10 object-contain"
              alt="Swaayatt Robots"
            />
            <div
              className={`font-semibold text-[16px] leading-tight ${useDarkTheme ? "text-white" : "text-[#1C1C1C]"
                }`}
            >
              <div className="font-rethink-sans tracking-[0.1em]">SWAAYATT</div>
              <div className="font-rethink-sans leading-tight tracking-[0.15em]">
                ROBOTS
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden lg:flex items-center gap-10 text-[18px] tracking-[0.03em]
             font-semibold font-rethink-sans ${useDarkTheme ? "text-white" : "text-[#1C1C1C]"  }`} >

            <div
              ref={ref}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* TOP BAR */}
              <div className="flex items-center">
                <Link
                  to="/research"
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  className="hover:opacity-80 font-[500] transition-opacity"
                  onClick={handleClickLock}
                >
                  Research
                </Link>

                <button
                  onClick={handleIconClick}
                  className="ml-2 hover:opacity-80 transition-opacity"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                  />

                </button>

              </div>

              {/* POPUP */}
              {open && (
                <div className="absolute left-[-180px] top-[60px] w-[720px] h-[300px] bg-white dark:bg-gray-900 rounded-[16px] shadow-2xl flex overflow-hidden border dark:border-gray-800">
                  {/* LEFT COLLAGE */}
                  <div className="relative w-[22vw] h-full overflow-hidden rounded-[1.2vw]">
                    <div className="absolute inset-[0.6vw] overflow-hidden rounded-[0.9vw]">
                      <div className="grid grid-cols-5 h-full">
                        {researchCollage.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="absolute bottom-[1.3vw] left-[1.3vw] text-white">
                      <div className="flex items-end gap-[0.8vw] translate-y-[-0.25vw]">
                        <h3 className="text-[2vw] font-medium tracking-[-0.02em] leading-none font-rethink-sans">
                          Research
                        </h3>
                        <span className="w-[1.8vw] h-[1.8vw] rounded-full flex items-center justify-center backdrop-blur-[0.6vw] bg-white/20 border border-white/30 text-[1vw] font-medium translate-y-[0.15vw]">
                          ›
                        </span>
                      </div>
                      <p className="mt-[0.75vw] max-w-[20vw] text-[0.9vw] font-normal tracking-[0.02em] leading-normal opacity-90 font-rethink-sans">
                        Dive into the challenges, breakthroughs, and the potential of
                        self-driving cars in one of the world's most complex driving
                        environments.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT MENU */}
                  <div className="flex-1 px-1 py-10 flex flex-col justify-center font-rethink-sans">
                    {researchMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => {
                          setOpen(false);
                          setLocked(false);
                        }}
                        className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/media" style={{ fontFamily: '"Rethink Sans", "sans-serif"' }} className="hover:opacity-80 font-[500] transition-opacity">
              Media
            </Link>
            <Link to="/blogs" style={{ fontFamily: '"Rethink Sans", "sans-serif"' }} className="hover:opacity-80 font-[500] transition-opacity">
              Blogs
            </Link>
            <Link to="/career" style={{ fontFamily: '"Rethink Sans", "sans-serif"' }} className="hover:opacity-80 font-[500] transition-opacity">
              Career
            </Link>
            <Link to="/contact" style={{ fontFamily: '"Rethink Sans", "sans-serif"' }} className="hover:opacity-80 font-[500] transition-opacity">
              Contact
            </Link>

            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </nav>

          {/* MOBILE BUTTONS */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun
                  size={20}
                  className={
                    useDarkTheme ? "text-yellow-500" : "text-gray-700"
                  }
                />
              ) : (
                <Moon
                  size={20}
                  className={useDarkTheme ? "text-white" : "text-gray-700"}
                />
              )}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X
                  size={26}
                  className={useDarkTheme ? "text-white" : "text-gray-800"}
                />
              ) : (
                <Menu
                  size={26}
                  className={useDarkTheme ? "text-white" : "text-gray-800"}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV - Fixed Section */}
      {mobileOpen && (
        <div
          className={`lg:hidden font-rethink-sans ${useDarkTheme
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
            } border-t transition-colors duration-300`}
        >
          <div className="px-6 py-4 space-y-4">
            {/* Research Page Link for Mobile */}
            <div className="flex justify-between items-center">
              <Link
                to="/research"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileResearchOpen(false);
                }}
                className={`py-2 transition-colors ${useDarkTheme
                  ? "text-gray-200 hover:text-blue-400"
                  : "text-gray-800 hover:text-blue-600"
                  }`}
              >
                Research
              </Link>

              {/* Mobile Dropdown Toggle */}
              <button
                onClick={() => setMobileResearchOpen(!mobileResearchOpen)}
                className="p-2"
              >
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${mobileResearchOpen ? "rotate-180" : ""
                    } ${useDarkTheme ? "text-white" : "text-gray-800"}`}
                />
              </button>
            </div>

            {mobileResearchOpen && (
              <div
                className={`pl-4 space-y-2 border-l-2 ${useDarkTheme ? "border-gray-700" : "border-gray-200"
                  }`}
              >
                {researchMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileResearchOpen(false);
                    }}
                    className={`block py-2 transition-colors ${useDarkTheme
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/media"
              onClick={() => {
                setMobileOpen(false);
                setMobileResearchOpen(false);
              }}
              className={`block py-2 transition-colors ${useDarkTheme
                ? "text-gray-200 hover:text-blue-400"
                : "text-gray-800 hover:text-blue-600"
                }`}
            >
              Media
            </Link>
            <Link
              to="/blogs"
              onClick={() => {
                setMobileOpen(false);
                setMobileResearchOpen(false);
              }}
              className={`block py-2 transition-colors ${useDarkTheme
                ? "text-gray-200 hover:text-blue-400"
                : "text-gray-800 hover:text-blue-600"
                }`}
            >
              Blogs
            </Link>
            <Link
              to="/career"
              onClick={() => {
                setMobileOpen(false);
                setMobileResearchOpen(false);
              }}
              className={`block py-2 transition-colors ${useDarkTheme
                ? "text-gray-200 hover:text-blue-400"
                : "text-gray-800 hover:text-blue-600"
                }`}
            >
              Career
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setMobileOpen(false);
                setMobileResearchOpen(false);
              }}
              className={`block py-2 transition-colors ${useDarkTheme
                ? "text-gray-200 hover:text-blue-400"
                : "text-gray-800 hover:text-blue-600"
                }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}