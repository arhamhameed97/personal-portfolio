import SmoothScroll from "@/components/SmoothScroll";
import LearnNavigation from "@/components/learn/LearnNavigation";
import LearnHero from "@/components/learn/LearnHero";
import PricingSection from "@/components/learn/PricingSection";
import WhyDifferent from "@/components/learn/WhyDifferent";
import CurriculumSection from "@/components/learn/CurriculumSection";
import HowItWorks from "@/components/learn/HowItWorks";
import FAQSection from "@/components/learn/FAQSection";
import BookTrial from "@/components/learn/BookTrial";

export default function LearnPage() {
  return (
    <SmoothScroll>
      <main className="learn-page min-h-screen" style={{ background: "#FAFBFF" }}>
        <LearnNavigation />
        <LearnHero />
        <PricingSection />
        <WhyDifferent />
        <CurriculumSection />
        <HowItWorks />
        <FAQSection />
        <BookTrial />
      </main>
    </SmoothScroll>
  );
}
