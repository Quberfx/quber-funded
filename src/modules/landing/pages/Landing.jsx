import Hero from "../../../components/Hero";
import TradingViewTicker from "../../../components/TradingViewTicker";
import PricingSection from "../../../components/pricing/PricingSection";
import FundingPaths from "../../../components/FundingPaths";
import CapitalAllocation from "../../../components/CapitalAllocation";
import PerformanceSteps from "../../../components/PerformanceSteps";
import SupportSection from "../../../components/SupportSection";
import ScaleCTA from "../../../components/ScaleCTA";
import ScrollingBanner from "../../../components/ScrollingBanner";
import FAQ from "../../../components/FAQ";
import WelcomePopup from "../../../components/WelcomePopup";
import HeroBlueSection from "../../../components/HeroBlueSection";

export default function Landing() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* <WelcomePopup /> */}
      <Hero />
      <TradingViewTicker />
      <HeroBlueSection />
      <PricingSection />
      <FundingPaths />
      <CapitalAllocation />
      <PerformanceSteps />
      <SupportSection />
      <ScaleCTA />
      <ScrollingBanner />
      <FAQ />
    </div>
  );
}
