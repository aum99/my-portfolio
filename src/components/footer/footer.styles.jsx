import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainContainer = styled.div`
  margin: 100px;
  @media (max-width: 470px) {
    margin: 50px;
  }
`;

export const SocialsContainer = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-start;
`;

export const ConnectHeader = styled.p`
  font-size: x-large;
  font-weight: 500;
  margin: 20px 0;
`;

export const SocialLink = styled(Link)`
  font-size: x-large;
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
  @media (max-width: 530px) {
    font-size: large;
  }
  @media (max-width: 370px) {
    font-size: medium;
  }
`;

export const Info = styled.p`
  font-size: x-large;
  margin: 20px 0;
  font-weight: 300;
  @media (max-width: 530px) {
    font-size: large;
  }
  @media (max-width: 370px) {
    font-size: medium;
  }
`;

export const CheckLink = styled(Link)`
  font-size: x-large;
  font-weight: 400;
  text-decoration: none;
  padding-bottom: 2px;
  color: #d62828;
  border-bottom: 1px solid #d62828;
  display: inline;
  @media (max-width: 530px) {
    font-size: large;
  }
  @media (max-width: 370px) {
    font-size: medium;
  }
`;
