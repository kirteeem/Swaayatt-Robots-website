import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../LearnMorePages/PageWrapper";

/* ================= CONFIG ================= */

const IMAGES = [
  "/images/learn/image (1).png",
  "/images/learn/image (2).png",
  "/images/learn/image (3).png",
];

const SLIDE_INTERVAL = 3000;

const QUOTE_LINES = [
  "AUTONOMY IS NOT ABOUT REPLACING HUMANS.",
  "IT'S ABOUT EXTENDING THEIR REACH INTO",
  "THE MOST DANGEROUS ENVIRONMENTS.",
];

/* ================= COMPONENT ================= */

const NextShowcase = () => {
  const [index, setIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [startReveal, setStartReveal] = useState(false);

  const textRef = useRef(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  /* START TEXT REVEAL WHEN IN VIEW */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartReveal(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (textRef.current) observer.observe(textRef.current);
  }, []);

  /* TYPE REVEAL */
  const fullText = QUOTE_LINES.join("");

  useEffect(() => {
    if (!startReveal) return;
    if (visibleChars < fullText.length) {
      const t = setTimeout(() => setVisibleChars(v => v + 1), 32);
      return () => clearTimeout(t);
    }
  }, [visibleChars, startReveal, fullText.length]);

  return (
    <section
      style={{
        width: "100%",
        padding: "12vh 0",
        background: "rgb(0,0,0)",
      }}
    >
      <Wrapper>

        {/* ================= IMAGE SLIDER ================= */}
        <div
          className="slider-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6vw",
            marginBottom: "12vh",
          }}
        >
          <button
            onClick={() => setIndex((index - 1 + IMAGES.length) % IMAGES.length)}
            className="arrow-button"
            style={arrowStyle}
          >
            ‹
          </button>

          <div className="slider-image" style={{ width: "55vw", overflow: "hidden" }}>
            <img
              key={index}
              src={IMAGES[index]}
              alt="Vehicle"
              style={{
                width: "100%",
                height: "auto",
                animation: "slideIn 0.9s ease",
              }}
            />
          </div>

          <button
            onClick={() => setIndex((index + 1) % IMAGES.length)}
            className="arrow-button"
            style={arrowStyle}
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div
          className="dot-container"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.2vw",
            marginBottom: "10vh",
          }}
        >
          {IMAGES.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className="dot-indicator"
              style={{
                width: "0.8vw",
                height: "0.8vw",
                borderRadius: "50%",
                background:
                  i === index ? "rgb(17,103,50)" : "rgba(255,255,255,0.3)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* ================= QUOTE ================= */}
        <div
          ref={textRef}
          className="quote-container"
          style={{ textAlign: "center", marginBottom: "7vh" }}
        >
          {renderQuoteLines(visibleChars)}
        </div>

        {/* ================= BUTTON ================= */}
        <div style={{ textAlign: "center" }}>
          <button
            className="contact-button"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.background = "rgb(22,140,70)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "rgb(17,103,50)")
            }
          >
            Contact Us
          </button>
        </div>

      </Wrapper>

      {/* ANIMATIONS + RESPONSIVE STYLES */}
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(6vw);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Tablet Styles (768px - 1024px) */
          @media (max-width: 1024px) {
            .slider-container {
              gap: 4vw !important;
            }
            .slider-image {
              width: 65vw !important;
            }
            .arrow-button {
              font-size: 4vw !important;
            }
            .dot-indicator {
              width: 1.2vw !important;
              height: 1.2vw !important;
            }
            .dot-container {
              gap: 1.8vw !important;
            }
            .quote-line-0 {
              width: 90vw !important;
              font-size: 4vw !important;
            }
            .quote-line-1 {
              width: 80vw !important;
              font-size: 3.5vw !important;
            }
            .quote-line-2 {
              width: 70vw !important;
              font-size: 3.5vw !important;
            }
            .contact-button {
              padding: 2vh 4vw !important;
              font-size: 1.5vw !important;
            }
          }

          /* Mobile Large (426px - 767px) */
          @media (max-width: 767px) {
            .slider-container {
              gap: 3vw !important;
            }
            .slider-image {
              width: 75vw !important;
            }
            .arrow-button {
              font-size: 6vw !important;
            }
            .dot-container {
              gap: 2.5vw !important;
              margin-bottom: 6vh !important;
            }
            .dot-indicator {
              width: 2vw !important;
              height: 2vw !important;
            }
            .quote-line-0 {
              width: 100% !important;
              max-width: 95vw !important;
              font-size: 5.5vw !important;
              margin-bottom: 2vh !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2vw !important;
            }
            .quote-line-1 {
              width: 100% !important;
              max-width: 90vw !important;
              font-size: 4.8vw !important;
              margin-bottom: 2vh !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2vw !important;
            }
            .quote-line-2 {
              width: 100% !important;
              max-width: 85vw !important;
              font-size: 4.8vw !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2vw !important;
            }
            .quote-container {
              margin-bottom: 5vh !important;
            }
            .contact-button {
              padding: 1.8vh 6vw !important;
              font-size: 2.8vw !important;
            }
          }

          /* Mobile Medium (376px - 425px) */
          @media (max-width: 425px) {
            .slider-container {
              gap: 2vw !important;
            }
            .slider-image {
              width: 80vw !important;
            }
            .arrow-button {
              font-size: 7vw !important;
            }
            .dot-container {
              gap: 3vw !important;
            }
            .dot-indicator {
              width: 2.5vw !important;
              height: 2.5vw !important;
            }
            .quote-line-0 {
              width: 100% !important;
              max-width: 95vw !important;
              font-size: 6vw !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2.5vw !important;
            }
            .quote-line-1 {
              width: 100% !important;
              max-width: 92vw !important;
              font-size: 5.2vw !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2.5vw !important;
            }
            .quote-line-2 {
              width: 100% !important;
              max-width: 90vw !important;
              font-size: 5.2vw !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2.5vw !important;
            }
            .contact-button {
              padding: 1.8vh 7vw !important;
              font-size: 3.2vw !important;
            }
          }

          /* Mobile Small (320px - 375px) */
          @media (max-width: 375px) {
            .slider-container {
              gap: 1.5vw !important;
            }
            .slider-image {
              width: 85vw !important;
            }
            .arrow-button {
              font-size: 8vw !important;
            }
            .dot-container {
              gap: 3.5vw !important;
            }
            .dot-indicator {
              width: 3vw !important;
              height: 3vw !important;
            }
            .quote-line-0 {
              width: 100% !important;
              max-width: 96vw !important;
              font-size: 6.5vw !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2vw !important;
            }
            .quote-line-1 {
              width: 100% !important;
              max-width: 94vw !important;
              font-size: 5.6vw !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2vw !important;
            }
            .quote-line-2 {
              width: 100% !important;
              max-width: 92vw !important;
              font-size: 5.6vw !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 0 2vw !important;
            }
            .contact-button {
              padding: 1.6vh 8vw !important;
              font-size: 3.5vw !important;
            }
          }
        `}
      </style>
    </section>
  );
};

/* ================= QUOTE RENDER ================= */

const renderQuoteLines = (visibleChars) => {
  const highlight = "EXTENDING THEIR REACH";

  const widths = ["82vw", "68vw", "52vw"]; // 🔥 taper effect
  const sizes = ["3vw", "2.6vw", "2.6vw"];

  let charCount = 0;

  return QUOTE_LINES.map((line, i) => {
    const remaining = Math.max(0, visibleChars - charCount);
    const visibleLine = line.slice(0, remaining);
    charCount += line.length;

    let content = visibleLine;

    if (line.includes(highlight)) {
      const start = visibleLine.indexOf(highlight);
      if (start !== -1) {
        content = (
          <>
            {visibleLine.slice(0, start)}
            <span style={{ color: "rgb(17,103,50)" }}>
              {visibleLine.slice(start, start + highlight.length)}
            </span>
            {visibleLine.slice(start + highlight.length)}
          </>
        );
      }
    }

    return (
      <div
        key={i}
        className={`quote-line-${i}`}
        style={{
          width: widths[i],
          margin: "0 auto",
          fontSize: sizes[i],
          fontFamily: "Chivo Mono",
          fontWeight: 700,
          lineHeight: "1",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {i === 0 && '"'}
        {content}
        {i === QUOTE_LINES.length - 1 && '"'}
      </div>
    );
  });
};

/* ================= STYLES ================= */

const arrowStyle = {
  background: "none",
  border: "none",
  color: "#ffffff",
  fontSize: "3vw",
  cursor: "pointer",
};

const buttonStyle = {
  padding: "2.2vh 3.6vw",
  fontFamily: "Montserrat",
  fontSize: "1vw",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#ffffff",
  background: "rgb(17,103,50)",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

export default NextShowcase;  