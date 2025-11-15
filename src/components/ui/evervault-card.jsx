"use client";

import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "../../lib/utils";

export const EvervaultCard = ({ text, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  // Generate initial string
  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  // Smooth throttled random text update
  const updateText = useCallback(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  let lastUpdate = 0;

  function onMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    const now = Date.now();
    if (now - lastUpdate > 120) {
      updateText();
      lastUpdate = now;
    }
  }

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card w-full h-full rounded-3xl relative overflow-hidden flex items-center justify-center"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />

        {/* Center Text */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 flex items-center justify-center rounded-full text-white font-bold text-4xl backdrop-blur-md">
            <div className="absolute w-full h-full bg-white/80 dark:bg-black/80 blur-xl rounded-full" />
            <span className="relative z-10 dark:text-white text-black">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardPattern = ({ mouseX, mouseY, randomString }) => {
  const maskImage = useMotionTemplate`
    radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)
  `;

  const style = {
    maskImage,
    WebkitMaskImage: maskImage,
  };

  return (
    <div className="pointer-events-none">
      {/* Base fade */}
      <div className="absolute inset-0 rounded-2xl mask-[linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>

      {/* Color gradient reveal */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-linear-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />

      {/* Text layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 mix-blend-overlay"
        style={style}
      >
        <p className="absolute inset-0 text-[10px] leading-3 p-3 font-mono text-white wrap-break-word whitespace-pre-wrap">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
};

// Utils
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomString = (length) => {
  let result = new Array(length);

  for (let i = 0; i < length; i++) {
    result[i] = characters[Math.floor(Math.random() * characters.length)];
  }
  return result.join("");
};

export const Icon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
