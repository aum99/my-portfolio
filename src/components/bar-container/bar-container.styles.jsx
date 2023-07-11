import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ProjectBarsContainer = styled.div`
  width: 100%;
  margin: 0;
`;

export const ProjectBar = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #000;
  justify-content: space-between;
  align-items: center;
  background: #f7f7f7;
  border-radius: 0.5rem;
  min-height: 5.5rem;
  padding: 0.5rem 2rem;
  width: -webkit-fill-available;
  cursor: pointer;
  transition: all 0.15s ease;
  margin: 20px 0;
  transition: 1s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const InfoContainer = styled.div`
  margin: 0;
`;

export const ProjectName = styled.span`
  font-size: 1.5rem;
  display: inline;
  font-weight: 500;
`;

export const ProjectDescription = styled.span`
  font-size: 1.5rem;
  margin-left: 20px;
  font-weight: 500;
  color: #adb5bd;
  @media (max-width: 735px) {
    display: none;
  }
`;

export const Icon = styled.i`
  font-size: xx-large;
`;
