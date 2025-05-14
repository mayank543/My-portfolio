import React, { useState } from "react";
import projectImage from "../assets/project.jpg";
import { FaEye, FaLink, FaGithub } from "react-icons/fa";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => setShowAll(!showAll);

  return (
    <div className="bg-black text-white px-6 py-10 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Projects.</h2>

        {/* Project 1 */}
        <div className="bg-[#181818] p-6 rounded-xl flex items-center gap-5 shadow-lg mb-6">
          <img src={projectImage} alt="The Daily Crimes" className="w-32 h-24 rounded-lg object-cover" />
          <div className="flex-1">
            <h3 className="text-xl font-bold flex items-center">
              CineMatch
              <span className="ml-3 px-3 py-1 text-sm rounded-lg bg-green-900 text-green-300">● Running </span>
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              CineMatch is a simple yet effective tool that helps you to find instantly find movies that matches one's interest. Just enter two or more of your favorite movies and CineMatch uses TMDB’s vast movie database to find perfect matches.
            </p>
          </div>
          <div className="flex space-x-3 text-gray-400">
            <FaEye className="hover:text-white cursor-pointer" />
            <FaLink className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-[#181818] p-6 rounded-xl flex items-center gap-5 shadow-lg mb-6">
          <img src={projectImage} alt="LexiScan" className="w-32 h-24 rounded-lg object-cover" />
          <div className="flex-1">
            <h3 className="text-xl font-bold flex items-center">
              LexiScan
              <span className="ml-3 px-3 py-1 text-sm rounded-lg bg-red-900 text-red-300">● Building</span>
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Building LexiScan — an AI-powered legal analyzer using NLP, named entity recognition, and RAG to extract clauses, summarize documents, and surface insights.
            </p>
          </div>
          <div className="flex space-x-3 text-gray-400">
            <FaEye className="hover:text-white cursor-pointer" />
            <FaLink className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
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
              <img src={projectImage} alt="Bidding Wars" className="w-32 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="text-xl font-bold flex items-center">
                  Bidding Wars
                  <span className="ml-3 px-3 py-1 text-sm rounded-lg bg-red-900 text-red-300">● Building</span>
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Building an interactive frontend of a real-time bidding game where users compete on quirky virtual items. Features include profit tracking, a dynamic leaderboard, and a gamified UI inspired by Among Us.
                </p>
              </div>
              <div className="flex space-x-3 text-gray-400">
                <FaEye className="hover:text-white cursor-pointer" />
                <FaLink className="hover:text-white cursor-pointer" />
                <FaGithub className="hover:text-white cursor-pointer" />
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