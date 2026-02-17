import { PrivacyPolicyHeaderBg } from "../assets/images/index";

export default function PrivacyPolicy() {
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
            src={PrivacyPolicyHeaderBg}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Content container with max-w-[88rem] */}
        <div className="relative z-10 max-w-[88rem] mx-auto px-8 lg:px-12 w-full">
          <h1 className="text-5xl md:text-6xl font-bold">Privacy Policy</h1>
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
                1. Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Quber Funded values your privacy and is committed to protecting
                your personal information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                This policy explains what data we collect, why we collect it,
                and how it is handled when you use our website and funded
                account programs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing our services, you agree to the terms outlined
                below.
              </p>
            </div>

            {/* Section 2 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To provide a safe and efficient funded trading environment, we
                may collect:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">
                  Basic identification details such as name, email, country, and
                  contact number
                </li>
                <li className="list-disc">
                  Account registration and billing information
                </li>
                <li className="list-disc">
                  Trading performance and evaluation data
                </li>
                <li className="list-disc">
                  Technical and device information including IP address, browser
                  type, and usage logs
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                This information helps us maintain platform integrity and
                account security.
              </p>
            </div>

            {/* Section 3 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                3. Purpose of Data Collection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Your data is used strictly for operational and compliance
                purposes, including:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">
                  Setting up and managing your funded account
                </li>
                <li className="list-disc">
                  Processing fees and profit distributions
                </li>
                <li className="list-disc">
                  Identity verification and fraud prevention
                </li>
                <li className="list-disc">
                  Monitoring risk parameters and trading compliance
                </li>
                <li className="list-disc">
                  Improving system performance and user experience
                </li>
                <li className="list-disc">
                  Meeting applicable legal and regulatory requirements
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                4. Data Sharing Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Quber Funded does not sell or distribute your personal data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Information may only be shared with trusted third-party
                providers for payment processing, identity verification, or
                technical infrastructure—all under strict confidentiality
                agreements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may also disclose data when legally required by courts,
                regulators, or law enforcement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In cases of business restructuring, your data may be transferred
                to the acquiring entity, with all protections in place.
              </p>
            </div>

            {/* Section 5 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                5. Security Measures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We implement advanced security protocols including encryption
                (SSL/TLS), secure data storage, multi-factor authentication, and
                regular security audits.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Authorized system access and user data are strictly controlled.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While we apply strong protections, no digital system can be
                fully risk-free. Users are encouraged to use strong passwords
                and enable two-factor authentication where available.
              </p>
            </div>

            {/* Section 6 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                6. Your Data Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You may request access, correction, or deletion of your personal
                information. Subject to legal obligations and audit
                requirements, we will honor such requests.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                You can also opt out of non-essential communications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For privacy-related inquiries, contact us at{" "}
                <a
                  href="mailto:support@quberfunded.com"
                  className="text-blue-600 hover:underline"
                >
                  support@quberfunded.com
                </a>
              </p>
            </div>

            {/* Section 7 */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <h2 className="text-2xl font-bold text-[0a1628] mb-4">
                7. Updates to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                This Privacy Policy may be revised periodically to reflect
                operational or regulatory changes. The updated version will
                always be posted on this page with the effective date.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We recommend reviewing this policy regularly to stay informed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
