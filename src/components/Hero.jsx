import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-9 py-12 gap-10 mb-10">
      {/* Left Text Content */}
      <div className="text-left">
        <h1 className="font-extrabold text-3xl md:text-5xl leading-tight text-[#8A2BE2]">
          Hello People,
          <br />
          <span className="text-pink-400">Vaishnavi here</span>,
          <br />
          I'm a{" "}
          <span className="text-[#00FFCC]">
            Software Developer and a Competitive Programmer
          </span>
          .
        </h1>

        {/* Social Icons */}
        <div className="flex gap-10 text-3xl mt-8 p-3 rounded-full w-fit bg-gradient-to-r from-black via-gray-900 to-blue-600 shadow-lg">
          {/* Resume */}
          <div className="group relative">
            <a
              href="https://drive.google.com/file/d/1J9ObIsIJYC3qgHBz9seMkSEMES984zsm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <IoDocumentTextOutline />
            </a>
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Resume
            </span>
          </div>

          {/* GitHub */}
          <div className="group relative">
            <a
              href="https://github.com/VaishnaviTandra"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="group relative">
            <a
              href="https://www.linkedin.com/in/vaishnavi-tandra-b8b426295/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              LinkedIn
            </span>
          </div>

          {/* LeetCode */}
          <div className="group relative">
            <a
              href="https://leetcode.com/u/j5JhG2dUBv/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <SiLeetcode />
            </a>
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              LeetCode
            </span>
          </div>
        </div>
      </div>

      {/* Right Code Section */}
      <div className="bg-[#111827] rounded-xl p-6 shadow-lg text-left text-sm font-mono border border-purple-500">
        <pre className="overflow-x-auto">
          <code>
            <span className="text-pink-500">const</span>{" "}
            <span className="text-white"> coder = &#123;</span>
            {"\n"}
            &nbsp;&nbsp;<span className="text-blue-400">name:</span>{" "}
            <span className="text-orange-400">'Vaishnavi Tandra'</span>,
            {"\n"}
            &nbsp;&nbsp;<span className="text-blue-400">location:</span>{" "}
            <span className="text-orange-400">'Hyderabad'</span>,
            {"\n"}
            &nbsp;&nbsp;<span className="text-blue-400">dob:</span>{" "}
            <span className="text-orange-400">'17-11-2006'</span>,
            {"\n"}
            &nbsp;&nbsp;<span className="text-blue-400">skills:</span>{" "}
            <span className="text-white">&#91;</span>
            <span className="text-yellow-300">'React',</span>,
            <span className="text-yellow-300">'NextJs',</span>,
            <span className="text-yellow-300">'Tailwind CSS',</span>,
            <span className="text-yellow-300">'Bootstrap',</span>,
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-yellow-300">'Prisma',</span>,
            <span className="text-yellow-300">'MongoDB',</span>
            <span className="text-yellow-300">'My SQL',</span>,
            <span className="text-yellow-300">'Git',</span>,
            <span className="text-yellow-300">'C/C++',</span>,{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-yellow-300">'Python',</span>,
            <span className="text-yellow-300">'Java'</span>
            <span className="text-white">&#93;</span>,
            {"\n"}
            &nbsp;&nbsp;<span className="text-blue-400">hardWorker:</span>{" "}
            <span className="text-yellow-300">true</span>,
            {"\n"}
            &nbsp;&nbsp;<span className="text-blue-400">quickLearner:</span>{" "}
            <span className="text-yellow-300">true</span>,
            {"\n"}
            &nbsp;&nbsp;<span className="text-blue-400">problemSolver:</span>{" "}
            <span className="text-yellow-300">true</span>,
            {"\n"}
            &nbsp;&nbsp;<span className="text-green-400">hireable:</span>{" "}
            <span className="text-pink-500">function</span>
            <span className="text-white">() &#123;</span>
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">return</span>
            : (<span className="text-blue-400">this.hardWorker</span>{" "}
            <span className="text-white">&&</span>
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-400">this.problemSolver</span>{" "}
            <span className="text-white">&&</span>
            {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-400">this.skills.length &gt;= 10</span>)
            ;{"\n"}
            &nbsp;&nbsp;<span className="text-white">&#125;</span>
            {"\n"}
            <span className="text-white">&#125;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Hero;
