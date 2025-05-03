'use client'

import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 bg-white text-center scroll-mt-20"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-8 text-lg">
          I am currently open to full-stack developer roles in Europe. Feel free to reach out!
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:asshah419@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <Mail className="w-5 h-5" /> asshah419@gmail.com
          </a>
          <a
            href="https://github.com/Asif419"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
          >
            <Github className="w-5 h-5" /> github.com/Asif419
          </a>
          <a
            href="https://linkedin.com/in/asifshahariar419"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition"
          >
            <Linkedin className="w-5 h-5" /> linkedin.com/in/asifshahariar419
          </a>
        </div>
      </div>
    </section>
  )
}