import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Individual item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Text highlight animation variants
  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-6 pt-12 text-white"
    >
      {/* About Me Title */}
      <motion.h2 
        variants={itemVariants}
        className="text-2xl font-bold mb-4"
      >
        About Me.
      </motion.h2>

      {/* About Me Content */}
      <motion.p 
        variants={itemVariants}
        className="text-gray-300 leading-relaxed"
      >
        Hey, I'm{' '}
        <motion.span 
          variants={highlightVariants}
          className="font-semibold text-white"
        >
          Mayank Doholiya
        </motion.span>
        , an undergraduate Computer Science student and full-stack developer who loves building and shipping things that people actually use.
      </motion.p>

      <motion.p 
        variants={itemVariants}
        className="text-gray-300 leading-relaxed mt-2"
      >
        I mainly work with{' '}
        <motion.span 
          variants={highlightVariants}
          whileHover={{ scale: 1.05 }}
          className="text-blue-400 cursor-default"
        >
          React.js
        </motion.span>
        ,{' '}
        <motion.span 
          variants={highlightVariants}
          whileHover={{ scale: 1.05 }}
          className="text-blue-400 cursor-default"
        >
          Next.js
        </motion.span>
        , and{' '}
        <motion.span 
          variants={highlightVariants}
          whileHover={{ scale: 1.05 }}
          className="text-blue-400 cursor-default"
        >
          Node.js
        </motion.span>
        {' '}for both frontend and backend, using{' '}
        <motion.span 
          variants={highlightVariants}
          whileHover={{ scale: 1.05 }}
          className="text-yellow-400 cursor-default"
        >
          TypeScript
        </motion.span>
        {' '}alongside them. I have created many cool projects using these technologies.
      </motion.p>

      <motion.p 
        variants={itemVariants}
        className="text-gray-300 leading-relaxed mt-2"
      >
        If you have an idea and would like to collaborate, feel free to DM me! I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side, just click on the navbar image!
      </motion.p>

      {/* Show More Button */}
      <motion.a
        variants={itemVariants}
        href="#"
        className="text-blue-400 font-medium mt-4 inline-block hover:underline transition-colors duration-200"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Show less ↑" : "Show more about me →"}
      </motion.a>

      {/* Conditionally Rendered Extra Text with Animation */}
      <AnimatePresence>
        {showMore && (
          <motion.p 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              height: "auto", 
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0, 
              y: -20,
              transition: {
                duration: 0.3,
                ease: "easeIn"
              }
            }}
            className="text-gray-300 leading-relaxed mt-4 overflow-hidden"
          >
            Outside of code, I'm constantly exploring new ideas in design, gaming mechanics, and digital storytelling. Whether it's analyzing cinematic shots or losing track of time on a puzzle, I love things that make you think differently. I also enjoy writing and reflecting on my tech journey—maybe one day I'll publish a blog or two!
          </motion.p>
        )}
      </AnimatePresence>

      {/* Hire Me Section */}
      <motion.div 
        variants={itemVariants}
        className="mt-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold mb-4"
        >
          Hire Me.
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 leading-relaxed"
        >
          I'm currently available for{' '}
          <motion.span 
            variants={highlightVariants}
            whileHover={{ scale: 1.05 }}
            className="text-green-400 cursor-default"
          >
            internships
          </motion.span>
          ,{' '}
          <motion.span 
            variants={highlightVariants}
            whileHover={{ scale: 1.05 }}
            className="text-green-400 cursor-default"
          >
            full-time opportunities
          </motion.span>
          , and{' '}
          <motion.span 
            variants={highlightVariants}
            whileHover={{ scale: 1.05 }}
            className="text-green-400 cursor-default"
          >
            freelance projects
          </motion.span>
          . If you're looking for someone passionate, skilled, and ready to contribute, I'm here to help bring your ideas to life!
        </motion.p>

        {/* Hire Me Button */}
        <motion.a
          href="mailto:mayankdoholiya.official@gmail.com"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#374151",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 mb-20 inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <motion.span 
            className="mr-2"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          >
            💼
          </motion.span>
          Hire Me
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default AboutMe;