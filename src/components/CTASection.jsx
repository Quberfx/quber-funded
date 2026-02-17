import RippleButton from "./ui/RippleButton";
import ScrollReveal from "./shared/ScrollReveal";

export default function CTASection() {
  return (
    <section className="bg-[#06090f] py-16">
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
        <ScrollReveal direction="up" delay={0}>
          <div
            className="rounded-3xl p-12"
            style={{
              background:
                "linear-gradient(265deg, #C3D7FF 0.77%, #1D60E5 44.34%, #0040C0 76.17%)",
              boxShadow: "0 12px 28px 0 rgba(10, 9, 9, 0.32)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Trade With Real Capital?
                </h2>
                <p className="text-blue-50 text-lg">
                  Start with $1000, access a direct funded account, and trade
                  firm capital with transparent rules and scalable payouts.
                </p>
              </div>
              <RippleButton className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2">
                Get Funded →
              </RippleButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
