import { styled } from "styled-components";

export const Letter = styled.span`
  color: #000;
  &:hover {
    animation: test 0.3s both 1 ease;
    @keyframes test {
      0%,
      100% {
        color: inherit;
      }
      50% {
        color: #f12f16;
      }
    }
  }
`;
