import React from "react";
import joker from "../assets/joker.jpg";
import { FaGithub, FaXTwitter, FaLinkedin, FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";

function Header2() {
  return (
    <div className="bg-black text-white flex justify-center p-6">
      {/* Centered and aligned container with initial animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center rounded-lg w-full max-w-4xl pl-6"
      >
        {/* Profile Image with animation */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          src={joker}
          alt="Profile"
          className="w-24 h-24 rounded-lg object-cover shadow-lg ring-2 ring-gray-800/50"
        />

        {/* Name & Title */}
        <div className="ml-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold flex items-center gap-4"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Mayank Doholiya
            </span>

            {/* Enhanced Available tag with animation */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="px-3 py-1 text-sm rounded-full border border-green-500/30 text-green-300 bg-green-950/20 flex items-center gap-2 backdrop-blur-sm"
            >
              <motion.span
                animate={{
                  color: ["#14532d", "#22c55e", "#14532d"],
                  textShadow: [
                    "0 0 1px #14532d",
                    "0 0 4px #22c55e",
                    "0 0 1px #14532d"
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="text-xs"
              >
                ●
              </motion.span>
              <span className="font-normal text-sm">Available</span>
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mt-1"
          >
            Why so serious? Let the code break.
          </motion.p>

          {/* Enhanced Social Icons with animations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex space-x-3 mt-4"
          >
            {[
              { icon: FaGithub, href: "https://github.com/mayank543", label: "GitHub" },
              { icon: FaXTwitter, href: "https://x.com/d_mayank05", label: "Twitter" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/mayank-doholiya/", label: "LinkedIn" },
              { icon: FaCode, href: "https://leetcode.com/u/may_nk_d_0504/", label: "LeetCode" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <social.icon className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Header2;