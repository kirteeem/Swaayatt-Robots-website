import Frontline from "./Frontline";
import Reliability from "./Reliability";
import NextShowcase from "./NextShowcase";

import Vangaurd, {
  ProvenChassisSection,
  IntelligenceAtCoreSection,
  MissionAdaptiveLoadoutSection,
} from "./Vangaurd";

export default function LearnMore() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Frontline />

      <Vangaurd />
      <ProvenChassisSection />
      <IntelligenceAtCoreSection />
      <MissionAdaptiveLoadoutSection />

      <Reliability />
      <NextShowcase />
    </main>
  );
}
