import React from "react";

const skills = [
  "ReactJs", "NextJs", "JavaScript", "TypeScript", "Tailwind",
    "shadcn",  "GSAP", "Framer-motion",
  "NodeJS", "ExpressJS", "PostgreSQL", "MongoDB", 
  "Prisma", "Postman", "Git", "GitHub", 
  "Java", "C", "C++", "SQL"
  
];

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-1 px-6 flex justify-center">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white text-left">
          Skills & Tools.
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-2 text-white rounded-md border border-gray-600 text-sm flex items-center whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;