import React from "react";
import projectImage from "../assets/project.jpg"; // Replace with actual image path
import { FaEye, FaLink, FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="bg-black text-white px-6 py-10 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Projects Heading */}
        <h2 className="text-2xl font-bold mb-4">Projects.</h2>

        {/* Project Card */}
        <div className="bg-[#181818] p-6 rounded-xl flex items-center gap-5 shadow-lg">
          {/* Project Image */}
          <img
            src={projectImage}
            alt="The Daily Crimes"
            className="w-32 h-24 rounded-lg object-cover"
          />

          {/* Project Details */}
          <div className="flex-1">
            <h3 className="text-xl font-bold flex items-center">
              The Daily Crimes
              <span className="ml-3 px-3 py-1 text-sm rounded-lg bg-green-900 text-green-300">
                ● Running
              </span>
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Created a newspaper-inspired website combining classic layouts
              with modern design for an authentic feel. Covered the rise in
              crime in India, offering insightful and engaging news stories on
              this pressing issue. Added animations and moving visuals to
              deliver a dynamic and immersive user experience.
            </p>
          </div>

          {/* Icons */}
          <div className="flex space-x-3 text-gray-400">
            <FaEye className="hover:text-white cursor-pointer" />
            <FaLink className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;