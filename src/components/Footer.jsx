import { Link } from "react-router-dom";
import { QuberLogo, PlayStore, AppStore } from "../assets/images";

export default function Footer() {
  return (
    <footer className="bg-[#06090f] text-white border-t border-gray-800 py-12">
      <style jsx>{`
        @keyframes icon-glow {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(59, 130, 246, 0);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
          }
        }

        .social-icon:hover {
          background-color: rgb(37, 99, 235);
          animation: icon-glow 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Left Half - Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={QuberLogo} alt="Quber Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">
                Quber<span className="text-blue-500">Funded</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
              A performance-based funded account platform empowering traders
              with real capital, fair rules, and scalable payouts. Built for
              consistency. Designed for growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/quberfunded?igsh=MXRhaTM1MnFkdWUwMA=="
                target="_blank"
                className="social-icon w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                className="social-icon w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Half - Links, Pages, Download App */}
          <div className="grid grid-cols-3 gap-8">
            {/* Links */}
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/#pricing" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#benefits" className="hover:text-white">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="/#why-quber" className="hover:text-white">
                    Why Quber
                  </a>
                </li>
                <li>
                  <a href="/#faqs" className="hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="font-bold mb-4">Other Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/about-us" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h3 className="font-bold mb-4">Download app</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src={PlayStore}
                    alt="Get it on Google Play"
                    loading="lazy"
                    className="h-11 w-36 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src={AppStore}
                    alt="Download on the App Store"
                    loading="lazy"
                    className="h-11 w-36 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Framework */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="font-bold text-lg mb-4">
            Legal & Regulatory Framework
          </h3>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              <span className="font-semibold text-white">License:</span> QUBER
              CAPITAL LLC is a duly incorporated entity under the Limited
              Liabilities Act, Chapter 151 of the Revised Laws of Saint Vincent
              and the Grenadines 2009 (Company Registration No. 4289 LLC 2025).
              Our global operations are headquartered at Suite 305, Griffith
              Corporate Centre, Beachmont, Kingstown, Saint Vincent and the
              Grenadines.
            </p>
            <p>
              <span className="font-semibold text-white">
                Authentic Market Execution:
              </span>{" "}
              Unlike traditional prop firms, QUBER CAPITAL LLC facilitates
              access to genuine trading accounts through our proprietary
              infrastructure. Every transaction is executed within live
              financial markets. We do not engage in, nor do we offer, simulated
              environments or virtual trading programs. Every account within our
              ecosystem is backed by real-time liquidity, subject to actual
              market execution, and carries tangible market risk.
            </p>
            <p>
              <span className="font-semibold text-white">Risk Mandate:</span>{" "}
              Participation in financial markets involves substantial risk and
              may not be appropriate for every investor. We strongly advise all
              participants to conduct rigorous due diligence and ensure a
              comprehensive understanding of market exposure before engaging in
              live trading activities.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright ©2026 Quber Funded. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
