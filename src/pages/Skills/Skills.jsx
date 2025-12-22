import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

import Bird from "../../components/ui/bird";
import Orb from "../../components/ui/orb";

// Icons
import { Code2, Database, Cpu, Layout, Wrench } from "lucide-react";
import { FaJava, FaReact, FaGithub, FaGitAlt, FaDatabase } from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiJquery,
  SiTailwindcss,
  SiPostman,
  SiSpring,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsCodeSquare } from "react-icons/bs";
import { PiFileSql } from "react-icons/pi";
import { DiMysql } from "react-icons/di";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <SkillCardInner icon={Icon} title={title} skills={skills} color={color} />
);

// Inner component for stateful hover handling
function SkillCardInner({ icon: Icon, title, skills, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
    >
      {/* background overlay removed */}

      {/* Birds are mounted only while hovered */}
      {hovered && (
        <div className="absolute bottom-3 right-4 pointer-events-none z-0">
          <div className="birds w-40 h-20 relative">
            <Bird className="bird1" delay="0s" duration="1.8s" stroke={1.8} size={24} animate />
            <Bird className="bird2" delay="0.12s" duration="1.9s" stroke={1.4} size={22} animate />
            <Bird className="bird3" delay="0.24s" duration="2.2s" stroke={1.2} size={20} animate />
          </div>
        </div>
      )}

      <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${color}`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <Badge
            key={i}
            variant="outline"
            className="bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 py-2 px-3 flex items-center gap-2 hover:scale-105 transition-all"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    // FRONTEND
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-yellow-400" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-orange-500" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },

    // BACKEND
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Java", icon: <FaJava className="w-4 h-4 text-red-500" /> },
        { name: "Spring", icon: <SiSpring className="w-4 h-4 text-green-500" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4 text-green-500" /> },
        { name: "Spring MVC", icon: <SiSpring className="w-4 h-4 text-green-400" /> },
        { name: "Hibernate / JPA", icon: <PiFileSql className="w-4 h-4 text-blue-300" /> },
        { name: "REST API Development", icon: <BsFileEarmarkCode className="w-4 h-4 text-gray-300" /> },
        { name: "MySQL", icon: <FaDatabase className="w-4 h-4 text-blue-500" /> },
        { name: "JDBC", icon: <PiFileSql className="w-4 h-4 text-yellow-300" /> },
        { name: "Servlet & JSP", icon: <BsFileEarmarkCode className="w-4 h-4 text-white" /> },
      ],
    },

    // DATABASE
    {
      icon: Database,
      title: "Database & Storage",
      color: "text-teal-400",
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#00758F]" /> },
        { name: "MySQL Workbench", icon: <DiMysql className="w-4 h-4 text-[#00618A]" /> },
      ],
    },

    // TOOLS
    {
      icon: Cpu,
      title: "Tools & Platforms",
      color: "text-purple-400",
      skills: [
        { name: "Spring Initializr", icon: <SiSpring className="w-4 h-4 text-green-500" /> },
        { name: "STS (Spring Tool Suite)", icon: <Cpu className="w-4 h-4 text-green-300" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4 text-orange-500" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },

        // FIXED: Replaced invalid TbBrandEclipse with BsCodeSquare
        { name: "Eclipse IDE", icon: <BsCodeSquare className="w-4 h-4 text-purple-400" /> },

        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "MySQL Workbench", icon: <FaDatabase className="w-4 h-4 text-blue-300" /> },
      ],
    },

    // CORE CONCEPTS
    {
      icon: Wrench,
      title: "Core Concepts",
      color: "text-yellow-400",
      skills: [
        { name: "OOP", icon: <Cpu className="w-4 h-4 text-blue-300" /> },
        { name: "DSA", icon: <Cpu className="w-4 h-4 text-green-300" /> },
        { name: "Problem Solving", icon: <Cpu className="w-4 h-4 text-pink-300" /> },
        { name: "Debugging", icon: <Cpu className="w-4 h-4 text-orange-300" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen relative">


      {/* Orb: small glowing orb that sits at the top of the skills cards */}
      <Orb hue={260} hoverIntensity={0.25} rotateOnHover={true} backgroundColor="#04081A" />

      <section className="container mx-auto px-4 py-11 relative z-10" style={{ paddingTop: '50vh' }}>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <SkillCard
              key={i}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        /* Birds flying on card hover (kept) */
        .birds { overflow: visible; }
        .bird { position: absolute; width: 1.5rem; height: 1.5rem; color: #ffffff; filter: drop-shadow(0 6px 10px rgba(0,0,0,0.45)); transform-origin: center; animation: flyUpRight 1.8s cubic-bezier(.22,.9,.3,1) infinite; animation-play-state: paused; opacity: 0; }
        .bird1 { left: 6px; bottom: 0; animation-delay: 0s; }
        .bird2 { left: 12px; bottom: 6px; animation-delay: 0.12s; animation-duration: 1.9s; }
        .bird3 { left: 26px; bottom: 3px; animation-delay: 0.24s; animation-duration: 2.2s; }

        @keyframes flyUpRight {
          0% { transform: translateX(0) translateY(40px) rotate(0); opacity: 0; }
          10% { opacity: 1; transform: translateX(8px) translateY(20px) rotate(-6deg); }
          60% { opacity: 1; }
          100% { transform: translateX(120px) translateY(-120px) rotate(-25deg); opacity: 0; }
        }
      `}</style>
    </main>
  );
}
