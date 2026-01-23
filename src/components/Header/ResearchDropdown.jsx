import { useState } from "react";
import ResearchPreview from "./ResearchPreview";
import ResearchLinks from "./ResearchLinks";
import { researchMenu } from "../../data/researchMenu";

export default function ResearchDropdown() {
  const [activeItem, setActiveItem] = useState(researchMenu[0]);

  return (
    <div className="absolute left-1/2 top-full mt-6 -translate-x-1/2 z-50">
      <div className="w-[720px] rounded-xl bg-white shadow-xl border p-4 flex gap-4">

        {/* LEFT */}
        <ResearchPreview image={activeItem.image} />

        {/* RIGHT */}
        <ResearchLinks
          items={researchMenu}
          onHover={setActiveItem}
        />
      </div>
    </div>
  );
}
