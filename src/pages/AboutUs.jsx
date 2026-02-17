import { AboutUsHeaderBg, AboutUsIllustration } from "../assets/images/index";
import { useState, useEffect, useRef } from "react";
import ScrollingBanner from "../components/ScrollingBanner";

export default function AboutUs() {
  const blueCardRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const [blueCardVisible, setBlueCardVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statValues, setStatValues] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0,
  });

  const blueCardTexts = ["Backed By Real Capital", "Built For Real Traders"];

  // Final values for stats
  const finalStats = {
    stat1: 92,
    stat2: 18,
    stat3: 3.5,
    stat4: 800,
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if blue card is in viewport and switch text based on scroll
      if (blueCardRef.current) {
        const rect = blueCardRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isVisible = rect.top < viewportHeight && rect.bottom > 0;
        setBlueCardVisible(isVisible);

        // Calculate progress through the blue card section (0 to 1)
        if (isVisible) {
          const progress = Math.min(
            Math.max(
              (viewportHeight - rect.top) / (rect.height + viewportHeight),
              0,
            ),
            1,
          );

          // Switch text based on scroll progress
          if (progress < 0.5) {
            setCurrentTextIndex(0); // "Backed By Real Capital"
          } else {
            setCurrentTextIndex(1); // "Built For Real Traders"
          }
        }
      }

      // Highlight words based on scroll position
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollProgress =
            (viewportHeight - rect.top) / (rect.height + viewportHeight);
          const totalWords = 60; // Approximate total words in both paragraphs
          const currentWord = Math.floor(scrollProgress * totalWords);
          setActiveWordIndex(currentWord);
        }
      }

      // Trigger stats animation when in viewport
      if (statsRef.current && !statsAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Only trigger when the stats section is actually visible (top is in viewport)
        if (rect.top < viewportHeight * 0.7 && rect.bottom > 0) {
          setStatsAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [statsAnimated]);

  // Animate stats counter
  useEffect(() => {
    if (!statsAnimated) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStatValues({
        stat1: Math.floor(finalStats.stat1 * easeOut),
        stat2: Math.floor(finalStats.stat2 * easeOut),
        stat3: parseFloat((finalStats.stat3 * easeOut).toFixed(1)),
        stat4: Math.floor(finalStats.stat4 * easeOut),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        // Set final values
        setStatValues({
          stat1: finalStats.stat1,
          stat2: finalStats.stat2,
          stat3: finalStats.stat3,
          stat4: finalStats.stat4,
        });
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [statsAnimated]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative bg-[#0a1628] text-white h-[300px] flex items-center justify-center">
        {/* Background image - Full screen */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={AboutUsHeaderBg}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Content container with max-w-[88rem] */}
        <div className="relative z-10 max-w-[88rem] mx-auto px-8 lg:px-12 w-full">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Content Section - White Background */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2
              className="text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[120%] tracking-[-0.04em] max-w-[1033px] mx-auto text-[#0a1628]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Empowering Vision. <br />
              <span className="text-blue-600"> Real Traders.</span>
            </h2>
            <p
              className="text-[20px] md:text-[28px] lg:text-[40px] font-normal leading-[140%] tracking-[0%] max-w-[882px] mx-auto mt-6 text-gray-600"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Our mission is simple give disciplined traders the funding,
              structure, and infrastructure they need to scale confidently.
            </p>
          </div>

          {/* Blue Card Section with Parallax Text Switching */}
          <div
            ref={blueCardRef}
            className="rounded-3xl p-6 md:p-10 lg:p-12 mb-6 text-white transition-all duration-700"
            style={{
              background: "linear-gradient(285.87deg, #0156FF 7.76%, #001D58 103.64%)",
              opacity: blueCardVisible ? 1 : 0.3,
              transform: blueCardVisible
                ? "translateY(0) scale(1)"
                : "translateY(50px) scale(0.95)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left side */}
              <div className="flex-1 flex items-center gap-4">
                <div className="max-w-[482px]">
                  <p
                    className="text-[20px] md:text-[28px] lg:text-[36px] font-normal leading-[140%] tracking-[0%]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Trade With Our Dedicated{" "}
                    <span className="font-bold">Tier-1</span> Liquidity Partner
                  </p>
                </div>
              </div>

              {/* Right side - Single item that changes on scroll with fade transition */}
              <div className="flex-1 relative h-[100px] md:h-[80px]">
                {/* First text - Backed By Real Capital */}
                <div
                  className={`absolute top-0 left-0 right-0 flex items-center gap-3 transition-all duration-1000 ease-in-out justify-end ${
                    currentTextIndex === 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-8 pointer-events-none"
                  }`}
                >
                  <div className="rounded-full p-3 bg-blue-500 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 4.08-3.05 7.44-7 7.93v2.02c5.05-.5 9-4.76 9-9.95s-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-[20px] md:text-[24px] lg:text-[32px] font-bold leading-[140%] tracking-[-0.02em]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Backed By Real Capital
                    </p>
                  </div>
                </div>

                {/* Second text - Built For Real Traders */}
                <div
                  className={`absolute top-0 left-0 right-0 flex items-center gap-3 transition-all duration-1000 ease-in-out ${
                    currentTextIndex === 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <div className="rounded-full p-3 bg-blue-500 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-[20px] md:text-[24px] lg:text-[32px] font-bold leading-[140%] tracking-[-0.02em]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Built For Real Traders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtext */}
          <p
            className="text-center text-gray-400 text-[18px] font-normal leading-[140%] tracking-[0%] max-w-[642px] mx-auto mb-16 px-4 transition-all duration-700"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            From FX scalping to Indices and Commodities, QUBER Funded operates
            inside a structured, real-market environment.
          </p>

          {/* Why Choose Section */}
          <div className="mb-16">
            <h2
              className="text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[120%] tracking-[-0.04em] max-w-[684px] mx-auto text-center text-[#0a1628] mb-12"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Why Choose <span className="text-blue-600">Quber Funded</span>
            </h2>

            {/* Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={AboutUsIllustration}
                alt="Trader working"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>

            {/* Content with Scroll-based Highlighting */}
            <div
              ref={contentRef}
              className="space-y-8 text-center max-w-[968px] mx-auto"
            >
              <div className="relative">
                <p
                  className="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[120%] tracking-[-0.04em]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {[
                    "In",
                    "a",
                    "market",
                    "full",
                    "of",
                    "hype",
                    "and",
                    "unclear",
                    "terms,",
                    "Quber", // this should turn blue
                    "Funded", // this should turn blue
                    "delivers",
                    "structure,",
                    "transparency,",
                    "and",
                    "a",
                    "professional",
                    "trading",
                    "environment",
                    "backed",
                    "by",
                    "institutional-grade",
                    "infrastructure",
                    "and",
                    "clearly",
                    "defined",
                    "risk",
                    "rules.",
                  ].map((word, index) => {
                    const isQuberFunded = word === "Quber" || word === "Funded";
                    const isHighlighted = index <= activeWordIndex;
                    return (
                      <span
                        key={index}
                        className={`transition-colors duration-300 ${
                          isHighlighted
                            ? isQuberFunded
                              ? "text-blue-600"
                              : "text-[#0a1628]"
                            : "text-gray-300"
                        } cursor-default`}
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </p>
              </div>

              <div className="relative">
                <p
                  className="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[120%] tracking-[-0.04em]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {[
                    "We",
                    "offer",
                    "real",
                    "capital",
                    "with",
                    "strict",
                    "risk",
                    "management",
                    "and",
                    "performance-based",
                    "payouts",
                    "no",
                    "exaggerated",
                    "promises,",
                    "only",
                    "disciplined",
                    "growth",
                    "for",
                    "serious",
                    "traders",
                    "who",
                    "value",
                    "consistency",
                    "and",
                    "long-term",
                    "scaling.",
                  ].map((word, index) => {
                    const globalIndex = index + 28; // Offset for second paragraph
                    return (
                      <span
                        key={index}
                        className={`transition-colors duration-300 ${
                          globalIndex <= activeWordIndex
                            ? "text-[#0a1628]"
                            : "text-gray-300"
                        } hover:text-[#0a1628] cursor-default`}
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </p>
              </div>

              {/* Stats Section */}
              <div
                ref={statsRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200"
              >
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {statValues.stat1}%
                  </p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Trader Payout
                    <br />
                    Satisfaction Rate
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {statValues.stat2}+
                  </p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Years of Combined
                    <br />
                    Market Experience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    ${statValues.stat3}M+
                  </p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Capital Allocated
                    <br />
                    to Traders
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {statValues.stat4}+
                  </p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Global Trading
                    <br />
                    Accounts Created
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Full Width */}
        {/* <div className="bg-[#000510] text-white py-16 text-center overflow-hidden">
          <div className="space-y-4 max-w-[973px] mx-auto px-6">
            <h2
              className="text-[100px] font-extrabold leading-[120%] tracking-[-0.06em] animate-slide-in-left-continuous whitespace-nowrap"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
            >
              We don't sell <span className="text-blue-400">dreams.</span>
            </h2>
            <h2
              className="text-[100px] font-extrabold leading-[120%] tracking-[-0.06em] animate-slide-in-right-continuous whitespace-nowrap"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
            >
              We fund <span className="text-blue-400">performance.</span>
            </h2>
          </div>
        </div> */}
        <ScrollingBanner />
      </section>
    </div>
  );
}
