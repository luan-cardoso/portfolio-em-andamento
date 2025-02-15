import React from "react";
import Topic from "../Topic/Topic";

const AboutMe = () => {
  return (
    <div className="">
      <Topic kanji="学生" text="About Me." />
      <p>
        Quem você é, sua formação e o que te atrai no desenvolvimento de
        software.
      </p>
      <p>
        Suas paixões, como resolver problemas, criar soluções inovadoras ou
        trabalhar com interfaces amigáveis.
      </p>
      <p>Algo pessoal que mostre sua autenticidade, como hobbies ou valores.</p>
    </div>
  );
};

export default AboutMe;
