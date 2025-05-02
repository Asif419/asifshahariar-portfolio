'use client'

export default function Education() {
  return (
    <section
      id="education"
      className="w-full py-20 px-6 bg-gray-50 text-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tampere University Card (Left) */}
          <div className="bg-white p-6 border-2 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <img
              src="/assets/images/tampere.png"
              alt="Tampere University"
              className="w-32 h-32 mb-4 rounded-full object-cover transition-all duration-300 group-hover:w-40 group-hover:h-40 group-hover:mb-6 group-hover:-translate-y-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-blue-600 group-hover:text-3xl">
              MSc in Data Science
            </h3>
            <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">Tampere University, Finland</p>
            <p className="text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-700">2023 – 2025 (Thesis ongoing)</p>
          </div>

          {/* Daffodil International University Card (Right) */}
          <div className="bg-white p-6 border-2 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <img
              src="/assets/images/daffodil.png"
              alt="Daffodil International University"
              className="w-32 h-32 mb-4 rounded-full object-cover transition-all duration-300 group-hover:w-40 group-hover:h-40 group-hover:mb-6 group-hover:-translate-y-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-blue-600 group-hover:text-2xl">
              BSc in Computer Science and Engineering
            </h3>
            <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800 group-hover:text-">Daffodil International University, Bangladesh</p>
            <p className="text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-700">
              Completed: 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}