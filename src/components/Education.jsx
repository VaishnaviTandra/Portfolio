import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { MdGrade } from "react-icons/md";

function Education() {
  const education = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/012/818/553/original/graduation-cap-icon-education-symbol-and-sign-illustration-free-vector.jpg",
      name: "VNR VJIET",
      degree: "B.Tech in Computer Science",
      percentage: "9.58 CGPA",
      timeline: "2023 - Present",
      location: "Hyderabad, India"
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/011/849/062/original/online-learning-icon-online-education-icon-symbol-school-illustration-on-isolated-background-free-vector.jpg",
      name: "Alphores Junior College",
      degree: "Intermediate",
      percentage: "97.7%",
      timeline: "2021 - 2023",
      location: "Karimnagar, India"
    },
    {
      img: "https://img.freepik.com/premium-vector/education-icon-vector-illustartion-college-cap-graduate-hat-symbol-student-degree-sign_87543-11780.jpg?w=2000",
      name: "Paramita Heritage School",
      degree: "Schooling (10th)",
      percentage: "92.7%",
      timeline: "Completed in 2021",
      location: "Karimnagar, India"
    }
  ];

  return (
    <section id="education" className="px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-300">
        Education
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {education.map((edu, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300 text-center"
            style={{
              background: "linear-gradient(135deg, #00094B 0%, #0a0f1f 50%, #00094B 100%)",
              color: "white",
            }}
          >
            <img
              src={edu.img}
              alt={edu.name}
              className="w-40 h-40 object-cover mx-auto mt-6 rounded-xl"
              style={{
                filter: "grayscale(100%) brightness(0.8) sepia(100%) hue-rotate(180deg) saturate(300%)",
                mixBlendMode: "screen",
              }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{edu.name}</h3>
              <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>

              {/* Percentage */}
              <div className="flex items-center justify-center gap-2 mt-2 text-gray-300">
                <MdGrade />
                <p className="text-lg">{edu.percentage}</p>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-center gap-2 mt-2 text-gray-300">
                <IoTime />
                <p className="text-lg">Duration: {edu.timeline}</p>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 mt-2 text-gray-300">
                <FaLocationDot />
                <p className="text-lg">Location: {edu.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
