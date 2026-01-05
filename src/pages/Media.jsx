import MediaHero from "../components/media/MediaHero.jsx";
import FeaturedStories from "../components/media/FeaturedStories.jsx";
import FeaturedNews from "../components/media/FeaturedNews.jsx";
import InTheMedia from "../components/media/InTheMedia.jsx";
import TwitterSpotlight from "../components/media/TwitterSpotlight.jsx";

export default function Media() {
  return (
    <main
      className="
        w-full
        bg-white text-[#101010]
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      {/* HERO */}
      <MediaHero />

      {/* FEATURED STORIES */}
      <FeaturedStories />



      {/* IN THE MEDIA */}
      <InTheMedia />

      {/* TWITTER */}
      <TwitterSpotlight />
      <FeaturedNews/>
    </main>
  );
}
