import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = () => {
    const [closedMenu, setClosedMenu] = useState(false);
    const toggleMenu = () => {
        setClosedMenu(!closedMenu)
    }

    return (
        <div className="md:flex fixed w-full items-center justify-between bg-[#3e3c3c] text-white mx-auto shadow-md">
            <div className="flex items-center justify-between bg-[#3e3c3c] p-5">
              <h1 className="text-[22px] cursor-pointer">Mark Fenekayas</h1>
              <FontAwesomeIcon icon={closedMenu ? faX : faBars} onClick={toggleMenu} className="cursor-pointer md:hidden" />
            </div>
            
            <ul className={`h-[100vh] md:h-[3vh] md:flex z-[-1] bg-[#3e3c3c] md:z-auto absolute md:static items-center gap-10 top-[-400px] transition-all
                ease-in duration-500 w-full md:w-auto left-0 p-5 ${closedMenu ? 'top-[4.8rem]' : 'top-[-700px]'}`}>
                <li className="cursor-pointer hover:text-[#d3d3d3]">Portfolio</li>
                <li className="cursor-pointer hover:text-[#d3d3d3] my-10 md:my-0">About</li>
                <li className="cursor-pointer hover:text-[#d3d3d3] my-10 md:my-0">Blog</li>
                <li className="cursor-pointer hover:text-[#d3d3d3] my-10 md:my-0">Contact</li>
            </ul>
            
            {/* <ul className="md:hidden">
                <li className="border-[#d3d3d3]">Portfolio</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul> */}
        </div>
    )
};

export default Navbar;
