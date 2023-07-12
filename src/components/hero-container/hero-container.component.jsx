import {
  Content,
  Header,
  SubTitle,
  NavLink,
  Name,
} from "./hero-container.styles";

import WordAnimation from "../word-animation/word-animation.component";

const word = "fullstack developer";
const HeroContainer = () => {
  return (
    <Content>
      <Header data-aos="fade-in" data-aos-duration="3000">
        <SubTitle>
          about me & other things I do → <NavLink to="/about">see info</NavLink>
        </SubTitle>
        <Name>
          Aum Battul,
          <br />
          web designer &{" "}
          {word.split("").map((char, i) => {
            return <WordAnimation char={char} key={i} id={i} />;
          })}
        </Name>
      </Header>
    </Content>
  );
};

export default HeroContainer;
