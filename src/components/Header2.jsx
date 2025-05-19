import React from "react";
import joker from "../assets/joker.jpg";
import { FaGithub, FaXTwitter, FaLinkedin, FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";
function Header2() {
  return (
    <div className="bg-black text-white flex justify-center p-6">
      {/* Centered and aligned container */}
      <div className="flex items-center rounded-lg w-full max-w-4xl pl-6">
        {/* Profile Image */}
        <img
          src={joker}
          alt="Profile"
          className="w-24 h-24 rounded-lg object-cover"
        />

        {/* Name & Title */}
<div className="ml-6">
  <h1 className="text-3xl font-bold flex items-center gap-4">
    Mayank Doholiya

    {/* Glowing 'Available' tag */}
    <span className="px-2 py-0 text-sm rounded-lg border border-green-500 text-green-300 bg-transparent flex items-center gap-1">
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
    </span>
  </h1>

  <p className="text-gray-400">Why so serious? Let the code break.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://github.com/mayank543"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
              target="_blank" rel="noopener noreferrer"
            >
              <FaGithub className="text-white w-5 h-5" />
            </a>
            <a
              href="https://x.com/d_mayank05"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
              target="_blank" rel="noopener noreferrer"
            >
              <FaXTwitter className="text-white w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-doholiya/"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/may_nk_d_0504/"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaCode className="text-white w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;