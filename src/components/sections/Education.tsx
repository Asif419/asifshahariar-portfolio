'use client'

export default function Education() {
  return (
    <section
      id="education"
      className="w-full py-20 px-6 bg-gray-50 text-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>

        <div className="flex flex-col gap-8 text-left">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">
              MSc in Data Science
            </h3>
            <p className="text-gray-600">Tampere University, Finland</p>
            <p className="text-sm text-gray-500">2023 – 2025 (Thesis ongoing)</p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">
              BSc in Computer Science and Engineering
            </h3>
            <p className="text-gray-600">Daffodil International University, Bangladesh</p>
            <p className="text-sm text-gray-500">Completed: 2022</p>
          </div>
        </div>
      </div>
    </section>
  )
}