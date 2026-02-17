import { useEffect, useState, useRef } from "react";

/**
 * Custom hook for parallax scroll effects
 * @param {number} speed - Parallax speed multiplier (0.5 = half speed, 1 = normal speed)
 * @param {boolean} enabled - Enable/disable parallax effect
 * @returns {Object} { offset: number, ref: RefObject }
 */
export default function useParallax(speed = 0.5, enabled = true) {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      // Calculate parallax offset only when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrolled - elementTop) * speed;
        setOffset(parallaxOffset);
      }
    };

    // Throttle scroll events using requestAnimationFrame
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, enabled]);

  return { offset, ref: elementRef };
}
