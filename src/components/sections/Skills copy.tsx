


'use client'

import { motion } from "framer-motion"

const skills = {
  Languages: [
    { name: 'TypeScript', icon: '/assets/icons/typescript.png', expertise: 4 },
    { name: 'JavaScript', icon: '/path/to/javascript-logo.png', expertise: 5 },
    { name: 'Python', icon: '/path/to/python-logo.png', expertise: 5 },
    { name: 'Java', icon: '/path/to/java-logo.png', expertise: 3 },
    { name: 'C', icon: '/path/to/c-logo.png', expertise: 4 },
  ],
  Frontend: [
    { name: 'React.js', icon: '/path/to/react-logo.png', expertise: 5 },
    { name: 'Next.js', icon: '/path/to/nextjs-logo.png', expertise: 4 },
    { name: 'Tailwind CSS', icon: '/path/to/tailwind-logo.png', expertise: 5 },
    { name: 'HTML5', icon: '/path/to/html5-logo.png', expertise: 5 },
    { name: 'CSS3', icon: '/path/to/css3-logo.png', expertise: 4 },
  ],
  Backend: [
    { name: 'Node.js', icon: '/path/to/node-logo.png', expertise: 5 },
    { name: 'Express.js', icon: '/path/to/express-logo.png', expertise: 4 },
  ],
  Databases: [
    { name: 'MongoDB', icon: '/path/to/mongodb-logo.png', expertise: 4 },
    { name: 'MySQL', icon: '/path/to/mysql-logo.png', expertise: 3 },
  ],
  Tools: [
    { name: 'Git', icon: '/path/to/git-logo.png', expertise: 5 },
    { name: 'Docker', icon: '/path/to/docker-logo.png', expertise: 4 },
    { name: 'Firebase', icon: '/path/to/firebase-logo.png', expertise: 4 },
    { name: 'JWT', icon: '/path/to/jwt-logo.png', expertise: 3 },
    { name: 'Stripe', icon: '/path/to/stripe-logo.png', expertise: 4 },
    { name: 'VS Code', icon: '/path/to/vscode-logo.png', expertise: 5 },
  ],
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 px-6 bg-white text-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{category}</h3>
              <ul className="flex flex-wrap gap-4 justify-center">
                {items.map((item) => (
                  <li key={item.name} className="group relative flex flex-col items-center w-full sm:w-auto">
                    {/* Skill icon without outer border */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-block p-3 rounded-full cursor-pointer transition-all"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </motion.div>
                    {/* Hover effect to show expertise stars */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-14 text-sm text-gray-700 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all flex flex-col items-center">
                      <span className="font-medium">{item.name}</span>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        {[...Array(item.expertise)].map((_, index) => (
                          <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-yellow-400">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.783.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}