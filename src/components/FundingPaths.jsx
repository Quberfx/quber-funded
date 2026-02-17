import {
  Hash,
  RiskControl,
  LiveFunded,
  GrowthScale,
  MobileWithoutCircle,
} from "../assets/images/index";
import ScrollReveal from "./shared/ScrollReveal";

export default function FundingPaths() {
  const features = [
    {
      title: "Evaluation Framework",
      description:
        "Clear price targets, defined drawdown limits, and transparent rules designed to test real trading discipline.",
      icon: Hash,
      position: "top-left",
    },
    {
      title: "Live Funded Stage",
      description:
        "Move from evaluation to real capital allocation and start earning on performance not promises.",
      icon: LiveFunded,
      position: "bottom-left",
    },
    {
      title: "Risk Control System",
      description:
        "Advanced risk parameters that protect capital while allowing serious traders to grow consistently.",
      icon: RiskControl,
      position: "top-right",
    },
    {
      title: "Growth & Scaling",
      description:
        "Unlock higher funding tiers and increased capital as you demonstrate stable, responsible performance.",
      icon: GrowthScale,
      position: "bottom-right",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes ripple-out {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes ripple-out-delayed {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(1.05);
            opacity: 0.5;
          }
        }

        @keyframes ripple-out-delayed-2 {
          0% {
            transform: scale(0.95);
            opacity: 0.3;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: scale(1.05);
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-delayed-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-delayed-3 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .icon-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .circle-ripple-1 {
          animation: ripple-out 3s ease-in-out infinite;
        }

        .circle-ripple-2 {
          animation: ripple-out-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .circle-ripple-3 {
          animation: ripple-out-delayed-2 3s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      <section
        id="benefits"
        className="bg-[#06090f] text-white py-20 relative overflow-hidden"
      >
        {/* Background circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[88rem] mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal direction="fade" delay={0}>
              <p className="text-blue-500 text-sm font-semibold mb-2">
                Built for Performance-Driven Traders
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Multiple Funding Paths
                <br />
                One Powerful Platform.
              </h2>
            </ScrollReveal>
          </div>

          <div className="relative w-full max-w-[1400px] xl:max-w-[1600px] mx-auto">
            <div className="flex justify-center items-center">
              {/* Center Mobile Image Container */}
              <ScrollReveal direction="fade" delay={200}>
                <div className="relative inline-block">
                  {/* Animated Concentric Circles */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Circle 1 - Innermost */}
                    <div className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full border-4 border-blue-500/30 circle-ripple-1"></div>

                    {/* Circle 2 - Middle (icons will be on this circle) */}
                    <div className="absolute w-[500px] h-[500px] lg:w-[750px] lg:h-[750px] rounded-full border-4 border-blue-500/20 circle-ripple-2"></div>

                    {/* Circle 3 - Outermost */}
                    <div className="absolute w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full border-4 border-blue-500/10 circle-ripple-3"></div>
                  </div>

                  {/* Mobile Image - Responsive sizing */}
                  <img
                    src={MobileWithoutCircle}
                    alt="Trading Platform Mobile App"
                    loading="lazy"
                    className="relative z-10 object-contain drop-shadow-2xl"
                  />

                  {/* Top Left Icon - Positioned on circle 2 */}
                  <div className="absolute top-[15%] left-[-25%] z-20 hidden lg:block animate-float">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-blue-600 flex items-center justify-center icon-glow hover:scale-110 transition-transform duration-300">
                      <img
                        src={features[0].icon}
                        alt=""
                        className="w-6 h-6 xl:w-12 xl:h-12"
                      />
                    </div>
                  </div>

                  {/* Bottom Left Icon - Positioned on circle 2 */}
                  <div className="absolute bottom-[15%] left-[-25%] z-20 hidden lg:block animate-float-delayed-1">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-blue-600 flex items-center justify-center icon-glow hover:scale-110 transition-transform duration-300">
                      <img
                        src={features[1].icon}
                        alt=""
                        className="w-6 h-6 xl:w-12 xl:h-12"
                      />
                    </div>
                  </div>

                  {/* Top Right Icon - Positioned on circle 2 */}
                  <div className="absolute top-[15%] right-[-25%] z-20 hidden lg:block animate-float-delayed-2">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-blue-600 flex items-center justify-center icon-glow hover:scale-110 transition-transform duration-300">
                      <img
                        src={features[2].icon}
                        alt=""
                        className="w-6 h-6 xl:w-12 xl:h-12"
                      />
                    </div>
                  </div>

                  {/* Bottom Right Icon - Positioned on circle 2 */}
                  <div className="absolute bottom-[15%] right-[-25%] z-20 hidden lg:block animate-float-delayed-3">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-blue-600 flex items-center justify-center icon-glow hover:scale-110 transition-transform duration-300">
                      <img
                        src={features[3].icon}
                        alt=""
                        className="w-6 h-6 xl:w-12 xl:h-12"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Feature Text - Positioned near icons */}
            <div className="hidden lg:block">
              {/* Top Left Text */}
              <div className="absolute top-[12%] left-[5%] xl:left-[8%] w-[200px] xl:w-[230px] text-right">
                <h3 className="text-[17px] xl:text-[19px] font-bold mb-1">
                  {features[0].title}
                </h3>
                <p className="text-gray-400 text-[13px] xl:text-[14px] leading-relaxed">
                  {features[0].description}
                </p>
              </div>

              {/* Bottom Left Text */}
              <div className="absolute bottom-[12%] left-[5%] xl:left-[8%] w-[200px] xl:w-[230px] text-right">
                <h3 className="text-[17px] xl:text-[19px] font-bold mb-1">
                  {features[1].title}
                </h3>
                <p className="text-gray-400 text-[13px] xl:text-[14px] leading-relaxed">
                  {features[1].description}
                </p>
              </div>

              {/* Top Right Text */}
              <div className="absolute top-[12%] right-[5%] xl:right-[8%] w-[200px] xl:w-[230px] text-left">
                <h3 className="text-[17px] xl:text-[19px] font-bold mb-1">
                  {features[2].title}
                </h3>
                <p className="text-gray-400 text-[13px] xl:text-[14px] leading-relaxed">
                  {features[2].description}
                </p>
              </div>

              {/* Bottom Right Text */}
              <div className="absolute bottom-[12%] right-[5%] xl:right-[8%] w-[200px] xl:w-[230px] text-left">
                <h3 className="text-[17px] xl:text-[19px] font-bold mb-1">
                  {features[3].title}
                </h3>
                <p className="text-gray-400 text-[13px] xl:text-[14px] leading-relaxed">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile View - Features Below */}
          <div className="lg:hidden mt-12 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
                  <img src={feature.icon} alt="" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
