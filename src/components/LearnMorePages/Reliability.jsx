import React from "react";
import Wrapper from "../LearnMorePages/PageWrapper";

/* ================== FIGMA-MATCHED CONSTANTS ================== */
/* Frame width: 1566px */

const ICON_WIDTH = "3.6vw";   // 56.25px
const ICON_HEIGHT = "4.67vw"; // 73.13px

const HEADING_SIZE = "2.1vw"; // 32.8px
const TITLE_SIZE = "1.53vw";  // 24px
const DESC_SIZE = "1.15vw";   // 18px

const ICON_COLOR = "rgba(17, 103, 50, 1)";

/* ================= ICONS ================= */

function RedundantIcon() {
  return (
    <svg
      viewBox="0 0 57 74"
      className="w-[36px] h-[48px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0625 16.875C14.0625 16.1291 14.3588 15.4137 14.8863 14.8863C15.4137 14.3588 16.1291 14.0625 16.875 14.0625H39.375C40.1209 14.0625 40.8363 14.3588 41.3637 14.8863C41.8912 15.4137 42.1875 16.1291 42.1875 16.875C42.1875 17.6209 41.8912 18.3363 41.3637 18.8637C40.8363 19.3912 40.1209 19.6875 39.375 19.6875H16.875C16.1291 19.6875 15.4137 19.3912 14.8863 18.8637C14.3588 18.3363 14.0625 17.6209 14.0625 16.875ZM16.875 30.9375H39.375C40.1209 30.9375 40.8363 30.6412 41.3637 30.1137C41.8912 29.5863 42.1875 28.8709 42.1875 28.125C42.1875 27.3791 41.8912 26.6637 41.3637 26.1363C40.8363 25.6088 40.1209 25.3125 39.375 25.3125H16.875C16.1291 25.3125 15.4137 25.6088 14.8863 26.1363C14.3588 26.6637 14.0625 27.3791 14.0625 28.125C14.0625 28.8709 14.3588 29.5863 14.8863 30.1137C15.4137 30.6412 16.1291 30.9375 16.875 30.9375ZM56.25 5.625V67.5C56.25 68.9918 55.6574 70.4226 54.6025 71.4775C53.5476 72.5324 52.1168 73.125 50.625 73.125H5.625C4.13316 73.125 2.70242 72.5324 1.64752 71.4775C0.592632 70.4226 0 68.9918 0 67.5V5.625C0 4.13316 0.592632 2.70242 1.64752 1.64752C2.70242 0.592632 4.13316 0 5.625 0H50.625C52.1168 0 53.5476 0.592632 54.6025 1.64752C55.6574 2.70242 56.25 4.13316 56.25 5.625ZM50.625 5.625H5.625V67.5H50.625V5.625ZM28.125 50.625C27.2906 50.625 26.475 50.8724 25.7812 51.336C25.0874 51.7996 24.5467 52.4584 24.2274 53.2293C23.9081 54.0002 23.8245 54.8484 23.9873 55.6668C24.1501 56.4851 24.5519 57.2369 25.1419 57.8269C25.7319 58.4169 26.4836 58.8187 27.302 58.9814C28.1203 59.1442 28.9686 59.0607 29.7394 58.7414C30.5103 58.4221 31.1692 57.8813 31.6328 57.1876C32.0963 56.4938 32.3438 55.6781 32.3438 54.8438C32.3438 53.7249 31.8993 52.6518 31.1081 51.8606C30.3169 51.0695 29.2439 50.625 28.125 50.625Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}


function HardenedIcon() {
  return (
    <svg
      viewBox="0 0 90 90"
      className="w-[50px] h-[50px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.5 14.999H22.5C18.3579 14.999 15 18.3569 15 22.499V67.499C15 71.6412 18.3579 74.999 22.5 74.999H67.5C71.6421 74.999 75 71.6412 75 67.499V22.499C75 18.3569 71.6421 14.999 67.5 14.999Z"
        stroke="rgb(17 103 50)"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.75 3.74902V14.999M56.25 3.74902V14.999M33.75 74.999V86.249M56.25 74.999V86.249M75 33.749H86.25M75 52.499H86.25M3.75 33.749H15M3.75 52.499H15M33.75 33.749H56.25V56.249H33.75V33.749Z"
        stroke="rgb(17 103 50)"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SecureIcon() {
  return (
    <svg
      viewBox="0 0 60 79"
      className="w-[36px] h-[48px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 78.75C5.4375 78.75 3.6725 78.0163 2.205 76.5488C0.737499 75.0813 0.0025 73.315 0 71.25V33.75C0 31.6875 0.734999 29.9225 2.205 28.455C3.675 26.9875 5.44 26.2525 7.5 26.25H11.25V18.75C11.25 13.5625 13.0788 9.14125 16.7363 5.48625C20.3938 1.83125 24.815 0.00250256 30 2.55973e-06C35.185 -0.00249744 39.6075 1.82625 43.2675 5.48625C46.9275 9.14625 48.755 13.5675 48.75 18.75V26.25H52.5C54.5625 26.25 56.3288 26.985 57.7988 28.455C59.2687 29.925 60.0025 31.69 60 33.75V71.25C60 73.3125 59.2663 75.0788 57.7988 76.5488C56.3312 78.0188 54.565 78.7525 52.5 78.75H7.5ZM30 60C32.0625 60 33.8288 59.2663 35.2988 57.7988C36.7687 56.3313 37.5025 54.565 37.5 52.5C37.4975 50.435 36.7638 48.67 35.2988 47.205C33.8338 45.74 32.0675 45.005 30 45C27.9325 44.995 26.1675 45.73 24.705 47.205C23.2425 48.68 22.5075 50.445 22.5 52.5C22.4925 54.555 23.2275 56.3213 24.705 57.7988C26.1825 59.2763 27.9475 60.01 30 60ZM18.75 26.25H41.25V18.75C41.25 15.625 40.1562 12.9688 37.9688 10.7813C35.7812 8.59375 33.125 7.5 30 7.5C26.875 7.5 24.2188 8.59375 22.0312 10.7813C19.8438 12.9688 18.75 15.625 18.75 18.75V26.25Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}

function DurationIcon() {
  return (
    <svg
      viewBox="0 0 90 90"
      className="w-[52px] h-[52px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.62 7.76625V0H40.245V7.76625C29.7794 8.96327 20.1683 14.1187 13.3824 22.1755C6.59646 30.2323 3.14987 40.5799 3.74935 51.0966C4.34884 61.6133 8.94896 71.5023 16.6065 78.7357C24.264 85.9692 34.3987 89.9991 44.9325 89.9991C55.4663 89.9991 65.601 85.9692 73.2585 78.7357C80.916 71.5023 85.5162 61.6133 86.1157 51.0966C86.7151 40.5799 83.2686 30.2323 76.4826 22.1755C69.6967 14.1187 60.0856 8.96327 49.62 7.76625ZM16.3388 0.17625C10.045 3.81594 4.50038 8.61866 0 14.3288L7.365 20.1263C11.1286 15.3531 15.7645 11.3382 21.0263 8.295L16.3388 0.17625ZM85.3725 9.26625C81.8394 5.72991 77.8565 2.67369 73.5263 0.17625L68.8388 8.295C74.1005 11.3382 78.7365 15.3531 82.5 20.1263L89.865 14.3288C88.4775 12.5613 86.9825 10.8738 85.3725 9.26625ZM22.395 26.2125C25.342 23.196 28.8583 20.7943 32.7402 19.1465C36.6221 17.4987 40.7923 16.6376 45.0094 16.613C49.2264 16.5885 53.4064 17.401 57.3072 19.0034C61.208 20.6059 64.7521 22.9665 67.734 25.9485C70.716 28.9304 73.0766 32.4745 74.6791 36.3753C76.2815 40.2761 77.094 44.4561 77.0695 48.6731C77.0449 52.8902 76.1838 57.0604 74.536 60.9423C72.8882 64.8242 70.4865 68.3405 67.47 71.2875C61.4691 77.1503 53.3987 80.4108 45.0094 80.362C36.6201 80.3131 28.5882 76.9588 22.656 71.0265C16.7237 65.0943 13.3694 57.0625 13.3205 48.6731C13.2717 40.2838 16.5322 32.2134 22.395 26.2125ZM38.37 48.75V26.25H51.495V42.1875H59.9325V55.3125H38.37V48.75Z"
        fill="rgb(17 103 50)"
      />
    </svg>
  );
}


/* ================= DATA ================= */

const items = [
  { icon: <RedundantIcon />, title: "REDUNDANT COMPUTE", desc: "Dual-redundant processing units with automatic failover." },
  { icon: <HardenedIcon />, title: "HARDENED ELECTRONICS", desc: "MIL-STD-810G compliant components for thermal & shock resistance." },
  { icon: <SecureIcon />, title: "SECURE ARCHITECTURE", desc: "End-to-end encrypted communication and air-gapped mission cores." },
  { icon: <DurationIcon />, title: "LONG DURATION", desc: "Optimized power management for multi-day field operations." },
];

/* ================= COMPONENT ================= */

const Relibility = () => {
  return (
    <>
      {/* 🔥 MOBILE-ONLY FIX (DESKTOP SAFE) */}
      <style>
        {`
          @media (max-width: 768px) {
            .reliability-row {
              flex-direction: column !important;
              gap: 48px !important;
            }

            .reliability-card {
              width: 100% !important;
              max-width: 420px !important;
              margin: 0 auto;
            }

            .reliability-title {
              width: 100% !important;
              white-space: normal !important;
              font-size: 16px !important;
            }

            .reliability-desc {
              max-width: 100% !important;
              font-size: 14px !important;
              line-height: 1.45 !important;
            }
          }
        `}
      </style>

      <section
        style={{
          width: "100%",
          padding: "8.5vh 0",
          background: `
            linear-gradient(
              to bottom,
              rgb(0,0,0) 0%,
              rgba(0,0,0,0) 35%,
              rgba(0,0,0,0) 65%,
              rgb(0,0,0) 100%
            ),
            radial-gradient(ellipse at right center, rgb(38,38,38) 0%, rgba(38,38,38,0) 60%),
            radial-gradient(ellipse at center, rgb(32,32,32) 0%, rgba(32,32,32,0) 65%),
            radial-gradient(ellipse at left center, rgb(26,26,26) 0%, rgba(26,26,26,0) 70%),
            rgb(0,0,0)
          `,
        }}
      >
        <Wrapper>
          {/* HEADING (DESKTOP UNCHANGED) */}
          <h2
            style={{
              fontFamily: "Chivo Mono",
              fontWeight: 700,
              fontSize: HEADING_SIZE,
              lineHeight: "1",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#fff",
              textAlign: "center",
              marginBottom: "7vh",
              whiteSpace: "nowrap",
            }}
          >
            Engineered for Reliability
          </h2>

          {/* CONTENT ROW */}
          <div
            className="reliability-row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "5.5vw", // ✅ desktop exact
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="reliability-card"
                style={{
                  width: "20.9vw", // ✅ desktop exact
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* ICON */}
                <div style={{ marginBottom: "3.2vh" }}>
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="reliability-title"
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: TITLE_SIZE,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    color: "#fff",
                    lineHeight: "1",
                    width: "18.3vw", // ✅ desktop exact
                    whiteSpace: "nowrap",
                    marginBottom: "1.8vh",
                  }}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="reliability-desc"
                  style={{
                    fontFamily: "Rethink Sans",
                    fontSize: DESC_SIZE,
                    fontWeight: 400,
                    lineHeight: "1",
                    letterSpacing: "-0.03em",
                    color: "rgba(255,255,255,0.8)",
                    maxWidth: "17.5vw", // ✅ desktop exact
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Relibility;
