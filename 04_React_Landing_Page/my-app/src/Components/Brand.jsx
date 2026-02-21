import React from 'react'

const Brand = () => {
  return (
    <div>
     <div className="min-h-screen px-4 md:px-8">
  {/* Grid instead of flex (best for responsiveness) */}
  <div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
               gap-6 mt-6 place-items-center"
  >
    {["16.png","12.png", "13.png", "15.png", "17.png", "18.png"].map((img, i) => (
      <div
        key={i}
        className="relative w-full max-w-[350px] h-[240px] sm:h-[260px] md:h-[300px]
                   bg-black rounded-2xl p-2
                   flex items-center justify-center
                   overflow-hidden group"
      >
        {/* Image */}
        <img
          src={`./${img}`}
          alt=""
          className="max-w-full max-h-full object-contain
                     transition-transform duration-300
                     group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
        />

        {/* Button */}
        <button
          className="absolute opacity-0 group-hover:opacity-100
                     transition-all duration-300
                     translate-y-6 group-hover:translate-y-0
                     px-6 py-3 bg-primary text-white rounded-full z-10"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>


    </div>
  )
}

export default Brand
