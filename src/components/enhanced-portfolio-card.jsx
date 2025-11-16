// Enhanced Portfolio Card customized for Aman Kumar Shah

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, Briefcase, Code } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            opacity: Math.random(),
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
          }}
        />
      ))}
    </div>
  );
};

export default function AmanPortfolioCard() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(to right bottom, #1a1a2e, #16213e, #1b2a4e, #24335e, #2f3c6e)",
        "linear-gradient(to right bottom, #2f3c6e, #24335e, #1b2a4e, #16213e, #1a1a2e)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="min-h-screen bg-linear-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-4 md:p-8 flex items-center justify-center overflow-hidden relative"
      animate={controls}
    >
      <Particles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl grid md:grid-cols-[1fr,1.5fr] gap-8 relative z-10"
      >
        {/* Profile Section */}
        <Card className="p-8 flex flex-col items-center text-center shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/50 border border-[#2DD4BF]/20 overflow-hidden relative">
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-[#2DD4BF]/30 to-[#38BDF8]/30"
            animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Profile Image */}
          <motion.div
            className="relative z-10 w-64 h-64 mb-6 group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-[#2DD4BF] to-[#38BDF8] rounded-full shadow-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <img
              src="../../assets/images/hero.jpg" 
              alt="Aman Kumar Shah"
              className="rounded-full relative z-10 w-full h-full object-cover border-4 border-gray-700 group-hover:border-purple-500 transition-colors duration-300"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-linear-to-r from-[#2DD4BF] to-[#38BDF8]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Aman Kumar Shah
          </motion.h1>

          {/* Email */}
          <motion.a
            href="mailto:shahamankumar054@gmail.com"
            className="text-lg text-blue-400 hover:text-blue-300 transition-colors"
          >
            shahamankumar054@gmail.com
          </motion.a>

          {/* Download CV */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Button className="mt-6 bg-linear-to-r from-[#2DD4BF] to-[#38BDF8] hover:opacity-90 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            onClick={()=>{window.open("../../assets/images/aman_resume.pdf")}}  >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>
        </Card>

        {/* Right Section */}
        <div className="space-y-8">
          {/* About Me */}
          <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/50 border border-[#2DD4BF]/20">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#2DD4BF] to-[#38BDF8]">
                  About Me
                </h2>

                <Badge className="flex items-center bg-green-900/20 text-green-400 px-4 py-1">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Open to Work
                </Badge>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Software Developer skilled in Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and Tailwind CSS.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Experienced in academic and personal full-stack projects, including an Instagram Clone, Java applications, and backend-heavy APIs.
              </p>
            </div>
          </Card>

         
          {/* Tech Stack */}
          <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/50 border border-[#2DD4BF]/20">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-[#2DD4BF] to-[#38BDF8]">
              Tech Stack
            </h2>

            <div className="flex justify-between">
              {[
                { name: "Java", icon: <Code className="w-8 h-8" /> },
                { name: "Spring Boot", icon: <Code className="w-8 h-8" /> },
                { name: "MySQL", icon: <Code className="w-8 h-8" /> },
                { name: "JavaScript", icon: <Code className="w-8 h-8" /> },
              ].map((skill, i) => (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger>
                      <motion.div className="text-center" whileHover={{ y: -8 }}>
                        <motion.div
                          className="w-16 h-16 bg-linear-to-br from-[#2DD4BF] to-[#38BDF8] rounded-2xl flex items-center justify-center mb-2 shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-sm text-gray-300">{skill.name}</span>
                      </motion.div>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Skilled in {skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
