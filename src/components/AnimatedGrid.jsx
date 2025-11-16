import React from "react";

const GRID_SIZE = 40;

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20">

        {/* Vertical Lines */}
        <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)]">
          {Array.from({ length: GRID_SIZE }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="border-r border-blue-500/10 animate-gridPulse"
              style={{
                animationDelay: `${(i % 10) * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Horizontal Lines */}
        <div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)]">
          {Array.from({ length: GRID_SIZE }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="border-b border-blue-500/10 animate-gridPulse"
              style={{
                animationDelay: `${(i % 10) * 0.2}s`,
              }}
            />
          ))}
        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .animate-gridPulse {
          animation: gridPulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
