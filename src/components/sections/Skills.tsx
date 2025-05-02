'use client'

export default function Skills() {
  const skills = {
    Languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C'],
    Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    Backend: ['Node.js', 'Express.js'],
    Databases: ['MongoDB', 'MySQL'],
    Tools: ['Git', 'Docker', 'Firebase', 'JWT', 'Stripe', 'VS Code'],
  }

  return (
    <section
      id="skills"
      className="w-full py-20 px-6 bg-white text-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-gray-600">
                    • {item}
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