import { MapPin, Mail, Briefcase, Phone } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // Adjust import path as needed

export default function Contact() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} mt-20 transition-colors duration-300`}>
      <main className="py-12 sm:py-16">

        <div className="sm:max-w-[93vw] max-w-[100vw] mx-auto px-4 sm:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            <div className={`border rounded-2xl p-6 sm:p-8 transition-colors duration-300 ${
              isDarkMode 
                ? 'border-gray-800 bg-gray-900' 
                : 'border-gray-200 bg-white'
            }`}>

              <h1 className={`text-[28px] sm:text-[32px] font-[550] font-rethink sans  transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-[#1A212F]'
              }`}>
                Contact Us
              </h1>

              <p className={`text-[15px] sm:text-[16px] mt-1 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-[#1A212F]/70'
              }`}>
                Have any questions? Drop us a mail or give us a call.
              </p>

              <hr className={`my-5 transition-colors duration-300 ${
                isDarkMode ? 'border-gray-800' : 'border-gray-200'
              }`} />

              <div className="space-y-6">
                <ContactRow
                  icon={MapPin}
                  title="Location"
                  text="No. 42, Abhinav Regal Homes, Awadhpuri, Pipilani, Bhopal, Madhya Pradesh - 462022"
                  isDarkMode={isDarkMode}
                />

                <ContactRow
                  icon={Mail}
                  title="For General Queries"
                  link="mailto:contact@swaayatt.com"
                  linkText="contact@swaayatt.com"
                  isDarkMode={isDarkMode}
                />

                <ContactRow
                  icon={Briefcase}
                  title="For Potential Investment"
                  link="mailto:investment@swaayatt.com"
                  linkText="investment@swaayatt.com"
                  isDarkMode={isDarkMode}
                />

                <ContactRow
                  icon={Phone}
                  title="Call"
                  link="tel:+917554947025"
                  linkText="+91-755-4947025"
                  isDarkMode={isDarkMode}
                />
              </div>
            </div>

            {/* ================= MAP ================= */}
            <div className={`w-full h-[320px] sm:h-[420px] lg:h-[560px] rounded-2xl overflow-hidden border transition-colors duration-300 ${
              isDarkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <iframe
                title="Swaayatt Robots Location"
                src="https://www.google.com/maps?q=Swaayatt%20Robots%20Bhopal&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                style={{ 
                  filter: isDarkMode ? 'invert(90%) hue-rotate(180deg)' : 'none'
                }}
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= CONTACT ROW ================= */
function ContactRow({ icon: Icon, title, text, link, linkText, isDarkMode }) {
  return (
    <div className="flex items-start gap-4">

      {/* ICON */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-blue-900/30' 
          : 'bg-blue-100'
      }`}>
        <Icon className={`w-4.5 h-4.5 transition-colors duration-300 ${
          isDarkMode ? 'text-blue-400' : 'text-blue-600'
        }`} />
      </div>

      {/* TEXT */}
      <div>
        <h3 className={`text-[14px] font-medium transition-colors duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-[#1A212F]/50'
        }`}>
          {title}
        </h3>

        {text && (
          <p className={`text-[15px] sm:text-[16px] leading-snug mt-1 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-200' : 'text-[#1A212F]'
          }`}>
            {text}
          </p>
        )}

        {link && (
          <a
            href={link}
            className={`mt-1 inline-block text-[15px] font-medium transition-colors duration-300 ${
              title === "Call"
                ? isDarkMode 
                  ? "text-gray-200" 
                  : "text-[#1A212F]"
                : isDarkMode
                  ? "text-blue-400 underline"
                  : "text-[#174CD2] underline"
            }`}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
}