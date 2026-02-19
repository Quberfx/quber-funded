import ScrollReveal from "./shared/ScrollReveal";
import {
  NoChallenge,
  NoComplicatedRules,
  OneDayPayouts,
} from "../assets/images";

export default function HeroBlueSection() {
  const features = [
    {
      icon: NoComplicatedRules,
      title: "No Complicated Rules",
      description: "Clear guidelines. Transparent limits. Zero hidden traps.",
    },
    {
      icon: NoChallenge,
      title: "No Challenges",
      description: "Skip evaluations. Trade directly with confidence.",
    },
    {
      icon: OneDayPayouts,
      title: "One-Day Payouts",
      description:
        "Fast processing. Withdraw profits without long waiting cycles.",
    },
  ];

  return (
    <ScrollReveal direction="up" delay={300}>
      <div
        className="py-10 px-6"
        style={{
          background:
            "linear-gradient(88.24deg, #000000 -25.06%, #2A71FF 68.42%, #0080FF 107.42%)",
          boxShadow: "0 12px 28px 0 rgba(10, 9, 9, 0.32)",
        }}
      >
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 lg:px-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 text-white">
              {/* Icon */}
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <img src={feature.icon} alt="" className="w-full h-full" />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#FFFFFF99] text-sm font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
