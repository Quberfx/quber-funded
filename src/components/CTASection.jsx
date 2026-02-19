import RippleButton from "./ui/RippleButton";
import ScrollReveal from "./shared/ScrollReveal";
import ParallaxContainer from "./shared/ParallaxContainer";

export default function CTASection() {
  return (
    <section className="bg-[#06090f] py-16 md:py-20 relative overflow-hidden mt-8 md:mt-0">
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
        {/* Background decorative elements with parallax */}
        <ParallaxContainer
          speed={0.3}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </ParallaxContainer>

        <ParallaxContainer
          speed={0.6}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        </ParallaxContainer>

        <ParallaxContainer
          speed={0.4}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl" />
        </ParallaxContainer>

        <ScrollReveal direction="up" delay={0} scale={true}>
          <div
            className="rounded-2xl p-8 md:p-12 relative z-10 overflow-hidden"
            style={{
              background:
                "linear-gradient(265deg, #C3D7FF 0.77%, #1D60E5 44.34%, #0040C0 76.17%)",
              boxShadow: "0 12px 28px 0 rgba(10, 9, 9, 0.32)",
              backdropFilter: "blur(3px)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-2xl">
                <ScrollReveal direction="left" delay={100}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Trade With Real Capital?
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={200}>
                  <p className="text-blue-50 text-lg">
                    Start with $5000, access a direct funded account, and trade
                    firm capital with transparent rules and scalable payouts.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={300} scale={true}>
                <RippleButton className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-transform px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 flex-shrink-0">
                  Get Funded →
                </RippleButton>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
