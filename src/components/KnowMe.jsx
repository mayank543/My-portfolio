import React from 'react';
import { motion } from "framer-motion";

function KnowMe() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="max-w-4xl mx-auto px-6 py-12 text-white"
    >
      {/* About Me Title */}
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Know Me.
      </motion.h2>

      {/* About Me Content - Each paragraph with staggered animation */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-gray-300 leading-relaxed"
      >
        Hey, I'm <span className="font-semibold text-white">Mayank Doholiya</span>, an undergraduate Computer Science student and a passionate full-stack developer who loves building and shipping things that people actually use.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-gray-300 leading-relaxed mt-2"
      >
        I mainly work with <span className="text-blue-400">React.js</span>, <span className="text-blue-400">Next.js</span>, and <span className="text-blue-400">Node.js</span> for both frontend and backend, using <span className="text-yellow-400">TypeScript</span> alongside them. I have created many cool projects using these technologies.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="text-gray-300 leading-relaxed mt-2"
      >
        Beyond coding, I enjoy exploring <span className="text-blue-400">astronomy</span> and the science behind emerging technologies. I have a keen interest in <span className="text-green-400">design and UI/UX</span>, ensuring that my projects are not just functional but also intuitive and visually appealing.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="text-gray-300 leading-relaxed mt-2"
      >
        I also stay up to date with <span className="text-white">modern web development trends</span>, constantly experimenting with new tools like <span className="text-blue-400">shadcn/ui</span>, <span className="text-blue-400">Tailwind CSS</span>, and <span className="text-yellow-400">Prisma</span> to refine my skills.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="text-gray-300 leading-relaxed mt-2"
      >
        When I'm not building applications, I enjoy reading <span className="text-gray-100">thought-provoking books</span>, exploring <span className="text-gray-100">entrepreneurial concepts</span>, and analyzing <span className="text-gray-100">efficient system designs</span>. I believe that great software is built at the intersection of <span className="font-semibold text-white">logic, creativity, and usability</span>.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="text-gray-300 leading-relaxed mt-2"
      >
        If you have an idea and would like to collaborate, feel free to <span className="font-semibold text-white">DM me!</span> I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side—just click on the navbar image!
      </motion.p>
    </motion.section>
  );
}

export default KnowMe;