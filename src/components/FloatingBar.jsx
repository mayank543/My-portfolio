import React, { useState, useEffect } from "react";
import WalterWhite from "../assets/WalterWhite.jpeg";
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaCode,
} from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

function FloatingBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPulse, setShowPulse] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const togglePage = () => {
    setHasInteracted(true);
    setShowPulse(false);
    if (location.pathname === "/alternate") {
      navigate("/");
    } else {
      navigate("/alternate");
    }
  };

  // Show pulse animation after 5 seconds if user hasn't interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowPulse(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Reset pulse periodically if user hasn't interacted
  useEffect(() => {
    if (!hasInteracted) {
      const interval = setInterval(() => {
        setShowPulse(true);
        setTimeout(() => setShowPulse(false), 2000);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [hasInteracted]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#181818] text-white px-4 py-2 rounded-full flex items-center gap-4 shadow-lg border border-gray-700 animate-slideUp">
      {/* Social Icons */}
      <div className="flex items-center gap-3 text-gray-400 text-xl">
        <a
          href="https://github.com/mayank543"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200 hover:scale-110 transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/d_mayank05"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200 hover:scale-110 transform"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/mayank-doholiya/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200 hover:scale-110 transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/may_nk_d_0504/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200 hover:scale-110 transform"
        >
          <FaCode />
        </a>
      </div>

      {/* Vertical Divider */}
      <div className="h-6 w-[1px] bg-gray-500"></div>

      {/* Profile Image Container with Animations */}
      <div className="relative group">
        {/* Cool Twisted Arrow */}
        <div className={`absolute -top-8 left-8 transition-all duration-500 z-10 ${
          showPulse && !hasInteracted ? 'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'
        }`}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            className="text-white drop-shadow-lg animate-pulse"
          >
            <path
              d="M7 10 L12 5 L17 10 L14 10 L14 19 L10 19 L10 10 Z"
              fill="currentColor"
              className="animate-wiggle drop-shadow-sm"
              transform="rotate(135 12 12)"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))'
              }}
            />
          </svg>
        </div>

        {/* Floating tooltip - appears on hover */}
        <div className={`absolute -top-12 -left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-all duration-300 opacity-0 pointer-events-none hover:opacity-100`}>
          Click me! 🚀
          <div className="absolute top-full left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>

        {/* Pulsing ring animation */}
        <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
          showPulse && !hasInteracted ? 'animate-ping border-2 border-white opacity-50' : 'opacity-0'
        }`}></div>
        
        {/* Glowing ring */}
        <div className={`absolute -inset-1 rounded-lg transition-all duration-500 ${
          showPulse && !hasInteracted ? 'border border-gray-300 opacity-75 blur-sm animate-pulse' : 'opacity-0'
        }`}></div>

        {/* Profile Image */}
        <img
          src={WalterWhite}
          alt="Profile"
          className={`relative w-8 h-8 rounded-lg cursor-pointer border-2 transition-all duration-300 transform hover:scale-110 hover:rotate-3 ${
            showPulse && !hasInteracted 
              ? 'border-white shadow-lg shadow-white/30' 
              : 'border-gray-500 hover:border-white'
          }`}
          onClick={togglePage}
          onMouseEnter={() => setShowPulse(false)}
        />

        {/* Sparkle effects */}
        <div className={`absolute -top-1 -right-1 w-2 h-2 transition-all duration-500 ${
          showPulse && !hasInteracted ? 'animate-ping' : 'opacity-0'
        }`}>
          <div className="w-full h-full bg-white rounded-full"></div>
        </div>
        <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 transition-all duration-700 ${
          showPulse && !hasInteracted ? 'animate-ping animation-delay-300' : 'opacity-0'
        }`}>
          <div className="w-full h-full bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(135deg); }
          25% { transform: rotate(140deg); }
          75% { transform: rotate(130deg); }
        }
        
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default FloatingBar;