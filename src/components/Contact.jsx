import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_humwe91", 
        "template_1y8l7fg",
        form.current,
        "LElilO6OxWno8k5IT" 
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message ❌, try again later.");
        }
      );
  };

  return (
    <div className="  text-white flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold text-[#3B82F6] mb-9">
        CONTACT WITH ME
      </h2>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12">
        {/* Left Side: Form */}
        <div className="flex-1  p-6 rounded-xl shadow-lg">
          <p className="mb-4 text-gray-300">
             I am open to any work opportunities that align with my
            skills and interests.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Name */}
            <div className="flex items-center gap-4">
              <label htmlFor="name" className="w-28 text-gray-300">
                Your Name:
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                required
                className="flex-1 p-2 rounded-md bg-[#0d1117] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <label htmlFor="email" className="w-28 text-gray-300">
                Your Email:
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                required
                className="flex-1 p-2 rounded-md bg-[#0d1117] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-4">
              <label htmlFor="message" className="w-28 text-gray-300 mt-2">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="flex-1 p-2 rounded-md bg-[#0d1117] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center"
            >
              SEND MESSAGE <FaEnvelope className="ml-2" />
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex-1 flex flex-col justify-center gap-6 text-gray-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl text-gray-400" />
            <span>tandravaishnavi610@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-2xl text-gray-400" />
            <span>+91 9398482900</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-2xl text-gray-400" />
            <span>Hyderabad, Telangana, India</span>
          </div>

          <div className="flex gap-6 mt-4">
            <a href="https://github.com/VaishnaviTandra" target="_blank" rel="noreferrer">
              <FaGithub className="text-3xl hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/vaishnavi-tandra-b8b426295/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-3xl hover:text-blue-500" />
            </a>
           
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
