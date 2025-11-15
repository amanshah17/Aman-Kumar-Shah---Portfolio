import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import IconCloudDemo from "../../components/ui/icon-cloud";

import { Code2, Database, Cpu, Layout, Wrench } from "lucide-react";
import { FaJava, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJavascript, SiJquery, SiTailwindcss } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode } from "react-icons/bs";
import { PiFileSql } from "react-icons/pi";
import { DiMysql } from "react-icons/di";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
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
        { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4 text-green-500" /> },
        { name: "Hibernate / JPA", icon: <PiFileSql className="w-4 h-4 text-blue-300" /> },
        { name: "JDBC", icon: <PiFileSql className="w-4 h-4 text-yellow-300" /> },
        { name: "Servlet & JSP", icon: <BsFileEarmarkCode className="w-4 h-4 text-white" /> },
        { name: "REST API Development", icon: <BsFileEarmarkCode className="w-4 h-4 text-gray-300" /> },
      ],
    },

    // DATABASES
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
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Eclipse IDE", icon: <Cpu className="w-4 h-4 text-yellow-300" /> },
      ],
    },

    // OTHER SKILLS
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
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center mb-12">
          <IconCloudDemo />
        </div>

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
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
}
