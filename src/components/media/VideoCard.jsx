export default function VideoCard({ data, section, isDarkMode }) {
  return (
    <div className="w-[360px] shrink-0">

      {/* THUMBNAIL */}
      <div className="relative aspect-video rounded-xl overflow-hidden group">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* PLAY ICON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>

        {/* Dark overlay for better contrast */}
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/20' : 'bg-transparent'} transition-colors duration-300`} />
      </div>

      {/* TEXT */}
      <div className="mt-4 space-y-2">
        <h3 className={`font-rethink font-bold text-[16px] leading-tight line-clamp-2 transition-colors duration-300 ${
          isDarkMode ? 'text-gray-100' : 'text-[#3F3F3F]'
        }`}>
          {data.title}
        </h3>

        <p className={`font-rethink text-[13px] line-clamp-3 transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-[#737373]'
        }`}>
          {data.description}
        </p>

        <p className={`text-[11px] transition-colors duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-[#9CA3AF]'
        }`}>
          {data.date}
        </p>
      </div>
    </div>
  );
}