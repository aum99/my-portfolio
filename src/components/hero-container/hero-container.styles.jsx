import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as MouseSvg } from "../../mouse.svg";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0 8rem 0;
  gap: 2.5rem;
  box-sizing: border-box;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjF9");
  @media (max-width: 920px) {
    gap: 1.5rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  line-height: 130%;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  color: hsl(0, 0%, 74%, 1);
  font-weight: 500;
  letter-spacing: -0.03em;
  @media (max-width: 920px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Content = styled.div`
  max-width: 72rem;
  height: 85vh;
  margin: 0 auto;
  padding: 0 1.5rem 7.5rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid #d62828;
  color: #d62828;
  &:hover {
    color: hsl(0, 0%, 74%, 1);
    border-color: hsl(0, 0%, 74%, 1);
  }
`;

export const Name = styled.h1`
  font-size: 3.5rem;
  line-height: 130%;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  letter-spacing: -0.03em;
  font-weight: 500;
  @media (max-width: 480px) {
    width: 92%;
  }
  @media (max-width: 850px) {
    font-size: 2.5rem;
  }
  @media (max-width: 630px) {
    font-size: 2rem;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Mouse = styled(MouseSvg)`
  margin-right: 10px;
  [id="wheel"] {
    animation: scroll ease 1.5s infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(100px);
    }
  }
`;
