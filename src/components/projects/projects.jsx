import React from "react";

const Projects = () => {
    return (
        <div className="h-full w-full p-5 pt-20 md:p-20">
            <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-0 md:mt-10">
                <h2 className="text-[#091e42] text-center md:text-left font-medium text-[32px] md:text-[40px] max-w-full md:min-w-[320px]">My Recent Works</h2>
                <div>
                   <hr class="w-48 md:w-[60rem] h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-900"></hr>
                </div>
            </div>

            <div>
                <div>
                    <h3>Multi-Post stories</h3>
                    <p>
                        Below you'll find an impressive line-up of my remarkable projects,
                        each a testament to my remarkable passion and expertise. Join me
                        as we explore this diverse array of projects, where artistry meets
                        functionality, and innovation knows no bounds.
                    </p>
                </div>
            </div>

            <div></div>
        </div>
    )
}

export default Projects;
