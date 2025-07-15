import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import p1 from '../../assets/invento.png';
import p2 from '../../assets/myportfolio.png';
import p3 from '../../assets/cleaning.png';
import p4 from '../../assets/tresorsite.png';

const projects = [ /* same 4 project objects */
  
  {
    title: "Inventory Management System",
    image: p1,
    description: "Full functional system using PHP, Bootstrap, AJAX, MySQL.",
    tags: ["PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/irakoze-pa/Irak_Portfolio/",
  },
  {
    title: "My Portfolio",
    image: p2,
    description: "Responsive website with mailJs.",
    tags: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/irakoze-pa/Irak_Portfolio/",
  },
  {
    title: "Cleaning Company Management System",
    image: p3,
    description: "Full functional system using PHP, Bootstrap, MySQL.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/irakoze-pa/Irak_Portfolio/",
  },
  {
    title: "Cleaning Company Website",
    image: p4,
    description: "Responsive website with mailJs.",
    tags: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/irakoze-pa/Irak_Portfolio/",
  },

 ];

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth; // scroll by container width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto relative">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-[#102E50]">Projects</h2>
          <p className="text-gray-600 mt-2 text-base">A selection of applications and websites I’ve built.</p>
        </motion.div>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          aria-label="Scroll left"
        >◀</button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          aria-label="Scroll right"
        >▶</button>

        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide flex snap-x snap-mandatory gap-6 py-4 px-2">
          {projects.map((proj, idx) => (
            <motion.div key={idx}
              className="snap-center flex-none w-2/3 sm:w-1/2 md:basis-1/3 bg-white rounded-xl shadow-md border hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2, duration: 0.6 }} viewport={{ once: true }}>
              <img src={proj.image} alt={proj.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#102E50] mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag,i)=>(
                    <span key={i} className="bg-[#102E50] text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <a href={proj.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#102E50] border border-[#102E50] hover:bg-[#102E50] hover:text-white px-3 py-1 rounded transition">
                  <Github size={16}/> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
