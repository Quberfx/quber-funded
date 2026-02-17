import {
  Card1,
  CapitalAllocate,
  CapitalProtection,
  ExpertTrade,
} from "../assets/images";
import ScrollReveal from "./shared/ScrollReveal";

export default function CapitalAllocation() {
  const features = [
    {
      icon: CapitalAllocate,
      title: "Capital Allocation",
    },
    {
      icon: ExpertTrade,
      title: "Expert Trade Execution",
    },
    {
      icon: CapitalProtection,
      title: "Capital Protection Framework",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#06090f] text-white py-20 relative overflow-hidden"
    >
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Crypto Cards Image */}
          <ScrollReveal direction="left" delay={0}>
            <div className="relative flex items-center justify-center">
              <img
                src={Card1}
                alt="Crypto Cards"
                loading="lazy"
                className="w-full max-w-lg h-auto object-contain transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal direction="fade" delay={100}>
              <p className="text-gray-500 text-sm mb-6 tracking-wide uppercase">
                Structured Capital Allocation
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Access Funded Capital.
                <br />
                Earn Through Managed
                <br />
                Performance.
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Quber Funded gives you structured access to institutional-grade
                trading capital, executed by experienced professionals under
                disciplined risk controls.
              </p>
            </ScrollReveal>

            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <ScrollReveal
                  key={index}
                  direction="right"
                  delay={400 + index * 100}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <img src={feature.icon} alt="" />
                    </div>
                    <h3 className="font-medium text-lg text-white">
                      {feature.title}
                    </h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
