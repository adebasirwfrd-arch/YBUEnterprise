import HeroSection from "@/sections/HeroSection";
import ProblemSection from "@/sections/ProblemSection";
import SolutionSection from "@/sections/SolutionSection";
import ArsenalSection from "@/sections/ArsenalSection";
import PodcastSection from "@/sections/PodcastSection";
import PricingSection from "@/sections/PricingSection";
import FinancialsSection from "@/sections/FinancialsSection";
import InvestmentSection from "@/sections/InvestmentSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ArsenalSection />
      <PodcastSection />
      <PricingSection />
      <FinancialsSection />
      <InvestmentSection />
    </main>
  );
}
