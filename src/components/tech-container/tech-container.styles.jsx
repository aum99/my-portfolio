import { styled } from "styled-components";

export const TextContainer = styled.p`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: #272727;
`;

export const TechStackContainer = styled.div`
  margin: 0;
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Logo = styled.svg`
  height: 100px;
  width: 100px;
  flex: 0 0 calc(25% - 10px);
  margin-bottom: 40px;
`;
