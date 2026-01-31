import { useParams } from "react-router-dom";
import { blogs } from "./Blog";
import { useTheme } from "../context/ThemeContext";

export default function BlogDetail() {
  const { id } = useParams();
  const { isDarkMode } = useTheme();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-[#1A212F]"
      }`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>Blog not found</h2>
      </div>
    );
  }

  return (
    <main
      className={`w-full transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-[#1A212F]"
      }`}
    >

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          w-full
          h-screen
          flex
          items-center
          justify-center
          text-center
          px-4
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.55),
              rgba(0,0,0,0.55)
            ),
            url(${blog.image})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[95vw] sm:w-[90vw] max-w-[90vw]">
          <h1
            className="
              font-bold
              text-white
              leading-[1.1]
              text-[8vw]
              sm:text-[6vw]
              md:text-[5vw]
              lg:text-[4.2vw]
              mx-auto
            "
            style={{ 
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 700,
              letterSpacing: '-2%'
            }}
          >
            {blog.title}
          </h1>

          {/* underline */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-[2vh]">
            <span className="w-16 sm:w-20 md:w-[4vw] h-[2px] sm:h-[0.2vh] bg-white"></span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      {/* ================= BLOG TEXT CONTENT ================= */}
      <section className={`w-full flex justify-center ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}>
        <div className="w-[90vw] sm:w-[88vw] md:w-[85vw] py-8 sm:py-12 md:py-[8vh]">

          <div 
            className="space-y-4 sm:space-y-6 md:space-y-[4vh] text-base sm:text-lg md:text-[1.5vw] lg:text-[1.9vw] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 500,
              letterSpacing: '-2%',
              color: isDarkMode ? 'white' : 'rgba(93, 93, 93, 1)'
            }}
          >

            <p>
              Autonomous driving, even in the scenarios where a robust probabilistic function or a model of the behaviour of obstacles, or that of agents representing the obstacles, is available, along with strict (mathematical-) projection of, or (in mathematical functional form) superposition of, strict traffic rules, remains an active area of research, both in terms of theoretical and experimental research paradigms.
            </p>

            <p>
              Current motion planning and decision making research, globally, in the autonomous driving industry, at large, focuses on developing the ability to negotiate obstacles on broad roads, with strict traffic-rules, along with assumption of availability (or computational ability) of the probabilistic functions encoding the behaviour of the agents representing the obstacles. Negotiation of bi-directional traffic on a single lane road, where the autonomous vehicle (or Ego-Agent) might be required to shift off the road, and drive through an uneven patch of terrain to facilitate successful negotiation, remains an uncharted terrain for the industry at large.
            </p>

            <p>
              Such abilities have not been demonstrated by any autonomous driving
              technology startup as of writing of this document.
            </p>

            <p>
              Our earlier research in enabling autonomous navigation through
              tight-stochastic-dynamic-adversarial environments led to the development
              of an algorithmic framework, an end-to-end holistic framework, that used
              multiple reinforcement learning (RL) agents to perform the following
              tasks:
            </p>

            <ul className="list-disc pl-6 sm:pl-8 md:pl-[3vw] space-y-2 sm:space-y-3 md:space-y-[2vh]">
              <li>
                Understand the intent of other obstacles in the environment.
              </li>
              <li>
                Compute the motion and behavioural commands for the autonomous vehicle
                to navigate through very tight traffic scenarios.
              </li>
            </ul>

            <p>
              This algorithmic framework was demoed on November 15, 2017, when Swaayatt
              Robots was a one-person startup (Sanjeev Sharma).
            </p>

          </div>
        </div>
      </section>

      {/* ================= SECOND IMAGE SECTION ================= */}
      {/* ================= VIDEO PREVIEW SECTION ================= */}
      <section className={`w-full flex justify-center py-8 sm:py-12 md:py-[8vh] ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}>
        <div
          className="
            w-[90vw]
            sm:w-[85vw]
            md:w-[80vw]
            h-[40vh]
            sm:h-[50vh]
            md:h-[60vh]
            flex
            items-center
            justify-center
            rounded-lg
            sm:rounded-xl
            md:rounded-[1.2vw]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
              url('/images/Blogs/Blog-3.webp')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* YouTube Play Button */}
          <div
            className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              md:w-[8vw]
              md:h-[8vw]
              max-w-[10vh]
              max-h-[10vh]
              rounded-full
              bg-[#FF0000]
              flex
              items-center
              justify-center
              cursor-pointer
              hover:scale-110
              transition-transform
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-[3.5vw] md:h-[3.5vw] fill-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================= POST VIDEO CONTENT ================= */}
      <section className={`w-full flex justify-center ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}>
        <div className="w-[90vw] sm:w-[88vw] md:w-[85vw] py-8 sm:py-12 md:py-[8vh]">

          <div 
            className="space-y-4 sm:space-y-6 md:space-y-[4vh] text-base sm:text-lg md:text-[1.5vw] lg:text-[1.9vw] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 500,
              letterSpacing: '-2%',
              color: isDarkMode ? 'white' : 'rgba(93, 93, 93, 1)'
            }}
          >

            <p>
              This was a near-holistic algorithmic framework, i.e., the decision making task was nearly end-to-end, where the deep neural network(s) representing multiple RL agents (along with some classical agents) computed motion and behaviour commands for the ego-agent by directly taking left and right image pairs from the two cameras mounted on the front-bumper. This framework was named Multi-Agent Intent Analysis and Negotiation Framework. The system was trained using apprenticeship learning via reinforcement learning. The system also used stochastic output from the optical flow as an input for decision making. The optical flow was one of the few tiny pieces of explicit computational information, and thus this framework was nearly-holistic.
            </p>

            <p>
              The algorithmic framework had tremendous capabilities to negotiate tight-stochastic-adversarial-dynamic environments as can be seen in the above video. This framework was specifically developed to deal with adversarial nature of the opposing agents in the environments. For example, in India, in the absence of strict adherence to the traffic rules, agents, representing two wheeled vehicles, are not only stochastic but also adversarial in nature. It is the task of the ego-agent to ensure collision-avoidance. In case of an accident, Indian law favours the smaller vehicle. Thus, there is adversity in the traffic-dynamics on Indian roads.
            </p>

            <p>
              One might argue, does a solution to this problem have a practical significance outside India? The answer to this question, while debatable to an extent, holds the key to solving the Level-5 autonomous driving problem. Only if we ensure safe navigation in such traffic and environmental conditions, we can really be sure of the safety of such vehicles elsewhere, where the traffic dynamics is simpler, and environments are significantly structured.
            </p>

            <p>
              While Sanjeev was developing this framework, he asked himself a very simple question; if I were to drive in this colony road, would I stop for every obstacle coming from the opposite direction and yield to them? Or would I use my driving experience and judgement and negotiate without completely yielding. In India we do this on a regular basis. Furthermore, since the beginning of his autonomous navigation research, he focused on enabling autonomous driving in world's most difficult traffic-dynamics imaginable for autonomous vehicles, along with enabling navigation in completely unknown environments, i.e., without the high-definition maps, just like humans do.
            </p>

            <p>
              Formulating this problem, this biological inspiration, mathematically required him to work at the intersection of convex optimization, reinforcement learning, heuristic search, apprenticeship learning, mathematical topology, and deep learning to develop this framework in 2017 and demo in our autonomous vehicle. While this was a very robust framework, in the absence of any funding back then, this pioneering work couldn't be scaled further at that time. This was a first ever successful demo of reinforcement learning for practical real-world autonomous driving. Even more so, this was a multi-RL agent demo, for learning a behavioural capability that was unimaginable in the context of autonomous driving back then.
            </p>

            <h2 
              className="text-2xl sm:text-3xl md:text-[2.5vw] lg:text-[3vw] font-bold mt-8 sm:mt-10 md:mt-[6vh]"
              style={{
                fontFamily: 'Rethink Sans, sans-serif',
                fontWeight: 700,
                letterSpacing: '-2%',
                color: isDarkMode ? 'white' : 'rgba(51, 51, 51, 1)'
              }}
            >
              Present Work
            </h2>

            <p>
              Recently we began addressing this problem of bidirectional negotiation again, at a very large scale, to solve the Level-5 autonomous driving problem.
            </p>

            <p>
              Whether autonomous vehicles should be allowed to execute such a behaviour can be topic for a debate. However, in India, many of the roads single lane road, where only one vehicle can fit at a time, and if another 4-wheeler comes from the other end, then both the vehicles will have to shift to the side of the road to allow each other to pass-through. In case of a truck, the deviation from main road is even more significant, as can be seen in our demo. Furthermore, solving this problem requires much higher level of intelligence that what is demonstrated by the contemporary autonomous driving technology demonstrated by North American and European companies. Usually autonomous vehicles come to a complete halt, unable to compute action to allow negotiation on broader roads, in the presence of opposing or laterally crossing obstacles, let alone negotiating bidirectionally on a single lane road. Humans on the other hand, are quite adept at such bidirectional negotiation, like drivers in India, even at high-speeds.
            </p>

            <p>
              Taking this biological inspiration, very recently we started development of a motion planning and decision making algorithmic framework, present from a classic standpoint, i.e., without using deep learning, in the present work. Very recently we demonstrated this algorithmic framework in our off-road autonomous driving demo in September 2023, where it enabled negotiating very tight spaces, at low speeds, on a single lane road.
            </p>

          </div>
        </div>
      </section>

      {/* ================= SECOND VIDEO PREVIEW ================= */}
      <section className={`w-full flex justify-center py-8 sm:py-12 md:py-[8vh] ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}>
        <div
          className="
            w-[90vw]
            sm:w-[85vw]
            md:w-[80vw]
            h-[40vh]
            sm:h-[50vh]
            md:h-[60vh]
            flex
            items-center
            justify-center
            rounded-lg
            sm:rounded-xl
            md:rounded-[1.2vw]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
              url('/images/Blogs/Blog-1.webp')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* YouTube Play Button */}
          <div
            className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              md:w-[8vw]
              md:h-[8vw]
              max-w-[10vh]
              max-h-[10vh]
              rounded-full
              bg-[#FF0000]
              flex
              items-center
              justify-center
              cursor-pointer
              hover:scale-110
              transition-transform
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-[3.5vw] md:h-[3.5vw] fill-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================= POST SECOND VIDEO TEXT ================= */}
      <section className={`w-full flex justify-center ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}>
        <div className="w-[90vw] sm:w-[88vw] md:w-[85vw] py-8 sm:py-12 md:py-[8vh]">

          <div 
            className="space-y-4 sm:space-y-6 md:space-y-[4vh] text-base sm:text-lg md:text-[1.5vw] lg:text-[1.9vw] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 500,
              letterSpacing: '-2%',
              color: isDarkMode ? 'white' : 'rgba(93, 93, 93, 1)'
            }}
          >

            <p>
              The framework allowed our autonomous vehicle to drive off-roads, on-roads, as well as negotiate tight obstacles, such as avoiding a tractor or a very narrow curved region. Furthermore, in the situation around 30-seconds in the video below, it allowed our vehicle to negotiate a tight passage through a vehicle parked on the left, and a bike approaching from the front on the right, successfully, without bringing the vehicle to a complete halt.
            </p>

          </div>
        </div>
      </section>

      {/* ================= FINAL IMAGE WITH YOUTUBE ICON ================= */}
      <section className={`w-full flex justify-center py-8 sm:py-12 md:py-[8vh] ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}>
        <div
          className="
            w-[90vw]
            sm:w-[85vw]
            md:w-[80vw]
            h-[35vh]
            sm:h-[45vh]
            md:h-[55vh]
            flex
            items-center
            justify-center
            rounded-lg
            sm:rounded-xl
            md:rounded-[1.2vw]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
              url('/images/Blogs/Blog-1.webp')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* YouTube Play Button */}
          <div
            className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              md:w-[8vw]
              md:h-[8vw]
              max-w-[10vh]
              max-h-[10vh]
              rounded-full
              bg-[#FF0000]
              flex
              items-center
              justify-center
              cursor-pointer
              hover:scale-110
              transition-transform
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-[3.5vw] md:h-[3.5vw] fill-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================= FUTURE WORK ================= */}
      <section className={`w-full flex justify-center ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}>
        <div className="w-[90vw] sm:w-[88vw] md:w-[85vw] py-8 sm:py-12 md:py-[8vh]">

          {/* Section Heading */}
          <h2 
            className="text-2xl sm:text-3xl md:text-[2.5vw] lg:text-[3vw] font-bold mb-6 sm:mb-8 md:mb-[5vh]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 700,
              letterSpacing: '-2%',
              color: isDarkMode ? 'white' : 'rgba(51, 51, 51, 1)'
            }}
          >
            Future Work
          </h2>

          <div 
            className="space-y-4 sm:space-y-6 md:space-y-[4vh] text-base sm:text-lg md:text-[1.5vw] lg:text-[1.9vw] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 500,
              letterSpacing: '-2%',
              color: isDarkMode ? 'white' : 'rgba(93, 93, 93, 1)'
            }}
          >

            <p>
              Earlier in 2017 we demonstrated an end-to-end holistic framework capable of negotiating very tight regions using only two cameras mounted on the front bumper of the vehicle, computing directly the control commands from the input images. This work on the other hand was a classical motion planning and decision making algorithmic framework developed to handle such sophisticated navigation and negotiation tasks at a very large scale. Presently we are further increasing the capabilities of this framework, along with developing deeper variant of this, which will solve Level-5 Bidirectional Negotiation Problem, first in a non-holistic, and then in a holistic manner — taking inspiration from the November 2017 work — mathematically modelling how humans drive.
            </p>

            <p>
              We are researching on several avenues for this framework, and for solving generalized autonomous driving problem, including mathematically modelling the human driving behaviour to develop the Level-5 autonomous driving technology.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}