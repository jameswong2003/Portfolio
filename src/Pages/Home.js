import React from "react";
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Project from './components/Project';

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