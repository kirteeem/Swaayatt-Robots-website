import Header from "../components/Header/Header";
import Blogs from "../components/Home/Blogs";
import FourHome from "../components/Home/FourHome";
import HomeHero from "../components/Home/HomeHero";
import SecondHero from "../components/Home/SecondHero";
import Media from "../components/Home/Media";
import ThirdHero from "../components/Home/ThirdHero";

import TimelineSection from "../components/Home/Timeline/TimelineSection";
import BrandFeaturedOn from "../components/Home/BrandFeaturedOn";
import FeaturedImageReveal from "../components/Home/FeaturedImageReveal";
import HomeHeroSec from "../components/Home/HomeHeroSec";



export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Header variant="home" />

      <HomeHero />

      <section>
        <HomeHeroSec />
      </section>

      {/* ================= SECOND HERO ================= */}
      {/* <section className="relative bg-black z-20">
        <SecondHero />
      </section> */}

      {/* ================= THIRD HERO ================= */}
      <section className="relative bg-black z-20 -mt-[35vh]">
        <ThirdHero />
      </section>





      <section
        className="
          relative bg-black z-20" >
        <TimelineSection />
      </section>




      <section>
        <FourHome />
      </section>

      <section>
        <Blogs />
      </section>

      <section className="overflow-x-hidden">
        <Media />
      </section>


      <section>
        <BrandFeaturedOn />
      </section>

      <section>
        <FeaturedImageReveal />
      </section>



    </main>
  );
}
