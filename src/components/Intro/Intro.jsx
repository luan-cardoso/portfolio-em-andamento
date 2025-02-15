import React from "react";
import IntroLeft from "../IntroLeft/IntroLeft";
import IntroRight from "../IntroRight/IntroRight";

const Intro = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-0">
      <IntroLeft />
      <IntroRight />
    </div>
  );
};

export default Intro;
