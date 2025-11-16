// pages/Projects/Projects.jsx
import React, { useState } from "react";
import { Star, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Student Management System (JSP, Servlet, JDBC)",
      description:
        "A complete student management web application built using JSP, Servlets, JDBC, and MySQL. Features include CRUD operations, login system, session handling, form validation, and record sorting using Java Collections.",
      src: "../../assets/images/student.png",
      githubLink:
        "https://github.com/amanshah17/Student-Management-Servlet-crud-A",
    },
    {
      title: "Shape Based Game (Java OOP + SOLID)",
      description:
        "An educational Java application demonstrating OOP principles like Inheritance, Polymorphism, Abstraction, Interfaces, and SOLID. Calculates area, perimeter, TSA, LSA, and volume for 2D & 3D shapes.",
      githubLink: "https://github.com/amanshah17/amanshah17-ShapeGameProject",
    },
    {
      title: "Personal Portfolio Website (React + Tailwind CSS)",
      description:
        "A modern portfolio website built using React, Tailwind CSS, and Framer Motion. Includes animations, project showcases, responsive design, and a dynamic UI to highlight skills and achievements.",
      src: "../../assets/images/portfolio.png",
      githubLink: "https://github.com/amanshah17/Aman-Kumar-Shah---Portfolio",
      liveLink: "https://amanshah17.github.io/Aman-Kumar-Shah---Portfolio/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A showcase of my web and software development projects, highlighting
            my skills and experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-4 flex-wrap">
                  {project.githubLink && (
                    <button
                      onClick={() => window.open(project.githubLink, "_blank")}
                      className="flex items-center gap-2 px-4 py-2 font-bold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 hover:scale-105 transition-transform duration-200"
                    >
                      <Award className="w-4 h-4" /> GitHub
                    </button>
                  )}
                  {project.liveLink && (
                    <button
                      onClick={() => window.open(project.liveLink, "_blank")}
                      className="flex items-center gap-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
                    >
                      <Award className="w-4 h-4" /> Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
