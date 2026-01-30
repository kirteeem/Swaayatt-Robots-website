export default function JobCard({ job, onView, isDarkMode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <h3
          className={`text-2xl font-medium ${
            isDarkMode ? "text-white" : "text-[#1A212F]"
          }`}
        >
          {job.title}
        </h3>

        <button
          onClick={() => onView(job)}
          className="text-sm text-[#00B7FF] hover:text-blue-400 flex items-center gap-1 transition-colors"
        >
          View Job Description
          <i className="ri-arrow-right-up-line" />
        </button>
      </div>
    </div>
  );
}
