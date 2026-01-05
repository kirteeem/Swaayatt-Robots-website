import { Link } from "react-router-dom";

export default function ResearchLinks({ items, onHover }) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onMouseEnter={() => onHover(item)}
          className="
            px-4 py-3 rounded-md
            text-[15px] font-medium
            text-gray-900
            hover:bg-blue-100
            transition
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
