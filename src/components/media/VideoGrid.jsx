export default function VideoGrid() {
  return (
    <section className="px-6 md:px-16 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div>
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src="/images/research/offroad/Video1.png"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-bold">
            Offroad Autonomous Navigation
          </h3>
        </div>

        {/* CARD 2 */}
        <div>
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src="/images/research/offroad/Video2.png"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-bold">
            Terrain Understanding
          </h3>
        </div>

        {/* CARD 3 */}
        <div>
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src="/images/research/offroad/Video3.png"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-bold">
            Reinforcement Learning Demo
          </h3>
        </div>

      </div>
    </section>
  );
}
