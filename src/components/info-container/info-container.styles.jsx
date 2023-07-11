import { styled } from "styled-components";

export const TimeContainer = styled.p`
  font-size: medium;
  margin: 10px 0;
`;

export const TextContainer = styled.p`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: #272727;
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;

export const Cursor = styled.span`
  font-weight: 200;
  font-size: 25px;
  margin-left: 5px;
  color: #2e3d48;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;

  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-moz-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-webkit-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-ms-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-o-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }
`;
