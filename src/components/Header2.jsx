import React from "react";
import joker from "../assets/joker.jpg";
import { FaGithub, FaXTwitter, FaLinkedin, FaCode } from "react-icons/fa6";

function Header2() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-6">
      {/* Profile Section */}
      <div className="flex items-center rounded-lg w-full max-w-lg">
        {/* Profile Image */}
        <img
          src={joker}
          alt="Profile"
          className="w-20 h-20 rounded-lg object-cover"
        />

        {/* Name & Title */}
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Mayank Doholiya</h1>
          <p className="text-gray-400 text-sm">Software Engineer</p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-2">
            <a
              href="https://github.com/mayank543"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaGithub className="text-white w-5 h-5" />
            </a>
            <a
              href="https://x.com/d_mayank05"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaXTwitter className="text-white w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-doholiya/"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaLinkedin className="text-white w-5 h-5" />
            </a>
            <a
              href="#"
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