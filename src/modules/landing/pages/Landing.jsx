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
import SEO from "../../../components/SEO";
import StructuredData, { organizationSchema } from "../../../components/StructuredData";
import { pageSEO } from "../../../utils/seo";

export default function Landing() {
  return (
    <div className="w-full overflow-x-hidden">
      <SEO {...pageSEO.home} />
      <StructuredData data={organizationSchema} />
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
