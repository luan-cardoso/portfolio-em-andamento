import React from "react";

const Topic = (prop) => {
  return (
    <div className="flex flex-row items-center gap-2 mb-1">
      <span className="h-[1px] w-6 bg-[#8968ff]"></span>
      <p className="font-bold text-lg text-[#8968ff]">{prop.text}</p>
    </div>
  );
};

export default Topic;
