import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="flex bg-black items-center justify-between px-8 py-4 shadow-md">
            <div className="text-3xl bg-gradient-to-br
    from-primaryAlt
    to-primary
    bg-clip-text
    text-transparent font-bold bg-black text-white w-10 h-10 flex items-center justify-center rounded-full">
                R
            </div>

            <nav className={`md:flex ${open ? "block" : "hidden"}`}>
                <ul className="md:flex gap-11 font-bold mr-10">
                    <li><a href="#" className="hover:text-[#FF6500] text-[20px] bg-gradient-to-br
    from-primaryAlt
    to-primary
    bg-clip-text
    text-transparent">HOME</a></li>
                    <li><a href="#" className="hover:text-[#FF6500]  text-[20px] bg-gradient-to-br
    from-primaryAlt
    to-primary
    bg-clip-text
    text-transparent">OFFER</a></li>
                    <li><a href="#" className="hover:text-[#FF6500]  text-[20px] bg-gradient-to-br
    from-primaryAlt
    to-primary
    bg-clip-text
    text-transparent">SHOP</a></li>
                    <li><a href="#" className="hover:text-[#FF6500]  text-[20px] bg-gradient-to-br
    from-primaryAlt
    to-primary
    bg-clip-text
    text-transparent">CONTACT</a></li>
                </ul>
            </nav>

            <button className="md:hidden" onClick={() => setOpen(!open)}>
                ☰
            </button>
        </header>
    )
}

export default Navbar
