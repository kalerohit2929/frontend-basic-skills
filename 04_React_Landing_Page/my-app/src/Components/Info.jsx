import React from 'react'

const Info = () => {
    return (
        <div>
            <div className="min-h-screen">
                {/* Brand logos */}
                <div className="p-4 md:p-6">
                    <div
                        className="flex flex-wrap justify-center md:justify-between
                 gap-6 md:gap-0
                 px-4 md:px-[100px]
                 w-full min-h-[150px]
                 items-center rounded-2xl"
                    >
                        {["7.png", "2.png", "3.png", "4.png", "5.png", "8.png"].map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt=""
                                className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]
                     object-contain"
                            />
                        ))}
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-center text-2xl md:text-3xl mb-6">
                    The Minds Behind Orus
                </h1>

                {/* Team cards */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
               gap-6 px-4 md:px-8 place-items-center"
                >
                    {[
                        { img: "./a1.png", role: "CEO" },
                        { img: "./a2.png", role: "Director" },
                        { img: "./a3.png", role: "Manager" },
                    ].map((member, i) => (
                        <div
                            key={i}
                            className="w-full max-w-[350px] h-[300px] sm:h-[330px] md:h-[350px]
                   bg-[#EDE4C2] rounded-2xl
                   flex flex-col justify-center items-center gap-5"
                        >
                            <img
                                src={member.img}
                                alt={member.role}
                                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]
                     object-contain"
                            />
                            <h1 className="text-2xl md:text-3xl">{member.role}</h1>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Info
