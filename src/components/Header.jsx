import React from "react";
import Mayank2 from "../assets/Mayank2.jpg";
import { FaGithub, FaXTwitter, FaLinkedin, FaCode } from "react-icons/fa6";
import AboutMe from "./AboutMe"; // Import AboutMe here

function Header() {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Profile Section */}
      <div className="flex items-center p-6 rounded-lg w-full max-w-4xl">
        {/* Profile Image */}
        <img src={Mayank2} alt="Profile" className="w-24 h-24 rounded-lg object-cover" />

        {/* Name & Title */}
        <div className="ml-6">
          <h1 className="text-3xl font-bold">Mayank Doholiya</h1>
          <p className="text-gray-400">Software Engineer</p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-3">
            <a href="https://github.com/mayank543" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
              <FaGithub className="text-white w-5 h-5" />
            </a>
            <a href="https://x.com/d_mayank05" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
              <FaXTwitter className="text-white w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mayank-doholiya/" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
              <FaLinkedin className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
              <FaCode className="text-white w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full bg-black">
        <AboutMe />
      </div>
    </div>
  );
}

export default Header;