'use client'

// import { useState } from "react";

export default function About() {
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-gray-50 text-center scroll-mt-20 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
        {/* Left Side: About Text */}
        <div className="lg:col-span-3 space-y-6 text-center lg:text-left relative">
          <h2
            className={`text-lg md:text-2xl text-center font-bold text-gray-900 py-2 px-4 border-2 border-b-2 group-hover:border-gray-300 group-hover:md:text-3xl transition-all duration-500 rounded-full`}
          >
            About Me
          </h2>
          {/* Image that replaces the text on hover */}
          {/* <div
            className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src="/assets/images/asif-avatar-4.png"
              alt="Asif Shahariar"
              className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div> */}
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block border-l-4 border-gray-300 h-full mx-6"></div>

        {/* Right Side: Description */}
        <div className="lg:col-span-8 text-lg text-gray-700 leading-relaxed">
          <p className="text-sm md:text-lg md:text-justify lg:text-left">
            I am Asif Shahariar, a passionate Full-stack Developer currently completing my MSc in Data Science at Tampere University, Finland.
            I have hands-on experience building scalable web applications using technologies like React, Node.js, TypeScript, and Next.js.
            Previously, I worked as a Software Engineer at ULTRA-X BD and contributed to academic research published by IEEE.
            I am driven by clean code, efficient problem-solving, and building user-focused solutions.
          </p>
        </div>
      </div>
    </section>
  );
}