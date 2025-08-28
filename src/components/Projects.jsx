import React, { useState } from 'react';
import Finora from '../assets/Finora.png';
import VoyageR from '../assets/VoyageR.png';
import blog from '../assets/blog.png';
import hh from '../assets/image.png';
import Lost from '../assets/lost.png';
import Stock from '../assets/stock.png';
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

function Projects() {
  const projects = [
    {
      name: "FinAura",
      Description:
        "The AI Finance Platform is an intelligent and user-centric financial management solution designed to simplify budgeting, forecasting, and investment tracking. It uses AI and ML to analyze user behavior, automate expense categorization, predict spending trends, and provide personalized financial insights.",
      Domain: "Web Development",
      src: Finora,
      git: "https://github.com/VaishnaviTandra/FinAura"
    },
    {
      name: "VoyageR",
      Description:
        "VoyageR is a travel booking platform that offers seamless and personalized experiences. It allows users to discover destinations, book hotels, and connect with local guides. The platform integrates VR previews to help users experience destinations virtually before booking.",
      Domain: "Web Development",
      src: VoyageR,
      git: "https://github.com/VaishnaviTandra/VoyageR"
    },
    {
      name: "Blog Application",
      Description:
        "A dynamic blog platform allowing users to create, edit, and publish posts with authentication, real-time updates, and category-based content management. The design ensures an engaging and user-friendly experience for both authors and readers.",
      Domain: "Web Development",
      src: blog,
      git: "https://github.com/VaishnaviTandra/Blog-application",
      preview: "https://blog-application-git-master-vaishnavis-projects-b2345ddf.vercel.app"
    },
    {
      name: "Hand and Hue",
      Description:
        "An online marketplace for handmade art and crafts, connecting artisans with art lovers. The platform provides a visually rich experience for browsing, showcasing, and purchasing unique handmade products, celebrating creativity and originality.",
      Domain: "Web Development",
      src: hh,
      git: "https://github.com/VaishnaviTandra/Hand-and-Hue"
    },
    {
      name: "StockBridge",
      Description:
        "StockBridge connects investors with real-time insights and AI-driven recommendations. It simplifies investing with personalized strategies and community-driven learning, making smart investing accessible for everyone.",
      Domain: "Web Development",
      src: Stock,
      git: "https://github.com/VaishnaviTandra/tutedude",
      preview: "https://tutedude-beryl.vercel.app/"
    },
    {
      name: "Lost and Found",
      Description:
        "A web app that helps people report and recover lost items. Users can upload item details, and verification is done using security questions for safe return. It’s an intuitive and secure solution for lost and found cases.",
      Domain: "Web Development",
      src: Lost,
      git: "https://github.com/VaishnaviTandra/LostandFound"
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#3B82F6]">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
            style={{
              background: "linear-gradient(135deg, #00094B 0%, #0a0f1f 50%, #00094B 100%)",
              color: "white",
            }}
          >
            {/* Image */}
            <img
              src={project.src}
              alt={project.name}
              className="w-full h-48 object-cover opacity-90"
            />

            {/* Content */}
            <div className="p-6 text-left">
              {/* Title + GitHub */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-[#A8C5FF]">{project.name}</h3>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8C5FF] text-xl hover:text-gray-300"
                >
                  <FaGithub />
                </a>
              </div>

              {/* Domain */}
              <p className="text-sm text-[#E3D6FF] font-medium mb-2">
                Domain: {project.Domain}
              </p>

              {/* Description */}
              <p className="text-[#B3F0FF] text-sm">{project.Description}</p>

              {/* Preview Link */}
              {project?.preview && (
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <MdLiveTv />
                  Watch Preview
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="font-medium transition-colors 
                     bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 
                     bg-clip-text text-transparent"
        >
          {showAll ? "Show Less" : "Show More.."}
        </button>
      </div>
    </section>
  );
}

export default Projects;
