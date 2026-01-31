import { useParams } from "react-router-dom";
import { blogs } from "./Blog";
import { useTheme } from "../context/ThemeContext";

export default function BlogDetail() {
  const { id } = useParams();
  const { isDarkMode } = useTheme();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-[4vw] ${
        isDarkMode ? "bg-black text-white" : "bg-white text-[#1A212F]"
      }`}>
        <h2 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-medium" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
          Blog not found
        </h2>
      </div>
    );
  }

  return (
    <main
      className={`w-full transition-colors duration-300 overflow-x-hidden ${
        isDarkMode ? "bg-black text-white" : "bg-white text-[#1A212F]"
      }`}
    >
      {/* ================= HERO SECTION ================= */}
      <section
        className="w-full h-[65vh] sm:h-[75vh] md:h-screen flex items-center justify-center text-center px-[4vw]"
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
        <div className="w-[92vw] md:w-[80vw]">
          <h1
            className="font-bold text-white leading-[1.1] text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] mx-auto"
            style={{ 
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            {blog.title}
          </h1>

          <div className="flex justify-center mt-[3vh]">
            <span className="w-[15vw] sm:w-[10vw] md:w-[5vw] h-[0.3vh] bg-white"></span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className={`w-full flex justify-center ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="w-[92vw] md:w-[75vw] py-[6vh] md:py-[10vh] mx-auto">
          <div 
            className="space-y-[3vh] md:space-y-[4vh] leading-[1.6] md:leading-[1.8]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.3rem)', 
              letterSpacing: '-0.01em',
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
              Such abilities have not been demonstrated by any autonomous driving technology startup as of writing of this document.
            </p>

            <p>
              Our earlier research in enabling autonomous navigation through tight-stochastic-dynamic-adversarial environments led to the development of an algorithmic framework, an end-to-end holistic framework, that used multiple reinforcement learning (RL) agents to perform the following tasks:
            </p>

            <ul className="list-disc pl-[6vw] md:pl-[4vw] space-y-[1.5vh]">
              <li>Understand the intent of other obstacles in the environment.</li>
              <li>Compute the motion and behavioural commands for the autonomous vehicle to navigate through very tight traffic scenarios.</li>
            </ul>

            <p>
              This algorithmic framework was demoed on November 15, 2017, when Swaayatt Robots was a one-person startup (Sanjeev Sharma).
            </p>
          </div>
        </div>
      </section>

      {/* ================= VIDEO PREVIEW SECTION 1 ================= */}
      <section className={`w-full flex justify-center pb-[6vh] md:pb-[10vh] ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="w-[92vw] md:w-[75vw] mx-auto">
          <div
            className="w-full h-[40vh] sm:h-[55vh] md:h-[75vh] flex items-center justify-center rounded-none shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/Blogs/Blog-3.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[18vw] h-[18vw] sm:w-[12vw] sm:h-[12vw] md:w-[8vw] md:h-[8vw] max-w-[90px] max-h-[90px] rounded-full bg-[#FF0000] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
              <svg viewBox="0 0 24 24" className="w-[45%] h-[45%] fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POST VIDEO CONTENT ================= */}
      <section className={`w-full flex justify-center ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="w-[92vw] md:w-[75vw] pb-[6vh] md:pb-[10vh] mx-auto">
          <div 
            className="space-y-[3vh] md:space-y-[4vh] leading-[1.6] md:leading-[1.8]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.3rem)',
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
              className="font-bold pt-[4vh] text-[8vw] sm:text-[6vw] md:text-[2.8rem]"
              style={{
                fontFamily: 'Rethink Sans, sans-serif',
                fontWeight: 700,
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

      {/* ================= VIDEO PREVIEW SECTION 2 ================= */}
      <section className={`w-full flex justify-center pb-[6vh] md:pb-[10vh] ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="w-[92vw] md:w-[75vw] mx-auto">
          <div
            className="w-full h-[40vh] sm:h-[55vh] md:h-[75vh] flex items-center justify-center rounded-none shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/Blogs/Blog-1.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[18vw] h-[18vw] sm:w-[12vw] sm:h-[12vw] md:w-[8vw] md:h-[8vw] max-w-[90px] max-h-[90px] rounded-full bg-[#FF0000] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
              <svg viewBox="0 0 24 24" className="w-[45%] h-[45%] fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL TEXT & IMAGE ================= */}
      <section className={`w-full flex justify-center ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="w-[92vw] md:w-[75vw] pb-[6vh] md:pb-[10vh] mx-auto">
          <div 
            className="space-y-[3vh] md:space-y-[4vh] leading-[1.6] md:leading-[1.8]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.3rem)',
              color: isDarkMode ? 'white' : 'rgba(93, 93, 93, 1)'
            }}
          >
            <p>
              The framework allowed our autonomous vehicle to drive off-roads, on-roads, as well as negotiate tight obstacles, such as avoiding a tractor or a very narrow curved region. Furthermore, in the situation around 30-seconds in the video below, it allowed our vehicle to negotiate a tight passage through a vehicle parked on the left, and a bike approaching from the front on the right, successfully, without bringing the vehicle to a complete halt.
            </p>
          </div>
          
          <div
            className="w-full h-[35vh] sm:h-[50vh] md:h-[65vh] mt-[5vh] flex items-center justify-center rounded-none shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/Blogs/Blog-1.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[18vw] h-[18vw] sm:w-[12vw] sm:h-[12vw] md:w-[8vw] md:h-[8vw] max-w-[90px] max-h-[90px] rounded-full bg-[#FF0000] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
              <svg viewBox="0 0 24 24" className="w-[45%] h-[45%] fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FUTURE WORK ================= */}
      <section className={`w-full flex justify-center pb-[10vh] ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="w-[92vw] md:w-[75vw] mx-auto">
          <h2 
            className="font-bold mb-[3vh] md:mb-[5vh] text-[8vw] sm:text-[6vw] md:text-[2.8rem]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontWeight: 700,
              color: isDarkMode ? 'white' : 'rgba(51, 51, 51, 1)'
            }}
          >
            Future Work
          </h2>

          <div 
            className="space-y-[3vh] md:space-y-[4vh] leading-[1.6] md:leading-[1.8]"
            style={{
              fontFamily: 'Rethink Sans, sans-serif',
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.3rem)',
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