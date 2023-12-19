import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const Home = () => {
    return(
        <>
            <Navbar />
            <Intro />
            <Experience />
            <Project />
            <Contact />
        </>
    )
}

export default Home