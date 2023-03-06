import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

export default function Piece({ color = "red" }) {
  return (
    <picture>
      <source
        media={BREAKPOINTS.tablet}
        srcSet={`./assets/counter-${color}-large.svg`}
      />
      <img src={`./assets/counter-${color}-small.svg`} />
    </picture>
  );
}
