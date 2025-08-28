import React from "react";

function Skills() {
  const techList = [
    { name: "HTML5", src: "https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg" },
    { name: "CSS", src: "https://w7.pngwing.com/pngs/653/527/png-transparent-white-and-blue-shield-shape-logo-css3-cascading-style-sheets-computer-icons-html-emblem-miscellaneous-blue-angle.png" },
    { name: "Tailwind CSS", src: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" },
    { name: "Bootstrap", src: "https://static.vecteezy.com/system/resources/previews/012/697/297/original/3d-bootstrap-programming-framework-logo-free-png.png" },
    { name: "JavaScript", src: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png" },
    { name: "TypeScript", src: "https://w7.pngwing.com/pngs/595/864/png-transparent-typescript-original-logo-icon-thumbnail.png" },
    { name: "React JS", src: "https://tse1.mm.bing.net/th/id/OIP.kLldduaRDS8LGYEXrrWhqgHaHa?pid=Api&P=0&h=180" },
    { name: "Next Js", src: "https://miro.medium.com/v2/resize:fit:1176/1*LvA59wJi3O9jTMQQsw_cRA.png" },
    { name: "MongoDB", src: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem-2048x1280.jpg" },
    { name: "MySQL", src: "https://pngimg.com/d/mysql_PNG23.png" },
    { name: "Prisma", src: "https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png" },
    { name: "C++", src: "https://freepnglogo.com/images/all_img/c-logo-a2fa.png" },
    { name: "Python", src: "https://pngteam.com/images/python-logo-png-1024x1024_7d6af8d1_transparent_2023e8.png.png" },
    { name: "Java", src: "https://tse3.mm.bing.net/th/id/OIP.AvTWT6w8Ej4LISxV71uTwwHaNj?pid=Api&P=0&h=180" },
    { name: "Git", src: "https://www.flexmind.co/wp-content/uploads/2020/04/logo-git-icon-1024x1024.png" },
    { name: "Github", src: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" },
    { name: "Vercel", src: "https://logowik.com/content/uploads/images/vercel1868.jpg" },
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#3B82F6]">
        Technologies & Tools in My Skillset
      </h2>

      {/* Infinite Scrolling Container */}
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-scroll">
          {[...techList, ...techList].map((tech, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 w-44 h-44 m-2 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #00094B 0%, #0a0f1f 50%, #00094B 100%)",
              }}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-20 h-20 object-contain relative z-10" // Increased image size
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300 z-20">
                <p className="text-white text-lg font-semibold">{tech.name}</p> {/* Larger text */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: calc(200%);
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;
