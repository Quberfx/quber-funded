import { useState, useEffect, useRef } from "react";
import PricingCard from "./PricingCard";
import { Cash, Circle, Hand } from "../../assets/images";
import ScrollReveal from "../shared/ScrollReveal";

export default function PricingSection() {
  const partnerRef = useRef(null);
  const [isPartnerVisible, setIsPartnerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (partnerRef.current) {
        const rect = partnerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight * 0.8 && rect.bottom > 0) {
          setIsPartnerVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const badges = [
    { text: "No Complicated rules", icon: Circle },
    { text: "No challenges", icon: Hand },
    { text: "One day payouts", icon: Cash },
  ];

  const plans = [
    {
      id: "beginners",
      title: "Beginners",
      price: "5,000",
      fee: "169",
      originalFee: "299",
      features: [
        "No challenge, No Consistency",
        "10% Max drawdown",
        "5 % Daily drawdown",
        "70% Profit Split",
        "Instant Payout , Weekly Thereafter.",
        "Unlimited Trading Period",
      ],
    },
    {
      id: "classic",
      title: "Classic",
      price: "10,000",
      fee: "329",
      originalFee: "599",
      highlighted: true,
      features: [
        "No challenge, No Consistency",
        "10% Max drawdown",
        "5 % Daily drawdown",
        "70% Profit Split",
        "Instant Payout , Weekly Thereafter.",
        "Unlimited Trading Period",
      ],
    },
    {
      id: "standard",
      title: "Standard",
      price: "25,000",
      fee: "1499",
      originalFee: "829",
      features: [
        "No challenge, No Consistency",
        "10% Max drawdown",
        "5 % Daily drawdown",
        "70% Profit Split",
        "Instant Payout , Weekly Thereafter.",
        "Unlimited Trading Period",
      ],
    },
    {
      id: "professional",
      title: "Professional*",
      price: "50,000",
      fee: "1649",
      originalFee: "2999",
      features: [
        "No challenge, No Consistency",
        "10% Max drawdown",
        "5 % Daily drawdown",
        "70% Profit Split",
        "Instant Payout , Weekly Thereafter.",
        "Unlimited Trading Period",
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-[#f6f8fc] to-[#e9eef8] py-24"
    >
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12 text-center">
        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {badges.map(({ text, icon }, i) => (
            <ScrollReveal key={i} direction="fade" delay={i * 100}>
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-sm text-blue-600 font-medium">
                <img src={icon} className="w-6 h-6" />
                {text}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* HEADING */}
        <ScrollReveal direction="up" delay={300}>
          <h2 className="text-4xl md:text-7xl font-semibold text-gray-900">
            <span className="text-blue-600">Choose</span> your <br />
            trading account
            {/* <br /> */}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Choose your funding level. Trade our capital, keep your share of
            profits, and grow through a transparent, rule-based evaluation
            system.
          </p>
        </ScrollReveal>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {plans.map((p, index) => (
            <ScrollReveal key={p.id} direction="up" delay={500 + index * 100}>
              <PricingCard
                {...p}
                selected={selectedPlan === p.id}
                onSelect={() => setSelectedPlan(p.id)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* BECOME A PARTNER */}
        <ScrollReveal direction="up" delay={900}>
          <div ref={partnerRef} className="mt-14 max-w-6xl mx-auto relative">
            {/* Animated Border Container */}
            <div className="relative rounded-3xl p-[2px] overflow-hidden bg-gradient-to-r from-blue-100 to-blue-50">
              {/* Animated sweeping glow */}
              <div
                className={`absolute inset-0 rounded-3xl ${
                  isPartnerVisible ? "animate-border-sweep" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(59, 130, 246, 0.8) 50%, rgba(96, 165, 250, 1) 55%, rgba(59, 130, 246, 0.8) 60%, transparent 70%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  filter: "blur(2px)",
                }}
              />

              {/* Content */}
              <div
                className="relative rounded-3xl bg-white backdrop-blur p-8 shadow-lg
                          flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
              >
                {/* LEFT */}
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Become a <span className="text-blue-600">Partner</span>
                  </h3>
                  <p className="text-gray-600 mt-2 max-w-md text-sm">
                    Earn smart, scalable income with attractive commissions and
                    recurring earnings from every active trader you onboard.
                  </p>
                </div>

                {/* MIDDLE FEATURES */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Attractive Revenue Share</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Instant Payouts</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Recurring Income With Scalable Model.
                    </span>
                  </div>
                </div>

                {/* RIGHT BUTTON */}
                <button className="bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap font-medium cursor-pointer">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <style jsx>{`
          @keyframes border-sweep {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }

          .animate-border-sweep {
            animation: border-sweep 3s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
