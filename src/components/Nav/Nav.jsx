import React from "react";
import Radio from "../Radio/Radio";

const Nav = () => {
  return (
    <div className="shadow-lg flex items-center flex-row justify-around h-[100px] mb-44 w-screen border-b border-[#ffffff14]">
      <div />
      <div>
        <Radio />
      </div>
      <div className="flex items-center">
        <p className="text-3xl text-[#8968ff] mr-2 mb-1">•</p>
        <p className="text-sm font-normal">Fortaleza, CE</p>
      </div>
    </div>
  );
};

export default Nav;
