import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-black text-white py-6 mt-10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row
                  items-center justify-between gap-4">

    {/* Name */}
    <p className="text-sm">
      © {new Date().getFullYear()} <span className="font-semibold">Rohit Kale</span>
    </p>

    {/* Contact */}
    <div className="flex gap-6 text-sm">
      <a
        href="mailto:your@email.com"
        className="hover:text-primary transition"
      >
        kalerohit291@gmail.com
      </a>

      <a
        href="https://your-portfolio-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition"
      >
        
      </a>
    </div>
  </div>
</footer>

      
    </div>
  )
}

export default Footer

