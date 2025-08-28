import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import { motion } from 'framer-motion';

function RootLayout() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Animated Gradient Background with Deep Blue Edges */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-[#00094B] via-black to-[#00094B]" />

      {/* Blue Glowing Edges */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-b from-[#00094B]/50 via-transparent to-[#00094B]/50 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-b from-[#00094B]/50 via-transparent to-[#00094B]/50 blur-3xl pointer-events-none" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-8">
        {[
          <Hero />,
          <About />,
          <Skills />,
          <Projects />,
          <Education />,
          <Experiences />,
          <Contact />,
        ].map((Component, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mb-16"
          >
            {Component}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <Footer />

      {/* Custom CSS for Background Animation */}
      <style jsx>{`
        .animate-gradient {
          background: linear-gradient(270deg, #00094B, #000000, #00094B);
          background-size: 600% 600%;
          animation: gradientShift 12s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}

export default RootLayout;
