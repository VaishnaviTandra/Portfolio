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
        "Applied data preprocessing, feature engineering, and trained regression models for accurate predictions.",
        "Developed a web UI for user input and deployed the application for real-time yield forecasting."
      ]
    },{
      img: "https://tse1.mm.bing.net/th/id/OIP.FUkSCC1EPxlzviAXC6BJQgHaHa?pid=Api&P=0&h=180",
      name: "MastersCoding",
      role: "Web Development Mentor",
      duration: "Feb 2025 - Present",
      descriptionPoints: [
        "Mentored numerous students through the MERN stack curriculum, providing guidance and support across all stages of full-stack development.",
        "Reviewed and offered constructive feedback on projects, helping over 60 students successfully build and deploy full-stack web applications.",
        "Focused on enhancing students' understanding of modern development practices, debugging skills, and real-world application design."
      ]
    }
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-10">
        Experience
      </h2>

      <div className="flex flex-col items-center gap-5">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 max-w-5xl w-full"
          >
            <div className="flex flex-col md:flex-row gap-5">
              {/* Left Column: Image + Basic Info */}
              <div className="flex flex-col items-center  md:w-1/3  text-justify">
                <img
                  src={exp.img}
                  alt={exp.name}
                  className="w-50 h-28 object-cover rounded-full mb-2"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.name}</h3>
                <p className="text-lg text-gray-600 mb-2">Role: {exp.role}</p>
                <div className="flex items-center justify-center gap-2">
                               <IoTime className="text-gray-500"/>
                               <p className="text-base text-gray-500 mb-1">Duration: {exp.duration}</p>
                             </div>
              </div>

              {/* Right Column: Description */}
              <div className="md:w-2/3">
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-justify items-center mt-4">
                  {exp.descriptionPoints.map((point, i) => (
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
}

export default Experience;
