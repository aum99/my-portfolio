import {
  MainContainer,
  SectionHeader,
  NavLink,
  ProjectsContainer,
  LinkHolder,
  ProjectInfo,
  Header,
  Description,
  ImageContainer,
  Image,
  Project,
} from "./projects.styles";

import buzz1 from "../../iamges/buzz-1.png";
import buzz2 from "../../iamges/buzz-2.png";
import buzz3 from "../../iamges/buzz-3.png";
import buzz4 from "../../iamges/buzz-4.png";

import todo1 from "../../iamges/todo-1.png";
import todo2 from "../../iamges/todo-2.png";
import todo3 from "../../iamges/todo-3.png";
import todo4 from "../../iamges/todo-4.png";

const Projects = () => {
  return (
    <MainContainer>
      <SectionHeader>Recent Projects / 2023</SectionHeader>
      <ProjectsContainer>
        <Project>
          <LinkHolder>
            <NavLink to="https://the-daily-buzzz.onrender.com/">
              The
              <br />
              Daily Buzz
            </NavLink>
          </LinkHolder>
          <ProjectInfo>
            <Header>
              Dynamic blogpage application built using Python and Flask
            </Header>
            <Description>
              Explore diverse collection of articles, packed with valuable
              insights and personal experiences from students, professors, and
              known contributors.
            </Description>
            <ImageContainer>
              <Image src={buzz1} />
              <Image src={buzz2} />
            </ImageContainer>
            <Description>
              From study tips and career advice to campus events and personal
              growth, the website covers a wide range of topics to help you
              navigate through your journey.
            </Description>
            <ImageContainer>
              <Image src={buzz3} />
              <Image src={buzz4} />
            </ImageContainer>
          </ProjectInfo>
        </Project>
        <Project>
          <LinkHolder>
            <NavLink to="https://get-it-done-n0j5.onrender.com/">
              Get <br /> It Done
            </NavLink>
          </LinkHolder>
          <ProjectInfo>
            <Header>
              Feature rich to-do-list application to keep track of tasks
            </Header>
            <Description>
              The website has capabilities to handle task creation, modification
              and deletion
            </Description>
            <ImageContainer>
              <Image src={todo1} />
              <Image src={todo2} />
            </ImageContainer>
            <Description>
              Integrated authentication and authorization functionalities,
              allowing user to securely register, login and maintain
              personalized to-do-lists
            </Description>
            <ImageContainer>
              <Image src={todo3} />
              <Image src={todo4} />
            </ImageContainer>
          </ProjectInfo>
        </Project>
      </ProjectsContainer>
    </MainContainer>
  );
};

export default Projects;
