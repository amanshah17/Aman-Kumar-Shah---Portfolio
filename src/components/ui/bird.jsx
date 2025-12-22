import React from "react";

export default function Bird({ className = "", size = 24, stroke = 1.5, delay = "0s", duration = "1.8s", animate = false }) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: delay,
    animationDuration: duration,
    animationPlayState: animate ? "running" : "paused",
    opacity: animate ? 1 : 0,
    pointerEvents: "none",
    willChange: "transform, opacity",
  };

  return (
    <svg viewBox="0 0 24 24" className={`bird ${className}`} style={style} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M2 12c4-6 8-6 12 0" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
