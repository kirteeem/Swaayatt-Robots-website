export default function GridBackground() {
  return (
    <>
      {/* LEFT VERTICAL LINE (ENDS EARLIER) */}
      <div className="absolute top-[5%] bottom-[18%] left-[27%] w-px bg-white/70 pointer-events-none" />
      {/* CENTER VERTICAL LINE (ENDS EARLIER) */}
      <div className="absolute top-[5%] bottom-[16%] left-1/2 -translate-x-1/2 w-px bg-white/70 pointer-events-none" />
      {/* HORIZONTAL LINES (UNCHANGED) */}
      <div className="absolute left-0 top-[16.5%] w-[82%] h-px bg-white/70 pointer-events-none" />
      <div className="absolute left-0 top-[42.5%] w-[82%] h-px bg-white/70 pointer-events-none" />
    </>
  );
}