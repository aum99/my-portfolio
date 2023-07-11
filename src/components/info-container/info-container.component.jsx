import React, { Fragment } from "react";
import { Cursor, TextContainer, TimeContainer } from "./info-container.styles";

const Info = () => {
  return (
    <Fragment>
      <TextContainer>
        <TimeContainer>
          July 12, 2023 at 1:16 PM <Cursor>|</Cursor>{" "}
        </TimeContainer>
        Hello! I'm Aum Ravi Battul a fullstack web developer and web designer. I
        am currently a Final Year Student of Computer Science at Savitribai
        Phule Pune University.Throughout my academic career I have developed a
        passion of web development and have completed some projects. I am a
        quick learner and have strong communication skills, which i believe will
        allow me to excel in any role.
        <br />
        <br />
        I am always inspired by the tech industry, computers and software. In my
        spare time I explore adjacent areas to design such as 3D, development,
        mobile development and competitive coding. Also I play cricket and
        follow Indian Cricket Team
        <br />
        <br />
        Spending quality time with loved ones, engaging in meaningful
        conversations, and creating memories together is something I cherish
        deeply. Ultimately, my spare time is a valuable opportunity for me to
        express myself, recharge, and pursue activities that bring me joy and
        fulfillment.
      </TextContainer>
    </Fragment>
  );
};

export default Info;
