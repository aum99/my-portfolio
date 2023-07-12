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
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1689164448/buzz-1_q2wtis.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1689164431/buzz-2_msil7a.png" />
            </ImageContainer>
            <Description>
              From study tips and career advice to campus events and personal
              growth, the website covers a wide range of topics to help you
              navigate through your journey.
            </Description>
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1689164452/buzz-3_e0likc.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1689164432/buzz-4_xudnmc.png" />
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
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1689164461/todo-1_qnl57q.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1689164458/todo-3_xpuzym.png" />
            </ImageContainer>
            <Description>
              Integrated authentication and authorization functionalities,
              allowing user to securely register, login and maintain
              personalized to-do-lists
            </Description>
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1689164457/todo-4_rsoxzh.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1689164457/todo-2_kedjv9.png" />
            </ImageContainer>
          </ProjectInfo>
        </Project>
      </ProjectsContainer>
    </MainContainer>
  );
};

export default Projects;
