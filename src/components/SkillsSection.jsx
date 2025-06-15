import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "ReactJs", category: "frontend" },
  { name: "NextJs", category: "frontend" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Tailwind", category: "frontend" },
  { name: "shadcn", category: "frontend" },
  { name: "GSAP", category: "animation" },
  { name: "Framer-motion", category: "animation" },
  { name: "NodeJS", category: "backend" },
  { name: "ExpressJS", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Prisma", category: "database" },
  { name: "Postman", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Java", category: "language" },
  { name: "C", category: "language" },
  { name: "C++", category: "language" },
  { name: "SQL", category: "database" }
];

const categoryColors = {
  frontend: "border-blue-600/40 hover:border-blue-500 hover:bg-blue-950/20",
  backend: "border-green-600/40 hover:border-green-500 hover:bg-green-950/20",
  database: "border-purple-600/40 hover:border-purple-500 hover:bg-purple-950/20",
  language: "border-orange-600/40 hover:border-orange-500 hover:bg-orange-950/20",
  animation: "border-pink-600/40 hover:border-pink-500 hover:bg-pink-950/20",
  tools: "border-gray-600/40 hover:border-gray-500 hover:bg-gray-950/20"
};

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 flex justify-center">
      <div className="max-w-4xl w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white text-left"
        >
          Skills & Tools.
        </motion.h2>
        
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-3 py-2 text-white rounded-lg border text-xs sm:text-sm 
                flex items-center whitespace-nowrap cursor-default
                transition-all duration-300 ease-out
                backdrop-blur-sm
                ${categoryColors[skill.category]}
              `}
            >
              <span className="relative">
                {skill.name}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.span>
          ))}
        </div>
        
        {/* Subtle decoration */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "4rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-gray-600 to-transparent mt-8 sm:mt-12"
        />
      </div>
    </section>
  );
};

export default SkillsSection;