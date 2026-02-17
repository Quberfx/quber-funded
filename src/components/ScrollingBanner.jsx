export default function ScrollingBanner() {
  const text = "No Competition • Professional framework • One-Day Payouts";

  return (
    <div className="bg-[#06090f] text-white overflow-hidden py-4 border-y border-gray-800">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Repeat the text multiple times for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-2xl md:text-3xl font-bold">
              {text.split("•").map((part, index) => (
                <span key={index}>
                  {part.trim()}
                  {index < text.split("•").length - 1 && (
                    <span className="text-blue-500 mx-4">•</span>
                  )}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
