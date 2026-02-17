import { useState } from "react";

export default function RippleButton({
  children,
  className = "",
  onClick,
  ...props
}) {
  const [ripples, setRipples] = useState([]);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 800);

    if (onClick) onClick(e);
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => {
    setIsPressed(false);
    setIsHovered(false);
  };
  const handleMouseEnter = () => setIsHovered(true);

  // Check if children contains an arrow
  const childrenString = typeof children === "string" ? children : "";
  const hasArrow =
    childrenString.includes("→") || childrenString.includes("->");

  // Split content to separate arrow
  const renderChildren = () => {
    if (typeof children === "string" && hasArrow) {
      const parts = children.split("→");
      if (parts.length === 2) {
        return (
          <>
            <span>{parts[0]}</span>
            <span
              className={`inline-block transition-all duration-300 ease-out ${
                isHovered
                  ? "translate-x-1 scale-125"
                  : "translate-x-0 scale-100"
              }`}
              style={{
                animation: isHovered ? "arrow-spin 0.6s ease-in-out" : "none",
              }}
            >
              →
            </span>
            <span>{parts[1]}</span>
          </>
        );
      }
    }
    return children;
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`
        relative overflow-hidden
        transition-all duration-200 ease-out cursor-pointer
        ${isPressed ? "scale-95 tracking-tight" : "scale-100 hover:scale-[1.02] hover:tracking-wide"}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out">
        {renderChildren()}
      </span>

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.y,
            left: ripple.x,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)",
            animation: "ripple-expand 800ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes ripple-expand {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @keyframes arrow-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
}
