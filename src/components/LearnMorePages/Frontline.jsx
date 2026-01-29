import { motion } from "framer-motion";
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
            <motion.h1
              initial={{ clipPath: "inset(0 110% 0 -2%)" }}
              whileInView={{ clipPath: "inset(0 -2% 0 -2%)" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="
                uppercase italic font-black
                tracking-[-0.02em]
                leading-[1]

                text-[44px]
                sm:text-[56px]
                md:text-[72px]
                lg:text-[6.5vw]
              "
              style={{
                color: "rgba(217, 217, 217, 1)",
                fontFamily: "Montserrat",
              }}
            >
              FRONTLINE
            </motion.h1>

            {/* AUTONOMY */}
            <motion.h1
              initial={{ clipPath: "inset(0 110% 0 -2%)" }}
              whileInView={{ clipPath: "inset(0 -2% 0 -2%)" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                uppercase italic font-black
                tracking-[-0.02em]
                leading-[1]

                text-[42px]
                sm:text-[54px]
                md:text-[68px]
                lg:text-[6.25vw]
              "
              style={{
                fontFamily: "Montserrat",
                color: "rgba(55, 154, 86, 1)",
              }}
            >
              AUTONOMY
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              transition={{
                duration: 1.1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.25,
              }}
              viewport={{ once: true }}
              className="
                italic mt-6
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[1.1vw]
                leading-[1.54]

                max-w-full
                sm:max-w-[90%]
                md:max-w-[60vw]
                lg:max-w-[32vw]
              "
              style={{ color: "white", fontFamily: "Rethink Sans" }}
            >
              Introducing Vanguard. Leveraging the rugged Mahindra Thar platform,
              Swaayatt Robots introduces the next generation of unmanned ground
              vehicles (UGV). Deep learning navigation in unstructured terrain.
            </motion.p>
          </div>
        </div>
      </Wrapper>

      {/* 🚗 STATIC CAR IMAGE — NO ANIMATION */}
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
    </section>
  );
}
