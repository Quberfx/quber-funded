import RippleButton from "./ui/RippleButton";
import ScrollReveal from "./shared/ScrollReveal";

export default function PartnerSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" delay={0}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Become a <span className="text-blue-600">Partner</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Earn smart, scalable income with attractive commissions and
                  recurring earnings from every active trader you onboard.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">💰</span>
                    </div>
                    <span className="text-gray-700">
                      Attractive Revenue Share
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">⚡</span>
                    </div>
                    <span className="text-gray-700">Instant Payouts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">📈</span>
                    </div>
                    <span className="text-gray-700">
                      Recurring Income With Scalable Model
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <RippleButton className="bg-blue-600 text-white hover:bg-blue-400 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2">
                  Call Now
                </RippleButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
