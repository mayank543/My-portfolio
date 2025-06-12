import React, { useState } from "react";
import bidImage from "../assets/bid.png";
import cinematchImage from "../assets/cinematch.png";
import lexiscanImage from "../assets/lexiscan.png";
import hangouthubImage from "../assets/hangouthub.png";
import { FaEye, FaLink, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


function Projects() {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => setShowAll(!showAll);

  return (
    <div className="bg-black text-white px-6 py-10 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Projects.</h2>
        
        {/* Project 1 */}
        <div className="bg-[#181818] p-6 rounded-xl flex items-center gap-5 shadow-lg mb-6">
          <img src={hangouthubImage} alt="The Daily Crimes" className="w-32 h-24 rounded-lg object-cover" />
          <div className="flex-1">
            <h3 className="text-xl font-bold flex items-center">
  Hangout-Hub
  <span className="ml-3 px-3 py-1 text-sm rounded-lg bg-green-900 text-green-300 flex items-center gap-1">
    <motion.span
      animate={{
        color: ["#14532d", "#22c55e", "#14532d"], // darker green to bright to darker
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
      className="text-xs" // 👈 makes the dot smaller
    >
      ●
    </motion.span>
    <span className="font-normal text-sm">Running</span>
  </span>
</h3>
            <p className="text-gray-400 text-sm mt-2">
              HangoutHub is a real-time productivity hub with live chat, focus timer, and a GitHub-style contribution calendar. Built using React, Zustand, Socket.IO, and Tailwind CSS, it enables seamless collaboration with WebSocket-based presence detection and category-based filtering.
            </p>
          </div>
          <div className="flex space-x-3 text-gray-400">
            
            <a href="https://hangout-hub-dusky.vercel.app/" target="_blank" rel="noopener noreferrer"><FaLink className="hover:text-white cursor-pointer" /></a>
            <a href="https://github.com/mayank543/Hangout-Hub" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white cursor-pointer" /></a>
          </div>
        </div>


        {/* Project 2 */}
        <div className="bg-[#181818] p-6 rounded-xl flex items-center gap-5 shadow-lg mb-6">
          <img src={cinematchImage} alt="The Daily Crimes" className="w-32 h-24 rounded-lg object-cover" />
          <div className="flex-1">
            <h3 className="text-xl font-bold flex items-center">
  CineMatch
  <span className="ml-3 px-3 py-1 text-sm rounded-lg bg-green-900 text-green-300 flex items-center gap-1">
    <motion.span
      animate={{
        color: ["#14532d", "#22c55e", "#14532d"], // darker green to bright to darker
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
      className="text-xs" // 👈 makes the dot smaller
    >
      ●
    </motion.span>
    <span className="font-normal text-sm">Running</span>
  </span>
</h3>
            <p className="text-gray-400 text-sm mt-2">
              CineMatch is a simple yet effective tool that helps you to instantly find movies that matches one's interest. Just enter two or more of your favorite movies and CineMatch uses TMDB’s vast movie database to find perfect matches.
            </p>
          </div>
          <div className="flex space-x-3 text-gray-400">
            
            <a href="https://cine-match-fjmq.vercel.app/" target="_blank" rel="noopener noreferrer"><FaLink className="hover:text-white cursor-pointer" /></a>
            <a href="https://github.com/mayank543/CineMatch" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white cursor-pointer" /></a>
          </div>
        </div>

        

        {/* Show More Toggle Button */}
        {!showAll && (
          <div className="flex justify-center mb-6">
            <button
              onClick={handleToggle}
              className="text-sm px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-300 transition"
            >
              Show All Projects
            </button>
          </div>
        )}

        {/* Hidden Projects */}
        {showAll && (
          
          <>
            
            {/* Project 3 */}
        <div className="bg-[#181818] p-6 rounded-xl flex items-center gap-5 shadow-lg mb-6">
          <img src={lexiscanImage} alt="LexiScan" className="w-32 h-24 rounded-lg object-cover" />
          <div className="flex-1">
            <h3 className="text-xl font-bold flex items-center">
  LexiScan
  <span className="ml-3 px-3 py-1 text-sm rounded-lg bg-red-900 text-red-300 flex items-center gap-1">
    <motion.span
      animate={{
        color: ["#7f1d1d", "#f87171", "#7f1d1d"], // darker red to bright to darker
    textShadow: [
      "0 0 1px #7f1d1d",
      "0 0 4px #f87171",
      "0 0 1px #7f1d1d"
    ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="text-xs" //  makes the dot smaller
    >
      ●
    </motion.span>
    <span className="font-normal text-sm">Building</span>
  </span>
</h3>
            <p className="text-gray-400 text-sm mt-2">
              Building LexiScan — an AI-powered legal analyzer using NLP, named entity recognition, and RAG to extract clauses, summarize documents, and surface insights.
            </p>
          </div>
          <div className="flex space-x-3 text-gray-400">
            
            <a href="https://github.com/mayank543/LexiScan" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white cursor-pointer" /></a>
          </div>
        </div>
            {/* Project 4 */}
            <div className="bg-[#181818] p-6 rounded-xl flex items-center gap-5 shadow-lg mb-6">
              <img src={bidImage} alt="Bidding Wars" className="w-32 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="text-xl font-bold flex items-center">
  Bidding Wars
  <span className="ml-3 px-3 py-1 text-sm rounded-lg bg-red-900 text-red-300 flex items-center gap-1">
    <motion.span
      animate={{
        color: ["#7f1d1d", "#f87171", "#7f1d1d"], // darker red to bright to darker
    textShadow: [
      "0 0 1px #7f1d1d",
      "0 0 4px #f87171",
      "0 0 1px #7f1d1d"
    ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="text-xs" //  makes the dot smaller
    >
      ●
    </motion.span>
    <span className="font-normal text-sm">Building</span>
  </span>
</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Building an interactive frontend of a real-time bidding game where users compete on quirky virtual items. Features include profit tracking, a dynamic leaderboard, and a gamified UI inspired by Among Us. (Group project)
                </p>
              </div>
              <div className="flex space-x-3 text-gray-400">
                
              <a href="https://github.com/Parthyadav05/bidding-War" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white cursor-pointer" /></a>
              </div>
            </div>

            {/* Collapse Button */}
            <div className="flex justify-center">
              <button
                onClick={handleToggle}
                className="text-sm px-4 py-2 rounded-full bg-white text-black hover:bg-gray-300 transition"
              >
                Show Less
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;