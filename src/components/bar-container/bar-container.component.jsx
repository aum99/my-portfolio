import {
  ProjectBarsContainer,
  ProjectBar,
  InfoContainer,
  ProjectDescription,
  ProjectName,
  Icon,
} from "./bar-container.styles";

const BarContainer = () => {
  return (
    <ProjectBarsContainer>
      <ProjectBar to="https://aum-enterprises.netlify.app/" data-aos="fade-in">
        <InfoContainer>
          <ProjectName>Aum Enterprises</ProjectName>{" "}
          <ProjectDescription>
            Ecommerce wesite using React Js
          </ProjectDescription>
        </InfoContainer>
        <Icon className="bx bx-right-arrow-alt"></Icon>
      </ProjectBar>
      <ProjectBar to="https://the-daily-buzzz.onrender.com/" data-aos="fade-in">
        <InfoContainer>
          <ProjectName>The Daily Buzzz</ProjectName>{" "}
          <ProjectDescription>
            Blogpage website using Python Flask
          </ProjectDescription>
        </InfoContainer>
        <Icon className="bx bx-right-arrow-alt"></Icon>
      </ProjectBar>
      <ProjectBar
        to="https://get-it-done-n0j5.onrender.com/"
        data-aos="fade-in"
      >
        <InfoContainer>
          <ProjectName>Get It Done</ProjectName>{" "}
          <ProjectDescription>
            To-do-list wesite using Python Flask
          </ProjectDescription>
        </InfoContainer>
        <Icon className="bx bx-right-arrow-alt"></Icon>
      </ProjectBar>
    </ProjectBarsContainer>
  );
};

export default BarContainer;
