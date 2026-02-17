import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up", // up, down, left, right, fade
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out";

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClass} opacity-0 translate-y-10`;
        case "down":
          return `${baseClass} opacity-0 -translate-y-10`;
        case "left":
          return `${baseClass} opacity-0 translate-x-10`;
        case "right":
          return `${baseClass} opacity-0 -translate-x-10`;
        case "fade":
          return `${baseClass} opacity-0`;
        default:
          return `${baseClass} opacity-0 translate-y-10`;
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
