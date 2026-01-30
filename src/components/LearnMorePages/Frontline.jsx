import Wrapper from "../LearnMorePages/PageWrapper";
import carImage from "/images/learn/image.png";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] bg-black overflow-hidden"
      style={{ backgroundColor: "rgb(2,31,13)" }}
    >
      {/* GREEN RADIAL BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 24% 52%,
              rgba(2,31,13,0.95) 0%,
              rgba(2,31,13,0.75) 28%,
              rgba(0,0,0,0.85) 58%,
              rgba(0,0,0,1) 78%
            )
          `,
        }}
      />

      <Wrapper>
        <div className="relative z-10 min-h-[100vh] flex items-center">
          <div
            className="
              translate-y-[-4vh]
              max-w-full
              sm:max-w-full
              md:max-w-[70vw]
              lg:max-w-[42vw]
            "
          >
            {/* FRONTLINE */}
            <h1
              className="hero-frontline uppercase italic leading-[1]"
              style={{
                fontFamily: "Montserrat",
                fontWeight: 900,
                fontSize: "6.5vw",
                letterSpacing: "-0.02em",
                color: "rgba(217,217,217,1)",
              }}
            >
              FRONTLINE
            </h1>

            {/* AUTONOMY */}
            <h1
              className="hero-autonomy uppercase italic leading-[1]"
              style={{
                fontFamily: "Montserrat",
                fontWeight: 900,
                fontSize: "6.25vw",
                letterSpacing: "-0.02em",
                color: "rgba(55,154,86,1)",
              }}
            >
              AUTONOMY
            </h1>

            {/* DESCRIPTION */}
            <p
              className="hero-description italic mt-[3vh]"
              style={{
                fontFamily: "Rethink Sans",
                fontWeight: 400,
                fontSize: "1.39vw",
                lineHeight: "1.54",
                color: "#ffffff",
                maxWidth: "32vw",
              }}
            >
              Leveraging the rugged Mahindra Thar platform, Swaayatt Robots introduces
              the next generation of unmanned ground vehicles (UGV). Deep learning
              navigation in unstructured terrain.
            </p>
          </div>
        </div>
      </Wrapper>

      {/* 🚗 STATIC CAR IMAGE — UNCHANGED */}
      <img
        src={carImage}
        alt="Autonomous Vehicle"
        className="
          pointer-events-none
          absolute
          z-20
          max-w-none

          bottom-[-2vh] right-[-12vw]
          w-[95vw]

          sm:bottom-[-4vh] sm:right-[-10vw] sm:w-[90vw]
          md:bottom-[-6vh] md:right-[-8vw] md:w-[80vw]
          lg:bottom-[-6vh] lg:right-[-8vw] lg:w-[72vw]
        "
      />

      {/* ================= MOBILE TEXT SIZE FIX ================= */}
      <style>
        {`
          @media (max-width: 767px) {

            .hero-frontline {
              font-size: 11vw !important;
            }

            .hero-autonomy {
              font-size: 12vw !important;
            }

            .hero-description {
              font-size: 4.2vw !important;
              line-height: 1.6 !important;
              max-width: 90vw !important;
            }
          }
        `}
      </style>
    </section>
  );
}
