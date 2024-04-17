import React, { useEffect, useState } from "react";
import photo from "/assets/prof-image.jpg";
import ProjectCard from "../ProjectCard";
import { projectsDetails } from "../../data/ProjectsData";
// import Dropdown from "react-dropdown";
// import 'react-dropdown/style.css';

const Projects = () => {
    const [filterValue, setFilterValue] = useState('all');

    // useEffect(() => {
    //     console.log(filterValue);
    //   }, [filterValue]);

    const handleFilter = (e) => {
        e.preventDefault();
        setFilterValue(e.target.value);
    }

    return (
        <div id="portfolio" className="w-full p-5 pt-20 md:p-20">
            <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-0 md:mt-10">
                <h2 className="text-[#091e42] text-center md:text-left font-medium text-[32px] md:text-[40px] max-w-full md:min-w-[320px]">My Recent Works</h2>
                <div>
                   <hr className="w-48 md:w-[60rem] h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-900"></hr>
                </div>
            </div>

            <div className="flex flex-col  md:flex-row md:gap-20 mt-16">
                <img src={photo} alt="Mark-profile" className="border h-[237px] md:h-[448px] w-[327px] md:w-[684px] object-contain self-center" />
                <div>
                    <h3 className="text-[#091e42] text-[32px] md:text-[40px] font-medium mt-10 md:mt-0">Multi-Post Stories</h3>
                    <p className="text-[#091e42] text-[16px] md:text-[24px] w-[350px] md:w-[448px] leading-[25px] md:leading-[30px] mt-5 md-mt-10 ">
                        Below you'll find an impressive line-up of my remarkable projects,
                        each a testament to my remarkable passion and expertise. Join me
                        as we explore this diverse array of projects, where artistry meets
                        functionality, and innovation knows no bounds.
                    </p>
                </div>
            </div>

            <div className="mt-10 md:mt-16">
                <div className="flex items-center gap-5 text-[#091e42] text-[16px] md:text-[24px]">
                    <h4>Filter by</h4>
                    <select 
                    name="" 
                    id=""
                    value={filterValue}
                    className="text-[12px] md:text-[20px] outline-none"
                    onChange={handleFilter}
                    >
                        <option value="all">All</option>
                        <option value="MERN">MERN</option>
                        <option value="react">React</option>
                        <option value="Ruby on Rails">Ruby on Rails</option>
                        <option value="python">Python/Django</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
                    {projectsDetails.map((detail, index) => (
                        <ProjectCard 
                          key={index}
                          itemDetail={detail}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;
