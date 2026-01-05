import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { researchMenu } from "../data/researchMenu";
import { useTheme } from "../context/ThemeContext";

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

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (variant !== "home") return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const isHome = variant === "home";
  const isDarkVariant = variant === "dark";
  const useDarkTheme = isDarkMode || isDarkVariant || (isHome && !scrolled);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[1000] transition-all duration-300
        ${isHome
          ? scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur "
            : "bg-transparent"
          : useDarkTheme
            ? "bg-black border-b border-white/10"
            : "bg-white"
        }
      `}
    >
      <div className="max-w-[93vw] mx-auto py-3 px-6 sm:px-10 lg:px-16">
        <div className="h-[70px] flex items-center justify-between">
          {/* LOGO */}
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
              <div className="font-rethink tracking-[0.1em]">
                SWAAYATT
              </div>
              <div className="font-rethink leading-tight tracking-[0.15em]">
                ROBOTS
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden lg:flex items-center gap-10 text-[18px] font-semibold ${useDarkTheme ? "text-white" : "text-[#1C1C1C]"
              }`}
          >
            {/* RESEARCH - Modified Section */}
            <div ref={ref} className="relative">
              <div className="flex items-center">
                {/* Research Page Link */}
                <Link
                  to="/research"
                  className="hover:opacity-80 transition-opacity"
                  onClick={() => setOpen(false)}
                >
                  Research
                </Link>

                {/* Dropdown Toggle Button */}
                <button
                  onClick={() => setOpen((p) => !p)}
                  className="ml-2 hover:opacity-80 transition-opacity"
                >
                  <ChevronDown size={18} />
                </button>
              </div>

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
                        <h3 className="text-[2vw] font-medium tracking-[-0.02em] leading-none">
                          Research
                        </h3>
                        <span className="w-[1.8vw] h-[1.8vw] rounded-full flex items-center justify-center backdrop-blur-[0.6vw] bg-white/20 border border-white/30 text-[1vw] font-medium translate-y-[0.15vw]">
                          ›
                        </span>
                      </div>
                      <p className="mt-[0.75vw] max-w-[17vw] text-[0.85vw] font-normal tracking-[-0.02em] leading-none opacity-90">
                        Dive into the challenges, breakthroughs, and the potential
                        of self-driving cars in one of the world's most complex
                        driving environments.
                      </p>
                    </div>
                  </div>
                  {/* RIGHT MENU */}
                  <div className="flex-1 px-1 py-10 flex flex-col justify-center">
                    {researchMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/media" className="hover:opacity-80 transition-opacity">
              Media
            </Link>
            <Link to="/blogs" className="hover:opacity-80 transition-opacity">
              Blogs
            </Link>
            <Link to="/career" className="hover:opacity-80 transition-opacity">
              Career
            </Link>
            <Link to="/contact" className="hover:opacity-80 transition-opacity">
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
                <Sun size={20} className={useDarkTheme ? "text-yellow-500" : "text-gray-700"} />
              ) : (
                <Moon size={20} className={useDarkTheme ? "text-white" : "text-gray-700"} />
              )}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X size={26} className={useDarkTheme ? "text-white" : "text-gray-800"} />
              ) : (
                <Menu size={26} className={useDarkTheme ? "text-white" : "text-gray-800"} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV - Fixed Section */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {/* Research Page Link for Mobile */}
            <div className="flex justify-between items-center">
              <Link
                to="/research"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileResearchOpen(false);
                }}
                className="py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                  className={`transition-transform duration-300 ${
                    mobileResearchOpen ? "rotate-180" : ""
                  } ${useDarkTheme ? "text-white" : "text-gray-800"}`}
                />
              </button>
            </div>

            {mobileResearchOpen && (
              <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                {researchMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileResearchOpen(false);
                    }}
                    className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Media
            </Link>
            <Link
              to="/blogs"
              onClick={() => {
                setMobileOpen(false);
                setMobileResearchOpen(false);
              }}
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/career"
              onClick={() => {
                setMobileOpen(false);
                setMobileResearchOpen(false);
              }}
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Career
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setMobileOpen(false);
                setMobileResearchOpen(false);
              }}
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}