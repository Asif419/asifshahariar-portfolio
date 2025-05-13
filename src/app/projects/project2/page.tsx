import Image from 'next/image'
import Link from 'next/link'

const Project2 = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Book Store</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3">
          <Image
            width={500}
            height={300}
            src="/assets/images/project-2.png" // Add the appropriate image path
            alt="Book Store"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>

        {/* Right Side - Project Overview */}
        <div className="w-full md:w-2/3 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            The **Book Store** is a dynamic book marketplace with features such as real-time search, user authentication, and a smooth shopping experience for users.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Used Technologies</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Next.js</li>
            <li>React</li>
            <li>Redux Toolkit</li>
            <li>TailwindCSS</li>
            <li>JWT Authentication</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Core Features</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Real-time search and filtering</li>
            <li>User authentication with JWT</li>
            <li>Product search and catalog</li>
            <li>Responsive design with TailwindCSS</li>
            <li>Cart and checkout functionality</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Major Challenges</h3>
          <p className="text-gray-600 mb-4">
            Major challenges included managing state with Redux, handling real-time search queries efficiently, and ensuring seamless user authentication using JWT tokens.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Future Plans</h3>
          <p className="text-gray-600 mb-4">
            Future improvements include adding a mobile app version, enhancing the user interface, and introducing more advanced filtering and recommendation systems.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/Asif419/book-store-client"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-blue-600 bg-white text-blue-600 font-medium rounded-full px-6 py-3 transition-all duration-500 ease-in-out hover:border-blue-500 hover:bg-blue-100 hover:scale-110"
            >
              View on GitHub
            </a>

            {/* Return to Home Button */}
            <Link href="/#projects" passHref>
              <button
                className="inline-block border border-gray-300 bg-white text-gray-700 font-medium rounded-full px-6 py-3 transition-all duration-500 ease-in-out hover:border-gray-400 hover:text-blue-600 hover:scale-110"
              >
                Return to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2