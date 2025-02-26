import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro/Intro.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import AboutMe from "../pages/AboutMe/AboutMe.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
};

export default AppRoutes;
