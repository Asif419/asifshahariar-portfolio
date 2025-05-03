'use client'

import Image from "next/image"


const projects = [
  {
    title: "Medicine Shop",
    description:
      "An online medicine e-commerce platform with user auth, admin panel, secure checkout, and full CRUD operations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Firebase"],
    github: "https://github.com/Asif419/medicine-shop-client",
    image: "/assets/images/project-1.png", // Added image path
  },
  {
    title: "Book Store",
    description:
      "A dynamic book marketplace with real-time search, authentication, and a seamless shopping experience.",
    tech: ["Next.js", "React", "Redux Toolkit", "Tailwind", "JWT"],
    github: "https://github.com/Asif419/book-store-client",
    image: "/assets/images/project-2.png", // Added image path
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 bg-gray-50 text-center mb-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>

        <div className="grid grid-cols-1 gap-8 justify-center text-center mb-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full border border-gray-200 rounded-2xl p-6 shadow-lg bg-white mx-auto group hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Image */}
                <div className="w-full">
                  <Image
                    width={300}
                    height={300}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Right Side - Description and Tech */}
                <div className="w-full md:w-2/3 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 px-2 py-1 rounded-full border-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* View Button */}
                  <a
                    className="inline-block border border-blue-600 bg-white text-gray-700 font-medium rounded-full px-6 py-3 transition-all duration-500 ease-in-out hover:border-gray-400 hover:text-blue-600 hover:scale-110 group-hover:scale-105"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}