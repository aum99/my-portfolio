import {
  CheckLink,
  ConnectHeader,
  Info,
  MainContainer,
  SocialLink,
  SocialsContainer,
} from "./footer.styles";

const Footer = () => {
  return (
    <MainContainer>
      <ConnectHeader>Lets Connect!</ConnectHeader>
      <SocialsContainer>
        <SocialLink to="https://www.instagram.com/be.aum/">
          Instagram
        </SocialLink>
        <SocialLink to="https://www.linkedin.com/in/aum-battul-4b42801bb/">
          Linkedin
        </SocialLink>
        <SocialLink to="https://github.com/aum99">Github</SocialLink>
      </SocialsContainer>
      <Info>
        I designed and built this website using ReactJS. Check on{" "}
        <CheckLink to="https://github.com/aum99">Github</CheckLink>{" "}
      </Info>
      <Info>
        Lets meet on{" "}
        <CheckLink to="https://www.instagram.com/be.aum/">Linkedin</CheckLink>{" "}
        or talk over email{" "}
        <CheckLink to="mailto:aumbattul99@gmail.com">
          aumbattul99@gmail.com
        </CheckLink>
      </Info>
    </MainContainer>
  );
};

export default Footer;
