import { useState } from "react";

export default function PricingCard({
  title,
  price,
  fee,
  originalFee,
  features,
  highlighted,
  selected,
  onSelect,
}) {
  const active = selected;
  const [ripples, setRipples] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    onSelect();
  };

  return (
    <div
      className={`
        relative pt-6 transition-all duration-300
        ${active || isHovered ? "-translate-y-4" : "translate-y-0"}
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Label Tab */}
      <div
        className={`
          absolute top-0 left-1/2 -translate-x-1/2 z-10
          px-12 py-1 rounded-t-3xl text-sm font-semibold text-white transition-all duration-300
          ${active || isHovered ? "bg-blue-600 shadow-2xl" : "bg-gray-800 shadow-lg"}
        `}
        style={{
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
          zIndex: 1,
        }}
      >
        {title}
      </div>

      {/* Card Container with Border */}
      <div
        className={`
          relative rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden
          ${active || isHovered ? "shadow-2xl" : "shadow-lg"}
        `}
        style={{ zIndex: 2 }}
      >
        {/* Ripple Effect */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-blue-400 opacity-75 animate-ripple pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: "20px",
              height: "20px",
              transform: "translate(-50%, -50%)",
              animation: "ripple 0.6s ease-out",
            }}
          />
        ))}

        {/* Gradient Border Wrapper */}
        {active && (
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #1D60E5 0%, #8FB5FF 100%)",
              padding: "2px",
            }}
          >
            <div
              className="w-full h-full rounded-3xl"
              style={{
                background:
                  "linear-gradient(180deg, #FCFBFA 40.35%, #D9E8FF 100%)",
              }}
            />
          </div>
        )}

        {/* Inner Card Content */}
        <div
          className={`
            relative rounded-3xl p-8 pt-10 transition-all duration-300
            ${
              active
                ? "bg-transparent"
                : "bg-white hover:bg-[linear-gradient(180deg,#FCFBFA_40.35%,#D9E8FF_100%)] border-2 border-gray-200"
            }
          `}
        >
          {/* PRICE */}
          <div className="text-center">
            <div className="text-5xl font-extrabold text-blue-600">
              ${price}
            </div>

            {/* Horizontal stroke below price */}
            <div className="mt-4 mb-4 mx-auto w-full max-w-[100%] h-[1px] bg-gray-300"></div>
          </div>

          {/* FEE */}
          <div className="mt-2 flex items-center gap-2 justify-center">
            <span className="text-lg font-bold text-red-500 line-through">
              ${originalFee}
            </span>
            <span className="text-sm text-gray-600 font-medium">Fees</span>
            <span className="text-2xl font-extrabold text-gray-900">
              ${fee}
            </span>
          </div>

          {/* Horizontal stroke below fees */}
          <div className="mt-4 mb-6 mx-auto w-full max-w-[100%] h-[1px] bg-gray-300"></div>

          {/* FEATURES */}
          <div className="mt-6 space-y-3 text-left">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-gray-700 text-sm"
              >
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            className={`
              mt-8 w-full py-3 rounded-full font-medium transition-colors cursor-pointer
              ${
                active
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : isHovered
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-2 border-gray-800 text-gray-800 hover:bg-gray-100"
              }
            `}
          >
            Get Funded
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 20px;
            height: 20px;
            opacity: 0.75;
          }
          100% {
            width: 500px;
            height: 500px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
