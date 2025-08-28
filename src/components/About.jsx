import React from "react";
import about from "../assets/vaish.jpg";

function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center  py-10 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* Left Side: Image + Tags */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src={about}
            alt="Vaishnavi"
            className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover shadow-lg border-4 border-green-400"
          />

          {/* Tags below image */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="bg-[#A3E635] text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
              Full Stack Developer
            </span>
            <span className="bg-[#06B6D4] text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
              UI/UX Developer
            </span>
            <span className="bg-green-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
              Competitive Programmer
            </span>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="text-left space-y-6">
          <h2 className="text-[#3B82F6] text-3xl font-extrabold">Who I Am?</h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Hello! I'm <span className="text-[#34D399] font-bold">Vaishnavi Tandra</span>, a
            passionate <strong className="text-[#34D399] font-bold">Full Stack Developer</strong> and technology
            enthusiast currently pursuing my B.Tech in Computer Science and Engineering.
          </p>
          <p className="text-lg leading-relaxed text-gray-500">
            I love building impactful projects, exploring new technologies, and
            creating user-friendly interfaces. I have strong interests in
            <span className="text-[#34D399] font-bold"> frontend & backend development</span>, and
            I enjoy solving challenging problems and contributing to open-source.
          </p>
          <p className="text-lg leading-relaxed text-gray-500">
            My goal is to collaborate with dynamic teams, learn continuously,
            and build products that make a difference. Let's create something
            amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
