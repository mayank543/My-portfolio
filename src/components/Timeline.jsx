import React from "react";
import breadboard from "../assets/breadboard.jpg"
import leetcode from "../assets/leetcode.jpeg"
import piccell from "../assets/piccell.png"

const Timeline = () => {
  const experiences = [
    {
      title: "GETTING REAL WITH CODE",
      date: "August 2023 - Present",
      description: [
        "Got into frontend development with React and Tailwind; GitHub finally saw some life.",
        "Dabbled in DSA and CP on LeetCode and Codeforces (until the rating anxiety hit).",
        "Built and shipped real projects with teammates — including full frontend UIs that didn’t crash (mostly).",
        "Started understanding component design, state management, and the joy of a green Netlify deploy."
      ],
      image: leetcode,
    },
    {
      title: "BREADBOARD DREAMS",
      date: "October 2023 - November 2023",
      description: [
        "Spent time diving into different corners of tech — from basic PCB design to understanding how cybersecurity attacks work (out of curiosity, not application).",
        "Attempted to reverse engineer a Bluetooth speaker to see how signals work. It didn’t work again, but I learned a lot about circuits, soldering (and burning).",
        "Looked into bug bounty programs, just enough to understand how websites get compromised — and how to avoid building insecure ones.",
        "Gradually found myself more drawn to the web — cleaner errors, better communities, and slightly less smoke."
      ],
      image: breadboard,
    },
    {
      title: "FIGURING IT OUT!",
      date: "January 2024 - March 2024",
      description: [
        "	Joined Piccell (college's photography club) to chase passion (and free snacks).",
        "Took exactly zero award-winning shots, but developed a keen eye for angles — especially in group photos.",
        "Somehow ended up contributing as a photographer during Ephemere, the college fest. ",
        "Racked up 100+ hours in SmashKarts, mastering game theory without realizing it.",
        "	Discovered an interest in cinematography and visual storytelling — a spark that still lingers. Maybe one day, I’ll even shoot a short film."
      ],
      image: piccell,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        My <span className="text-purple-400">College Experience</span>
      </h2>
      <div className="relative border-l-4 border-gray-700">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 ml-6 flex items-start">
            {/* Timeline Dot */}
            <div className="absolute -left-3 w-6 h-6 bg-purple-500 rounded-full border-2 border-gray-900"></div>

            {/* Timeline Box */}
            <div className="bg-gray-900 text-white p-6 rounded-lg w-full shadow-lg flex">
              {/* Image Section */}
              <img
                src={exp.image}
                alt={exp.title}
                className="w-24 h-24 object-cover rounded-lg mr-6"
              />

              {/* Text Section */}
              <div>
                <p className="text-green-400 font-semibold">{exp.date}</p>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <ul className="list-disc pl-4 text-gray-300 space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;