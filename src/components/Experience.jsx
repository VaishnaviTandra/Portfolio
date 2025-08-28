import React from 'react';
import { IoTime } from "react-icons/io5";

function Experience() {
  const experience = [
    {
      img: "https://tse1.mm.bing.net/th/id/OIP.FUkSCC1EPxlzviAXC6BJQgHaHa?pid=Api&P=0&h=180",
      name: "Infosys SpringBoard",
      role: "AI Intern",
      duration: "Aug 2025 - Present",
      descriptionPoints: [
        "Developed a machine learning-based system to predict crop yield using environmental and soil parameters like rainfall, temperature, and nutrient content.",
        "Applied data preprocessing, feature engineering, and trained regression models for accurate predictions."
      ]
    },
    {
      img: "https://tse1.mm.bing.net/th/id/OIP.FUkSCC1EPxlzviAXC6BJQgHaHa?pid=Api&P=0&h=180",
      name: "MastersCoding",
      role: "Web Development Mentor",
      duration: "Feb 2025 - Present",
      descriptionPoints: [
        "Mentored numerous students through the MERN stack curriculum, providing guidance and support across all stages of full-stack development.",
        "Reviewed and offered constructive feedback on projects, helping over 60 students successfully build and deploy full-stack web applications."
      ]
    }
  ];

  return (
    <section id="experience" className="px-4 py-16 min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-[#3B82F6] mb-10">
        Experience
      </h2>

      <div className="flex flex-col items-center gap-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="rounded-2xl p-4 max-w-6xl w-full transition-transform hover:scale-105 duration-300 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00094B 0%, #0a0f1f 50%, #00094B 100%)",
              color: "white",
            }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              {/* Left Column: Image + Info */}
              <div className="flex flex-col items-center md:w-1/3">
                <img
                  src={exp.img}
                  alt={exp.name}
                  className="w-32 h-32 object-cover rounded-full mb-2"
                  style={{
                    filter: "grayscale(100%) brightness(0.8) sepia(100%) hue-rotate(180deg) saturate(300%)",
                    mixBlendMode: "screen",
                  }}
                />
                <h3 className="text-xl font-bold mb-1 text-[#A8C5FF]">{exp.name}</h3>
                <p className="text-base text-[#A8C5FF] mb-1">Role: {exp.role}</p>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <IoTime />
                  <p>Duration: {exp.duration}</p>
                </div>
              </div>

              {/* Right Column: Description */}
              <div className="md:w-2/3 text-[#B3F0FF]">
                <ul className="list-disc pl-5 space-y-2 text-base text-justify">
                  {exp.descriptionPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
