import { Fragment } from "react";
import HeroContainer from "../../components/hero-container/hero-container.component";
import Projects from "../../components/projects/projects.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  return (
    <Fragment>
      <HeroContainer />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default Home;
