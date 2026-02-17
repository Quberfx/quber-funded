import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">

            {/* SOFT DARK GRADIENT HALO */}
            <div
                className="absolute w-[420px] h-[420px] rounded-full blur-3xl opacity-60 transition-transform duration-150 ease-out"
                style={{
                    transform: `translate(${pos.x - 210}px, ${pos.y - 210}px)`,
                    background: `
            radial-gradient(
              circle,
              rgba(37,99,235,0.45) 0%,
              rgba(37,99,235,0.28) 25%,
              rgba(37,99,235,0.18) 45%,
              rgba(37,99,235,0.08) 60%,
              transparent 75%
            )
          `,
                    mixBlendMode: "multiply",   // KEY for light backgrounds
                }}
            />

            {/* INNER DOT */}
            <div
                className="absolute w-3 h-3 bg-blue-700 rounded-full shadow-lg"
                style={{
                    transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
                }}
            />
        </div>
    );
}
