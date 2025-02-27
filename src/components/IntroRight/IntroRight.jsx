import React from "react";
import Topic from "../Topic/Topic";

const IntroRight = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Topic text="Introducing Myself." />
      </div>
      <div>
        <p className="text-4xl font-[Inconsolata] tracking-wide">
          Brasileiro, Graduando em Engenharia de Software e Desenvolvedor.
        </p>
      </div>
      <div>
        <p>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=javascript,typescript,react,next,tailwind,nodejs,express&theme=dark&perline=5" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default IntroRight;
