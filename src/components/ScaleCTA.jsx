import RippleButton from "./ui/RippleButton";
import ScrollReveal from "./shared/ScrollReveal";

export default function ScaleCTA() {
  return (
    <section className="bg-[#06090f] text-white py-20">
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12 text-center">
        <ScrollReveal direction="up" delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-blue-500">Scale Beyond</span>
            <br />
            Your Own Capital?
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Quber Funded gives disciplined traders access to structured funding,
            designed for performance, not gimmicks.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RippleButton className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Contact us!
            </RippleButton>
            <RippleButton className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg flex justify-center items-center gap-2 text-center">
              Get Funded →
            </RippleButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
