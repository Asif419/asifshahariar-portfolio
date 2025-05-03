'use client'
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [hoverImage] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] flex items-center justify-center bg-white px-6 py-12"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Text */}
        <div
          className="flex-1 text-center lg:text-left space-y-6 group"
          onMouseEnter={() => setHoverText(true)}
          onMouseLeave={() => setHoverText(false)}
        >
          <h1
            className={`text-4xl sm:text-5xl font-bold text-gray-900 leading-tight transition-all duration-500 ease-in-out ${hoverText ? "text-5xl" : ""
              }`}
          >
            Asif Shahariar
          </h1>
          <h2 className={`text-lg text-gray-600 font-semibold uppercase tracking-wide transition-all ease-in-out duration-200 ${hoverText || hoverImage ? "text-xl font-bold" : ""
            }`}>
            Full-stack Developer
          </h2>
          <p
            className={`text-gray-600 max-w-xl transition-all duration-500 ease-in-out ${hoverText || hoverImage ? "text-yello-700 text-xl" : ""
              }`}
          >
            Passionate developer from Bangladesh, currently studying MSc in Data Science at Tampere University. Skilled in building fast and scalable web applications using modern technologies.
          </p>
          <div>
            <a
              href="#contact"
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
              className="inline-block border border-gray-300 bg-white text-gray-700 font-medium rounded-full px-6 py-3 transition-all duration-500 ease-in-out hover:border-gray-400 hover:text-blue-600 hover:scale-110"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div
          className="flex justify-center"
        >
          <Image
            width={300} // Set the width you want
            height={300} // Set the height you want
            src={hoverButton ? "/assets/images/asif-avatar-3.png" : hoverText || hoverImage ? "/assets/images/asif-avatar-2.png" : "/assets/images/asif-avatar.png"}
            alt="Asif Shahariar"
            className="max-w-xs w-full h-auto rounded-full border-4 border-white shadow-lg object-cover transition-all duration-1000 ease-in-out"
          />
          {/* <img
            src={
              hoverButton
                ? "/assets/images/asif-avatar-3.png"
                : hoverText || hoverImage
                  ? "/assets/images/asif-avatar-2.png"
                  : "/assets/images/asif-avatar.png"
            }
            alt="Asif Shahariar"
            className={`max-w-xs w-full h-auto rounded-full border-4 border-white shadow-lg object-cover transition-all duration-1000 ease-in-out ${hoverText || hoverImage ? "scale-110" : ""
              }`}
          /> */}
        </div>
      </div>
    </section>
  );
}