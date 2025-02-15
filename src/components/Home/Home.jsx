import React from "react";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  return (
    //max-width: 1025px
    <div className="h-fit max-w-[1025px] flex flex-col gap-44">
      <Intro />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default Home;
