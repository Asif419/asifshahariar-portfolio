'use client'

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] flex items-center justify-center bg-white px-6 text-center"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Hi, I'm <span className="text-blue-600">Asif Shahariar</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 mb-6">
          Full-stack Developer • MSc in Data Science at Tampere University
        </h2>
        <p className="text-gray-500 mb-8">
          I build fast, scalable, and user-friendly web applications using modern JavaScript technologies like React, Next.js, and Node.js.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}