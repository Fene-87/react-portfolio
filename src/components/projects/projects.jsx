// import React, { useEffect, useState } from "react";
// import photo from "/assets/prof-image.jpg";
// import ProjectCard from "../ProjectCard";
// import { projectsDetails } from "../../data/ProjectsData";
// // import Dropdown from "react-dropdown";
// // import 'react-dropdown/style.css';

// const Projects = () => {
//     const [filterValue, setFilterValue] = useState('all');

//     // useEffect(() => {
//     //     console.log(filterValue);
//     //   }, [filterValue]);

//     const handleFilter = (e) => {
//         e.preventDefault();
//         setFilterValue(e.target.value);
//     }

//     return (
//         <div id="portfolio" className="w-full p-5 pt-20 md:p-20">
//             <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-0 md:mt-10">
//                 <h2 className="text-[#091e42] text-center md:text-left font-medium text-[32px] md:text-[40px] max-w-full md:min-w-[320px]">My Recent Works</h2>
//                 <div>
//                    <hr className="w-48 md:w-[60rem] h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-900"></hr>
//                 </div>
//             </div>

//             <div className="flex flex-col  md:flex-row md:gap-20 mt-16">
//                 <img src={photo} alt="Mark-profile" className=" h-[237px] md:h-[448px] w-[327px] md:w-[684px] object-contain self-center" />
//                 <div>
//                     <h3 className="text-[#091e42] text-[32px] md:text-[40px] font-medium mt-10 md:mt-0">Multi-Post Stories</h3>
//                     <p className="text-[#091e42] text-[16px] md:text-[24px] w-[350px] md:w-[448px] leading-[25px] md:leading-[30px] mt-5 md-mt-10 ">
//                         Below you'll find an impressive line-up of my remarkable projects,
//                         each a testament to my remarkable passion and expertise. Join me
//                         as we explore this diverse array of projects, where artistry meets
//                         functionality, and innovation knows no bounds.
//                     </p>
//                 </div>
//             </div>

//             <div className="mt-10 md:mt-16">
//                 <div className="flex items-center gap-5 text-[#091e42] text-[16px] md:text-[24px]">
//                     <h4>Filter by</h4>
//                     <select 
//                     name="" 
//                     id=""
//                     value={filterValue}
//                     className="text-[12px] md:text-[20px] outline-none"
//                     onChange={handleFilter}
//                     >
//                         <option value="all">All</option>
//                         <option value="MERN">MERN</option>
//                         <option value="react">React</option>
//                         <option value="Ruby on Rails">Ruby on Rails</option>
//                         <option value="python">Python/Django</option>
//                     </select>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
//                     {projectsDetails.map((detail, index) => (
//                         <ProjectCard 
//                           key={index}
//                           itemDetail={detail}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Projects;

import React, { useEffect, useState } from "react";
import photo from "/assets/prof-image.jpg";
import ProjectCard from "../ProjectCard";
import { projectsDetails } from "../../data/ProjectsData";

const Projects = () => {
  const [filterValue, setFilterValue] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  // When filter changes, reset back to first 6
  useEffect(() => {
    setShowAll(false);
  }, [filterValue]);

  // Filter using the `technologies` array
  const filteredProjects = projectsDetails.filter((project) => {
    if (filterValue === "all") return true;

    const fv = filterValue.toLowerCase();

    // Match if ANY technology string contains the filter value (case-insensitive)
    return project.technologies?.some((tech) =>
      tech.toLowerCase().includes(fv)
    );
  });

  // Limit to 6 unless "show all" is toggled
  const projectsToDisplay = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div id="portfolio" className="w-full p-5 pt-20 md:p-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-0 md:mt-10">
        <h2 className="text-[#091e42] text-center md:text-left font-medium text-[32px] md:text-[40px] max-w-full md:min-w-[320px]">
          My Recent Works
        </h2>
        <div>
          <hr className="w-48 md:w-[60rem] h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-900" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-20 mt-16">
        <img
          src={photo}
          alt="Mark-profile"
          className="h-[237px] md:h-[448px] w-[327px] md:w-[684px] object-contain self-center"
        />
        <div>
          <h3 className="text-[#091e42] text-[32px] md:text-[40px] font-medium mt-10 md:mt-0">
            Multi-Post Stories
          </h3>
          <p className="text-[#091e42] text-[16px] md:text-[24px] w-[350px] md:w-[448px] leading-[25px] md:leading-[30px] mt-5 md:mt-10">
            Below you'll find an impressive line-up of my remarkable projects,
            each a testament to my remarkable passion and expertise. Join me
            as we explore this diverse array of projects, where artistry meets
            functionality, and innovation knows no bounds.
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-16">
        {/* <div className="flex items-center gap-5 text-[#091e42] text-[16px] md:text-[24px]">
          <h4>Filter by</h4>
          <select
            id="project-filter"
            value={filterValue}
            className="text-[12px] md:text-[20px] outline-none"
            onChange={handleFilter}
          >
            <option value="all">All</option>
            <option value="ASP.NET Core">ASP.NET Core</option>
            <option value="Python FastAPI">Python FastAPI</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
        </div> */}

        <div className="flex flex-wrap items-center justify-between gap-4 text-[#091e42]">
            <div className="flex flex-col">
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-slate-500">
                Filter projects
                </span>
                <span className="text-xs md:text-sm text-slate-500">
                Narrow down by tech stack
                </span>
            </div>

            <div className="flex items-center gap-3 bg-white/80 border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                {/* Icon */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                <svg
                    className="h-4 w-4 text-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.7"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5h18M6 10h12M10 15h4"
                    />
                </svg>
                </div>

                <span className="hidden md:inline text-xs md:text-sm text-slate-500">
                Tech stack
                </span>

                <select
                id="project-filter"
                value={filterValue}
                onChange={handleFilter}
                className="bg-transparent text-sm md:text-base font-medium text-[#091e42] outline-none border-none focus:ring-0 focus:outline-none cursor-pointer"
                >
                    <option value="all">All</option>
                    <option value="ASP.NET Core">ASP.NET Core</option>
                    <option value="Python FastAPI">Python FastAPI</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Elixir">Elixir</option>
                </select>
            </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projectsToDisplay.map((detail, index) => (
            <ProjectCard key={detail.id ?? index} itemDetail={detail} />
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 rounded-full border border-[#091e42] text-[#091e42] text-sm md:text-base hover:bg-[#091e42] hover:text-white transition-colors"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

