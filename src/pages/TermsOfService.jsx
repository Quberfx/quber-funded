import { TNCHeaderBg } from "../assets/images/index";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
      {/* Hero Section with Background */}
      <section className="relative bg-[#0a1628] text-white h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={TNCHeaderBg}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Content container with max-w-[88rem] */}
        <div className="relative z-10 max-w-[88rem] mx-auto px-8 lg:px-12 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* Content Section - White Background */}
      <section className="bg-white py-16">
        <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
          <div className="space-y-10">
            {/* Section 1 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                By registering or using Quber Funded services, you agree to
                these Terms & Conditions. If you do not agree, you must not
                access or use the platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Quber Funded provides evaluation-based funded trading programs.
                We do not provide investment advice, portfolio management, or
                brokerage services.
              </p>
            </div>

            {/* Section 2 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                2. Nature of Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Quber Funded offers:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">
                  Evaluation-based trading assessment processes ("Challenges")
                </li>
                <li className="list-disc">
                  Performance-based funded account opportunities
                </li>
                <li className="list-disc">
                  Access to trading dashboards and analytics tools
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                All trading during the evaluation phase is conducted in a
                simulated environment using market data. No real capital is
                allocated during this phase.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Successful completion of the evaluation and identity
                verification (KYC) may qualify you for a funded account, subject
                to a separate Funded Trader Agreement.
              </p>
            </div>

            {/* Section 3 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                3. Eligibility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To use our services, you must:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Be at least 18 years old</li>
                <li className="list-disc">
                  Provide accurate and complete registration details
                </li>
                <li className="list-disc">
                  Reside in a jurisdiction where participation is legally
                  permitted
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                We reserve the right to refuse or terminate access if compliance
                requirements are not met.
              </p>
            </div>

            {/* Section 4 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                4. Fees & Payments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Participation in any Challenge requires payment of a one-time
                evaluation fee.
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">
                  Fees vary depending on account size and model
                </li>
                <li className="list-disc">
                  Fees are non-refundable once trading activity has started
                </li>
                <li className="list-disc">
                  Refund requests (if applicable) must follow the stated refund
                  policy
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Chargebacks or payment disputes may result in account
                suspension.
              </p>
            </div>

            {/* Section 5 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                5. Trading Rules & Risk Parameters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Each Challenge and funded account operates under defined rules,
                including:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Maximum drawdown limits</li>
                <li className="list-disc">Profit targets (if applicable)</li>
                <li className="list-disc">Minimum trading days</li>
                <li className="list-disc">
                  Prohibited trading behaviors (e.g., arbitrage abuse, latency
                  exploitation, account hedging across multiple users)
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Violation of trading rules may result in account termination
                without compensation.
              </p>
            </div>

            {/* Section 6 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                6. Account Limits
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Clients may hold multiple evaluation accounts; however, total
                funded capital allocation may be subject to a maximum limit
                defined by Quber Funded. We reserve the right to monitor and
                enforce allocation caps.
              </p>
            </div>

            {/* Section 7 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                7. Payouts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Funded traders are eligible for profit payouts according to the
                agreed profit-sharing structure outlined in their Funded Trader
                Agreement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Quber Funded reserves the right to review trading activity
                before approving payouts to ensure compliance with rules and
                behavioral policies.
              </p>
            </div>

            {/* Section 8 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                8. Platform Access & Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You are responsible for maintaining confidentiality of login
                credentials.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are not liable for losses resulting from unauthorized access
                caused by your negligence. Temporary service interruptions due
                to maintenance, upgrades, or technical issues may occur.
              </p>
            </div>

            {/* Section 9 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                9. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All website content, branding, materials, and platform elements
                belong to Quber Funded. Unauthorized copying, distribution, or
                misuse is strictly prohibited.
              </p>
            </div>

            {/* Section 10 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "1.0s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                10. Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Quber Funded does not guarantee profits. Trading performance
                depends entirely on individual strategy and risk management.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All services are provided "as is," and we are not liable for
                indirect losses, data interruptions, or market-related risks.
              </p>
            </div>

            {/* Section 11 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                11. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may suspend or terminate access if:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Trading rules are violated</li>
                <li className="list-disc">
                  Fraudulent or abusive behavior is detected
                </li>
                <li className="list-disc">
                  Legal or compliance concerns arise
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Inactive accounts may be disabled after a defined period of no
                trading activity.
              </p>
            </div>

            {/* Section 12 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                12. Amendments
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms & Conditions periodically. Continued
                use of the platform after updates constitutes acceptance of the
                revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
