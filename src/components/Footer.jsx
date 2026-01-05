import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, Facebook } from "lucide-react";
import image from "/images/Swaayatt/Swaayatt.png";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer
  className={`${
    isDarkMode
      ? "bg-gradient-to-b from-black to-[#093436] text-gray-300"
      : "bg-[#F3F4F6] text-[#3A3A3A]"
  }`}
>

      <div className="max-w-[90vw] mx-auto px-6 py-14">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ===== BRAND + ADDRESS ===== */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={image} alt="Swaayatt Robots" className="w-12 h-12" />
              <div>
                <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#3A3A3A]'}`}>SWAAYATT</p>
                <p className={`text-sm tracking-[0.3em] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  ROBOTS
                </p>
              </div>
            </div>

            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Autonomous Driving and ADAS
            </p>

            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              <p>Swaayatt Robots Pvt. Ltd.</p>
              <p>
                1/3D, DRM Rd, Saket Nagar, Habib Ganj,<br />
                Bhopal, Madhya Pradesh–462026
              </p>
              <p className="mt-2">Phone: +91 755 494 7025</p>
            </div>

            <div className={`flex items-center gap-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Phone size={16} />
              <Mail size={16} />
              <Linkedin size={16} />
              <Facebook size={16} />
            </div>
          </div>

          {/* ===== COMPANY ===== */}
          <div className="space-y-4">
            <p className={`text-md font-bold ${isDarkMode ? 'text-white' : 'text-[#3A3A3A]'}`}>COMPANY</p>
            {["Blogs", "Media", "Career", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`block text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#3A3A3A]'}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* ===== RESEARCH ===== */}
          <div className="space-y-4">
            <p className={`text-md font-bold ${isDarkMode ? 'text-white' : 'text-[#3A3A3A]'}`}>RESEARCH</p>
            {[
              "On Road",
              "Off Road",
              "Mapping and Localization",
              "Motion Planning",
              "Perception",
            ].map((item) => (
              <Link
                key={item}
                to="/research"
                className={`block text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#3A3A3A]'}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* ===== FUNDED ===== */}
       <div className="space-y-6">
  <p className={`text-md font-bold ${isDarkMode ? 'text-white' : 'text-[#3A3A3A]'} tracking-wide`}>
    FUNDED AND SUPPORTED BY
  </p>

  {/* ===== LOGOS GRID ===== */}
  <div className="grid grid-cols-3 gap-x-10 gap-y-8 text-center">
    
    {/* AXILOR */}
    <div className="space-y-2">
      <img
        src="/images/footer/footer.png"
        alt="Axilor"
        className="mx-auto h-10 object-contain"
      />
      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        INR 100K Prize<br />Jan, 2018
      </p>
    </div>

  

    {/* MEITY */}
    <div className="space-y-2">
      <img
        src="/images/footer/footer2.png"
        alt="MeitY"
        className="mx-auto h-10 object-contain"
      />
      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        INR 1M<br />Research Grant<br />March 22
      </p>
    </div>

      {/* SEED FUND */}
    <div className="space-y-2">
      <img
        src="/images/footer/footer1.jpg"
        alt="Seed Fund"
        className="mx-auto h-10 object-contain"
      />
      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        $3M Seed<br />July, 21
      </p>
    </div>

    <div className="space-y-2 col-span-2 sm:col-span-1 sm:col-start-1 lg:col-span-1">
      <img
        src="/images/footer/footer2.png"
        alt="Post Seed"
        className="mx-auto h-10 object-contain"
      />
      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        $4M Post Seed<br />June, 24
      </p>
    </div>

    {/* NVIDIA */}
    <div className="space-y-2">
      <img
        src="/images/footer/footer3.jpg"
        alt="Nvidia"
        className="mx-auto h-10 object-contain"
      />
      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        $100,000<br />June, 22
      </p>
    </div>

    {/* POST SEED */}
    
  </div>
</div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} mt-12 pt-6`}>
          <p className={`text-xs text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            © Swaayatt Robots Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
