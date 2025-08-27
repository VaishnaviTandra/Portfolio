import React, { useState } from 'react';
import Finora from '../assets/Finora.png';
import VoyageR from '../assets/VoyageR.png';
import blog from '../assets/blog.png';
import hh from '../assets/image.png';
import Lost from '../assets/lost.png';
import Stock from '../assets/stock.png';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdLiveTv } from "react-icons/md";

function Projects() {
  const projects = [
    {
      name: "FinAura",
      Description:
        "The AI Finance Platform is an intelligent and user-centric financial management solution designed to simplify budgeting, forecasting, and investment tracking. Leveraging the power of artificial intelligence and machine learning, the platform analyzes user behavior, automates expense categorization, predicts future spending trends, and provides personalized financial insights. ",
      Domain: "Web Development",
      src: Finora,
      git:"https://github.com/VaishnaviTandra/Finora"
    },
    {
      name: "VoyageR",
      Description:
        "VoyageR is an innovative travel booking platform that redefines the way people explore and plan their journeys. Designed to offer seamless and personalized travel experiences, VoyageR enables users to discover destinations, book hotels, and connect with local guides—all in one place. The platform integrates immersive technologies like VR previews for destinations, helping users virtually experience places before making decisions. ",
      Domain: "Web Development",
      src: VoyageR,
      git:"https://github.com/VaishnaviTandra/VoyageR"
    },
    {
      name: "Blog Application",
      Description:
        "The Blog Application is a dynamic and user-friendly platform designed to enable seamless content creation and sharing. Built with a clean and responsive interface, it allows users to write, edit, and publish blog posts, categorize topics, and engage with readers through comments or likes. The application includes features like user authentication, real-time updates, and content management.",
      Domain: "Web Development",
      src: blog,
      git:"https://github.com/VaishnaviTandra/Blog-application",
      preview:"https://blog-application-git-master-vaishnavis-projects-b2345ddf.vercel.app"
    },
    {
      name: "Hand and Hue",
      Description:
        "Hand and Hue is a curated online marketplace dedicated to promoting and selling handcrafted art and creative products made by independent artisans. The platform connects talented creators with art enthusiasts by offering a visually rich and intuitive interface for browsing, purchasing, and showcasing unique handmade items. From paintings and pottery to personalized crafts, Hand and Hue celebrates originality and craftsmanship. ",
      Domain: "Web Development",
      src: hh,
      git:"https://github.com/VaishnaviTandra/Hand-and-Hue"
    },
    {
      name: "StockBridge",
      Description:
        "StockBridge is a smart platform that connects investors with market opportunities, offering real-time insights and AI-driven recommendations. It simplifies investing with personalized strategies and fosters a community where users share tips and learn together, giving every investor that extra edge to grow their wealth.With StockBridge, investing becomes easier, smarter, and more engaging than ever before.",
      Domain: "Web Development",
      src: Stock,
      git:"https://github.com/VaishnaviTandra/tutedude",
      preview:"https://tutedude-beryl.vercel.app/"
    },
    {
      name: "Lost and Found",
      Description:
        "The Lost and Found Platform is a smart and intuitive web application designed to help individuals report, track, and recover lost or found items efficiently. Users can easily upload item details, including descriptions, categories, images, and the date or location of loss. A unique verification feature allows finders to confirm rightful ownership through hidden question prompts, ensuring secure and genuine returns. ",
      Domain: "Web Development",
      src: Lost,
      git:"https://github.com/VaishnaviTandra/LostandFound",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-800">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow text-justify"
          >
            <img
              src={project.src}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <Link to={project.git} className="text-black text-xl"><FaGithub /></Link>
              </div>
              
              <p className="text-sm text-gray-500 font-medium mb-2">
                Domain: {project.Domain}
              </p>
              <p className="text-gray-600 text-sm">{project.Description}</p>
              {project?.preview && (
                <Link className="flex mt-3 gap-2 text-center" to={project.preview}>
                  <MdLiveTv />
                  <p className="text-gray-500 text-sm">Watch Preview</p>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-500 border-0 "
        >
          {showAll ? "Show Less " : "Show More.."}
        </button>
      </div>
    </div>
  );
}

export default Projects;
