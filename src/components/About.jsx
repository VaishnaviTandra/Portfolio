import React from "react";
import about from "../assets/vaish.jpg";

function About() {
  return (
    <div className="flex items-center justify-center px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        
        {/* Left Side: Image + Tags */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={about}
            alt="Vaishnavi"
            className="rounded-full w-80 h-80 object-cover shadow-lg"
          />

          {/* Tags below image */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow">
              Full Stack Developer
            </span>
            <span className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow">
              UI/UX Developer
            </span>
            <span className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow">
              Competitive Programmer
            </span>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="text-left">
          <h2 className="text-green-400 text-2xl font-bold mb-4">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            My name is Vaishnavi Tandra. I am currently pursuing B.Tech 3rd year in Computer Science and Engineering. I am passionate about technology and enthusiastic about learning and building impactful projects.
            <br /><br />
            I am especially interested in full stack development, and I enjoy working on both frontend and backend technologies. I’m a fast learner with a strong desire to explore new tools and frameworks.
            <br /><br />
            I love solving problems, contributing to open-source, and continuously pushing my boundaries. I'm looking forward to opportunities where I can grow, collaborate, and contribute meaningfully.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
