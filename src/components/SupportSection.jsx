import { Contact247, Community, Academy } from "../assets/images/index";
import ScrollReveal from "./shared/ScrollReveal";

export default function SupportSection() {
  const features = [
    {
      icon: Contact247,
      title: "24/5 Support",
      description:
        "Need help? Get your requests solved quickly via support team.",
    },
    {
      icon: Community,
      title: "Community",
      description: "Join the conversations on our worldwide QUBER communities",
    },
    {
      icon: Academy,
      title: "Academy",
      description: "Learn Forex Trading and crypto for free",
    },
  ];

  return (
    <section className="bg-[#06090f] text-white py-16">
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
        <ScrollReveal direction="fade" delay={0}>
          <p className="text-center text-blue-500 text-sm font-semibold mb-4">
            Always by your side
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-8">
            Be the first to use our Quber funded
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-center text-gray-400 mb-12">
            Get faster, safer, more affordable cloud object storage with
            <br />
            no central point of failure
          </p>
        </ScrollReveal>

        {/* Blue Background Section */}
        <ScrollReveal direction="up" delay={300}>
          <div
            className="rounded-3xl py-12 px-6"
            style={{
              background:
                "linear-gradient(264.7deg, #0055FF 0.77%, #1D60E5 44.34%, #0040C0 76.17%)",
              boxShadow: "0 12px 28px 0 rgba(10, 9, 9, 0.32)",
            }}
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl backdrop-blur-sm">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-[#FFFFFF99] text-sm font-[400]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
