import React, { useEffect, useState } from "react";
import photo from "/assets/prof-image.jpg";
import ProjectCard from "../ProjectCard";
// import Dropdown from "react-dropdown";
// import 'react-dropdown/style.css';

const Projects = () => {
    const projectDetails = [
        {
          name: 'Book Ease Reservation',
          description: 'This is a robust and user-friendly Room Reservation Application built using the Ruby on Rails framework. With its intuitive interface and powerful features, this app aims to streamline the hotel booking process for both guests and hotel staff.',
          featuredImage: '/assets/Book-ease-home.PNG',
          technologies: ['Ruby on Rails', 'React', 'PostgreSQL'],
          liveLink: 'https://book-ease.onrender.com/',
          sourceLink: 'https://github.com/Fene-87/hotel-room-reservation-front-end',
        },
      
        {
          name: 'Budget Tracker',
          description: 'Budget Tracker is a Ruby on Rails mobile web application designed to empower users in effectively managing their budgets. It provides a user-friendly interface and a range of features to assist users in budget planning and tracking.',
          featuredImage: '/assets/Budget-tracker.PNG',
          technologies: ['Ruby on Rails', 'PostgreSQL'],
          liveLink: 'https://budget-tracker-lkkh.onrender.com/',
          sourceLink: 'https://github.com/Fene-87/budget_app',
        },
      
        {
          name: 'Space Travellers Hub',
          description: 'A web application whose aim is to facilitate a company that provides commercial and scientific space travel services. The application gets real live data from the SpaceX API. It allows users to book rockets and join selected space missions.',
          featuredImage: '/assets/Space-travellers.PNG',
          technologies: ['React', 'Redux', 'SpaceX API'],
          liveLink: 'https://space-travelers-hub-bbxn.onrender.com/',
          sourceLink: 'https://github.com/Fene-87/space-travelers-hub',
        },
      
        {
          name: 'CryptoMetrics',
          description: 'CryptoMetrics is a comprehensive web application that provides users with detailed information about various cryptocurrencies. Stay up-to-date with real-time data, market trends, and key metrics for a wide range of digital currencies',
          featuredImage: '/assets/CryptoMetrics.PNG',
          technologies: ['React', 'Redux', 'CoinGecko API'],
          liveLink: 'https://cryptometrics.onrender.com/',
          sourceLink: 'https://github.com/Fene-87/cryptometrics',
        },
      
        {
          name: 'BookStore CMS',
          description: 'A simple React/Redux project that allows users to display a list of books, add a book , and delete a particular book.',
          featuredImage: '/assets/Bookstorecms.PNG',
          technologies: ['React', 'Redux'],
          liveLink: 'https://bookstore-i0bx.onrender.com/',
          sourceLink: 'https://github.com/Fene-87/Bookstore',
        },
      
        {
          name: 'Art Gallery',
          description: 'This simple web application is a cutting-edge web application designed to captivate art enthusiasts and create an immersive experience within the world of contemporary art. Whether you\'re an avid art collector, a curious newcomer, or simply seeking a dose of creative inspiration, this website is here to ignite your passion for the arts.',
          featuredImage: '/assets/Artgallery.PNG',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          liveLink: 'https://fene-87.github.io/Module-1-Capstone/',
          sourceLink: 'https://github.com/Fene-87/Module-1-Capstone',
        },
      ];

    const [filterValue, setFilterValue] = useState('all');

    // useEffect(() => {
    //     console.log(filterValue);
    //   }, [filterValue]);

    const handleFilter = (e) => {
        e.preventDefault();
        setFilterValue(e.target.value);
    }

    return (
        <div className="h-full w-full p-5 pt-20 md:p-20">
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
                    className="text-[12px] md:text-[20px]"
                    onChange={handleFilter}
                    >
                        <option value="all">All</option>
                        <option value="MERN">MERN</option>
                        <option value="react">React</option>
                        <option value="Ruby on Rails">Ruby on Rails</option>
                        <option value="python">Python/Django</option>

                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 pb-10">
                    {projectDetails.map((detail) => (
                        <ProjectCard 
                          itemDetail={detail}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;
