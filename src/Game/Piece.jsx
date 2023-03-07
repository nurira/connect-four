import styled, { keyframes } from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

export default function Piece({ color = "red", ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <source
        media={BREAKPOINTS.tablet}
        srcSet={`./assets/counter-${color}-large.svg`}
      />
      <img src={`./assets/counter-${color}-small.svg`} />
    </Wrapper>
  );
}

const drop = keyframes`
  0% {
    transform: translateY(-450px);
  } 
  90% {
    transform: translateY(0);
  }
  95% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.picture`
  position: relative;
  animation: ${drop} 0.2s ease-out both;
`;
