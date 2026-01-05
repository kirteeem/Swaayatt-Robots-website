import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path as needed

const blogs = [
  {
    id: 1,
    image: "/images/Blogs/Blog-1.webp",
    title: "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    description: "Autonomous Driving is undeniably the most formidable AI challenge of this decade, and it remains a dynamic focus of active research. Autonomous vehicles often have to negotiate not just unstructured environmental conditions, but also unpredictable obstacles — where each such obstacle is an agent with its own behaviour model.",
    date: "2023-10-28",
  },
  {
    id: 2,
    image: "/images/Blogs/Blogs.webp",
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    description: "Motion and path planning in completely unknown environments is an extremely challenging problem. Autonomous navigation frameworks or algorithms for solving such navigation problems can find tremendous use case in various applications.",
    date: "2023-10-17",
  },
  {
    id: 3,
    image: "/images/Blogs/Blog-3.webp",
    title: "Enhancing Autonomous Vehicle Safety Through Multi-Sensor Fusion",
    description: "Integrating data from multiple sensors like LiDAR, cameras, and radar to create a more robust perception system for autonomous vehicles in challenging weather conditions.",
    date: "2023-11-05",
  },
  {
    id: 4,
    image: "/images/Blogs/Blog-1.webp",
    title: "Ethical Decision Making in Autonomous Driving Systems",
    description: "Exploring the moral and ethical frameworks required for autonomous vehicles to make split-second decisions in unavoidable accident scenarios.",
    date: "2023-11-12",
  },
];

export default function Blogs() {
  const { isDarkMode } = useTheme();
  
  return (
    <main className={`${isDarkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300 min-h-screen`}>

      {/* ================= INTRO ================= */}
      <section className="sm:max-w-[93vw] max-w-[100vw] mt-20 mx-auto px-4 sm:px-10 lg:px-16 pt-16 pb-14">
        <div className="text-center max-w-[572px] mx-auto">
          <h1 className={`font-rethink font-medium text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-[#1A212F]'
          }`}>
            Discover and Learn
          </h1>

          <p className={`font-rethink text-[20px] leading-[1.4] tracking-[-0.02em] transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-[#1A212F]/70'
          }`}>
            Explore in-depth articles on autonomous driving and the challenges of
            decision-making in unstructured environments
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="sm:max-w-[93vw] max-w-[100vw] mx-auto px-4 sm:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blogs/${blog.id}`} className="block h-full group">
              <div className={`rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800 hover:border-gray-700' 
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}>

                {/* IMAGE */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* CONTENT */}
                <div className="px-5 pt-4 pb-5 flex-grow flex flex-col">
                  <h3 className={`font-rethink font-medium text-[20px] leading-[1.35] tracking-[-0.02em] mb-3 line-clamp-2 min-h-[54px] transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-[#3F3F3F]'
                  }`}>
                    {blog.title}
                  </h3>

                  <div className="flex-grow">
                    <p className={`font-rethink text-[14px] leading-[1.5] tracking-[-0.02em] mb-4 line-clamp-4 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-[#737373]'
                    }`}>
                      {blog.description}
                    </p>
                  </div>

                  <p className={`text-[12px] font-mono transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-500' : 'text-[#9CA3AF]'
                  }`}>
                    {blog.date}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}