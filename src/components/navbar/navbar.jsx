import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex fixed w-full justify-between bg-[#3e3c3c] text-white mx-auto p-5 shadow">
            <h1 className="text-[22px] cursor-pointer">Mark Fenekayas</h1>
            <ul className="hidden md:flex gap-10">
                <li className="cursor-pointer hover:text-[#d3d3d3]">Portfolio</li>
                <li className="cursor-pointer hover:text-[#d3d3d3]">About</li>
                <li className="cursor-pointer hover:text-[#d3d3d3]">Blog</li>
                <li className="cursor-pointer hover:text-[#d3d3d3]">Contact</li>
            </ul>
            <FontAwesomeIcon icon={faBars} className="cursor-pointer md:hidden" />
            <ul className="md:hidden">
                <li><FontAwesomeIcon icon={faX} /></li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    )
};

export default Navbar;
