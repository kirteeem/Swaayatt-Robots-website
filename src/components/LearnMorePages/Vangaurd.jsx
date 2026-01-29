import Wrapper from "../LearnMorePages/PageWrapper";

const stats = [
  { value: "L5", label: "AUTONOMY LEVEL" },
  { value: "0MS", label: "LATENCY (EDGE)" },
  { value: "4×4", label: "DRIVE TRAIN" },
  { value: "IP68", label: "ENVIRONMENTAL SEAL" },
];

/* SVG DIVIDER */
function VerticalDivider() {
  return (
    <svg
      width="1"
      height="100%"
      viewBox="0 0 1 186"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="dividerGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="186"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(0,0,0,1)" />
        </linearGradient>
      </defs>
      <rect width="1" height="186" fill="url(#dividerGradient)" />
    </svg>
  );
}

export default function Vangaurd() {
  return (
    <section className="relative bg-black">
      <Wrapper>
        <div className="py-[6vh]">

          {/* STATS STRIP */}
          <div
            className="
              relative
              grid grid-cols-2
              sm:grid-cols-2
              md:grid-cols-4
              lg:flex
              lg:h-[18vh]
            "
            style={{
              background:
                "linear-gradient(to bottom, rgb(6,6,6) 0%, rgb(12,12,12) 50%, rgb(6,6,6) 100%)",
            }}
          >
            {/* OUTER BORDERS */}
            <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-white/30" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-white/20" />
            <span className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-white/40 via-white/15 to-white/5" />
            <span className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-white/40 via-white/15 to-white/5" />

            {/* STAT ITEMS */}
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  flex flex-col items-center justify-center
                  py-6 sm:py-7 md:py-8
                  lg:py-0 lg:flex-1
                "
              >
                {/* VALUE */}
                <div
                  className="uppercase text-center leading-none tracking-[-0.03em] flex items-end"
                  style={{
                    fontFamily: "Chivo Mono",
                    fontWeight: 500,
                  }}
                >
                  {item.value === "0MS" ? (
                    <>
                      <span className="
                        text-[32px]
                        sm:text-[36px]
                        md:text-[40px]
                        lg:text-[48px]
                      ">
                        0
                      </span>
                      <span
                        className="
                          ml-[2px]
                          text-[14px]
                          sm:text-[16px]
                          md:text-[18px]
                          lg:text-[20px]
                        "
                        style={{
                          transform: "translateY(-4px)",
                        }}
                      >
                        MS
                      </span>
                    </>
                  ) : (
                    <span className="
                      text-[32px]
                      sm:text-[36px]
                      md:text-[40px]
                      lg:text-[48px]
                    ">
                      {item.value}
                    </span>
                  )}
                </div>

                {/* LABEL */}
                <div
                  className="
                    uppercase text-center mt-2
                    text-[11px]
                    sm:text-[12px]
                    md:text-[13px]
                    lg:text-[20px]
                  "
                  style={{
                    fontFamily: "Chivo Mono",
                    fontWeight: 100,
                    letterSpacing: "-0.08em",
                    color: "rgba(255,255,255,0.75)",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }}
                >
                  {item.label}
                </div>

                {/* DIVIDER — DESKTOP ONLY */}
                {index !== stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-[10%] h-[80%]">
                    <VerticalDivider />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </Wrapper>
    </section>
  );
}



/* =========================
   PROVEN CHASSIS SECTION
========================= */

export function ProvenChassisSection() {
  return (
    <section className="relative py-[8vh] lg:py-[10vh] bg-black">
      <Wrapper>
        <div
          className="
            relative mx-auto w-full
            max-w-[95vw] lg:max-w-[90vw]
            h-auto lg:h-[62vh]
            overflow-hidden
            bg-black lg:bg-transparent
          "
        >
          {/* SPLIT BACKGROUND — DESKTOP ONLY (UNCHANGED) */}
          <div className="absolute inset-0 hidden lg:block">
            <div
              className="w-full h-full"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgb(7,28,15) 0%,
                    rgb(7,28,15) 50%,
                    rgb(0,0,0) 50%,
                    rgb(34,34,34) 100%
                  )
                `,
              }}
            />
          </div>

          {/* MOBILE / TAB BACKGROUND ONLY */}
          <div className="absolute inset-0 lg:hidden bg-black" />

          {/* BORDER */}
          <span className="absolute inset-0 border border-[rgba(255,255,255,0.08)] pointer-events-none z-20" />

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">

            {/* LEFT — IMAGE */}
            <div className="relative flex items-center justify-center overflow-hidden py-8 sm:py-10 lg:py-0">

              {/* MOBILE / TAB — DIFFUSED GLOW */}
              <div
                className="
                  absolute
                  w-[80vw] h-[80vw]
                  sm:w-[65vw] sm:h-[65vw]
                  md:w-[55vw] md:h-[55vw]
                  lg:hidden
                  blur-[140px]
                "
                style={{
                  background: "rgb(7,28,15)",
                  opacity: 0.65,
                }}
              />

              {/* DESKTOP — ORIGINAL GLOW (UNCHANGED) */}
              <div
                className="
                  absolute hidden lg:block
                  w-[42vw] h-[42vw]
                  blur-[120px]
                "
                style={{
                  background: "rgb(7,28,15)",
                  left: "-4vw",
                }}
              />

              {/* SOFT VIGNETTE */}
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: `
                    radial-gradient(
                      ellipse at center,
                      rgba(0,0,0,0.08) 40%,
                      rgba(0,0,0,0.45) 70%,
                      rgba(0,0,0,0.85) 100%
                    )
                  `,
                }}
              />

              <img
                src="/images/learn/image (2).png"
                alt="Vehicle"
                className="
                  relative z-10
                  w-[85vw]
                  sm:w-[70vw]
                  md:w-[60vw]
                  lg:w-[42vw]
                "
                style={{
                  mixBlendMode: "screen",
                  filter: "brightness(1.06) contrast(1.04)",
                }}
              />
            </div>

            {/* RIGHT — CONTENT */}
            <div
              className="
                flex flex-col justify-center
                px-4 sm:px-6 md:px-8
                lg:px-[4vw]
                py-8 sm:py-10 lg:py-0
                gap-4 sm:gap-5 lg:gap-[3vh]
                bg-black lg:bg-transparent
              "
            >
              <h3
                className="
                  uppercase tracking-[-0.03em]
                  text-[20px]
                  sm:text-[22px]
                  md:text-[24px]
                  lg:text-[1.8vw]
                "
                style={{
                  fontFamily: "Chivo Mono",
                  fontWeight: 700,
                }}
              >
                Built on a Proven Chassis
              </h3>

              <ul
                className="
                  list-disc
                  pl-5 lg:pl-[1.2vw]
                  space-y-2.5 sm:space-y-3
                  max-w-full lg:max-w-[554px]
                  text-[13px] sm:text-[14px] md:text-[15px] lg:text-base
                "
                style={{
                  fontFamily: "Rethink Sans",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <li>
                  Based on a rugged, off-road-proven platform that has dominated
                  unstructured terrain for decades.
                </li>
                <li>
                  Engineered with a reinforced frame and military-grade body
                  panels for maximum ballistic protection and durability.
                </li>
                <li>
                  Specifically optimized for extreme terrain and hostile
                  environments where traditional vehicles falter.
                </li>
              </ul>

              <div className="mt-3 sm:mt-4 lg:mt-[3.5vh] space-y-2.5 sm:space-y-3">
                <Feature type="terrain" label="4×4 All-Terrain Mobility" />
                <Feature type="clearance" label="High Ground Clearance" />
                <Feature type="modular" label="Modular Architecture" />
              </div>
            </div>

          </div>
        </div>
      </Wrapper>
    </section>
  );
}

/* ---------- FEATURE ROW ---------- */

function Feature({ label, type }) {
  return (
    <div
      className="
        flex items-center
        gap-3 lg:gap-[1vw]
        px-4 lg:px-[1.4vw]
        py-2 lg:py-[1vh]
      "
      style={{
        background:
          "linear-gradient(to right, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      }}
    >
      {type === "terrain" && <TerrainIcon />}
      {type === "clearance" && <ClearanceIcon />}
      {type === "modular" && <ModularIcon />}

      <span
        className="
          uppercase tracking-[-0.03em]
          text-[11px]
          sm:text-[12px]
          md:text-[13px]
          lg:text-[0.8vw]
        "
        style={{
          fontFamily: "Chivo Mono",
          fontWeight: 100,
          color: "rgba(255,255,255,0.9)",
        }}
      >
        {label}
      </span>
    </div>
  );
}


/* ---------- ICONS ---------- */
function TerrainIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="w-[20px] h-[20px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667933 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18ZM10 16C8.33333 16 6.91667 15.4167 5.75 14.25C4.58333 13.0833 4 11.6667 4 10C4 8.33333 4.58333 6.91667 5.75 5.75C6.91667 4.58333 8.33333 4 10 4C11.6667 4 13.0833 4.58333 14.25 5.75C15.4167 6.91667 16 8.33333 16 10C16 11.6667 15.4167 13.0833 14.25 14.25C13.0833 15.4167 11.6667 16 10 16ZM10 14C11.1 14 12.0417 13.6083 12.825 12.825C13.6083 12.0417 14 11.1 14 10C14 8.9 13.6083 7.95833 12.825 7.175C12.0417 6.39167 11.1 6 10 6C8.9 6 7.95833 6.39167 7.175 7.175C6.39167 7.95833 6 8.9 6 10C6 11.1 6.39167 12.0417 7.175 12.825C7.95833 13.6083 8.9 14 10 14ZM10 12C9.45 12 8.97933 11.8043 8.588 11.413C8.19667 11.0217 8.00067 10.5507 8 10C7.99933 9.44933 8.19533 8.97867 8.588 8.588C8.98067 8.19733 9.45133 8.00133 10 8C10.5487 7.99867 11.0197 8.19467 11.413 8.588C11.8063 8.98133 12.002 9.452 12 10C11.998 10.548 11.8023 11.019 11.413 11.413C11.0237 11.807 10.5527 12.0027 10 12Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}


function ClearanceIcon() {
  return (
    <svg
      viewBox="0 0 22 22"
      className="w-[22px] h-[22px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 16.97L1.77 15.21L3.19 16.61L4.25 15.56L2.83 14.15L4.25 12.73L6.72 15.21L7.78 14.15L5.31 11.67L6.72 10.26L8.14 11.67L9.2 10.61L7.78 9.2L9.2 7.78L11.67 10.26L12.73 9.2L10.26 6.72L11.67 5.31L13.08 6.72L14.15 5.66L12.73 4.25L14.15 2.83L16.61 5.31L17.68 4.25L15.21 1.77L16.97 0L21.22 4.25L4.25 21.22L0 16.97Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}

function ModularIcon() {
  return (
    <svg
      viewBox="0 0 21 20"
      className="w-[22px] h-[22px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 4.78125L10.5 0L0 4.78125L10.5 9.65625L21 4.78125ZM10.4864 16.1695L3.69844 13.0664L0 14.7188L10.5 19.5L21 14.7188L17.3114 13.0641L10.4864 16.1695Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}


/* ================= SECTION ================= */
export function IntelligenceAtCoreSection() {
  return (
    <section className="relative py-[8vh] lg:py-[10vh] bg-black">
      <Wrapper>
        <div
          className="
            relative mx-auto w-full
            max-w-[95vw] lg:max-w-[90vw]
            h-auto lg:h-[62vh]
            overflow-hidden
            bg-black lg:bg-transparent
          "
        >
          {/* SPLIT BACKGROUND — DESKTOP ONLY (UNCHANGED) */}
          <div className="absolute inset-0 hidden lg:block">
            <div
              className="w-full h-full"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgb(7,28,15) 0%,
                    rgb(7,28,15) 50%,
                    rgb(0,0,0) 50%,
                    rgb(34,34,34) 100%
                  )
                `,
              }}
            />
          </div>

          {/* MOBILE / TAB BACKGROUND ONLY */}
          <div className="absolute inset-0 lg:hidden bg-black" />

          {/* BORDER */}
          <span className="absolute inset-0 border border-[rgba(255,255,255,0.08)] pointer-events-none z-20" />

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">

            {/* LEFT IMAGE */}
            <div className="relative flex items-center justify-center overflow-hidden py-10 lg:py-0">

              {/* MOBILE / TAB — DIFFUSED GLOW ONLY */}
              <div
                className="
                  absolute
                  w-[80vw] h-[80vw]
                  sm:w-[65vw] sm:h-[65vw]
                  md:w-[55vw] md:h-[55vw]
                  lg:hidden
                  blur-[140px]
                "
                style={{
                  background: "rgb(7,28,15)",
                  opacity: 0.65,
                }}
              />

              {/* DESKTOP — ORIGINAL GLOW (UNCHANGED) */}
              <div
                className="
                  absolute hidden lg:block
                  w-[36vw] h-[36vw]
                  blur-[120px]
                "
                style={{
                  background: "rgb(7,28,15)",
                  left: "-4vw",
                }}
              />

              {/* SOFT VIGNETTE — SAFE FOR ALL */}
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: `
                    radial-gradient(
                      ellipse at center,
                      rgba(0,0,0,0.08) 40%,
                      rgba(0,0,0,0.45) 70%,
                      rgba(0,0,0,0.85) 100%
                    )
                  `,
                }}
              />

              <img
                src="/images/learn/image (6).png"
                alt="Vanguard Vehicle"
                className="
                  relative z-10
                  w-[85vw]
                  sm:w-[70vw]
                  md:w-[60vw]
                  lg:w-[42vw]
                "
                style={{
                  mixBlendMode: "screen",
                  filter: "brightness(1.06) contrast(1.04)",
                }}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div
              className="
                flex flex-col justify-center
                px-6 sm:px-8 md:px-12
                lg:pl-[3.5vw] lg:pr-[4vw]
                py-10 lg:py-0
                bg-black lg:bg-transparent
              "
            >
              <h3
                className="
                  uppercase tracking-[-0.03em]
                  text-[22px]
                  sm:text-[24px]
                  md:text-[26px]
                  lg:text-[1.8vw]
                  mb-4 lg:mb-[1.5vh]
                "
                style={{ fontFamily: "Chivo Mono", fontWeight: 700 }}
              >
                Intelligence at the Core
              </h3>

              <p
                className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[1vw]
                  mb-6 lg:mb-[3.5vh]
                  max-w-full lg:max-w-[657px]
                "
                style={{
                  fontFamily: "Rethink Sans",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Designed to operate where GPS, maps, and certainty do not exist.
              </p>

              <InfoRow
                icon={<PerceptionIcon />}
                title="Perception"
                left="360° situational awareness"
                right="Multi-Modal Sensing"
              />
              <Divider />

              <InfoRow
                icon={<DecisionIcon />}
                title="Decision-Making"
                left="AI-based path planning"
                right="Dynamic obstacle handling"
              />
              <Divider />

              <InfoRow
                icon={<ControlIcon />}
                title="Control"
                left="Autonomous & remote operation modes"
                right="Fail-safe redundancy"
              />
              <Divider />
            </div>

          </div>
        </div>
      </Wrapper>
    </section>
  );
}

/* ================= INFO ROW ================= */

function InfoRow({ icon, title, left, right }) {
  return (
    <div className="mb-2 lg:mb-[0.5vh]">
      <div className="flex items-center gap-4 lg:gap-[1vw] mb-3 lg:mb-[1.2vh]">
        {icon}
        <span
          className="
            uppercase
            text-[14px]
            sm:text-[15px]
            md:text-[16px]
            lg:text-[1.15vw]
          "
          style={{ fontFamily: "Montserrat", fontWeight: 700 }}
        >
          {title}
        </span>
      </div>

      <div
        className="
          flex flex-col sm:flex-row
          gap-2 sm:gap-6 lg:gap-[3vw]
          text-[13px]
          sm:text-[14px]
          md:text-[15px]
          lg:text-[0.95vw]
        "
        style={{ fontFamily: "Rethink Sans" }}
      >
        <span>• {left}</span>
        <span>• {right}</span>
      </div>
    </div>
  );
}

/* ================= DIVIDER ================= */

function Divider() {
  return (
    <div className="w-full h-[1px] bg-white/15 my-5 lg:my-[2.5vh]" />
  );
}


/* ================= ICONS ================= */

/* 🟢 PERCEPTION */
function PerceptionIcon() {
  return (
    <svg
      viewBox="0 0 27 21"
      className="w-[36px] h-[36px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* EYE OUTLINE */}
      <path
        d="M1.2924 11.1573C2.69374 13.564 6.64307 19.16 13.0497 19.16C19.4671 19.16 23.4097 13.5613 24.8097 11.1573C25.0005 10.8305 25.1009 10.4589 25.1007 10.0805C25.1005 9.70209 24.9996 9.33056 24.8084 9.004C23.4084 6.59867 19.4617 1 13.0497 1C6.63774 1 2.6924 6.596 1.2924 9.00133C1.10093 9.32832 1 9.70041 1 10.0793C1 10.4583 1.10093 10.8303 1.2924 11.1573Z"
        stroke="rgb(17 103 50)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* IRIS */}
      <path
        d="M13.0488 13.5801C13.9771 13.5801 14.8673 13.2113 15.5237 12.555C16.1801 11.8986 16.5488 11.0083 16.5488 10.0801C16.5488 9.15182 16.1801 8.26158 15.5237 7.6052C14.8673 6.94883 13.9771 6.58008 13.0488 6.58008C12.1206 6.58008 11.2303 6.94883 10.574 7.6052C9.91758 8.26158 9.54883 9.15182 9.54883 10.0801C9.54883 11.0083 9.91758 11.8986 10.574 12.555C11.2303 13.2113 12.1206 13.5801 13.0488 13.5801Z"
        stroke="rgb(17 103 50)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}



/* 🟢 DECISION */
function DecisionIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-[36px] h-[36px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.666 17.333C19.4283 17.333 18.2414 17.8247 17.3662 18.6998C16.491 19.575 15.9993 20.762 15.9993 21.9997M15.9993 21.9997V23.333M15.9993 21.9997C15.9993 20.762 15.5077 19.575 14.6325 18.6998C13.7573 17.8247 12.5704 17.333 11.3327 17.333M15.9993 23.333C15.9993 24.5707 16.491 25.7577 17.3662 26.6328C18.2414 27.508 19.4283 27.9997 20.666 27.9997C21.9037 27.9997 23.0907 27.508 23.9658 26.6328C24.841 25.7577 25.3327 24.5707 25.3327 23.333V20.933M15.9993 23.333C15.9993 24.5707 15.5077 25.7577 14.6325 26.6328C13.7573 27.508 12.5704 27.9997 11.3327 27.9997C10.095 27.9997 8.90802 27.508 8.03285 26.6328C7.15768 25.7577 6.66602 24.5707 6.66602 23.333V20.933"
        stroke="rgb(17 103 50)"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3327 21.3333C24.5704 21.3333 25.7573 20.8417 26.6325 19.9665C27.5077 19.0913 27.9993 17.9043 27.9993 16.6667C27.9993 15.429 27.5077 14.242 26.6325 13.3668C25.7573 12.4917 24.5704 12 23.3327 12H22.666"
        stroke="rgb(17 103 50)"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3333 12.4V8.66667C25.3333 7.42899 24.8417 6.24201 23.9665 5.36684C23.0913 4.49167 21.9043 4 20.6667 4C19.429 4 18.242 4.49167 17.3668 5.36684C16.4917 6.24201 16 7.42899 16 8.66667"
        stroke="rgb(17 103 50)"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66667 21.3333C7.42899 21.3333 6.24201 20.8417 5.36684 19.9665C4.49167 19.0913 4 17.9043 4 16.6667C4 15.429 4.49167 14.242 5.36684 13.3668C6.24201 12.4917 7.42899 12 8.66667 12H9.33333"
        stroke="rgb(17 103 50)"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66602 12.4V8.66667C6.66602 7.42899 7.15768 6.24201 8.03285 5.36684C8.90802 4.49167 10.095 4 11.3327 4C12.5704 4 13.7573 4.49167 14.6325 5.36684C15.5077 6.24201 15.9993 7.42899 15.9993 8.66667V22"
        stroke="rgb(17 103 50)"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}




/* 🟢 CONTROL */
function ControlIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-[36px] h-[36px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3327 6.66667H29.3327V9.33333H17.3327V6.66667ZM2.66602 9.33333H11.9993V12H14.666V4H11.9993V6.66667H2.66602V9.33333ZM11.9993 22.6667H29.3327V25.3333H11.9993V22.6667ZM25.3327 14.6667H29.3327V17.3333H25.3327V14.6667ZM22.666 20V12.016H19.9993V14.6667H2.66602V17.3333H19.9993V20H22.666ZM9.33268 28V20H6.66602V22.6667H2.66602V25.3333H6.66602V28H9.33268Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}

/* ===============================
   MISSION ADAPTIVE LOADOUT
================================ */
 // keep your existing imports



/* ================= ICONS ================= */


/* ================= MODULE ROW (CARD) ================= */


/* ================= SECTION ================= */
export function MissionAdaptiveLoadoutSection() {
  return (
    <section className="relative py-[8vh] lg:py-[10vh] bg-black">
      <Wrapper>
        <div
          className="
            relative mx-auto w-full
            max-w-[95vw] lg:max-w-[90vw]
            h-auto lg:h-[62vh]
            overflow-hidden
          "
        >
          {/* SPLIT BACKGROUND — DESKTOP ONLY (UNCHANGED) */}
          <div className="absolute inset-0 hidden lg:block">
            <div
              className="w-full h-full"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgb(7,28,15) 0%,
                    rgb(7,28,15) 50%,
                    rgb(0,0,0) 50%,
                    rgb(34,34,34) 100%
                  )
                `,
              }}
            />
          </div>

          {/* MOBILE / TAB BACKGROUND ONLY */}
          <div className="absolute inset-0 lg:hidden bg-black" />

          {/* BORDER */}
          <span className="absolute inset-0 border border-white/10 pointer-events-none z-20" />

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">

            {/* LEFT — IMAGE */}
            <div className="relative flex items-center justify-center overflow-hidden py-8 sm:py-10 lg:py-0">

              {/* MOBILE / TAB — DIFFUSED GLOW ONLY */}
              <div
                className="
                  absolute
                  w-[80vw] h-[80vw]
                  sm:w-[65vw] sm:h-[65vw]
                  md:w-[55vw] md:h-[55vw]
                  lg:hidden
                  blur-[140px]
                "
                style={{
                  background: "rgb(7,28,15)",
                  opacity: 0.65,
                }}
              />

              {/* DESKTOP — ORIGINAL GLOW (UNCHANGED) */}
              <div
                className="
                  absolute hidden lg:block
                  w-[42vw] h-[42vw]
                  blur-[120px]
                "
                style={{
                  background: "rgb(7,28,15)",
                  left: "-4vw",
                }}
              />

              {/* VIGNETTE — SAFE FOR ALL */}
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: `
                    radial-gradient(
                      ellipse at center,
                      rgba(0,0,0,0.08) 40%,
                      rgba(0,0,0,0.45) 70%,
                      rgba(0,0,0,0.85) 100%
                    )
                  `,
                }}
              />

              <img
                src="/images/learn/image (5).png"
                alt="Vanguard Vehicle"
                className="
                  relative z-10
                  w-[85vw]
                  sm:w-[70vw]
                  md:w-[60vw]
                  lg:w-[42vw]
                "
                style={{
                  mixBlendMode: "screen",
                  filter: "brightness(1.06) contrast(1.04)",
                }}
              />
            </div>

            {/* RIGHT — CONTENT (NO bg-black on lg) */}
            <div
              className="
                flex flex-col justify-center
                px-4 sm:px-6 md:px-8
                lg:pl-[3.5vw] lg:pr-[3.5vw]
                py-8 sm:py-10 lg:py-0
                bg-black lg:bg-transparent
              "
            >
              <h3
                className="
                  uppercase tracking-[-0.03em]
                  text-[20px]
                  sm:text-[22px]
                  md:text-[24px]
                  lg:text-[1.8vw]
                  mb-3 sm:mb-4 lg:mb-[1.5vh]
                "
                style={{ fontFamily: "Chivo Mono", fontWeight: 700 }}
              >
                Mission-Adaptive Loadout
              </h3>

              <p
                className="
                  text-[13px]
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[1vw]
                  mb-5 sm:mb-6 lg:mb-[3.5vh]
                  max-w-full lg:max-w-[657px]
                "
                style={{
                  fontFamily: "Rethink Sans",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Payload-agnostic by design — adaptable for reconnaissance,
                logistics, or support roles. The platform serves as a universal
                carrier for advanced battlefield tech.
              </p>

              <h4
                className="
                  uppercase
                  text-[13px]
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[1.15vw]
                  mb-3 sm:mb-4 lg:mb-[2vh]
                "
                style={{ fontFamily: "Montserrat", fontWeight: 700 }}
              >
                Abstract Modules
              </h4>

              <div className="relative">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(
                        to right,
                        rgb(0,0,0) 0%,
                        rgb(0,0,0) 45%,
                        rgba(0,0,0,0.85) 65%,
                        rgba(0,0,0,0) 100%
                      )
                    `,
                  }}
                />

                <div className="relative z-10 flex flex-col gap-2.5 sm:gap-3 lg:gap-[1.6vh]">
                  <ModuleRow icon={<RadarIcon />} text="Roof-mounted perception mast" />
                  <ModuleRow icon={<CubeIcon />} text="Armored sensor pods" />
                  <ModuleRow icon={<CameraIcon />} text="Front & rear vision units" />
                  <ModuleRow icon={<SignalIcon />} text="Communication & telemetry array" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

/* ================= MODULE ROW ================= */
function ModuleRow({ icon, text }) {
  return (
    <div
      className="
        flex items-center
        gap-[1.2vw]
        px-[1.4vw]
        h-[5.6vh]
      "
      style={{
        background: `
          linear-gradient(
            to right,
            rgb(17,17,17) 0%,
            rgb(17,17,17) 40%,
            rgb(24,24,24) 70%,
            rgb(36,36,36) 100%
          )
        `,
      }}
    >
      {icon}

      <span
        className="
          uppercase
          text-[1.05vw]
          tracking-[-0.03em]
        "
        style={{
          fontFamily: "Chivo Mono",
          fontWeight: 200,
          color: "rgba(255,255,255,0.9)",
        }}
      >
        {text}
      </span>
    </div>
  );
}




/* ================= ICONS ================= */

function RadarIcon() {
  return (
    <svg
      viewBox="0 0 27 27"
      className="w-[28px] h-[28px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3286 10.6538C13.7732 10.6537 14.2108 10.7648 14.6016 10.9769C14.9923 11.1891 15.3238 11.4956 15.5659 11.8685L15.6366 11.9872H25.3286L25.4846 11.9965C25.8089 12.0347 26.108 12.1906 26.325 12.4347C26.542 12.6787 26.6619 12.9939 26.6619 13.3205C26.6619 20.6845 20.6926 26.6538 13.3286 26.6538C12.975 26.6538 12.6358 26.5133 12.3858 26.2633C12.1357 26.0132 11.9953 25.6741 11.9953 25.3205V15.6285L11.8766 15.5578C11.5317 15.3341 11.2433 15.0337 11.0337 14.68C10.8241 14.3264 10.6992 13.9291 10.6686 13.5192L10.6619 13.3205C10.6619 12.6132 10.9429 11.935 11.443 11.4349C11.9431 10.9348 12.6213 10.6538 13.3286 10.6538ZM25.8993 8.87515C26.0041 9.20492 25.9767 9.56253 25.8227 9.87243C25.6687 10.1823 25.4003 10.4202 25.0742 10.5359C24.748 10.6515 24.3897 10.6358 24.0749 10.4921C23.7601 10.3484 23.5136 10.088 23.3873 9.76582C22.7848 8.06833 21.7622 6.55106 20.4149 5.35549C19.0677 4.15993 17.4396 3.32501 15.6825 2.92859C13.9254 2.53217 12.0966 2.58717 10.3665 3.08845C8.63642 3.58973 7.06145 4.52096 5.78847 5.79532C4.51548 7.06968 3.58594 8.64565 3.08653 10.3763C2.58711 12.1069 2.53409 13.9358 2.9324 15.6925C3.33071 17.4491 4.16738 19.0763 5.3644 20.4223C6.56141 21.7682 8.07979 22.7891 9.77792 23.3898C9.94304 23.4481 10.0951 23.5384 10.2253 23.6554C10.3555 23.7725 10.4614 23.9141 10.5369 24.072C10.6125 24.23 10.6561 24.4013 10.6655 24.5762C10.6748 24.7511 10.6496 24.926 10.5913 25.0912C10.5329 25.2563 10.4427 25.4083 10.3256 25.5385C10.2086 25.6688 10.067 25.7747 9.90904 25.8502C9.75105 25.9257 9.57974 25.9694 9.40488 25.9787C9.23002 25.988 9.05504 25.9628 8.88992 25.9045C6.76688 25.1541 4.86846 23.8782 3.37174 22.1959C1.87502 20.5135 0.828741 18.4795 0.330496 16.2836C-0.167749 14.0876 -0.101732 11.8013 0.522389 9.63773C1.14651 7.47419 2.3084 5.50396 3.89971 3.91078C5.49101 2.31761 7.45987 1.1534 9.62268 0.52674C11.7855 -0.0999229 14.0718 -0.168626 16.2683 0.327038C18.4648 0.822703 20.5001 1.86659 22.1842 3.36133C23.8682 4.85608 25.1463 6.75299 25.8993 8.87515ZM19.7286 8.52049C19.9408 8.80338 20.0319 9.15898 19.9819 9.50905C19.9318 9.85912 19.7448 10.175 19.4619 10.3872C19.179 10.5993 18.8234 10.6904 18.4734 10.6404C18.1233 10.5904 17.8074 10.4034 17.5953 10.1205C17.1368 9.50919 16.5523 9.00355 15.8814 8.6378C15.2105 8.27205 14.4689 8.05474 13.7067 8.00057C12.9445 7.9464 12.1795 8.05665 11.4637 8.32384C10.7478 8.59103 10.0977 9.00894 9.55735 9.54925C9.01704 10.0896 8.59914 10.7397 8.33195 11.4556C8.06475 12.1714 7.95451 12.9364 8.00867 13.6986C8.06284 14.4608 8.28016 15.2024 8.64591 15.8733C9.01165 16.5442 9.5173 17.1287 10.1286 17.5872C10.4115 17.7993 10.5985 18.1152 10.6485 18.4653C10.6985 18.8153 10.6074 19.1709 10.3953 19.4538C10.1831 19.7367 9.86722 19.9237 9.51715 19.9738C9.16708 20.0238 8.81149 19.9327 8.52859 19.7205C7.61165 19.0328 6.85319 18.1561 6.30456 17.1497C5.75594 16.1434 5.42997 15.0309 5.34872 13.8876C5.26746 12.7443 5.43283 11.5969 5.83362 10.5231C6.23441 9.44926 6.86127 8.4741 7.67174 7.66363C8.4822 6.85316 9.45737 6.22631 10.5312 5.82552C11.605 5.42473 12.7524 5.25936 13.8957 5.34061C15.039 5.42186 16.1515 5.74784 17.1578 6.29646C18.1642 6.84508 19.0409 7.60354 19.7286 8.52049Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-[28px] h-[28px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0007 1.33301L28.6673 8.66634V23.333L16.0007 30.6663L3.33398 23.333V8.66634L16.0007 1.33301ZM7.32598 9.43701L16.0007 14.4583L24.6753 9.43701L16.0007 4.41301L7.32598 9.43701ZM6.00065 11.7503V21.7957L14.6673 26.813V16.769L6.00065 11.7503ZM17.334 26.813L26.0007 21.7957V11.7503L17.334 16.7677V26.813Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}


function CameraIcon() {
  return (
    <svg
      viewBox="0 0 27 24"
      className="w-[28px] h-[28px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 20C15.1778 20 16.7502 19.3502 18.0507 18.0507C19.3502 16.7502 20 15.1778 20 13.3333C20 11.4889 19.3502 9.91644 18.0507 8.616C16.7502 7.31644 15.1778 6.66667 13.3333 6.66667C11.4889 6.66667 9.91689 7.31644 8.61733 8.616C7.31689 9.91644 6.66667 11.4889 6.66667 13.3333C6.66667 15.1778 7.31689 16.7502 8.61733 18.0507C9.91689 19.3502 11.4889 20 13.3333 20ZM13.3333 17.3333C12.2222 17.3333 11.2778 16.9444 10.5 16.1667C9.72222 15.3889 9.33333 14.4444 9.33333 13.3333C9.33333 12.2222 9.72222 11.2778 10.5 10.5C11.2778 9.72222 12.2222 9.33333 13.3333 9.33333C14.4444 9.33333 15.3889 9.72222 16.1667 10.5C16.9444 11.2778 17.3333 12.2222 17.3333 13.3333C17.3333 14.4444 16.9444 15.3889 16.1667 16.1667C15.3889 16.9444 14.4444 17.3333 13.3333 17.3333ZM21.3333 9.33333C21.7111 9.33333 22.0276 9.20533 22.2827 8.94933C22.5387 8.69422 22.6667 8.37778 22.6667 8C22.6667 7.62222 22.5387 7.30533 22.2827 7.04933C22.0276 6.79422 21.7111 6.66667 21.3333 6.66667C20.9556 6.66667 20.6391 6.79422 20.384 7.04933C20.128 7.30533 20 7.62222 20 8C20 8.37778 20.128 8.69422 20.384 8.94933C20.6391 9.20533 20.9556 9.33333 21.3333 9.33333ZM2.66667 24C1.93333 24 1.30578 23.7391 0.784 23.2173C0.261333 22.6947 0 22.0667 0 21.3333V5.33333C0 4.6 0.261333 3.97244 0.784 3.45067C1.30578 2.928 1.93333 2.66667 2.66667 2.66667H6.86667L8.93333 0.433333C9.06667 0.3 9.21644 0.194222 9.38267 0.116C9.54978 0.0386665 9.72222 0 9.9 0H16.7667C16.9444 0 17.1169 0.0386665 17.284 0.116C17.4502 0.194222 17.6 0.3 17.7333 0.433333L19.8 2.66667H24C24.7333 2.66667 25.3613 2.928 25.884 3.45067C26.4058 3.97244 26.6667 4.6 26.6667 5.33333V21.3333C26.6667 22.0667 26.4058 22.6947 25.884 23.2173C25.3613 23.7391 24.7333 24 24 24H2.66667ZM24 21.3333V5.33333H18.6L16.1667 2.66667H10.5L8.06667 5.33333H2.66667V21.3333H24Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}


function SignalIcon() {
  return (
    <svg
      viewBox="0 0 27 20"
      className="w-[28px] h-[28px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.90534 0.390382C4.15681 0.147504 4.49362 0.0131116 4.84321 0.0161495C5.19281 0.0191874 5.52722 0.159413 5.77444 0.406624C6.02165 0.653835 6.16187 0.988251 6.16491 1.33785C6.16795 1.68744 6.03355 2.02425 5.79068 2.27571C4.79842 3.26493 4.01159 4.4406 3.47544 5.73508C2.9393 7.02955 2.66444 8.41727 2.66668 9.81838C2.66444 11.2195 2.9393 12.6072 3.47544 13.9017C4.01159 15.1962 4.79842 16.3718 5.79068 17.361C5.92293 17.4828 6.02921 17.63 6.10312 17.7938C6.17703 17.9577 6.21705 18.1348 6.22077 18.3145C6.2245 18.4942 6.19185 18.6728 6.12478 18.8396C6.05772 19.0063 5.95763 19.1578 5.83054 19.2849C5.70344 19.412 5.55195 19.5121 5.38519 19.5792C5.21842 19.6462 5.03981 19.6789 4.86011 19.6751C4.6804 19.6714 4.5033 19.6314 4.33946 19.5575C4.17561 19.4836 4.0284 19.3773 3.90668 19.245C2.6667 18.0085 1.68325 16.5392 1.01283 14.9215C0.342397 13.3038 -0.00179886 11.5695 1.0108e-05 9.81838C-0.00214945 8.06711 0.341751 6.33267 1.01195 4.71471C1.68216 3.09675 2.66545 1.62716 3.90534 0.390382ZM20.876 0.390382C21.126 0.14042 21.4651 0 21.8187 0C22.1722 0 22.5113 0.14042 22.7613 0.390382C24.0012 1.62716 24.9845 3.09675 25.6547 4.71471C26.3249 6.33267 26.6688 8.06711 26.6667 9.81838C26.6688 11.5697 26.3249 13.3041 25.6547 14.9221C24.9845 16.54 24.0012 18.0096 22.7613 19.2464C22.5099 19.4893 22.1731 19.6237 21.8235 19.6206C21.4739 19.6176 21.1395 19.4774 20.8923 19.2301C20.645 18.9829 20.5048 18.6485 20.5018 18.2989C20.4987 17.9493 20.6331 17.6125 20.876 17.361C21.8683 16.3718 22.6551 15.1962 23.1912 13.9017C23.7274 12.6072 24.0022 11.2195 24 9.81838C24.0022 8.41727 23.7274 7.02955 23.1912 5.73508C22.6551 4.4406 21.8683 3.26493 20.876 2.27571C20.626 2.02568 20.4856 1.6866 20.4856 1.33305C20.4856 0.979496 20.626 0.640418 20.876 0.390382ZM9.56268 4.16105C9.68665 4.28488 9.78499 4.43193 9.85209 4.59379C9.91919 4.75566 9.95373 4.92916 9.95373 5.10438C9.95373 5.2796 9.91919 5.45311 9.85209 5.61497C9.78499 5.77683 9.68665 5.92388 9.56268 6.04772C9.06621 6.54197 8.67252 7.12963 8.40432 7.7768C8.13611 8.42397 7.9987 9.11784 8.00001 9.81838C8.00001 11.325 8.62268 12.6824 9.62668 13.6544C9.75802 13.7747 9.86391 13.9202 9.93811 14.0821C10.0123 14.244 10.0533 14.4192 10.0587 14.5973C10.0641 14.7753 10.0337 14.9526 9.96939 15.1188C9.90509 15.2849 9.80815 15.4364 9.6843 15.5645C9.56046 15.6925 9.41221 15.7944 9.24831 15.8642C9.08442 15.934 8.9082 15.9703 8.73007 15.9708C8.55194 15.9714 8.3755 15.9362 8.21118 15.8674C8.04685 15.7987 7.89798 15.6976 7.77334 15.5704C7.00154 14.8244 6.38777 13.9306 5.96858 12.9424C5.54939 11.9542 5.33335 10.8918 5.33334 9.81838C5.33334 7.60905 6.23068 5.60772 7.67601 4.16105C7.79984 4.03708 7.94689 3.93873 8.10876 3.87164C8.27062 3.80454 8.44412 3.77 8.61934 3.77C8.79457 3.77 8.96807 3.80454 9.12993 3.87164C9.2918 3.93873 9.43885 4.03708 9.56268 4.16105ZM19.0427 4.21438C20.5133 5.70858 21.3362 7.72187 21.3333 9.81838C21.3349 10.8692 21.1288 11.91 20.7267 12.8809C20.3247 13.8518 19.7347 14.7336 18.9907 15.4757C18.7405 15.7259 18.4012 15.8665 18.0473 15.8665C17.6935 15.8665 17.3542 15.7259 17.104 15.4757C16.8538 15.2255 16.7133 14.8862 16.7133 14.5324C16.7133 14.1786 16.8538 13.8392 17.104 13.589C17.6005 13.0948 17.9942 12.5071 18.2624 11.86C18.5306 11.2128 18.668 10.5189 18.6667 9.81838C18.6667 8.36372 18.0853 7.04505 17.14 6.08238C16.8984 5.82888 16.7662 5.49049 16.772 5.14032C16.7778 4.79016 16.9211 4.45633 17.171 4.21098C17.4209 3.96562 17.7573 3.82845 18.1075 3.82908C18.4578 3.82972 18.7937 3.96812 19.0427 4.21438ZM13.3333 7.81838C13.8638 7.81838 14.3725 8.0291 14.7476 8.40417C15.1226 8.77924 15.3333 9.28795 15.3333 9.81838C15.3333 10.3488 15.1226 10.8575 14.7476 11.2326C14.3725 11.6077 13.8638 11.8184 13.3333 11.8184C12.8029 11.8184 12.2942 11.6077 11.9191 11.2326C11.5441 10.8575 11.3333 10.3488 11.3333 9.81838C11.3333 9.28795 11.5441 8.77924 11.9191 8.40417C12.2942 8.0291 12.8029 7.81838 13.3333 7.81838Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}
