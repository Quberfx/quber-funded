import { useEffect, useState } from "react";
import useParallax from "../../hooks/useParallax";

/**
 * ParallaxContainer - Wrapper component that applies parallax transforms to children
 * @param {React.ReactNode} children - Child elements to apply parallax effect
 * @param {number} speed - Parallax speed multiplier (default: 0.5)
 * @param {string} className - Additional CSS classes
 * @param {boolean} disabled - Disable parallax effect (default: false)
 */
export default function ParallaxContainer({
  children,
  speed = 0.5,
  className = "",
  disabled = false,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Disable parallax on mobile or when explicitly disabled
  const { offset, ref } = useParallax(speed, !disabled && !isMobile);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
