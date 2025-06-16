import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import p1 from '../../assets/project1.png';
import p2 from '../../assets/project2.png';
import p3 from '../../assets/project3.png';

const projects = [
  {
    title: "Food delivery App",
    image: p3, // Direct path
    description: "Responsive application using React vite, Tailwindcss, framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
  
    github: "https://github.com/irakoze-pa/Irak_Portfolio/",
  },
  {
    title: "Clinic Managment System",
    image: p2, // Direct path
    description: "Full-stack clinic system management with PHP, MySQL, and Bootstrap.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/irakoze-pa/Irak_Portfolio/",
   
  },
   {
    title: "Hotel Booking App",
    image: p1, // Direct path
    description: "Full-stack hotel booking platform built with PHP, MySQL, and Bootstrap.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/irakoze-pa/Irak_Portfolio/",
   
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#102E50]">Projects</h2>
          <p className="text-gray-600 mt-2 text-base">A selection of applications and websites I’ve built.</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#102E50] mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#102E50] text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#102E50] border border-[#102E50] hover:bg-[#102E50] hover:text-white px-3 py-1 rounded transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
