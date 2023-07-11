import { useNavigate } from "react-router";

import BarContainer from "../../components/bar-container/bar-container.component";
import Info from "../../components/info-container/info-container.component";

import {
  AboutImage,
  BackButton,
  Container,
  HeroInfo,
  HighlightSpan,
  Icon,
} from "./about.styles";
import TechContainer from "../../components/tech-container/tech-container.component";
import AboutEnd from "../../components/about-end/about-end.component";

const About = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <BackButton onClick={navigateToHome}>
        {" "}
        <Icon className="bx bx-left-arrow-alt"></Icon>{" "}
      </BackButton>
      <HeroInfo>
        I love working on front end projects especially on ones that require
        <HighlightSpan> minimalistic</HighlightSpan> work and I enjoy working on
        projects that allow me to continuously learn and stay updated with the
        latest web development trends and best practices.
      </HeroInfo>
      <BarContainer />
      <AboutImage />
      <Info />
      <TechContainer />
      <AboutEnd />
    </Container>
  );
};

export default About;
