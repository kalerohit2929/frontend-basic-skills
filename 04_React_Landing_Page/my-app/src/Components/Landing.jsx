import React from 'react'

const Landing = () => {
    return (
        <div>
            <section className="  min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-black">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-br
    from-primaryAlt
    to-primary
    bg-clip-text
    text-transparent ">DOWNTOWN TECH LIVER</h1>
                    <p className="text-lg bg-gradient-to-br
    from-primaryAlt
    to-primary
    bg-clip-text
    text-transparent mb-[100px]">
                        The biggest computer shop in the area where customers come first.
                    </p>
                </div>
                <img
                    src="./home_img.png"
                    alt="Computer"
                    className="w-fit md:w-1/2 rounded-lg shadow-lg mt-5 mr-6 md:mt-0"
                />
            </section>
        </div>
    )
}

export default Landing
