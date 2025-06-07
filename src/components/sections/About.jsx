import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about.jpg";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React",
  "Node.js", "PHP", "MySQL", "Tailwind CSS"
];

export default function About() {
  return (
    <section id="about" className="py-12 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#102E50] mb-10 pt-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImage}
              alt="About"
              className="rounded-xl shadow-md w-[80%] max-w-[300px] md:w-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-4 text-sm sm:text-base text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a passionate <strong>Full-Stack Web Developer</strong> experienced in building dynamic, scalable web applications using{" "}
              <span className="text-[#102E50] font-medium">React, Node.js, PHP, MySQL, and Tailwind CSS</span>.
            </p>
            <p>
              I enjoy solving complex problems and creating clean, efficient user experiences from frontend to backend.
            </p>
            <p>
              I value clean code, constant learning, and meaningful collaboration.
            </p>
            <a
              href="/CV.pdf"
              download
              className="bg-[#102E50] text-white px-5 py-2 rounded-md hover:bg-blue-900 transition inline-block"
            >
              Download CV
            </a>
          </motion.div>

          {/* Skills & Education */}
          <motion.div
            className="space-y-6 text-sm sm:text-base"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-[#102E50] mb-3">Tech Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white text-[#102E50] px-3 py-1.5 text-sm font-medium rounded shadow hover:bg-[#102E50] hover:text-white transition text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-[#102E50] mb-3">Education</h3>
              <div className="space-y-3">
                <div className="bg-white border-l-4 border-[#102E50] p-3 rounded shadow">
                  <h4 className="font-semibold text-[#102E50]">
                    Bachelor's Degree in Computer Science
                  </h4>
                  <p className="text-gray-600 text-sm">Light University of bujumbura  – 2015–2018</p>
                </div>
                <div className="bg-white border-l-4 border-[#102E50] p-3 rounded shadow">
                  <h4 className="font-semibold text-[#102E50]">High School Diploma</h4>
                  <p className="text-gray-600 text-sm">Lycee Thomas of Aquino at Rutovu – 2007–2014</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
