'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const Databases = [
  { name: 'MongoDB', icon: '/assets/icons/mongodb.png', expertise: 4 },
  { name: 'MySQL', icon: '/assets/icons/mysql.png', expertise: 4 },
]

export default function SkillsDB() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-7">
      {/* Left Side: Languages Title with Outer Line */}
      <div className="flex items-center pl-4 w-full md:w-[35%] justify-center">
        <h3 className="text-sm md:text-xl font-semibold text-gray-800 py-2 px-4 border-2 border-gray-300 rounded-full">
          Databases
        </h3>
      </div>

      {/* Right Side: Languages List with Hover Effects */}
      <div className="flex flex-wrap gap-4 justify-center w-full md:w-[65%]">
        {Databases.map((item) => (
          <div key={item.name} className="group relative flex flex-col items-center w-1/2 sm:w-1/2 md:w-auto">
            {/* Language icon */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block p-3 rounded-full cursor-pointer transition-all mb-2"
            >
              <Image
                width={128}
                height={128}
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-full"
              />
            </motion.div>

            {/* Hover effect to show expertise stars and name */}
            <div className="absolute left-1/2 -translate-x-1/2 top-14 text-sm text-gray-700 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all flex flex-col items-center">
              <span className="font-medium">{item.name}</span>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[...Array(item.expertise)].map((_, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.783.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}