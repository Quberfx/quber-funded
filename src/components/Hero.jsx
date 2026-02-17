import { useState, useEffect } from "react";
import RippleButton from "./ui/RippleButton";
import ScrollReveal from "./shared/ScrollReveal";

export default function Hero() {
  const [typingText, setTypingText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Performance.", "Profit.", "Strategy."];

  useEffect(() => {
    const currentWord = words[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (typingText.length < currentWord.length) {
          setTypingText(currentWord.slice(0, typingText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting backward
        if (typingText.length > 0) {
          setTypingText(currentWord.slice(0, typingText.length - 1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typingText, isDeleting, phraseIndex]);

  return (
    <section
      className="relative bg-[#06090f] text-white overflow-hidden
        bg-none
        md:bg-[url('/src/assets/images/desktop_monitor.svg')]
        md:bg-cover
        md:bg-center
        md:bg-no-repeat"
    >
      {/* DARK BLUE LEFT GLOW */}
      <div className="absolute left-0 top-0 h-full w-[55%] bg-gradient-to-r from-[#071a3a] via-[#071a3a]/60 to-transparent pointer-events-none" />

      {/* CONTENT */}
      <div className="relative pt-24 pb-28">
        {/* TEXT - Constrained to max-w-7xl */}
        <div className="max-w-[88rem] mx-auto px-8 lg:px-12">
          <div className="z-10 max-w-2xl">
            <ScrollReveal direction="fade" delay={100}>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-700 text-sm">
                Zero Competition. No Challenge
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <h1 className="text-4xl md:text-[44px] lg:text-[64px] font-semibold leading-[1.05]">
                Capital Without <br />
                Competition. Just <br />
                <span
                  className="text-blue-500"
                  style={{ letterSpacing: "0.05em" }}
                >
                  Pure {typingText}
                  <span
                    className="animate-pulse inline-block ml-1"
                    style={{
                      width: "10px",
                      height: "1em",
                      backgroundColor: "currentColor",
                      verticalAlign: "middle",
                    }}
                  ></span>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p className="mt-6 text-gray-300 max-w-lg">
                Enter with $1000 and trade firm capital under clear performance
                guidelines. Scale up as you prove consistency.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <RippleButton className="mt-8 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2">
                Get Funded →
              </RippleButton>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* FLOOR SHADOW / BASE LINE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
}
