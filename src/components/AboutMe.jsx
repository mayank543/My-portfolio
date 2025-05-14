import React, { useState } from 'react';

function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white">
      {/* About Me Title */}
      <h2 className="text-2xl font-bold mb-4">About Me.</h2>

      {/* About Me Content */}
      <p className="text-gray-300 leading-relaxed">
        Hey, I'm <span className="font-semibold text-white">Mayank Doholiya</span>, an undergraduate Computer Science student and full-stack developer who loves building and shipping things that people actually use.
      </p>
      <p className="text-gray-300 leading-relaxed mt-2">
        I mainly work with <span className="text-blue-400">React.js</span>, <span className="text-blue-400">Next.js</span>, and <span className="text-blue-400">Node.js</span> for both frontend and backend, using <span className="text-yellow-400">TypeScript</span> alongside them. I have created many cool projects using these technologies.
      </p>
      <p className="text-gray-300 leading-relaxed mt-2">
        If you have an idea and would like to collaborate, feel free to DM me! I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side, just click on the navbar image!
      </p>

      {/* Show More Button */}
      <a
        href="#"
        className="text-blue-400 font-medium mt-4 inline-block hover:underline"
        onClick={(e) => {
          e.preventDefault();
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Show less ↑" : "Show more about me →"}
      </a>

      {/* Conditionally Rendered Extra Text */}
      {showMore && (
        <p className="text-gray-300 leading-relaxed mt-4">
          Outside of code, I’m constantly exploring new ideas in design, gaming mechanics, and digital storytelling. Whether it’s analyzing cinematic shots or losing track of time on a puzzle, I love things that make you think differently. I also enjoy writing and reflecting on my tech journey—maybe one day I'll publish a blog or two!
        </p>
      )}

      {/* Hire Me Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Hire Me.</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m currently available for <span className="text-green-400">internships</span>, <span className="text-green-400">full-time opportunities</span>, and <span className="text-green-400">freelance projects</span>. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!
        </p>
        {/* Hire Me Button */}
        <a
          href="mailto:mayankdoholiya.official@gmail.com"
          className="mt-4 inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
         <span className="mr-2">💼</span> Hire Me
         </a>
      </div>
    </section>
  );
}

export default AboutMe;