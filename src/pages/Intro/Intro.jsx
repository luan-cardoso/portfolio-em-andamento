import React from "react";
import IntroLeft from "../../components/IntroLeft/IntroLeft";
import IntroRight from "../../components/IntroRight/IntroRight";

const Intro = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-0 mt-36">
      <IntroLeft />
      <IntroRight />
    </div>
  );
};

export default Intro;
