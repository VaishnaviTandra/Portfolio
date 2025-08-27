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
      percentage: "9.725 CGPA",
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
    <div className="px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-600">
        Education
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow text-justify"
          >
            <img
              src={edu.img}
              alt={edu.name}
              className=" w-50 h-30 object-cover bg-gray-700 mx-auto rounded-xl "
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.name}</h3>
              <p className="text-xl text-gray-600 mb-1">{edu.degree}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <MdGrade className="text-gray-500"/>
                  <p className="text-lg text-gray-500 mb-1">{edu.percentage}</p>
                </div>
            
              <div className="flex items-center justify-center gap-2 mt-2">
                <IoTime className="text-gray-500"/>
                <p className="text-lg text-gray-500 mb-1">Duration: {edu.timeline}</p>
              </div>
              
             <div className="flex items-center justify-center gap-2 mt-2">
  <FaLocationDot className="text-gray-500" />
  <p className="text-lg text-gray-500">Location: {edu.location}</p>
</div>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
