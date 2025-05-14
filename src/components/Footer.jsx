import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { IoLogoXing } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-4 pb-20 text-center">
      {/* Contact Section */}
      <h2 className="text-xl font-bold">Reach out to me.</h2>
      <p className="text-gray-400 mt-2">
        Feel free to reach out to me via email for any queries, collaboration opportunities, or further details. 
        I'm also super active on X, so feel free to DM me there!
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://x.com/d_mayank05" className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 text-white hover:bg-gray-700">
          <IoLogoXing /> Twitter
        </a>
        <a href="mailto:mayankdoholiya.official@gmail.com" className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 text-white hover:bg-gray-700">
          <FaEnvelope /> Email
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-gray-400 mt-6 text-xl">
        <a href="mailto:mayankdoholiya.official@gmail.com" className="hover:text-white"><FaEnvelope /></a>
        <a href="https://github.com/mayank543" className="hover:text-white"><FaGithub /></a>
        <a href="https://x.com/d_mayank05" className="hover:text-white"><IoLogoXing /></a>
        <a href="https://www.linkedin.com/in/mayank-doholiya/" className="hover:text-white"><FaLinkedin /></a>
        <a href="https://leetcode.com/u/may_nk_d_0504/" className="hover:text-white"><FaCode/></a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm mt-6">
        © 2025 Mayank Doholiya. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;