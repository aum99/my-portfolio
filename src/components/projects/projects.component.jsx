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
      <SectionHeader>Recent Projects </SectionHeader>
      <ProjectsContainer>
        <Project>
          <LinkHolder>
            <NavLink to="https://the-daily-buzzz.onrender.com/">
              Deepfake Audio
              <br />
              Detection
            </NavLink>
          </LinkHolder>
          <ProjectInfo>
            <Header>System to safeguard against manipulated audio</Header>
            <Description>
              Implemented a robust backend for real-time audio processing,
              utilizing cutting-edge deep learning models.
            </Description>
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1707732190/Screenshot_2024-02-12_at_3.32.29_PM_bkbmmn.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1707732190/Screenshot_2024-02-12_at_3.32.12_PM_auvsr8.png" />
            </ImageContainer>
            <Description>
              Trained on diverse datasets to excel in recognizing subtle
              patterns indicative of deepfake audio, offering a reliable defense
              against malicious manipulation.
            </Description>
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1707732191/Screenshot_2024-02-12_at_3.32.40_PM_ttrhop.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1707732191/Screenshot_2024-02-12_at_3.32.47_PM_qsodln.png" />
            </ImageContainer>
          </ProjectInfo>
        </Project>
        <Project>
          <LinkHolder>
            <NavLink to="https://the-daily-buzzz.onrender.com/">
              Doodle <br /> Hub
            </NavLink>
          </LinkHolder>
          <ProjectInfo>
            <Header>Multiplayer drawing app using websockets</Header>
            <Description>
              A multiplayer drawing app facilitating real-time collaborative
              sketching. With a seamless interface and instant communication,
              users can create and share drawings with friends
            </Description>
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1707731713/Screenshot_2024-02-12_at_3.20.29_PM_oqyuot.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1707731713/Screenshot_2024-02-12_at_3.24.50_PM_o48pn4.png" />
            </ImageContainer>
            <Description>
              Whether for brainstorming or casual fun, DoodleHub offers an
              interactive platform for collaborative artistry.
            </Description>
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1707731954/Screenshot_2024-02-12_at_3.27.37_PM_jfk2ju.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1707731954/Screenshot_2024-02-12_at_3.28.46_PM_q8yfti.png" />
            </ImageContainer>
          </ProjectInfo>
        </Project>
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
            <NavLink to="https://the-daily-buzzz.onrender.com/">
              Aum
              <br />
              Enterprises
            </NavLink>
          </LinkHolder>
          <ProjectInfo>
            <Header>Ecommerece website built using React Js</Header>
            <Description>
              Discover a plethora of mechanical spare part products with high
              quality for all your hardware needs
            </Description>
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1691558853/Screenshot_2023-08-09_at_10.53.28_AM_tpbfwu.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1691558847/Screenshot_2023-08-09_at_10.54.47_AM_mwkl43.png" />
            </ImageContainer>
            <Description>
              Specific products fabricated as per you requirements and
              convenience.
            </Description>
            <ImageContainer data-aos="fade-up">
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1691558841/Screenshot_2023-08-09_at_10.54.06_AM_oy1uqy.png" />
              <Image src="https://res.cloudinary.com/damon753y/image/upload/v1691558839/Screenshot_2023-08-09_at_10.54.22_AM_njs8lg.png" />
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
