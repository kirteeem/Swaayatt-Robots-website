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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">Blog not found</h2>
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
              font-rethink
              font-medium
              text-white
              tracking-[-0.02em]
              leading-[1.1]
              text-[8vw]
              sm:text-[6vw]
              md:text-[5vw]
              lg:text-[4.2vw]
              mx-auto
            "
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
        isDarkMode ? "bg-black text-white" : "bg-white text-[#1A212F]"
      }`}>
        <div className="w-[90vw] sm:w-[88vw] md:w-[85vw] max-w-[85vw] py-8 sm:py-12 md:py-[8vh]">

          <div className="space-y-4 sm:space-y-6 md:space-y-[4vh] text-base sm:text-lg md:text-[1.5vw] lg:text-[1.9vw] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]">

            <p>
              Autonomous driving, even in the scenarios where a robust probabilistic
              function or a model of the behaviour of obstacles, or that of agents
              representing the obstacles, is available, along with strict
              (mathematical-) projection of, or (in mathematical functional form)
              superposition of, strict traffic rules, remains an active area of
              research, both in terms of theoretical and experimental research
              paradigms.
            </p>

            <p>
              Current motion planning and decision making research, globally, in the
              autonomous driving industry, at large, focuses on developing the ability
              to negotiate obstacles on broad roads, with strict traffic-rules, along
              with assumption of availability (or computational ability) of the
              probabilistic functions encoding the behaviour of the agents
              representing the obstacles.
            </p>

            <p>
              Negotiation of bi-directional traffic on a single lane road, where the
              autonomous vehicle (or Ego-Agent) might be required to shift off the
              road, and drive through an uneven patch of terrain to facilitate
              successful negotiation, remains an uncharted terrain for the industry
              at large.
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
        isDarkMode ? "bg-black text-white" : "bg-white text-[#1A212F]"
      }`}>
        <div className="w-[90vw] sm:w-[88vw] md:w-[85vw] py-8 sm:py-12 md:py-[8vh]">

          <div className="space-y-4 sm:space-y-6 md:space-y-[4vh] text-base sm:text-lg md:text-[1.5vw] lg:text-[1.9vw] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]">

            <p>
              This was a near-holistic algorithmic framework, i.e., the decision making
              task was nearly end-to-end, where the deep neural network(s) representing
              multiple RL agents (along with some classical agents) computed motion and
              behaviour commands for the ego-agent by directly taking left and right
              image pairs from the two cameras mounted on the front-bumper.
            </p>

            <p>
              This framework was named <strong>Multi-Agent Intent Analysis and
              Negotiation Framework</strong>. The system was trained using
              apprenticeship learning via reinforcement learning. The system also
              used stochastic output from the optical flow as an input for decision
              making. The optical flow was one of the few tiny pieces of explicit
              computational information, and thus this framework was nearly-holistic.
            </p>

            <p>
              The algorithmic framework had tremendous capabilities to negotiate
              tight-stochastic-adversarial-dynamic environments as can be seen in the
              above video. This framework was specifically developed to deal with
              adversarial nature of the opposing agents in the environments.
            </p>

            <p>
              For example, in India, in the absence of strict adherence to the traffic
              rules, agents representing two-wheeled vehicles are not only stochastic
              but also adversarial in nature. It is the task of the ego-agent to ensure
              collision-avoidance. In case of an accident, Indian law favours the
              smaller vehicle.
            </p>

            <p>
              One might argue whether a solution to this problem has practical
              significance outside India. The answer to this question holds the key to
              solving the Level-5 autonomous driving problem.
            </p>

            <p>
              While developing this framework, a fundamental question was asked:
              would a human driver always stop and yield, or would they negotiate
              using judgement and experience? Humans do this regularly, especially
              on Indian roads.
            </p>

            <p>
              Formulating this biological inspiration mathematically required working
              at the intersection of convex optimization, reinforcement learning,
              heuristic search, apprenticeship learning, mathematical topology, and
              deep learning. This framework was developed and demoed in 2017.
            </p>

            <p>
              While highly robust, the absence of funding at that time prevented
              scaling this pioneering work further. This was the first successful
              demonstration of reinforcement learning for real-world autonomous
              driving.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[2.5vw] lg:text-[3vw] font-medium mt-8 sm:mt-10 md:mt-[6vh]">
              Present Work
            </h2>

            <p>
              Recently, we began addressing the problem of bidirectional negotiation
              again at a much larger scale to solve the Level-5 autonomous driving
              problem.
            </p>

            <p>
              In India, many roads are single-lane where vehicles must negotiate by
              shifting off-road. Solving this requires significantly higher
              intelligence than contemporary autonomous driving systems.
            </p>

            <p>
              Inspired by biological intelligence, we recently developed a classical
              motion planning and decision making framework (without deep learning).
              This was demonstrated in our off-road autonomous driving demo in
              September 2023, successfully negotiating tight spaces at low speeds.
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
        isDarkMode ? "bg-black text-white" : "bg-white text-[#1A212F]"
      }`}>
        <div className="w-[90vw] sm:w-[88vw] md:w-[85vw] py-8 sm:py-12 md:py-[8vh]">

          <div className="space-y-4 sm:space-y-6 md:space-y-[4vh] text-base sm:text-lg md:text-[1.5vw] lg:text-[1.9vw] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]">

            <p>
              The framework allowed our autonomous vehicle to drive off-roads,
              on-roads, as well as negotiate tight obstacles, such as avoiding a
              tractor or a very narrow curved region.
            </p>

            <p>
              Furthermore, in the situation around 30-seconds in the video below,
              it allowed our vehicle to negotiate a tight passage through a vehicle
              parked on the left, and a bike approaching from the front on the right,
              successfully, without bringing the vehicle to a complete halt.
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
        isDarkMode ? "bg-black text-white" : "bg-white text-[#1A212F]"
      }`}>
        <div className="w-[90vw] sm:w-[88vw] md:w-[85vw] py-8 sm:py-12 md:py-[8vh]">

          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[2.5vw] lg:text-[3vw] font-medium mb-6 sm:mb-8 md:mb-[5vh]">
            Future Work
          </h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-[4vh] text-base sm:text-lg md:text-[1.5vw] lg:text-[1.9vw] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]">

            <p>
              Earlier in 2017 we demonstrated an end-to-end holistic framework capable
              of negotiating very tight regions using only two cameras mounted on the
              front bumper of the vehicle, computing directly the control commands
              from the input images.
            </p>

            <p>
              This work, on the other hand, was a classical motion planning and
              decision making algorithmic framework developed to handle such
              sophisticated navigation and negotiation tasks at a very large scale.
            </p>

            <p>
              Presently, we are further increasing the capabilities of this framework,
              along with developing deeper variants of this, which will solve the
              Level-5 Bidirectional Negotiation Problem — first in a non-holistic, and
              then in a holistic manner — taking inspiration from the November 2017
              work and mathematically modelling how humans drive.
            </p>

            <p>
              We are researching several avenues for this framework, and for solving
              the generalized autonomous driving problem, including mathematically
              modelling human driving behaviour to develop Level-5 autonomous driving
              technology.
            </p>

          </div>
        </div>
      </section>



    </main>
  );
}