'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import Image from 'next/image';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Passing form data directly to emailjs without casting
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }, // Ensure the field names match with the template parameters
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        toast.success('I have received your email!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
        })
        reset() // Reset form fields after successful email submission
      })
      .catch(() => {
        toast.error('Failed to send email. Please try again later.', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
        })
      })
  }

  return (
    <section
      id="contact"
      className="w-full py-20 px-6 bg-white text-center mb-12 scroll-mt-20"
    >
      {/* Left Side - Contact Form */}
      <div>
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-12">Contact Me</h2>

        <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5 flex flex-col items-center gap-6">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="w-full p-3 border-b-2 border-gray-200 shadow-2xl hover:border-gray-300 hover:rounded-2xl focus:outline-none focus:border-gray-500 focus:rounded-2xl text-sm sm:text-base"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                  className="w-full p-3 border-b-2 border-gray-200 shadow-2xl hover:border-gray-300 hover:rounded-2xl  focus:outline-none focus:border-gray-500 focus:rounded-2xl text-sm sm:text-base"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  {...register("message", { required: true })}
                  className="w-full p-3 border-b-2 border-gray-200 shadow-2xl hover:border-gray-300 hover:rounded-2xl  focus:outline-none focus:border-gray-500 focus:rounded-2xl text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block border border-gray-300 bg-white text-gray-700 font-medium rounded-full px-6 py-3 transition-all duration-500 ease-in-out hover:border-gray-400 hover:text-blue-600 hover:scale-110"
              >
                Send Email
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-full"></div>

          {/* Right Side - Social Media Icons */}
          <div className="md:w-2/5 flex sm:flex-row md:flex-col items-center gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/Asif419"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <Image
                width={118}
                height={118}
                src="/assets/icons/github.svg"
                alt="GitHub"
                className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-125"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/asifshahariar419/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <Image
                width={118}
                height={118}
                src="/assets/icons/linkedin.png"
                alt="LinkedIn"
                className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-125"
              />
            </a>

            <a
              href="https://www.facebook.com/asifshahariar419/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <Image
                width={118}
                height={118}
                src="/assets/icons/facebook.png"
                alt="Facebook"
                className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}