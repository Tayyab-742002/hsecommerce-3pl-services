import { HeroSection } from "@/components/ui/hero-section";
import { ServicesParallaxSection } from "@/components/ui/services-parallax";
import { AboutSnapshotSection } from "@/components/ui/about-snapshopt";
import { HowItWorks } from "@/components/ui/how-it-works";
import { CTASection } from "@/components/ui/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSnapshotSection />
        <ServicesParallaxSection />
        <HowItWorks />
        <CTASection />
      </main>

      {/* Footer will be added later */}
    </div>
  );
}
