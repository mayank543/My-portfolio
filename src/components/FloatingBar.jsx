import React from "react";
import WalterWhite from "../assets/WalterWhite.jpeg";
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaCode, // LeetCode icon
} from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

function FloatingBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const togglePage = () => {
    if (location.pathname === "/alternate") {
      navigate("/");
    } else {
      navigate("/alternate");
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#181818] text-white px-4 py-2 rounded-full flex items-center gap-4 shadow-lg border border-gray-700">
      {/* Social Icons */}
      <div className="flex items-center gap-3 text-gray-400 text-xl">
        <a
          href="https://github.com/mayank543"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/d_mayank05"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/mayank-doholiya/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/may_nk_d_0504/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaCode />
        </a>
      </div>

      {/* Vertical Divider */}
      <div className="h-6 w-[1px] bg-gray-500"></div>

      {/* Profile Image (Toggle between home and alternate) */}
      <img
  src={WalterWhite}
  alt="Profile"
  className="w-8 h-8 rounded-lg cursor-pointer border border-gray-500"
  onClick={togglePage}
/>
    </div>
  );
}

export default FloatingBar;