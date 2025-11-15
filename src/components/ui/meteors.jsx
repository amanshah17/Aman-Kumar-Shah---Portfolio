"use client";

import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const Meteors = ({
  number = 20,
  color = "rgba(148, 163, 184, 1)", // slate-400
  minSpeed = 2,
  maxSpeed = 10,
  tailLength = 80,
  blur = true,
}) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const arr = new Array(number).fill(null).map(() => {
      const left = Math.random() * 100; // percentage
      const delay = Math.random() * 1 + 0.2;
      const duration = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      const angle = 200 + Math.random() * 40; // 200–240 deg diagonal sweep

      return {
        top: -10,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        rotate: angle,
      };
    });

    setMeteors(arr);
  }, [number, minSpeed, maxSpeed]);

  return (
    <>
      {meteors.map((m, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute block size-0.5 rounded-full animate-meteor",
            blur && "shadow-[0_0_4px_2px_rgba(255,255,255,0.2)]"
          )}
          style={{
            top: m.top,
            left: m.left,
            animationDelay: m.animationDelay,
            animationDuration: m.animationDuration,
            transform: `rotate(${m.rotate}deg)`,
            backgroundColor: color,
          }}
        >
          <div
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 -z-10"
            style={{
              width: `${tailLength}px`,
              height: "2px",
              background: `linear-gradient(to right, ${color}, transparent)`,
              filter: blur ? "blur(1px)" : "none",
            }}
          ></div>
        </span>
      ))}
    </>
  );
};

export default Meteors;
