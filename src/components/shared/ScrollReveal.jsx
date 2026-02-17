import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1000,
  direction = "up", // up, down, left, right, fade
  scale = false,
  blur = false,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Use setTimeout to avoid setState in effect warning
      setTimeout(() => setIsVisible(true), 0);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  const getAnimationClass = () => {
    const baseClass = "transition-all ease-out";

    if (!isVisible) {
      let transform = "";
      let opacity = "opacity-0";
      let scaleTransform = scale ? "scale-95" : "";
      let blurFilter = blur ? "blur-sm" : "";

      switch (direction) {
        case "up":
          transform = "translate-y-10";
          break;
        case "down":
          transform = "-translate-y-10";
          break;
        case "left":
          transform = "translate-x-10";
          break;
        case "right":
          transform = "-translate-x-10";
          break;
        case "fade":
          transform = "";
          break;
        default:
          transform = "translate-y-10";
      }

      return `${baseClass} ${opacity} ${transform} ${scaleTransform} ${blurFilter}`.trim();
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 blur-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
