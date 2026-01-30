import { useEffect } from "react";
import { X } from "lucide-react";

export default function JobDescriptionModal({ open, onClose, job }) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Modal */}
      <div
        className="
          relative w-full sm:max-w-3xl
          max-h-[90vh]
          rounded-2xl
          bg-gradient-to-b from-slate-900/95 to-slate-950/95
          border border-white/10
          shadow-2xl
          text-white
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-start px-5 sm:px-6 py-4 border-b border-white/10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {job.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              {job.type} • {job.experience}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* CONTENT (SCROLL HERE, NO SCROLLBAR) */}
        <div className="px-5 sm:px-6 py-6 space-y-7 hide-scroll max-h-[60vh]">
          {/* Job Description */}
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Job Description
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Machine Learning Engineer at Swaayatt Robots is responsible for designing, developing, training, and deploying machine learning models for real-world autonomous systems. The role involves close collaboration with the R&D team working in computer vision (CV), deep learning (DL), reinforcement learning (RL), decision making, and motion planning. The position requires translating research ideas into scalable, production-ready ML solutions. A strong background in mathematics, statistics, or theoretical computer science (CS) is advantageous.
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Responsibilities
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/80">
              <li>Develop and maintain user-facing features using HTML, CSS, and JavaScript</li>
              <li>Build reusable components and front-end libraries</li>
              <li>Ensure the technical feasibility of UI/UX designs</li>
              <li>Optimize applications for maximum speed and scalability</li>
            </ul>
          </section>

          {/* Requirements */}
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Requirements
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/80">
              <li>Basic knowledge of HTML, CSS, and JavaScript</li>
              <li>Familiarity with React or any modern JavaScript framework</li>
              <li>Understanding of responsive design principles</li>
              <li>Ability to write clean and maintainable code</li>
            </ul>
          </section>

          {/* Bonus Qualification */}
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Bonus Qualification
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/80">
              <li>Experience with reinforcement learning or robotics-related ML systems</li>
              <li>Knowledge of model optimization techniques (quantization, pruning, distillation)</li>
              <li>Experience deploying ML models at scale (TensorRT, ONNX, or similar)</li>
              <li>Strong mathematical background in linear algebra, probability, and optimization</li>
            </ul>
          </section>
        </div>

        {/* FOOTER */}
        <div className="px-5 sm:px-6 py-4 border-t border-white/10 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-sm text-white/60 hover:text-white transition"
          >
            Close
          </button>

          <button className="px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
