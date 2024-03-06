import React from "react";
import Navbar from "../components/navbar/navbar";
import Info from "../components/info/info";
import Projects from "../components/projects/projects";

const Home = () => {
    return (
        <div className="absolute w-[100%] h-[100%]">
          <Navbar />
          <Info />
          <Projects />
        </div>
    )
}

export default Home;
