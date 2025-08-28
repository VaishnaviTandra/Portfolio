import React from "react";

function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex justify-between items-center px-6 py-3 text-sm text-white bg-[#0a0f1c]">
      {/* Left Side */}
      <p>
        © Developer Portfolio by{" "}
        <a
          href="#"
          className="text-green-400 hover:underline"
        >
          Vaishnavi Tandra
        </a>
      </p>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/VaishnaviTandra/portfolio"
          className="hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          ★ STAR
        </a>
        <a
          href="https://github.com/VaishnaviTandra/portfolio/fork"
          className="hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⑂ FORK
        </a>
        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white cursor-pointer"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
