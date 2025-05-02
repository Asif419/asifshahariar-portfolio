'use client'

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-20 px-6 bg-white text-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>

        <div className="flex flex-col gap-8 text-left">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Software Engineer
            </h3>
            <p className="text-gray-600">ULTRA-X BD</p>
            <p className="text-sm text-gray-500">Jun 2021 – Dec 2021</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 text-sm space-y-1">
              <li>Built full-stack web apps with React.js and Node.js</li>
              <li>Designed and consumed RESTful APIs</li>
              <li>Improved system performance by 20%</li>
              <li>Used MongoDB for scalable database management</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Teaching Assistant & Student Prefect
            </h3>
            <p className="text-gray-600">Daffodil International University</p>
            <p className="text-sm text-gray-500">2020 – 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 text-sm space-y-1">
              <li>Guided students in Microprocessor and Fundamentals labs</li>
              <li>Supported faculty in lecture sessions and lab assessments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}