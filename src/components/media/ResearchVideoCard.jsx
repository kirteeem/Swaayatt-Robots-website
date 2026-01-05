export default function ResearchVideoCard({ item }) {
  return (
    <div className="min-w-[320px] max-w-[320px] group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        {/* YouTube Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="mt-4 max-w-[519px]">
        <h3
          className="
            font-rethink
            font-bold
            text-[20px]
            leading-none
            tracking-[-0.02em]
            text-[#3F3F3F]
            line-clamp-2
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3
            text-[14px]
            leading-[14px]
            tracking-[-0.02em]
            font-normal
            text-[#737373]
            line-clamp-3
          "
        >
          {item.description}
        </p>

        <p className="text-xs text-gray-400 mt-4 font-mono">
          {item.date}
        </p>
      </div>
    </div>
  );
}
