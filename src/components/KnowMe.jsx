import React from 'react';

function KnowMe() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white ">
      {/* About Me Title */}
      <h2 className="text-2xl font-bold mb-4">Know Me.</h2>

      {/* About Me Content */}
      <p className="text-gray-300 leading-relaxed">
        Hey, I'm <span className="font-semibold text-white">Mayank Doholiya</span>, an undergraduate Computer Science student and a passionate full-stack developer who loves building and shipping things that people actually use.
      </p>

      <p className="text-gray-300 leading-relaxed mt-2">
        I mainly work with <span className="text-blue-400">React.js</span>, <span className="text-blue-400">Next.js</span>, and <span className="text-blue-400">Node.js</span> for both frontend and backend, using <span className="text-yellow-400">TypeScript</span> alongside them. I have created many cool projects using these technologies.
      </p>

      <p className="text-gray-300 leading-relaxed mt-2">
        Beyond coding, I enjoy exploring <span className="text-blue-400">astronomy</span> and the science behind emerging technologies. I have a keen interest in <span className="text-green-400">design and UI/UX</span>, ensuring that my projects are not just functional but also intuitive and visually appealing.
      </p>

      <p className="text-gray-300 leading-relaxed mt-2">
        I also stay up to date with <span className="white">modern web development trends</span>, constantly experimenting with new tools like <span className="text-blue-400">shadcn/ui</span>, <span className="text-blue-400">Tailwind CSS</span>, and <span className="text-yellow-400">Prisma</span> to refine my skills.
      </p>

      <p className="text-gray-300 leading-relaxed mt-2">
        When I’m not building applications, I enjoy reading <span >thought-provoking books</span>, exploring <span >entrepreneurial concepts</span>, and analyzing <span >efficient system designs</span>. I believe that great software is built at the intersection of <span className="font-semibold text-white">logic, creativity, and usability</span>.
      </p>

      <p className="text-gray-300 leading-relaxed mt-2">
        If you have an idea and would like to collaborate, feel free to <span className="font-semibold text-white">DM me!</span> I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side—just click on the navbar image!
      </p>
    </section>
  );
}

export default KnowMe;