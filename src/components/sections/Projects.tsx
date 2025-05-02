'use client'

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Medicine Shop",
    description:
      "An online medicine e-commerce platform with user auth, admin panel, secure checkout, and full CRUD operations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Firebase"],
    github: "https://github.com/Asif419/medicine-shop-client",
  },
  {
    title: "Book Store",
    description:
      "A dynamic book marketplace with real-time search, authentication, and a seamless shopping experience.",
    tech: ["Next.js", "React", "Redux Toolkit", "Tailwind", "JWT"],
    github: "https://github.com/Asif419/book-store-client",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 bg-gray-50 text-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild className="w-full">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}