import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
`;

export const SocialsContainer = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-start;
`;

export const ConnectHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 20px 0;
`;

export const SocialLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 300;
  margin-right: 20px;
  text-decoration: none;
  padding-bottom: 5px;
  color: #000;
  border-bottom: 1px solid #000;
  &:hover {
    color: #d62828;
    border-color: #d62828;
  }
`;

export const Info = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  font-weight: 300;
`;

export const CheckLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  padding-bottom: 2px;
  color: #d62828;
  border-bottom: 1px solid #d62828;
  display: inline;
  &:hover {
    color: #000;
    border-color: #000;
  }
`;
