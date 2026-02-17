import { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = sessionStorage.getItem("hasSeenWelcomePopup");

    if (!hasSeenPopup) {
      // Show popup after 2 seconds on first visit
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("QUBER10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Mark popup as seen for this session
    sessionStorage.setItem("hasSeenWelcomePopup", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-r from-white to-blue-100 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 p-12">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Title */}
          <h2
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <span className="text-black">Welcome to</span>
            <br />
            <span className="text-black">Quber </span>
            <span className="text-blue-600">Funded</span>
          </h2>

          {/* Subtitle with rating */}
          <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
            <div className="text-left">
              <p className="text-2xl font-semibold text-black leading-tight">
                The <span className="text-blue-600">#1 Trusted Prop</span>
              </p>
              <p className="text-2xl font-semibold text-black leading-tight">
                Firm in the Industry
              </p>
            </div>

            <div className="border-l-2 border-gray-400 h-16"></div>

            <div className="text-center">
              <p className="text-4xl font-bold text-black mb-1">4.5</p>
              <div className="flex gap-1 mb-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? "text-yellow-400"
                        : i === 4
                          ? "text-yellow-400"
                          : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-500">2,256</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8 font-normal">
            Activate your exclusive funded{" "}
            <span className="font-semibold text-black">discount today.</span>
          </p>

          {/* Copy code button */}
          <div className="inline-flex items-center gap-3 bg-white border-2 border-blue-600 rounded-full px-8 py-4 hover:bg-blue-50 transition-colors cursor-pointer group">
            <span className="text-lg font-medium text-gray-800">
              Copy Code:{" "}
              <span className="text-blue-600 font-bold">QUBER10</span>
            </span>
            <button
              onClick={handleCopyCode}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors"
              aria-label="Copy code"
            >
              {copied ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
