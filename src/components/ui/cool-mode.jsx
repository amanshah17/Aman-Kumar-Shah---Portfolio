import React, { useEffect, useRef } from "react";

const CONTAINER_ID = "_coolMode_effect";
let instanceCount = 0;

const getContainer = () => {
  let el = document.getElementById(CONTAINER_ID);
  if (el) return el;

  el = document.createElement("div");
  el.id = CONTAINER_ID;
  Object.assign(el.style, {
    overflow: "hidden",
    position: "fixed",
    inset: "0",
    height: "100%",
    pointerEvents: "none",
    zIndex: 2147483647,
  });
  document.body.appendChild(el);

  return el;
};

const applyParticleEffect = (element, options = {}) => {
  instanceCount++;

  const particleType = options.particle || "circle";
  const sizes = options.sizes || [15, 20, 25, 35, 45];
  const limit = options.limit || 45;

  let particles = [];
  let auto = false;
  let mouseX = 0;
  let mouseY = 0;

  const container = getContainer();

  const createParticle = () => {
    const size = options.size || sizes[Math.floor(Math.random() * sizes.length)];
    const speedHorz = Math.random() * 8 + 2;
    const speedUp = Math.random() * 20 + 10;
    const spinVal = Math.random() * 360;
    const spinSpeed = (Math.random() * 30 + 5) * (Math.random() < 0.5 ? -1 : 1);

    const p = document.createElement("div");
    p.style.position = "absolute";

    if (particleType === "circle") {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

      circle.setAttribute("cx", size / 2);
      circle.setAttribute("cy", size / 2);
      circle.setAttribute("r", size / 2);
      circle.setAttribute("fill", `hsl(${Math.random() * 360}, 70%, 50%)`);

      svg.appendChild(circle);
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      p.appendChild(svg);
    } else {
      p.innerHTML = `<img src="${particleType}" width="${size}" height="${size}" style="border-radius:50%" />`;
    }

    const left = mouseX - size / 2;
    const top = mouseY - size / 2;

    Object.assign(p.style, {
      transform: `translate(${left}px, ${top}px) rotate(${spinVal}deg)`,
    });

    container.appendChild(p);

    particles.push({
      el: p,
      size,
      speedHorz,
      speedUp,
      spinVal,
      spinSpeed,
      left,
      top,
      dir: Math.random() < 0.5 ? 1 : -1,
    });
  };

  const updateParticles = () => {
    particles.forEach((p, index) => {
      p.left -= p.speedHorz * p.dir;
      p.top -= p.speedUp;
      p.speedUp = Math.max(0, p.speedUp - 1);
      p.spinVal += p.spinSpeed;

      if (p.top > window.innerHeight + p.size) {
        p.el.remove();
        particles.splice(index, 1);
        return;
      }

      Object.assign(p.el.style, {
        top: `${p.top}px`,
        left: `${p.left}px`,
        transform: `rotate(${p.spinVal}deg)`,
      });
    });
  };

  let lastTime = 0;
  const delay = 30;
  let raf;

  const loop = (time) => {
    if (auto && particles.length < limit && time - lastTime > delay) {
      createParticle();
      lastTime = time;
    }

    updateParticles();
    raf = requestAnimationFrame(loop);
  };

  raf = requestAnimationFrame(loop);

  const isTouch = "ontouchstart" in window;
  const start = isTouch ? "touchstart" : "mousedown";
  const end = isTouch ? "touchend" : "mouseup";
  const move = isTouch ? "touchmove" : "mousemove";

  const updatePos = (e) => {
    if (e.touches) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    } else {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
  };

  const startHandler = (e) => {
    updatePos(e);
    auto = true;
  };

  const stopHandler = () => (auto = false);

  element.addEventListener(move, updatePos, { passive: true });
  element.addEventListener(start, startHandler, { passive: true });
  element.addEventListener(end, stopHandler, { passive: true });
  element.addEventListener("mouseleave", stopHandler, { passive: true });

  // Cleanup
  return () => {
    element.removeEventListener(move, updatePos);
    element.removeEventListener(start, startHandler);
    element.removeEventListener(end, stopHandler);
    element.removeEventListener("mouseleave", stopHandler);

    cancelAnimationFrame(raf);

    const interval = setInterval(() => {
      if (particles.length === 0) {
        clearInterval(interval);
        instanceCount--;
        if (instanceCount === 0) container.remove();
      }
    }, 200);
  };
};

export const CoolMode = ({ children, options }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return applyParticleEffect(ref.current, options);
  }, [options]);

  return React.cloneElement(children, { ref });
};
