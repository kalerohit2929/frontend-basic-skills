import React from 'react'

const Computer = () => {
    return (
        <div>
           <div className="min-h-screen mt-5 p-4 md:p-7">
  <div className="flex flex-col gap-10">

    {/* Card 1 */}
    <div
      className="w-full bg-black flex flex-col md:flex-row
                 p-4 md:p-6 justify-between items-center
                 rounded-xl h-auto md:h-[300px]"
    >
      {/* Image */}
      <div className="mb-6 md:mb-0">
        <img
          src="./offer_1.png"
          alt=""
          className="mx-auto md:mx-10 max-w-[220px] md:max-w-full"
        />
      </div>

      {/* Content */}
      <div
        className="bg-gradient-to-br from-primaryAlt to-primary
                   bg-clip-text text-transparent
                   text-center md:text-left mx-0 md:mx-10"
      >
        <h1 className="text-2xl md:text-4xl">Macbook Pro</h1>
        <h3 className="mt-2 text-sm md:text-base">
          This is a Macbook Pro nulla vulputate magna vel odio sagittis bibendium.
        </h3>

        <button
          className="w-[110px] h-[40px] bg-white text-black rounded-xl
                     mt-4 hover:bg-gradient-to-br from-primaryAlt to-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="w-full bg-black flex flex-col-reverse md:flex-row
                 p-4 md:p-6 justify-between items-center
                 rounded-xl h-auto md:h-[300px]"
    >
      {/* Content */}
      <div
        className="bg-gradient-to-br from-primaryAlt to-primary
                   bg-clip-text text-transparent
                   text-center md:text-left mx-0 md:mx-10"
      >
        <h1 className="text-2xl md:text-4xl">Lenovo</h1>
        <h3 className="mt-2 text-sm md:text-base">
          This is a Lenovo nulla vulputate magna vel odio sagittis bibendium.
        </h3>

        <button
          className="w-[110px] h-[40px] bg-white text-black rounded-xl
                     mt-4 hover:bg-gradient-to-br from-primaryAlt to-primary"
        >
          Add to Cart
        </button>
      </div>

      {/* Image */}
      <div className="mb-6 md:mb-0">
        <img
          src="./offer_2.png"
          alt=""
          className="mx-auto md:mx-10 max-w-[220px] md:max-w-full"
        />
      </div>
    </div>

  </div>
</div>

        </div>
    )
}

export default Computer
