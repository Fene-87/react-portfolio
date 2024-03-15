import React from "react";
import Navbar from "../components/navbar/navbar";
import Info from "../components/info/info";
import Projects from "../components/projects/projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="absolute w-[100%] h-[100%]">
          <Navbar />
          <Info />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
    )
}

export default Home;
