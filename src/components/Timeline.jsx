import React from "react";

const Timeline = () => {
  const experiences = [
    {
      title: "TECH TEAM MEMBER",
      date: "August 2023 - Present",
      description: [
        "Working collaboratively within a team to develop and maintain the website of the organization.",
        "Designed and implemented a customized Next.js project structure with an integrated Tailwind setup, reducing development time by 30% and improving code quality.",
        "Engineered responsive templates and components, prioritizing SEO and accessibility, contributing to a significant increase in client's online revenue.",
      ],
      image: "your-image-url-1.jpg",
    },
    {
      title: "CONTRIBUTOR",
      date: "October 2023 - November 2023",
      description: [
        "Engineered a robust component-based architecture using ReactJS for a web app tailored to the banking sector.",
      ],
      image: "your-image-url-2.jpg",
    },
    {
      title: "FRONTEND DEVELOPER INTERN",
      date: "January 2024 - March 2024",
      description: [
        "Developed high-performance user interfaces using React and Tailwind CSS.",
        "Collaborated with designers and backend engineers to enhance user experience and functionality.",
      ],
      image: "your-image-url-3.jpg",
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