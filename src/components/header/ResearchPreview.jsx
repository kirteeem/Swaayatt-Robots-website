export default function ResearchPreview({ image }) {
  return (
    <div className="w-[380px] rounded-lg overflow-hidden bg-black text-white">
      <img
        src={image}
        alt="Research preview"
        className="h-[200px] w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-[22px] font-semibold">Research</h3>
        <p className="mt-2 text-[14px] leading-relaxed opacity-90">
          Dive into the challenges, breakthroughs, and the potential of
          self-driving cars in the world’s most complex driving environments.
        </p>
      </div>
    </div>
  );
}
