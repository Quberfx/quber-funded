import { useState, useEffect, useRef } from "react";
import RippleButton from "./ui/RippleButton";
import ScrollReveal from "./shared/ScrollReveal";

export default function PerformanceSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Select Your Funding Plan",
      description: "Choose the capital allocation that matches your strategy.",
    },
    {
      number: "02",
      title: "Trade with Structured Discipline",
      description:
        "Operate within defined risk parameters and focus on consistency.",
    },
    {
      number: "03",
      title: "Withdraw Your Performance Rewards",
      description:
        "Request payouts as per eligibility and scale with confidence.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress through the section
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollProgress =
            (viewportHeight - rect.top) / (rect.height + viewportHeight);

          // More gradual step activation for parallax effect
          if (scrollProgress < 0.25) {
            setActiveStep(0);
          } else if (scrollProgress >= 0.25 && scrollProgress < 0.5) {
            setActiveStep(1);
          } else if (scrollProgress >= 0.5) {
            setActiveStep(2);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-quber"
      className="bg-white py-20 border-t border-b border-gray-200"
    >
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Title */}
          <ScrollReveal direction="left" delay={0}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Performance
                <br />
                Earned. Capital
                <br />
                Unlocked.
              </h2>
            </div>
          </ScrollReveal>

          {/* Right - Description & Button */}
          <div className="flex flex-col justify-center">
            <ScrollReveal direction="right" delay={100}>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Quber Funded, discipline meets opportunity. Meet the
                objectives, respect the risk model, and earn real payouts backed
                by structured capital allocation.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div>
                <RippleButton className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2">
                  Get Funded with Quber →
                </RippleButton>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Steps with connecting lines */}
        <div className="relative">
          {/* Connecting lines - positioned absolutely between steps */}
          <div className="hidden md:block absolute top-10 left-0 right-0 pointer-events-none">
            {/* Line 1 to 2 */}
            <div className="absolute left-[16.66%] right-[50%] top-0">
              {/* Background dashed line (gray) */}
              <svg
                className="absolute inset-0"
                width="100%"
                height="4"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="2"
                  x2="100%"
                  y2="2"
                  stroke="#D1D5DB"
                  strokeWidth="3"
                  strokeDasharray="10 10"
                />
              </svg>

              {/* Active dashed line (blue with glow) */}
              <svg
                className="absolute inset-0 transition-all duration-[1500ms] ease-in-out"
                height="4"
                preserveAspectRatio="none"
                style={{
                  width: activeStep >= 1 ? "100%" : "0%",
                  filter:
                    activeStep >= 1
                      ? "drop-shadow(0 0 12px rgba(37, 99, 235, 0.9))"
                      : "none",
                }}
              >
                <line
                  x1="0"
                  y1="2"
                  x2="100%"
                  y2="2"
                  stroke="#2563EB"
                  strokeWidth="3"
                  strokeDasharray="10 10"
                />
              </svg>
            </div>

            {/* Line 2 to 3 */}
            <div className="absolute left-[50%] right-[16.66%] top-0">
              {/* Background dashed line (gray) - appears on scroll after step 2 */}
              <svg
                className="absolute inset-0 transition-all duration-500 ease-in-out"
                width="100%"
                height="4"
                preserveAspectRatio="none"
                style={{
                  opacity: activeStep >= 2 ? 1 : 0,
                  transform: activeStep >= 2 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }}
              >
                <line
                  x1="0"
                  y1="2"
                  x2="100%"
                  y2="2"
                  stroke="#D1D5DB"
                  strokeWidth="3"
                  strokeDasharray="10 10"
                />
              </svg>

              {/* Active dashed line (blue with glow) - appears after white line */}
              <svg
                className="absolute inset-0 transition-all duration-[1200ms] ease-in-out"
                height="4"
                preserveAspectRatio="none"
                style={{
                  width: activeStep >= 2 ? "100%" : "0%",
                  filter:
                    activeStep >= 2
                      ? "drop-shadow(0 0 12px rgba(37, 99, 235, 0.9))"
                      : "none",
                  transitionDelay: activeStep >= 2 ? "400ms" : "0ms",
                }}
              >
                <line
                  x1="0"
                  y1="2"
                  x2="100%"
                  y2="2"
                  stroke="#2563EB"
                  strokeWidth="3"
                  strokeDasharray="10 10"
                />
              </svg>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all ease-out ${
                  activeStep >= index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDuration: "800ms",
                  transitionDelay:
                    activeStep >= index ? `${index * 200}ms` : "0ms",
                }}
              >
                {/* Step number box */}
                <div
                  className={`bg-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 mx-auto transition-all ease-out ${
                    activeStep >= index
                      ? "scale-110 shadow-lg shadow-blue-500/50"
                      : "scale-90 opacity-0"
                  }`}
                  style={{
                    transitionDuration: "600ms",
                    transitionDelay:
                      activeStep >= index ? `${index * 200}ms` : "0ms",
                  }}
                >
                  {step.number}
                </div>

                <h3
                  className={`text-2xl font-bold text-gray-900 mb-3 transition-all ease-out ${
                    activeStep >= index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDuration: "600ms",
                    transitionDelay:
                      activeStep >= index ? `${index * 200 + 300}ms` : "0ms",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-gray-600 leading-relaxed transition-all ease-out ${
                    activeStep >= index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDuration: "600ms",
                    transitionDelay:
                      activeStep >= index ? `${index * 200 + 400}ms` : "0ms",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
