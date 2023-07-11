import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1.5rem 7.5rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  @media (max-width: 750px) {
    gap: 2rem;
  }
`;

export const BackButton = styled.div`
  text-decoration: none;
  width: 88px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background-color: #f1eff0;
  cursor: pointer;
`;

export const HeroInfo = styled.p`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: #272727;
  @media (max-width: 570px) {
    font-size: 1.5rem;
  }
`;

export const HighlightSpan = styled.span`
  background: linear-gradient(90deg, #ee2a0f 30%, #b4b4b4 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Icon = styled.i`
  font-size: xx-large;
`;

export const AboutImage = styled.div`
  border-radius: 0.5rem;
  background-image: url("https://images.unsplash.com/photo-1593953443285-bf7335acbca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  height: 350px;
  background-position: center;
  background-size: cover;
`;
