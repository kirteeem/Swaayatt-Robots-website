import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Index = () => {
  const navigate = useNavigate();


  const handleclick = () => {
    navigate("/learn_more");
  };

  
  return (
    <main className="h-[100vh] overflow-hidden bg-black">
      <section className="relative h-[100vh] flex flex-col sm:flex-row sm:items-center">
        {/* MAIN BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0e2e1e] to-black" />

        <div className="absolute inset-0 z-[5] bg-[radial-gradient(60%_80%_at_20%_50%,[#092909],transparent_80%)] blur-[20px]" />

        {/* CONTENT - Top on mobile, left on desktop */}
        <div className="relative z-20 w-full  sm:mt-0 mt-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 order-1  sm:order-1">
          <div className="max-w-[89vw] mx-auto pt-8 sm:pt-0">
            <div className="max-w-[650px] lg:max-w-[750px] xl:max-w-[800px]">
              {/* INTRODUCING */}
              <p style={{ fontFamily: "'Chivo Mono', monospace" }} className="text-white/90 font-Montserrat tracking-[0.025em] text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                INTRODUCING
              </p>

              {/* TITLE */}
              <h1

                style={{ fontFamily: "'Chivo Mono', monospace" }}
                className="
                  text-[#329351]
                  font-[900]
                  font-Chivo
                    uppercase
                    italic
                  text-4xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[84px]
                  leading-tight
                  sm:leading-tight
                  md:leading-none
                  lg:leading-none
                  w-full
                  lg:w-[900px]
                  mb-3
                  sm:mb-5
                  md:mb-6
                "
              >
                VANGAURD
              </h1>

              {/* DESCRIPTION */}
              <p
                style={{ fontFamily: "'Chivo Mono', monospace" }}
                className="  chivo-italic text-white/90 text-sm sm:text-lg md:text-xl leading-[1.6] tracking-[0.01em] max-w-2xl mb-10 ">
                Leveraging the rugged Mahindra Thar platform, Swaayatt Robots introduces the next
                generation of unmanned ground vehicles (UGV). Deep learning navigation in
                unstructured terrain.
              </p>


              {/* CTA */}
              <button onClick={handleclick}
                className=" inline-flex items-center gap-2 sm:gap-3 bg-[#1E6F3E] hover:bg-[#249155] transition px-5 py-2.5 sm:px-7 sm:py-3.5md:px-8 md:py-4
                  text-white
                  font-semibold
                  tracking-wide
                  font-Chivo-Mono
                  text-sm
                  sm:text-base
                  md:text-lg
                  mb-8
                  sm:mb-0
                "
              >
                LEARN MORE
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* VEHICLE IMAGE - Bottom on mobile, right on desktop */}
        <div className="relative sm:absolute right-0 bottom-0 top-auto sm:top-0 w-full sm:w-[65%] h-auto sm:h-full flex items-end sm:items-center justify-center sm:justify-end z-0 order-2 sm:order-2 mt-4 sm:mt-0">
          <img
            src="/images/Blogs/thar1.png"
            alt="Project THARX Unmanned Ground Vehicle"
            className="
              w-full
              max-w-[90vw]
              sm:max-w-none
              h-auto
              max-h-[45vh]
              sm:max-h-[70vh]
              md:max-h-[75vh]
              lg:max-h-[80vh]
              xl:max-h-[85vh]
              object-contain
              object-center
              sm:object-right
            "
          />
        </div>

        {/* BOTTOM FADE - Hide on mobile */}
        <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>
    </main>
  );
};

export default Index;