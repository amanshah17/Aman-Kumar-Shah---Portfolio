import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import PortfolioPage from "../About/About";
import Meteors from "../../components/ui/meteors";
import SparklesText from "../../components/ui/sparkles-text";
import { FlipWords } from "../../components/ui/flip-words";

// Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect
            width="40"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-40 animate-gridPulse"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

export default function Hero() {
  // FlipWords (updated for your real skills)
  const words = [
    "Java Backend Developer",
    "Spring Boot | MySQL | REST APIs",
    "React.js & Tailwind CSS",
    "Problem Solver | Quick Learner",
  ];

  // Personal code block
  const [code] = useState(`
const profile = {
    name: 'Aman Kumar Shah',
    title: 'Software Developer',
    skills: [
        'Java', 'Spring Boot', 'Hibernate', 'JPA',
        'MySQL', 'REST APIs', 'React.js',
        'JavaScript', 'HTML', 'CSS', 'Tailwind CSS',
        'Git', 'GitHub'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.includes('Spring Boot') &&
            this.skills.includes('React.js')
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
            {/* LEFT SECTION */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Name */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText text="Hello" />
                  <span className="relative inline-block">
                    I'm <span className="gradient-text">Aman Kumar Shah</span>
                  </span>
                </h1>
              </div>

              {/* Role */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-linear-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
                <span>
                  <FlipWords
                    className={"text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed max-w-xl mb-12">
                Java Developer 🚀 | Spring Boot + React 💻 | Passionate about
                crafting clean, scalable and efficient applications.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="https://github.com/amanshah17"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl hover:scale-105"
                >
                  <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <span>See Projects</span>
                    </span>
                  </span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1nwEd3GRJKFwFfAhx00GYDHVNGydQHhGD/view?usp=drive_link"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-linear-to-r from-gray-800 to-gray-700 hover:scale-105"
                >
                  <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 border border-gray-700/50">
                    <span className="flex items-center gap-2 text-gray-300 font-medium">
                      <span>Get Resume</span>
                    </span>
                  </span>
                </a>
                <a
                  href="https://leetcode.com/u/_king_aman1712/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-linear-to-r from-yellow-500 to-orange-400 hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 group-hover:bg-linear-to-r group-hover:from-yellow-500 group-hover:to-orange-400">
                    <span className="flex items-center gap-2 text-white font-semibold text-lg">
                      {/* Optional LeetCode icon */}
                      <span>See LeetCode</span>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT SECTION - Code Window */}
            <div className="w-full lg:w-1/2">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">About me</span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>

        <PortfolioPage />
      </main>
    </>
  );
}
