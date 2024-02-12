import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000;
`;

export const Project = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  @media (max-width: 650px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const SectionHeader = styled.h1`
  font-weight: 300;
  font-size: xx-large;
  margin: 5px;
  color: #fff;
  margin: 25px 100px;
  @media (max-width: 715px) {
    font-size: x-large;
    margin: 10px 50px;
    margin-top: 20px;
  }
`;

export const ProjectsContainer = styled.ul`
  position: relative;
  background-color: black;
  margin: 0;
  padding-left: 0;
  list-style: none;
  text-align: right;
  width: 100%;
  padding-bottom: 130px;
`;

export const NavLink = styled(Link)`
  position: relative;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  font-size: 3.5vw;
  letter-spacing: 0.02em;
  line-height: 0.9em;
  font-family: druk-wide;
  transition: color 0.5s, opacity 0.5s;
  aspect-ratio: 1;
  transition: 1s;
  cursor: pointer;
  &:hover {
    font-size: 4vw;
    -webkit-text-stroke: 2px #fff;
    color: #000;
    @media (max-width: 730px) {
      -webkit-text-stroke: 0.5px #fff;
    }
  }
`;

export const LinkHolder = styled.div`
  border-top: 2px solid #fff;
  display: flex;
  margin-top: 30px;
  max-height: 150px;
  justify-content: flex-end;
  padding: 20px;
  overflow: hidden;
  perspective: 1000px;
  padding-top: 40px;
  &:hover {
    ${NavLink} {
      font-size: 4vw;
      margin-right: 40px;
      -webkit-text-stroke: 2px #fff;
      color: #000;
    }
  }
  @media (max-width: 995px) {
    max-height: 100px;
  }
  @media (max-width: 800px) {
    padding-bottom: 0;
  }
  @media (max-width: 650px) {
    max-height: 70px;
  }
`;

export const ProjectInfo = styled.div`
  margin: 0;
  text-align: left;
  color: #fff;
`;

export const Header = styled.p`
  font-size: 60px;
  margin: 10px 0;
  font-weight: 400;
  @media (max-width: 995px) {
    font-size: 40px;
  }
  @media (max-width: 530px) {
    font-size: 30px;
  }
  @media (max-width: 470px) {
    font-size: 25px;
  }
`;

export const Description = styled.p`
  font-size: 50px;
  margin: 10px 0;
  font-weight: 200;
  @media (max-width: 995px) {
    font-size: 30px;
  }
  @media (max-width: 530px) {
    font-size: 20px;
  }
  @media (max-width: 470px) {
    font-size: 15px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1 1;
`;

export const Image = styled.img`
  width: 45%;
  margin: 5px;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => props.imageurl};
`;
