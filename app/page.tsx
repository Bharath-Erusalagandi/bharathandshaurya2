import { HeroSection } from "@/components/hero-section"
import { IntroductionSection } from "@/components/introduction-section"
import { FactsSection } from "@/components/facts-section"
import { TheoriesSection } from "@/components/theories-section"
import { CitationsSection } from "@/components/citations-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <FactsSection />
      <TheoriesSection />
      <CitationsSection />
    </div>
  )
}
