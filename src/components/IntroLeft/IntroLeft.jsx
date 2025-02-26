import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';
import { ReactTyped } from "react-typed";
import React from "react";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const IntroLeft = () => {
  return ( 
    <div className="flex flex-col justify-between">
      <div className="border border-[#ffffff14] shadow-[0_0_0px_1px_rgba(0,0,0,0.09)] rounded-[4px] w-fit">
        <h1 className="text-[70px] text-[#cecece] font-bold font-[Inter] leading-none tracking-wide mb-7 ml-10 mt-10 mr-10">
          Luan
          <br />
          Cardoso.
        </h1>
        <div className="mb-10 ml-10 font-[Inconsolata]">
          <Loader />
        </div>
      </div>

      <h1 class="animate__animated animate__fadeInUp animate__delay-1s">
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/luancardoso7_/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#cecece] text-3xl hover:text-[#8968ff] duration-300"
            />
          </a>
          <a href="https://github.com/luan-cardoso" target="_blank">
            <FontAwesomeIcon
              icon={faGithubAlt}
              className="text-[#cecece] text-3xl hover:text-[#8968ff] transition-all duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/in/luanc-santos/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-[#cecece] text-3xl hover:text-[#8968ff] transition-all duration-300 mr-5"
            />
          </a>
          <Button
            name="download cv"
            href="docs/luancardoso.pdf"
            file="docs/luancardoso.pdf"
          />
        </div>
      </h1>
    </div>
  );
};

export default IntroLeft;
