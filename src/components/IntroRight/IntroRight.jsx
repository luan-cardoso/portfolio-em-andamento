import React from "react";
import Topic from "../Topic/Topic";

const IntroRight = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Topic text="Introducing Myself." />
      </div>
      <div>
        <p className="text-4xl font-[Inter] tracking-wider">
          Brasileiro, Graduando em Engenharia de Software e Desenvolvedor.
        </p>
      </div>
      <div className="">
        <p className="text-base leading-tight">
          Atualmente, foco no desenvolvimento web de software. Tenho experiência
          prática nas seguintes tecnologias: Typescript, ReactJS e NodeJS com
          ExpressJS, além de conhecimentos em processos de software,
          metodologias ágeis e boas práticas de desenvolvimento.
        </p>
      </div>
      <div>
        <p>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=javascript,typescript,react,tailwind,next,nodejs,express&theme=dark&perline=4" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default IntroRight;
