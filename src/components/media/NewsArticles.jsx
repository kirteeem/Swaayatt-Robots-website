import VideoCard from "../VideoCard";

export default function ResearchSlider({ videos = [], section }) {
  return (
    <section className="relative">

      <div className="absolute right-0 -top-14 flex gap-3">
        <button className="w-9 h-9 rounded-full border bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition">
          ‹
        </button>
        <button className="w-9 h-9 rounded-full border bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition">
          ›
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
        {videos.map((item) => (
          <VideoCard key={item.id} data={item} section={section} />
        ))}
      </div>

    </section>
  );
}
