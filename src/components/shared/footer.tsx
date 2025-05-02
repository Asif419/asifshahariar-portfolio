'use client'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-gray-100 text-center text-sm text-gray-500">
      <div className="max-w-5xl mx-auto">
        <p>© {new Date().getFullYear()} Asif Shahariar. All rights reserved.</p>
        <p className="mt-1">
          Built with Next.js, Tailwind CSS, and 💙
        </p>
      </div>
    </footer>
  )
}