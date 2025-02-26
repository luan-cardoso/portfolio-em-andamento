import React from "react";
import 'animate.css';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center flex-row justify-around h-[100px] mb-36 w-full border-b border-[#ffffff14]">
      <div />
      <h1 class="animate__animated animate__fadeInDown">
      <div className="border border-[#ffffff14] px-8 py-3 rounded-[4px] flex flex-row gap-6 text-sm font-medium font-[Inconsolata] tracking-wider text-[#bbb]">
        <Link to="/">
          <div className="hover:text-[#8968ff] hover:-translate-y-[2px] duration-300">
            Home
          </div>
        </Link>
        <Link to="/projects">
          <div className="hover:text-[#8968ff] hover:-translate-y-[2px] duration-300">
            Projetos
          </div>
        </Link>
        <Link to="/about">
          <div className="hover:text-[#8968ff] hover:-translate-y-[2px] duration-300">
            Sobre mim
          </div>
        </Link>
      </div>
      </h1>
      <h1 class="animate__animated animate__fadeInDown animate__delay-1s">
        <div className="flex items-center">
          <p className="text-3xl text-[#8968ff] mr-2 mb-1">•</p>
          <p className="text-sm font-normal">Fortaleza, CE</p>
        </div>
      </h1>
    </div>
  );
};

export default Nav;
