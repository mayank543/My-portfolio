import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin, FaMedium, FaRotateRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // Using React Router for navigation

function FloatingBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#181818] text-white px-4 py-2 rounded-full flex items-center gap-4 shadow-lg border border-gray-700">
      {/* Social Icons */}
      <div className="flex items-center gap-3 text-gray-400 text-xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaXTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaLinkedin />
        </a>
        <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaMedium />
        </a>
        <a href="/" className="hover:text-white">
          <FaRotateRight />
        </a>
      </div>

      {/* Vertical Divider */}
      <div className="h-6 w-[1px] bg-gray-500"></div>

      {/* Profile Image (Click to switch personality) */}
      <img
        src="/profile.jpg" // Change to your actual image path
        alt="Profile"
        className="w-8 h-8 rounded-full cursor-pointer border border-gray-500"
        onClick={() => navigate("/alternate")}
      />
    </div>
  );
}

export default FloatingBar;