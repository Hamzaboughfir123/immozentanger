import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { OwnerLeadSection } from "@/components/sections/OwnerLeadSection";
import { PropertyTypesSection } from "@/components/sections/PropertyTypesSection";
import { SavingsSection } from "@/components/sections/SavingsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <BenefitsSection />
        <SavingsSection />
        <PropertyTypesSection />
        <HowItWorksSection />
        <FAQSection />
        <OwnerLeadSection />
      </main>
      <Footer />
    </>
  );
}
